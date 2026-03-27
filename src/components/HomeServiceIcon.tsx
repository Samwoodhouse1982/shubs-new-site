'use client'
import React from 'react'
import { useEffect, useRef } from 'react'

type ServiceNum = '01' | '02' | '03' | '04' | '05' | '06'

const AMBER = '#C9933A'
const TEAL  = '#2A6B62'

const eio = (t: number) =>
  t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2
const eo = (t: number) => 1 - (1 - t) ** 2

// ── 01 · Fractional CMO ──────────────────────────────────────────────────────
// An amber node (the CMO) drifts into an existing teal team triangle,
// connection lines form as it embeds, then it retreats and cycles.
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

    // Phases: wait → approach → dwell → leave (total 5s)
    const CYCLE = 5.0
    const T_APP = 1.2;  const D_APP = 1.0
    const T_DWL = T_APP + D_APP; const D_DWL = 1.4
    const T_LEV = T_DWL + D_DWL; const D_LEV = 0.9

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
        const p = eio((t - T_LEV) / D_LEV)
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
      {/* Static team connections */}
      <line x1={12} y1={12} x2={44} y2={10} stroke={TEAL} strokeWidth={0.7} opacity={0.25} />
      <line x1={44} y1={10} x2={28} y2={44} stroke={TEAL} strokeWidth={0.7} opacity={0.25} />
      <line x1={28} y1={44} x2={12} y2={12} stroke={TEAL} strokeWidth={0.7} opacity={0.25} />
      {/* Team nodes */}
      {TEAM.map((n, i) => <circle key={i} cx={n.x} cy={n.y} r={3.5} fill={TEAL} opacity={0.75} />)}
      {/* Lines from CMO to each team member */}
      {TEAM.map((_, i) => (
        <line key={i} className="cmo-line"
          x1={OUT.x} y1={OUT.y} x2={TEAM[i].x} y2={TEAM[i].y}
          stroke={AMBER} strokeWidth={1} strokeDasharray="3 3" opacity={0} />
      ))}
      {/* CMO node */}
      <circle id="cmo-node" cx={OUT.x} cy={OUT.y} r={2.5} fill={AMBER} opacity={0.95} />
    </svg>
  )
}

