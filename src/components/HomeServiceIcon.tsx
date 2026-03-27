'use client'
import React from 'react'
import { useEffect, useRef } from 'react'

type ServiceNum = '01' | '02' | '03' | '04' | '05' | '06'

const AMBER = '#C9933A'
const TEAL  = '#2A6B62'

// ── 01 · Fractional CMO ──────────────────────────────────────────────────────
// Person silhouette with two staggered sonar rings — amber outer, teal inner
function CmoIcon() {
  const svgRef   = useRef<SVGSVGElement>(null)
  const rafRef   = useRef<number>(0)
  const startRef = useRef<number>(0)

  useEffect(() => {
    const svg = svgRef.current; if (!svg) return
    const r1 = svg.querySelector<SVGCircleElement>('#cmo-r1')
    const r2 = svg.querySelector<SVGCircleElement>('#cmo-r2')
    const r3 = svg.querySelector<SVGCircleElement>('#cmo-r3')

    function tick(ts: number) {
      if (!startRef.current) startRef.current = ts
      const t = (ts - startRef.current) / 1000
      // Three staggered rings, cycle every 2.4 s
      const speed = 1 / 2.4
      const p1 = (t * speed) % 1
      const p2 = ((t * speed) + 0.33) % 1
      const p3 = ((t * speed) + 0.66) % 1
      const ease = (p: number) => 1 - (1 - p) ** 2

      if (r1) { r1.setAttribute('r', String(8 + ease(p1) * 18)); r1.setAttribute('opacity', String((1 - p1) * 0.5)) }
      if (r2) { r2.setAttribute('r', String(8 + ease(p2) * 18)); r2.setAttribute('opacity', String((1 - p2) * 0.4)) }
      if (r3) { r3.setAttribute('r', String(8 + ease(p3) * 18)); r3.setAttribute('opacity', String((1 - p3) * 0.3)) }

      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [])

  return (
    <svg ref={svgRef} viewBox="0 0 56 56" width={56} height={56} fill="none" aria-hidden>
      {/* Sonar rings from head */}
      <circle id="cmo-r1" cx={28} cy={14} r={8} stroke={AMBER} strokeWidth={0.8} opacity={0} />
      <circle id="cmo-r2" cx={28} cy={14} r={8} stroke={TEAL}  strokeWidth={0.8} opacity={0} />
      <circle id="cmo-r3" cx={28} cy={14} r={8} stroke={AMBER} strokeWidth={0.6} opacity={0} />
      {/* Person — head */}
      <circle cx={28} cy={14} r={6} fill={AMBER} opacity={0.9} />
      {/* Person — body */}
      <path d="M10 46a18 18 0 0 1 36 0" stroke={AMBER} strokeWidth={1.5} strokeLinecap="round" opacity={0.7} />
      {/* Teal accent line */}
      <line x1={20} y1={46} x2={36} y2={46} stroke={TEAL} strokeWidth={1} opacity={0.4} />
    </svg>
  )
}

// ── 02 · Clinical Product Development ───────────────────────────────────────
// Monitor with a vertical scanline sweeping across; cross pulses on contact
function ProductIcon() {
  const svgRef   = useRef<SVGSVGElement>(null)
  const rafRef   = useRef<number>(0)
  const startRef = useRef<number>(0)

  useEffect(() => {
    const svg = svgRef.current; if (!svg) return
    const scan  = svg.querySelector<SVGLineElement>('#pr-scan')
    const cross = svg.querySelector<SVGGElement>('#pr-cross')

    // Monitor inner bounds: x 8–48, y 6–38
    const xMin = 10, xMax = 46

    function tick(ts: number) {
      if (!startRef.current) startRef.current = ts
      const t = (ts - startRef.current) / 1000
      const cycle = 2.2
      const raw = (t % cycle) / cycle
      const x = xMin + (xMax - xMin) * raw

      if (scan) {
        scan.setAttribute('x1', String(x))
        scan.setAttribute('x2', String(x))
        scan.setAttribute('opacity', String(0.5 - 0.4 * raw))
      }

      // Cross scales up when scan passes center (x≈28)
      if (cross) {
        const dist = Math.abs(x - 28)
        const boost = Math.max(0, 1 - dist / 10)
        const s = 1 + 0.25 * boost
        cross.setAttribute('transform', `scale(${s}) translate(${28 * (1 - s) / s}, ${24 * (1 - s) / s})`)
      }

      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [])

  return (
    <svg ref={svgRef} viewBox="0 0 56 56" width={56} height={56} fill="none" aria-hidden>
      {/* Monitor */}
      <rect x={4} y={4} width={48} height={34} rx={3} stroke={AMBER} strokeWidth={1.2} opacity={0.6} />
      {/* Stand */}
      <line x1={28} y1={38} x2={28} y2={46} stroke={AMBER} strokeWidth={1.2} opacity={0.5} />
      <line x1={18} y1={46} x2={38} y2={46} stroke={AMBER} strokeWidth={1.2} opacity={0.5} />
      {/* Scanline */}
      <line id="pr-scan" x1={10} y1={6} x2={10} y2={36} stroke={TEAL} strokeWidth={1.5} opacity={0.5} />
      {/* Cross */}
      <g id="pr-cross">
        <line x1={21} y1={21} x2={35} y2={21} stroke={AMBER} strokeWidth={1.5} strokeLinecap="round" />
        <line x1={28} y1={14} x2={28} y2={28} stroke={AMBER} strokeWidth={1.5} strokeLinecap="round" />
      </g>
      {/* Teal corner accent */}
      <circle cx={46} cy={38} r={2} fill={TEAL} opacity={0.5} />
    </svg>
  )
}

// ── 03 · Evidence Strategy ───────────────────────────────────────────────────
// Ascending line chart — dot traces along the line, then resets
function EvidenceIcon() {
  const svgRef   = useRef<SVGSVGElement>(null)
  const rafRef   = useRef<number>(0)
  const startRef = useRef<number>(0)

  // Chart waypoints (x, y)
  const PTS: [number, number][] = [[8, 44], [18, 36], [28, 26], [36, 30], [46, 14]]
  const TOTAL_LEN = PTS.reduce((sum, pt, i) => {
    if (i === 0) return 0
    const prev = PTS[i - 1]
    return sum + Math.hypot(pt[0] - prev[0], pt[1] - prev[1])
  }, 0)

  useEffect(() => {
    const svg = svgRef.current; if (!svg) return
    const dot   = svg.querySelector<SVGCircleElement>('#ev-dot')
    const trail = svg.querySelector<SVGPolylineElement>('#ev-trail')

    function posAlongPath(progress: number): [number, number] {
      const target = progress * TOTAL_LEN
      let acc = 0
      for (let i = 1; i < PTS.length; i++) {
        const seg = Math.hypot(PTS[i][0] - PTS[i-1][0], PTS[i][1] - PTS[i-1][1])
        if (acc + seg >= target) {
          const t = (target - acc) / seg
          return [PTS[i-1][0] + t * (PTS[i][0] - PTS[i-1][0]), PTS[i-1][1] + t * (PTS[i][1] - PTS[i-1][1])]
        }
        acc += seg
      }
      return PTS[PTS.length - 1]
    }

    function tick(ts: number) {
      if (!startRef.current) startRef.current = ts
      const t = (ts - startRef.current) / 1000
      const cycle = 3.0
      const raw  = (t % cycle) / cycle
      const ease = raw < 0.8 ? raw / 0.8 : 1 - (raw - 0.8) / 0.2 * 0.05 // hold at end briefly

      const [x, y] = posAlongPath(Math.min(ease, 1))

      if (dot) {
        dot.setAttribute('cx', String(x))
        dot.setAttribute('cy', String(y))
        dot.setAttribute('opacity', String(0.9))
      }

      // Trail: points from start up to current
      if (trail) {
        const progress = Math.min(ease, 1)
        const trailPts: string[] = []
        for (let s = 0; s <= progress; s += 0.04) {
          const [px, py] = posAlongPath(s)
          trailPts.push(`${px},${py}`)
        }
        trailPts.push(`${x},${y}`)
        trail.setAttribute('points', trailPts.join(' '))
      }

      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [TOTAL_LEN])

  const ptStr = PTS.map(([x, y]) => `${x},${y}`).join(' ')

  return (
    <svg ref={svgRef} viewBox="0 0 56 56" width={56} height={56} fill="none" aria-hidden>
      {/* Ghost path */}
      <polyline points={ptStr} stroke={AMBER} strokeWidth={1} opacity={0.12} strokeLinejoin="round" />
      {/* Animated trail */}
      <polyline id="ev-trail" points={ptStr} stroke={AMBER} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" opacity={0.75} />
      {/* Waypoint dots */}
      {PTS.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={2} fill={i === PTS.length - 1 ? TEAL : AMBER} opacity={0.35} />
      ))}
      {/* Moving dot */}
      <circle id="ev-dot" cx={8} cy={44} r={3.5} fill={AMBER} opacity={0.9} />
      {/* Baseline */}
      <line x1={6} y1={47} x2={50} y2={47} stroke={TEAL} strokeWidth={0.8} opacity={0.3} />
    </svg>
  )
}

// ── 04 · Market Access ───────────────────────────────────────────────────────
// Shield outline draws on (teal), checkmark draws on (amber), then loops
function MarketIcon() {
  const svgRef   = useRef<SVGSVGElement>(null)
  const rafRef   = useRef<number>(0)
  const startRef = useRef<number>(0)

  useEffect(() => {
    const svg = svgRef.current; if (!svg) return
    const shield = svg.querySelector<SVGPathElement>('#mk-shield')
    const check  = svg.querySelector<SVGPathElement>('#mk-check')
    if (!shield || !check) return
    const sh: SVGPathElement = shield
    const ck: SVGPathElement = check
    const sLen = sh.getTotalLength()
    const cLen = ck.getTotalLength()

    sh.style.strokeDasharray = String(sLen)
    ck.style.strokeDasharray = String(cLen)

    function tick(ts: number) {
      if (!startRef.current) startRef.current = ts
      const t = (ts - startRef.current) / 1000
      const cycle = 4.0
      const raw = (t % cycle) / cycle

      // 0–0.4: shield draws on; 0.4–0.7: check draws on; 0.7–1.0: fade hold
      if (raw < 0.4) {
        const p = raw / 0.4
        sh.style.strokeDashoffset = String(sLen * (1 - p))
        ck.style.strokeDashoffset = String(cLen)
        sh.style.opacity = '0.7'
        ck.style.opacity = '0'
      } else if (raw < 0.7) {
        const p = (raw - 0.4) / 0.3
        sh.style.strokeDashoffset = '0'
        ck.style.strokeDashoffset = String(cLen * (1 - p))
        sh.style.opacity = '0.7'
        ck.style.opacity = String(p * 0.9)
      } else {
        sh.style.strokeDashoffset = '0'
        ck.style.strokeDashoffset = '0'
        sh.style.opacity = String(0.7 - (raw - 0.7) / 0.3 * 0.3)
        ck.style.opacity = String(0.9 - (raw - 0.7) / 0.3 * 0.6)
      }

      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [])

  return (
    <svg ref={svgRef} viewBox="0 0 56 56" width={56} height={56} fill="none" aria-hidden>
      {/* Ghost shield fill */}
      <path d="M28 4l18 8v12c0 10-7.8 18.8-18 22-10.2-3.2-18-12-18-22V12l18-8z" fill={TEAL} opacity={0.07} />
      {/* Drawing shield outline */}
      <path id="mk-shield" d="M28 4l18 8v12c0 10-7.8 18.8-18 22-10.2-3.2-18-12-18-22V12l18-8z"
        stroke={TEAL} strokeWidth={1.4} strokeLinejoin="round" opacity={0.7} />
      {/* Drawing checkmark */}
      <path id="mk-check" d="M19 28l6 6 12-13"
        stroke={AMBER} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" opacity={0} />
    </svg>
  )
}

// ── 05 · Impact Communications ───────────────────────────────────────────────
// Broadcast rings expanding from a dot; arrow pulses right
function CommsIcon() {
  const svgRef   = useRef<SVGSVGElement>(null)
  const rafRef   = useRef<number>(0)
  const startRef = useRef<number>(0)

  useEffect(() => {
    const svg = svgRef.current; if (!svg) return
    const rings = Array.from(svg.querySelectorAll<SVGCircleElement>('.cm-ring'))
    const arrow = svg.querySelector<SVGPathElement>('#cm-arrow')

    function tick(ts: number) {
      if (!startRef.current) startRef.current = ts
      const t = (ts - startRef.current) / 1000
      const speed = 1 / 2.8

      rings.forEach((ring, i) => {
        const p = ((t * speed) + i * 0.28) % 1
        const ease = 1 - (1 - p) ** 2
        ring.setAttribute('r',       String(4 + ease * 22))
        ring.setAttribute('opacity', String((1 - p) * (i % 2 === 0 ? 0.55 : 0.35)))
      })

      // Arrow pulses right
      if (arrow) {
        const shift = 2.5 * Math.abs(Math.sin(t * 1.8))
        arrow.setAttribute('transform', `translate(${shift}, 0)`)
        arrow.setAttribute('opacity', String(0.55 + 0.35 * Math.abs(Math.sin(t * 1.8))))
      }

      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [])

  return (
    <svg ref={svgRef} viewBox="0 0 56 56" width={56} height={56} fill="none" aria-hidden>
      {/* Rings from left-center source */}
      {[0, 1, 2, 3].map(i => (
        <circle key={i} className="cm-ring" cx={14} cy={28} r={4}
          stroke={i % 2 === 0 ? AMBER : TEAL} strokeWidth={0.9} opacity={0} />
      ))}
      {/* Source dot */}
      <circle cx={14} cy={28} r={3.5} fill={AMBER} opacity={0.9} />
      {/* Arrow */}
      <path id="cm-arrow" d="M32 22l10 6-10 6M42 28H28"
        stroke={AMBER} strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round" opacity={0.6} />
    </svg>
  )
}

// ── 06 · Health System Intelligence ──────────────────────────────────────────
// Central node with two orbiting satellites at different radii and speeds
function NetworkIcon() {
  const svgRef   = useRef<SVGSVGElement>(null)
  const rafRef   = useRef<number>(0)
  const startRef = useRef<number>(0)

  useEffect(() => {
    const svg = svgRef.current; if (!svg) return
    const s1  = svg.querySelector<SVGCircleElement>('#nw-s1')
    const s2  = svg.querySelector<SVGCircleElement>('#nw-s2')
    const l1  = svg.querySelector<SVGLineElement>('#nw-l1')
    const l2  = svg.querySelector<SVGLineElement>('#nw-l2')
    const cx = 28, cy = 28

    function tick(ts: number) {
      if (!startRef.current) startRef.current = ts
      const t = (ts - startRef.current) / 1000

      const a1 = t * 0.7
      const a2 = -(t * 1.1)

      const x1 = cx + 15 * Math.cos(a1), y1 = cy + 15 * Math.sin(a1)
      const x2 = cx + 20 * Math.cos(a2), y2 = cy + 20 * Math.sin(a2)

      if (s1) { s1.setAttribute('cx', String(x1)); s1.setAttribute('cy', String(y1)) }
      if (s2) { s2.setAttribute('cx', String(x2)); s2.setAttribute('cy', String(y2)) }
      if (l1) { l1.setAttribute('x1', String(cx)); l1.setAttribute('y1', String(cy)); l1.setAttribute('x2', String(x1)); l1.setAttribute('y2', String(y1)) }
      if (l2) { l2.setAttribute('x1', String(cx)); l2.setAttribute('y1', String(cy)); l2.setAttribute('x2', String(x2)); l2.setAttribute('y2', String(y2)) }

      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [])

  return (
    <svg ref={svgRef} viewBox="0 0 56 56" width={56} height={56} fill="none" aria-hidden>
      {/* Orbit paths */}
      <circle cx={28} cy={28} r={15} stroke={AMBER} strokeWidth={0.5} strokeDasharray="3 4" opacity={0.2} />
      <circle cx={28} cy={28} r={20} stroke={TEAL}  strokeWidth={0.5} strokeDasharray="3 4" opacity={0.15} />
      {/* Spoke lines */}
      <line id="nw-l1" x1={28} y1={28} x2={43} y2={28} stroke={AMBER} strokeWidth={0.8} opacity={0.4} />
      <line id="nw-l2" x1={28} y1={28} x2={48} y2={28} stroke={TEAL}  strokeWidth={0.8} opacity={0.35} />
      {/* Orbiting satellites */}
      <circle id="nw-s1" cx={43} cy={28} r={3.5} fill={AMBER} opacity={0.85} />
      <circle id="nw-s2" cx={48} cy={28} r={3}   fill={TEAL}  opacity={0.8} />
      {/* Centre node */}
      <circle cx={28} cy={28} r={5} fill={AMBER} opacity={0.9} />
      <circle cx={28} cy={28} r={8} stroke={AMBER} strokeWidth={0.6} opacity={0.2} />
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
