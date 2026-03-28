'use client'
import React from 'react'
import { useEffect, useRef } from 'react'

type ServiceNum = '01' | '02' | '03' | '04' | '05' | '06'

const eio = (t: number) =>
  t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2
const eo = (t: number) => 1 - (1 - t) ** 2

// ── 01 · Fractional CMO ──────────────────────────────────────────────────────
// Node drifts in, dwells, drifts out — pure t%CYCLE, no reset snap
function CmoIcon() {
  const TEAM = [{ x: 12, y: 12 }, { x: 44, y: 10 }, { x: 28, y: 44 }]
  const OUT  = { x: 54, y: 2 }
  const IN   = { x: 28, y: 24 }

  const svgRef   = useRef<SVGSVGElement>(null)
  const rafRef   = useRef<number>(0)
  const startRef = useRef<number>(0)

  useEffect(() => {
    const svg = svgRef.current; if (!svg) return
    const node  = svg.querySelector<SVGCircleElement>('#cmo-node')
    const lines = Array.from(svg.querySelectorAll<SVGLineElement>('.cmo-line'))

    // Phases (seconds): wait → approach → dwell → leave → wait
    const CYCLE = 5.0
    const T_APP = 0.8;  const D_APP = 1.2
    const T_DWL = T_APP + D_APP; const D_DWL = 1.4
    const T_LEV = T_DWL + D_DWL; const D_LEV = 1.0
    // After T_LEV+D_LEV the node is back at OUT — cycle restarts cleanly

    function tick(ts: number) {
      if (!startRef.current) startRef.current = ts
      const t = ((ts - startRef.current) / 1000) % CYCLE

      let cx = OUT.x, cy = OUT.y, lineAlpha = 0, r = 2.5

      if (t >= T_APP && t < T_DWL) {
        const p = eio((t - T_APP) / D_APP)
        cx = OUT.x + (IN.x - OUT.x) * p
        cy = OUT.y + (IN.y - OUT.y) * p
        lineAlpha = p * 0.65
        r = 2.5 + p * 1.5
      } else if (t >= T_DWL && t < T_LEV) {
        cx = IN.x; cy = IN.y; lineAlpha = 0.65; r = 4
      } else if (t >= T_LEV) {
        const p = eio(Math.min((t - T_LEV) / D_LEV, 1))
        cx = IN.x + (OUT.x - IN.x) * p
        cy = IN.y + (OUT.y - IN.y) * p
        lineAlpha = (1 - p) * 0.65
        r = 4 - p * 1.5
      }

      node?.setAttribute('cx', String(cx))
      node?.setAttribute('cy', String(cy))
      node?.setAttribute('r',  String(r))
      lines.forEach((ln, i) => {
        ln.setAttribute('x1', String(cx)); ln.setAttribute('y1', String(cy))
        ln.setAttribute('x2', String(TEAM[i].x)); ln.setAttribute('y2', String(TEAM[i].y))
        ln.setAttribute('opacity', String(lineAlpha))
      })

      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [])

  return (
    <svg ref={svgRef} viewBox="0 0 56 56" width={56} height={56} fill="none" aria-hidden>
      <line x1={12} y1={12} x2={44} y2={10} style={{ stroke: 'var(--sq-teal)' }} strokeWidth={0.7} opacity={0.25} />
      <line x1={44} y1={10} x2={28} y2={44} style={{ stroke: 'var(--sq-teal)' }} strokeWidth={0.7} opacity={0.25} />
      <line x1={28} y1={44} x2={12} y2={12} style={{ stroke: 'var(--sq-teal)' }} strokeWidth={0.7} opacity={0.25} />
      {TEAM.map((n, i) => <circle key={i} cx={n.x} cy={n.y} r={3.5} style={{ fill: 'var(--sq-teal)' }} opacity={0.75} />)}
      {TEAM.map((_, i) => (
        <line key={i} className="cmo-line"
          x1={OUT.x} y1={OUT.y} x2={TEAM[i].x} y2={TEAM[i].y}
          style={{ stroke: 'var(--sq-amber)' }} strokeWidth={1} strokeDasharray="3 3" opacity={0} />
      ))}
      <circle id="cmo-node" cx={OUT.x} cy={OUT.y} r={2.5} style={{ fill: 'var(--sq-amber)' }} opacity={0.95} />
    </svg>
  )
}

// ── 02 · Clinical Product Development ───────────────────────────────────────
// Box draws on, cross draws on, pulses, fades out — pure t%CYCLE, no snap reset
function ProductIcon() {
  const svgRef   = useRef<SVGSVGElement>(null)
  const rafRef   = useRef<number>(0)
  const startRef = useRef<number>(0)

  useEffect(() => {
    const svg = svgRef.current; if (!svg) return
    const box    = svg.querySelector<SVGRectElement>('#pd-box')
    const crossH = svg.querySelector<SVGLineElement>('#pd-ch')
    const crossV = svg.querySelector<SVGLineElement>('#pd-cv')
    if (!box || !crossH || !crossV) return

    const bx = box; const ch = crossH; const cv = crossV

    const boxPerim = 2 * (32 + 30)
    const hLen = 16, vLen = 16

    // Set up dash arrays once
    bx.style.strokeDasharray  = String(boxPerim)
    ch.style.strokeDasharray  = String(hLen)
    cv.style.strokeDasharray  = String(vLen)

    const CYCLE = 5.5
    // Phase timings
    const D_BOX   = 1.2  // box draws on
    const T_CROSS = D_BOX + 0.3; const D_CROSS = 0.8  // cross draws on
    const T_PULSE = T_CROSS + D_CROSS; const D_PULSE = 0.9  // brightness pulse
    const T_FADE  = T_PULSE + D_PULSE; const D_FADE  = 0.9  // fade to 0
    // T_FADE + D_FADE = 1.2+0.3+0.8+0.9+0.9 = 4.1 → 1.4s invisible rest before cycle

    function tick(ts: number) {
      if (!startRef.current) startRef.current = ts
      const t = ((ts - startRef.current) / 1000) % CYCLE

      if (t < D_BOX) {
        const bp = eo(t / D_BOX)
        bx.style.strokeDashoffset = String(boxPerim * (1 - bp))
        bx.style.opacity = String(0.6 * bp)      // fades in from 0
        ch.style.strokeDashoffset = String(hLen)
        cv.style.strokeDashoffset = String(vLen)
        ch.style.opacity = '0'; cv.style.opacity = '0'
      } else if (t < T_CROSS) {
        bx.style.strokeDashoffset = '0'; bx.style.opacity = '0.6'
        ch.style.strokeDashoffset = String(hLen); ch.style.opacity = '0'
        cv.style.strokeDashoffset = String(vLen); cv.style.opacity = '0'
      } else if (t < T_PULSE) {
        const cp = eo(Math.min((t - T_CROSS) / D_CROSS, 1))
        bx.style.strokeDashoffset = '0'; bx.style.opacity = '0.6'
        ch.style.strokeDashoffset = String(hLen * (1 - cp)); ch.style.opacity = String(cp)
        cv.style.strokeDashoffset = String(vLen * (1 - cp)); cv.style.opacity = String(cp)
      } else if (t < T_FADE) {
        const pp = (t - T_PULSE) / D_PULSE
        const glow = 0.6 + 0.35 * Math.abs(Math.sin(pp * Math.PI))
        bx.style.strokeDashoffset = '0'; bx.style.opacity = String(glow)
        ch.style.strokeDashoffset = '0'; ch.style.opacity = '1'
        cv.style.strokeDashoffset = '0'; cv.style.opacity = '1'
      } else {
        // Fade everything out — at end opacity reaches 0, cycle restarts invisibly
        const fp = Math.min((t - T_FADE) / D_FADE, 1)
        const alpha = 1 - fp
        bx.style.strokeDashoffset = '0'; bx.style.opacity = String(alpha * 0.6)
        ch.style.strokeDashoffset = '0'; ch.style.opacity = String(alpha)
        cv.style.strokeDashoffset = '0'; cv.style.opacity = String(alpha)
      }

      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [])

  return (
    <svg ref={svgRef} viewBox="0 0 56 56" width={56} height={56} fill="none" aria-hidden>
      <rect id="pd-box" x={12} y={12} width={32} height={30} rx={2}
        style={{ stroke: 'var(--sq-amber)' }} strokeWidth={1.4} opacity={0} />
      <line id="pd-ch" x1={20} y1={27} x2={36} y2={27}
        style={{ stroke: 'var(--sq-teal)' }} strokeWidth={1.8} strokeLinecap="round" opacity={0} />
      <line id="pd-cv" x1={28} y1={19} x2={28} y2={35}
        style={{ stroke: 'var(--sq-teal)' }} strokeWidth={1.8} strokeLinecap="round" opacity={0} />
      <circle cx={44} cy={42} r={2} style={{ fill: 'var(--sq-amber)' }} opacity={0.3} />
    </svg>
  )
}

// ── 03 · Evidence Strategy ───────────────────────────────────────────────────
// Dots fade in scattered, sort to trend, line draws, everything fades — no snap reset
function EvidenceIcon() {
  const SCRAMBLED: [number, number][] = [[8,44],[18,22],[30,40],[40,16],[50,32]]
  const SORTED:    [number, number][] = [[8,44],[18,36],[30,28],[40,20],[50,12]]

  const svgRef   = useRef<SVGSVGElement>(null)
  const rafRef   = useRef<number>(0)
  const startRef = useRef<number>(0)

  useEffect(() => {
    const svg = svgRef.current; if (!svg) return
    const dots = Array.from(svg.querySelectorAll<SVGCircleElement>('.ev-dot'))
    const trendLine = svg.querySelector<SVGPolylineElement>('#ev-trend')
    if (!trendLine) return
    const tl = trendLine
    const tLen = 48
    tl.style.strokeDasharray = String(tLen)

    const CYCLE  = 6.5
    const D_IN   = 0.5  // fade dots in from 0
    const T_SORT = D_IN; const D_SORT = 1.4  // sort to trend
    const T_HOLD = T_SORT + D_SORT
    const T_LINE = T_HOLD + 0.5; const D_LINE = 0.7  // draw trend line
    const T_FADE = T_LINE + D_LINE + 0.4; const D_FADE = 0.9  // fade all out
    // T_FADE+D_FADE ≈ 5.0, leaving 1.5s invisible rest before cycle

    function tick(ts: number) {
      if (!startRef.current) startRef.current = ts
      const t = ((ts - startRef.current) / 1000) % CYCLE

      // Dot opacity envelope: fade in → hold → fade out
      let dotOpacity: number
      if (t < D_IN) {
        dotOpacity = eo(t / D_IN) * 0.8
      } else if (t < T_FADE) {
        dotOpacity = 0.8
      } else {
        dotOpacity = 0.8 * Math.max(0, 1 - (t - T_FADE) / D_FADE)
      }

      // Sort progress
      const rawSort = t < T_SORT ? 0 : Math.min((t - T_SORT) / D_SORT, 1)
      const sp = eio(rawSort)
      dots.forEach((dot, i) => {
        const [sx, sy] = SCRAMBLED[i]
        const [dx, dy] = SORTED[i]
        dot.setAttribute('cx', String(sx + (dx - sx) * sp))
        dot.setAttribute('cy', String(sy + (dy - sy) * sp))
        dot.setAttribute('opacity', String(dotOpacity))
      })

      // Trend line
      if (t < T_LINE) {
        tl.style.strokeDashoffset = String(tLen)
        tl.style.opacity = '0'
      } else if (t < T_FADE) {
        const lp = eo(Math.min((t - T_LINE) / D_LINE, 1))
        tl.style.strokeDashoffset = String(tLen * (1 - lp))
        tl.style.opacity = String(0.7 * lp)
      } else {
        const fp = Math.max(0, 1 - (t - T_FADE) / D_FADE)
        tl.style.strokeDashoffset = '0'
        tl.style.opacity = String(0.7 * fp)
      }

      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [])

  const trendPts = SORTED.map(([x, y]) => `${x},${y}`).join(' ')

  return (
    <svg ref={svgRef} viewBox="0 0 56 56" width={56} height={56} fill="none" aria-hidden>
      <line x1={4} y1={48} x2={52} y2={48} style={{ stroke: 'var(--sq-teal)' }} strokeWidth={0.7} opacity={0.2} />
      <polyline id="ev-trend" points={trendPts}
        style={{ stroke: 'var(--sq-amber)' }} strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round"
        opacity={0} />
      {SCRAMBLED.map(([x, y], i) => (
        <circle key={i} className="ev-dot" cx={x} cy={y} r={3}
          style={{ fill: i % 2 === 0 ? 'var(--sq-amber)' : 'var(--sq-teal)' }} opacity={0} />
      ))}
    </svg>
  )
}

// ── 04 · Market Access ───────────────────────────────────────────────────────
// Dot travels path, arrives, destination glows, both fade, reset invisible
function MarketIcon() {
  const PATH: [number, number][] = [[6,28],[14,12],[24,38],[36,16],[46,34],[52,22]]
  const SEG_LENS: number[] = []
  let totalLen = 0
  for (let i = 1; i < PATH.length; i++) {
    const d = Math.hypot(PATH[i][0]-PATH[i-1][0], PATH[i][1]-PATH[i-1][1])
    SEG_LENS.push(d); totalLen += d
  }

  const svgRef   = useRef<SVGSVGElement>(null)
  const rafRef   = useRef<number>(0)
  const startRef = useRef<number>(0)

  useEffect(() => {
    const svg = svgRef.current; if (!svg) return
    const dot   = svg.querySelector<SVGCircleElement>('#mk-dot')
    const trail = svg.querySelector<SVGPolylineElement>('#mk-trail')
    const dest  = svg.querySelector<SVGCircleElement>('#mk-dest')

    function posAt(progress: number): [number, number] {
      const target = progress * totalLen
      let acc = 0
      for (let i = 0; i < SEG_LENS.length; i++) {
        if (acc + SEG_LENS[i] >= target) {
          const t = (target - acc) / SEG_LENS[i]
          return [PATH[i][0] + t*(PATH[i+1][0]-PATH[i][0]), PATH[i][1] + t*(PATH[i+1][1]-PATH[i][1])]
        }
        acc += SEG_LENS[i]
      }
      return PATH[PATH.length - 1]
    }

    const CYCLE    = 5.5
    const D_IN     = 0.3   // fade dot in at start
    const D_TRAVEL = 2.2   // travel along path
    const T_ARRIVE = D_IN + D_TRAVEL; const D_ARRIVE = 0.6  // arrive animation
    const T_HOLD   = T_ARRIVE + D_ARRIVE; const D_HOLD = 0.4
    const T_FADE   = T_HOLD + D_HOLD;    const D_FADE = 0.7
    // T_FADE + D_FADE ≈ 4.2, leaving ~1.3s invisible before cycle

    function tick(ts: number) {
      if (!startRef.current) startRef.current = ts
      const t = ((ts - startRef.current) / 1000) % CYCLE

      if (t < D_IN) {
        // Fade in dot at start position
        const [sx, sy] = PATH[0]
        const fadeIn = eo(t / D_IN)
        dot?.setAttribute('cx', String(sx)); dot?.setAttribute('cy', String(sy))
        dot?.setAttribute('r', '3'); dot?.setAttribute('opacity', String(fadeIn * 0.9))
        trail?.setAttribute('points', `${sx},${sy}`); trail?.setAttribute('opacity', '0')
        dest?.setAttribute('r', '4'); dest?.setAttribute('opacity', String(0.3 * fadeIn))
      } else if (t < T_ARRIVE) {
        // Travel
        const p = eio((t - D_IN) / D_TRAVEL)
        const [x, y] = posAt(p)
        dot?.setAttribute('cx', String(x)); dot?.setAttribute('cy', String(y))
        dot?.setAttribute('r', '3'); dot?.setAttribute('opacity', '0.9')
        const trailPts: string[] = []
        for (let s = 0; s <= p; s += 0.04) {
          const [px, py] = posAt(s); trailPts.push(`${px},${py}`)
        }
        trailPts.push(`${x},${y}`)
        trail?.setAttribute('points', trailPts.join(' '))
        trail?.setAttribute('opacity', '0.35')
        dest?.setAttribute('r', '4'); dest?.setAttribute('opacity', '0.3')
      } else if (t < T_HOLD) {
        // Arrive — dot grows, dest ring expands
        const [lx, ly] = PATH[PATH.length - 1]
        const ap = (t - T_ARRIVE) / D_ARRIVE
        dot?.setAttribute('cx', String(lx)); dot?.setAttribute('cy', String(ly))
        dot?.setAttribute('r', String(3 + ap * 2)); dot?.setAttribute('opacity', '0.9')
        dest?.setAttribute('opacity', String(0.3 + ap * 0.6))
        dest?.setAttribute('r', String(4 + ap * 6))
      } else if (t < T_FADE) {
        // Hold at destination
        const [lx, ly] = PATH[PATH.length - 1]
        dot?.setAttribute('cx', String(lx)); dot?.setAttribute('cy', String(ly))
        dot?.setAttribute('r', '5'); dot?.setAttribute('opacity', '0.9')
        dest?.setAttribute('r', '10'); dest?.setAttribute('opacity', '0.9')
      } else {
        // Fade everything to 0 — position resets invisibly
        const fp = Math.min((t - T_FADE) / D_FADE, 1)
        const alpha = 1 - fp
        const [lx, ly] = PATH[PATH.length - 1]
        dot?.setAttribute('cx', String(lx)); dot?.setAttribute('cy', String(ly))
        dot?.setAttribute('opacity', String(0.9 * alpha))
        trail?.setAttribute('opacity', String(0.35 * alpha))
        dest?.setAttribute('opacity', String(0.9 * alpha))
      }

      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [])

  const pathPts = PATH.map(([x, y]) => `${x},${y}`).join(' ')

  return (
    <svg ref={svgRef} viewBox="0 0 56 56" width={56} height={56} fill="none" aria-hidden>
      <polyline points={pathPts} style={{ stroke: 'var(--sq-teal)' }} strokeWidth={0.8}
        strokeDasharray="3 4" strokeLinejoin="round" opacity={0.25} />
      <polyline id="mk-trail" points={`${PATH[0][0]},${PATH[0][1]}`}
        style={{ stroke: 'var(--sq-amber)' }} strokeWidth={1.2} strokeLinecap="round" strokeLinejoin="round" opacity={0} />
      <circle id="mk-dest" cx={PATH[PATH.length-1][0]} cy={PATH[PATH.length-1][1]}
        r={4} style={{ stroke: 'var(--sq-teal)' }} strokeWidth={0.8} fill="none" opacity={0.3} />
      <circle id="mk-dot" cx={PATH[0][0]} cy={PATH[0][1]} r={3} style={{ fill: 'var(--sq-amber)' }} opacity={0} />
      <circle cx={PATH[0][0]} cy={PATH[0][1]} r={2} style={{ fill: 'var(--sq-teal)' }} opacity={0.5} />
    </svg>
  )
}

// ── 05 · Impact Communications ───────────────────────────────────────────────
// Dots fade in, converge, beam fires, burst, all fade out — no snap reset
function CommsIcon() {
  const SOURCES: [number, number][] = [[6, 8], [6, 28], [6, 48]]
  const FOCAL: [number, number] = [22, 28]
  const TARGET: [number, number] = [52, 28]

  const svgRef   = useRef<SVGSVGElement>(null)
  const rafRef   = useRef<number>(0)
  const startRef = useRef<number>(0)

  useEffect(() => {
    const svg = svgRef.current; if (!svg) return
    const dots  = Array.from(svg.querySelectorAll<SVGCircleElement>('.co-dot'))
    const beam  = svg.querySelector<SVGLineElement>('#co-beam')
    const burst = svg.querySelector<SVGCircleElement>('#co-burst')

    const CYCLE   = 5.5
    const D_IN    = 0.4   // fade dots in at sources
    const T_CONV  = D_IN; const D_CONV = 1.1  // converge
    const T_BEAM  = T_CONV + D_CONV + 0.2; const D_BEAM = 0.6
    const T_BURST = T_BEAM + D_BEAM;       const D_BURST = 0.6
    const T_FADE  = T_BURST + D_BURST;     const D_FADE  = 0.8
    // T_FADE + D_FADE ≈ 4.7, ~0.8s invisible rest

    function tick(ts: number) {
      if (!startRef.current) startRef.current = ts
      const t = ((ts - startRef.current) / 1000) % CYCLE

      // Dot envelope: fade in, hold, then fade after beam fires
      let dotAlphaBase: number
      if (t < D_IN) {
        dotAlphaBase = eo(t / D_IN)
      } else if (t < T_BEAM) {
        dotAlphaBase = 1
      } else if (t < T_FADE) {
        const bp = Math.min((t - T_BEAM) / D_BEAM, 1)
        dotAlphaBase = Math.max(0, 1 - bp * 0.9)
      } else {
        dotAlphaBase = Math.max(0, 1 - (t - T_FADE) / D_FADE) * 0.1
      }

      // Dot convergence
      const rawConv = t < T_CONV ? 0 : Math.min((t - T_CONV) / D_CONV, 1)
      const ce = eio(rawConv)
      dots.forEach((dot, i) => {
        const [sx, sy] = SOURCES[i]
        dot.setAttribute('cx', String(sx + (FOCAL[0] - sx) * ce))
        dot.setAttribute('cy', String(sy + (FOCAL[1] - sy) * ce))
        dot.setAttribute('opacity', String(dotAlphaBase * 0.8))
      })

      // Beam
      if (t < T_BEAM) {
        beam?.setAttribute('x2', String(FOCAL[0])); beam?.setAttribute('opacity', '0')
      } else if (t < T_FADE) {
        const bp = Math.min((t - T_BEAM) / D_BEAM, 1)
        beam?.setAttribute('x2', String(FOCAL[0] + (TARGET[0] - FOCAL[0]) * eo(bp)))
        beam?.setAttribute('opacity', String(0.8 * Math.max(0, 1 - Math.max(0, (t - T_BURST) / D_BURST))))
      } else {
        const fp = Math.max(0, 1 - (t - T_FADE) / D_FADE)
        beam?.setAttribute('x2', String(TARGET[0])); beam?.setAttribute('opacity', String(0.8 * fp))
      }

      // Burst
      if (t < T_BURST) {
        burst?.setAttribute('r', '3'); burst?.setAttribute('opacity', '0')
      } else if (t < T_FADE) {
        const rp = Math.min((t - T_BURST) / D_BURST, 1)
        burst?.setAttribute('r', String(3 + rp * 12))
        burst?.setAttribute('opacity', String((1 - rp) * 0.5))
      } else {
        burst?.setAttribute('r', '3'); burst?.setAttribute('opacity', '0')
      }

      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [])

  return (
    <svg ref={svgRef} viewBox="0 0 56 56" width={56} height={56} fill="none" aria-hidden>
      {SOURCES.map(([x, y], i) => (
        <circle key={i} className="co-dot" cx={x} cy={y} r={3}
          style={{ fill: 'var(--sq-teal)' }} opacity={0} />
      ))}
      <line id="co-beam" x1={FOCAL[0]} y1={FOCAL[1]} x2={FOCAL[0]} y2={FOCAL[1]}
        style={{ stroke: 'var(--sq-amber)' }} strokeWidth={1.8} strokeLinecap="round" opacity={0} />
      <circle id="co-burst" cx={TARGET[0]} cy={TARGET[1]} r={3}
        style={{ stroke: 'var(--sq-amber)' }} strokeWidth={0.8} fill="none" opacity={0} />
      <circle cx={FOCAL[0]} cy={FOCAL[1]} r={2} style={{ fill: 'var(--sq-amber)' }} opacity={0.4} />
    </svg>
  )
}

// ── 06 · Health System Intelligence ──────────────────────────────────────────
// Edges sequentially light up in an intelligent path — continuous loop
function NetworkIcon() {
  const NODES6: [number, number][] = [
    [28, 6], [50, 18], [50, 38], [28, 50], [6, 38], [6, 18],
  ]
  const ALL_EDGES: [number, number][] = [
    [0,1],[1,2],[2,3],[3,4],[4,5],[5,0],[0,2],[1,3],[2,4],[3,5],[4,0],[5,1]
  ]
  const PATH_EDGES = [0, 2, 7, 4]

  const svgRef   = useRef<SVGSVGElement>(null)
  const rafRef   = useRef<number>(0)
  const startRef = useRef<number>(0)

  useEffect(() => {
    const svg = svgRef.current; if (!svg) return
    const edges = Array.from(svg.querySelectorAll<SVGLineElement>('.ni-edge'))
    const nodes = Array.from(svg.querySelectorAll<SVGCircleElement>('.ni-node'))

    function getAmber() {
      return getComputedStyle(document.documentElement).getPropertyValue('--sq-amber').trim() || '#C9933A'
    }
    function getTeal() {
      return getComputedStyle(document.documentElement).getPropertyValue('--sq-teal').trim() || '#2A6B62'
    }

    const D_EACH = 0.65
    const CYCLE  = PATH_EDGES.length * D_EACH + 1.5

    function tick(ts: number) {
      if (!startRef.current) startRef.current = ts
      const t = ((ts - startRef.current) / 1000) % CYCLE

      const amber = getAmber()
      const teal  = getTeal()

      edges.forEach((e, i) => {
        e.style.stroke = i % 2 === 0 ? teal : amber
        e.setAttribute('opacity', '0.1')
        e.setAttribute('stroke-width', '0.7')
      })

      const step = Math.floor(t / D_EACH)
      const stepT = (t % D_EACH) / D_EACH
      PATH_EDGES.forEach((edgeIdx, s) => {
        if (s < step) {
          edges[edgeIdx]?.setAttribute('opacity', '0.3')
          edges[edgeIdx].style.stroke = amber
        } else if (s === step && step < PATH_EDGES.length) {
          const alpha = 0.3 + 0.6 * Math.abs(Math.sin(stepT * Math.PI))
          edges[edgeIdx]?.setAttribute('opacity', String(alpha))
          edges[edgeIdx].style.stroke = amber
          edges[edgeIdx]?.setAttribute('stroke-width', '1.4')
        }
      })

      nodes.forEach((node, i) => {
        const r = 3 + 0.8 * Math.abs(Math.sin(t * 1.2 + i * 0.9))
        node.setAttribute('r', String(r))
      })

      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [])

  return (
    <svg ref={svgRef} viewBox="0 0 56 56" width={56} height={56} fill="none" aria-hidden>
      {ALL_EDGES.map(([a, b], i) => (
        <line key={i} className="ni-edge"
          x1={NODES6[a][0]} y1={NODES6[a][1]}
          x2={NODES6[b][0]} y2={NODES6[b][1]}
          style={{ stroke: 'var(--sq-teal)' }} strokeWidth={0.7} opacity={0.1} />
      ))}
      {NODES6.map(([x, y], i) => (
        <circle key={i} className="ni-node" cx={x} cy={y} r={3}
          style={{ fill: i % 2 === 0 ? 'var(--sq-amber)' : 'var(--sq-teal)' }} opacity={0.8} />
      ))}
    </svg>
  )
}

// ── Public component ──────────────────────────────────────────────────────────

const MAP: Record<ServiceNum, () => React.JSX.Element> = {
  '01': CmoIcon,
  '02': ProductIcon,
  '03': EvidenceIcon,
  '04': MarketIcon,
  '05': CommsIcon,
  '06': NetworkIcon,
}

export default function HomeServiceIcon({ num }: { num: ServiceNum }) {
  const Icon = MAP[num]
  return <Icon />
}