// ── 02 · Clinical Product Development ───────────────────────────────────────
// A product box draws itself; a clinical cross then draws inside it.
// Both pulse together — clinical insight built in from the start.
function ProductIcon() {
  const svgRef   = useRef<SVGSVGElement>(null)
  const rafRef   = useRef<number>(0)
  const startRef = useRef<number>(0)

  useEffect(() => {
    const svg = svgRef.current; if (!svg) return
    const box   = svg.querySelector<SVGRectElement>('#pd-box')
    const crossH = svg.querySelector<SVGLineElement>('#pd-ch')
    const crossV = svg.querySelector<SVGLineElement>('#pd-cv')
    if (!box || !crossH || !crossV) return

    const bx: SVGRectElement   = box
    const ch: SVGLineElement   = crossH
    const cv: SVGLineElement   = crossV

    const boxPerim = 2 * (32 + 30) // rect 32w 30h ≈ 124
    bx.style.strokeDasharray  = String(boxPerim)
    bx.style.strokeDashoffset = String(boxPerim)
    const hLen = 16, vLen = 16
    ch.style.strokeDasharray  = String(hLen); ch.style.strokeDashoffset = String(hLen)
    cv.style.strokeDasharray  = String(vLen); cv.style.strokeDashoffset = String(vLen)

    const CYCLE = 4.5
    const D_BOX = 1.1; const D_CROSS = 0.7; const D_PULSE = 0.8; const D_FADE = 0.6
    const T_CROSS = D_BOX + 0.3
    const T_PULSE = T_CROSS + D_CROSS
    const T_FADE  = T_PULSE + D_PULSE

    function tick(ts: number) {
      if (!startRef.current) startRef.current = ts
      const t = ((ts - startRef.current) / 1000) % CYCLE

      // Box draws on
      const bp = Math.min(t / D_BOX, 1)
      bx.style.strokeDashoffset = String(boxPerim * (1 - eo(bp)))

      // Cross draws on (after box)
      if (t >= T_CROSS) {
        const cp = Math.min((t - T_CROSS) / D_CROSS, 1)
        ch.style.strokeDashoffset = String(hLen * (1 - eo(cp)))
        cv.style.strokeDashoffset = String(vLen * (1 - eo(cp)))
        ch.style.opacity = String(eo(cp))
        cv.style.opacity = String(eo(cp))
      }

      // Pulse opacity
      if (t >= T_PULSE && t < T_FADE) {
        const pp = (t - T_PULSE) / D_PULSE
        const glow = 0.6 + 0.35 * Math.abs(Math.sin(pp * Math.PI))
        bx.style.opacity = String(glow)
      }

      // Fade everything out before reset
      if (t >= T_FADE) {
        const fp = Math.min((t - T_FADE) / D_FADE, 1)
        const alpha = 1 - fp
        bx.style.opacity = String(alpha * 0.6)
        ch.style.opacity = String(alpha); cv.style.opacity = String(alpha)
        if (fp >= 1) {
          // Reset for next cycle
          bx.style.strokeDashoffset = String(boxPerim)
          ch.style.strokeDashoffset = String(hLen)
          cv.style.strokeDashoffset = String(vLen)
          bx.style.opacity = '0.6'; ch.style.opacity = '0'; cv.style.opacity = '0'
          startRef.current = ts
        }
      }

      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [])

  return (
    <svg ref={svgRef} viewBox="0 0 56 56" width={56} height={56} fill="none" aria-hidden>
      {/* Product box */}
      <rect id="pd-box" x={12} y={12} width={32} height={30} rx={2}
        stroke={AMBER} strokeWidth={1.4} opacity={0.6} />
      {/* Clinical cross inside */}
      <line id="pd-ch" x1={20} y1={27} x2={36} y2={27}
        stroke={TEAL} strokeWidth={1.8} strokeLinecap="round" opacity={0} />
      <line id="pd-cv" x1={28} y1={19} x2={28} y2={35}
        stroke={TEAL} strokeWidth={1.8} strokeLinecap="round" opacity={0} />
      {/* Corner accent */}
      <circle cx={44} cy={42} r={2} fill={AMBER} opacity={0.3} />
    </svg>
  )
}

// ── 03 · Evidence Strategy ───────────────────────────────────────────────────
// Five dots start scattered, then sort themselves into an ascending trend.
// A line draws through once they're aligned — signal extracted from noise.
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
    const tl: SVGPolylineElement = trendLine
    const tLen = 48 // approximate polyline length
    tl.style.strokeDasharray  = String(tLen)
    tl.style.strokeDashoffset = String(tLen)

    const CYCLE = 5.0
    const D_SORT = 1.4; const D_HOLD = 0.8; const D_LINE = 0.7; const D_FADE = 0.6
    const T_HOLD = D_SORT
    const T_LINE = T_HOLD + D_HOLD
    const T_FADE = T_LINE + D_LINE + 0.5

    function tick(ts: number) {
      if (!startRef.current) startRef.current = ts
      const t = ((ts - startRef.current) / 1000) % CYCLE

      // Sort dots
      const sp = Math.min(t < D_SORT ? t / D_SORT : 1, 1)
      const ep = eio(sp)
      dots.forEach((dot, i) => {
        const [sx, sy] = SCRAMBLED[i]
        const [dx, dy] = SORTED[i]
        dot.setAttribute('cx', String(sx + (dx - sx) * ep))
        dot.setAttribute('cy', String(sy + (dy - sy) * ep))
      })

      // Trend line draws after sorting
      if (t >= T_LINE) {
        const lp = Math.min((t - T_LINE) / D_LINE, 1)
        tl.style.strokeDashoffset = String(tLen * (1 - eo(lp)))
        tl.style.opacity = '0.7'
      }

      // Fade out before reset
      if (t >= T_FADE) {
        const fp = Math.min((t - T_FADE) / D_FADE, 1)
        tl.style.opacity = String(0.7 * (1 - fp))
        dots.forEach(dot => dot.setAttribute('opacity', String(0.8 * (1 - fp))))
        if (fp >= 1) {
          tl.style.strokeDashoffset = String(tLen)
          tl.style.opacity = '0'
          dots.forEach((dot, i) => {
            dot.setAttribute('cx', String(SCRAMBLED[i][0]))
            dot.setAttribute('cy', String(SCRAMBLED[i][1]))
            dot.setAttribute('opacity', '0.8')
          })
          startRef.current = ts
        }
      }

      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [])

  const trendPts = SORTED.map(([x, y]) => `${x},${y}`).join(' ')

  return (
    <svg ref={svgRef} viewBox="0 0 56 56" width={56} height={56} fill="none" aria-hidden>
      {/* Baseline */}
      <line x1={4} y1={48} x2={52} y2={48} stroke={TEAL} strokeWidth={0.7} opacity={0.2} />
      {/* Trend line (draws on) */}
      <polyline id="ev-trend" points={trendPts}
        stroke={AMBER} strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round"
        style={{ opacity: 0 }} />
      {/* Scatter dots */}
      {SCRAMBLED.map(([x, y], i) => (
        <circle key={i} className="ev-dot" cx={x} cy={y} r={3}
          fill={i % 2 === 0 ? AMBER : TEAL} opacity={0.8} />
      ))}
    </svg>
  )
}

// ── 04 · Market Access ───────────────────────────────────────────────────────
// A dot navigates a winding path through a complex space to reach a destination.
// The route isn't straight — the expertise is knowing the way.
function MarketIcon() {
  // Winding waypoints: complex route left→right
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

    const CYCLE = 4.2
    const D_TRAVEL = 2.2; const D_ARRIVE = 0.6; const D_RESET = 0.4

    function tick(ts: number) {
      if (!startRef.current) startRef.current = ts
      const t = ((ts - startRef.current) / 1000) % CYCLE

      if (t < D_TRAVEL) {
        const p = eio(t / D_TRAVEL)
        const [x, y] = posAt(p)
        dot?.setAttribute('cx', String(x)); dot?.setAttribute('cy', String(y))
        dot?.setAttribute('opacity', '0.9')

        // Trail: points from start up to current
        const trailPts: string[] = []
        for (let s = 0; s <= p; s += 0.04) {
          const [px, py] = posAt(s); trailPts.push(`${px},${py}`)
        }
        trailPts.push(`${x},${y}`)
        trail?.setAttribute('points', trailPts.join(' '))
        trail?.setAttribute('opacity', '0.35')
        dest?.setAttribute('opacity', '0.3')
      } else if (t < D_TRAVEL + D_ARRIVE) {
        const [lx, ly] = PATH[PATH.length - 1]
        dot?.setAttribute('cx', String(lx)); dot?.setAttribute('cy', String(ly))
        const ap = (t - D_TRAVEL) / D_ARRIVE
        dot?.setAttribute('r', String(3 + ap * 2))
        dest?.setAttribute('opacity', String(0.3 + ap * 0.6))
        dest?.setAttribute('r', String(4 + ap * 6))
      } else {
        // Reset
        const [sx, sy] = PATH[0]
        dot?.setAttribute('cx', String(sx)); dot?.setAttribute('cy', String(sy))
        dot?.setAttribute('r', '3'); dot?.setAttribute('opacity', '0')
        trail?.setAttribute('points', `${sx},${sy}`)
        dest?.setAttribute('r', '4'); dest?.setAttribute('opacity', '0.3')
      }

      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [])

  const pathPts = PATH.map(([x, y]) => `${x},${y}`).join(' ')

  return (
    <svg ref={svgRef} viewBox="0 0 56 56" width={56} height={56} fill="none" aria-hidden>
      {/* Ghost path — the route */}
      <polyline points={pathPts} stroke={TEAL} strokeWidth={0.8}
        strokeDasharray="3 4" strokeLinejoin="round" opacity={0.25} />
      {/* Trail */}
      <polyline id="mk-trail" points={`${PATH[0][0]},${PATH[0][1]}`}
        stroke={AMBER} strokeWidth={1.2} strokeLinecap="round" strokeLinejoin="round" opacity={0} />
      {/* Destination */}
      <circle id="mk-dest" cx={PATH[PATH.length-1][0]} cy={PATH[PATH.length-1][1]}
        r={4} stroke={TEAL} strokeWidth={0.8} fill="none" opacity={0.3} />
      {/* Moving dot */}
      <circle id="mk-dot" cx={PATH[0][0]} cy={PATH[0][1]} r={3} fill={AMBER} opacity={0} />
      {/* Start marker */}
      <circle cx={PATH[0][0]} cy={PATH[0][1]} r={2} fill={TEAL} opacity={0.5} />
    </svg>
  )
}

// ── 05 · Impact Communications ───────────────────────────────────────────────
// Three scattered data points converge to a focal point, then a single
// clear beam fires outward — complex evidence becomes a sharp narrative.
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

    const CYCLE = 4.0
    const D_CONV = 1.1; const D_HOLD = 0.3; const D_BEAM = 0.6; const D_BURST = 0.6
    const T_BEAM  = D_CONV + D_HOLD
    const T_BURST = T_BEAM + D_BEAM
    const T_FADE  = T_BURST + D_BURST

    function tick(ts: number) {
      if (!startRef.current) startRef.current = ts
      const t = ((ts - startRef.current) / 1000) % CYCLE

      // Dots converge to focal point
      const cp = Math.min(t / D_CONV, 1)
      const ce = eio(cp)
      dots.forEach((dot, i) => {
        const [sx, sy] = SOURCES[i]
        dot.setAttribute('cx', String(sx + (FOCAL[0] - sx) * ce))
        dot.setAttribute('cy', String(sy + (FOCAL[1] - sy) * ce))
        dot.setAttribute('opacity', String(1 - ce * 0.4))
      })

      // Beam fires
      if (t >= T_BEAM) {
        const bp = Math.min((t - T_BEAM) / D_BEAM, 1)
        beam?.setAttribute('x2', String(FOCAL[0] + (TARGET[0] - FOCAL[0]) * eo(bp)))
        beam?.setAttribute('opacity', String(0.8))
        dots.forEach(dot => dot.setAttribute('opacity', String(0.1 + (1-bp) * 0.4)))
      }

      // Burst at target
      if (t >= T_BURST) {
        const rp = Math.min((t - T_BURST) / D_BURST, 1)
        burst?.setAttribute('r', String(3 + rp * 12))
        burst?.setAttribute('opacity', String((1 - rp) * 0.5))
      }

      // Fade + reset
      if (t >= T_FADE) {
        beam?.setAttribute('opacity', '0')
        burst?.setAttribute('r', '3'); burst?.setAttribute('opacity', '0')
        dots.forEach((dot, i) => {
          dot.setAttribute('cx', String(SOURCES[i][0]))
          dot.setAttribute('cy', String(SOURCES[i][1]))
          dot.setAttribute('opacity', '0.8')
        })
        beam?.setAttribute('x2', String(FOCAL[0]))
        startRef.current = ts
      }

      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [])

  return (
    <svg ref={svgRef} viewBox="0 0 56 56" width={56} height={56} fill="none" aria-hidden>
      {/* Source dots */}
      {SOURCES.map(([x, y], i) => (
        <circle key={i} className="co-dot" cx={x} cy={y} r={3}
          fill={TEAL} opacity={0.8} />
      ))}
      {/* Beam */}
      <line id="co-beam" x1={FOCAL[0]} y1={FOCAL[1]} x2={FOCAL[0]} y2={FOCAL[1]}
        stroke={AMBER} strokeWidth={1.8} strokeLinecap="round" opacity={0} />
      {/* Burst at target */}
      <circle id="co-burst" cx={TARGET[0]} cy={TARGET[1]} r={3}
        stroke={AMBER} strokeWidth={0.8} fill="none" opacity={0} />
      {/* Focal point indicator */}
      <circle cx={FOCAL[0]} cy={FOCAL[1]} r={2} fill={AMBER} opacity={0.4} />
    </svg>
  )
}

// ── 06 · Health System Intelligence ──────────────────────────────────────────
// Six nodes in a constellation. Most connections stay faint. Sequentially,
// a chosen path lights up amber — knowing exactly which connections matter.
function NetworkIcon() {
  const NODES6: [number, number][] = [
    [28, 6], [50, 18], [50, 38], [28, 50], [6, 38], [6, 18],
  ]
  // All possible edges
  const ALL_EDGES: [number, number][] = [
    [0,1],[1,2],[2,3],[3,4],[4,5],[5,0],[0,2],[1,3],[2,4],[3,5],[4,0],[5,1]
  ]
  // The "intelligent path" — the 4 connections that get lit up in sequence
  const PATH_EDGES = [0, 2, 7, 4] // indices into ALL_EDGES

  const svgRef   = useRef<SVGSVGElement>(null)
  const rafRef   = useRef<number>(0)
  const startRef = useRef<number>(0)

  useEffect(() => {
    const svg = svgRef.current; if (!svg) return
    const edges = Array.from(svg.querySelectorAll<SVGLineElement>('.ni-edge'))
    const nodes = Array.from(svg.querySelectorAll<SVGCircleElement>('.ni-node'))

    // Each path edge lights up for 0.6s then hands off
    const D_EACH = 0.65
    const CYCLE  = PATH_EDGES.length * D_EACH + 1.5 // pause at end

    function tick(ts: number) {
      if (!startRef.current) startRef.current = ts
      const t = ((ts - startRef.current) / 1000) % CYCLE

      // Reset all edges to dim
      edges.forEach((e, i) => {
        e.setAttribute('stroke', i % 2 === 0 ? TEAL : AMBER)
        e.setAttribute('opacity', '0.1')
        e.setAttribute('stroke-width', '0.7')
      })

      // Light up the active path edge
      const step = Math.floor(t / D_EACH)
      const stepT = (t % D_EACH) / D_EACH
      PATH_EDGES.forEach((edgeIdx, s) => {
        if (s < step) {
          // Past steps: medium glow
          edges[edgeIdx]?.setAttribute('opacity', '0.3')
          edges[edgeIdx]?.setAttribute('stroke', AMBER)
        } else if (s === step && step < PATH_EDGES.length) {
          // Active step: bright, fades in/out
          const alpha = 0.3 + 0.6 * Math.abs(Math.sin(stepT * Math.PI))
          edges[edgeIdx]?.setAttribute('opacity', String(alpha))
          edges[edgeIdx]?.setAttribute('stroke', AMBER)
          edges[edgeIdx]?.setAttribute('stroke-width', '1.4')
        }
      })

      // Pulse nodes that are part of the active edge
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
      {/* All edges (dim by default) */}
      {ALL_EDGES.map(([a, b], i) => (
        <line key={i} className="ni-edge"
          x1={NODES6[a][0]} y1={NODES6[a][1]}
          x2={NODES6[b][0]} y2={NODES6[b][1]}
          stroke={TEAL} strokeWidth={0.7} opacity={0.1} />
      ))}
      {/* Nodes */}
      {NODES6.map(([x, y], i) => (
        <circle key={i} className="ni-node" cx={x} cy={y} r={3}
          fill={i % 2 === 0 ? AMBER : TEAL} opacity={0.8} />
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
