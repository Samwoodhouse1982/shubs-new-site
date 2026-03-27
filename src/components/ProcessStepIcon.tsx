'use client'
import { useEffect, useRef } from 'react'

const AMBER = '#C9933A'
const TEAL  = '#2A6B62'

// ---------------------------------------------------------------------------
// listen – equalizer bars
// ---------------------------------------------------------------------------
function ListenIcon() {
  const svgRef   = useRef<SVGSVGElement>(null)
  const rafRef   = useRef<number>(0)
  const startRef = useRef<number>(0)

  useEffect(() => {
    const svg = svgRef.current
    if (!svg) return
    const bars = Array.from(svg.querySelectorAll<SVGRectElement>('.eq-bar'))

    const phases   = [0, 0.6, 1.3, 2.0, 2.7]
    const minH     = 6
    const maxH     = 30
    const centerY  = 28

    function tick(ts: number) {
      if (!startRef.current) startRef.current = ts
      const t = (ts - startRef.current) / 1000

      bars.forEach((bar, i) => {
        const h  = minH + (maxH - minH) * ((Math.sin(t * 2.8 + phases[i]) + 1) / 2)
        const y  = centerY - h / 2
        bar.setAttribute('height', String(h))
        bar.setAttribute('y',      String(y))
      })

      rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [])

  const xPositions = [10, 18, 26, 34, 42]

  return (
    <svg ref={svgRef} viewBox="0 0 56 56" width={56} height={56} aria-hidden>
      {xPositions.map((x, i) => (
        <rect
          key={i}
          className="eq-bar"
          x={x}
          y={16}
          width={5}
          height={24}
          rx={2.5}
          fill={AMBER}
          opacity={0.85}
        />
      ))}
    </svg>
  )
}

// ---------------------------------------------------------------------------
// match – two dots converging
// ---------------------------------------------------------------------------
function MatchIcon() {
  const svgRef   = useRef<SVGSVGElement>(null)
  const rafRef   = useRef<number>(0)
  const startRef = useRef<number>(0)

  useEffect(() => {
    const svg = svgRef.current
    if (!svg) return

    const dotA    = svg.querySelector<SVGCircleElement>('#ma-dot-a')
    const dotB    = svg.querySelector<SVGCircleElement>('#ma-dot-b')
    const line    = svg.querySelector<SVGLineElement>('#ma-line')
    const centerX = 28
    const startA  = 10
    const startB  = 46
    const pauseDuration = 0.35 // seconds to pause at center
    const cycleDuration = 2.8  // total cycle

    function tick(ts: number) {
      if (!startRef.current) startRef.current = ts
      const elapsed = (ts - startRef.current) / 1000
      const t = elapsed % cycleDuration

      // 0 → 1: converge; 1 → 1+pause: hold; 1+pause → cycle: diverge
      let progress: number
      const halfCycle = (cycleDuration - pauseDuration) / 2

      if (t < halfCycle) {
        // converging
        progress = t / halfCycle
      } else if (t < halfCycle + pauseDuration) {
        // pause at center
        progress = 1
      } else {
        // diverging
        progress = 1 - (t - halfCycle - pauseDuration) / halfCycle
      }

      // Ease in-out cubic
      const eased = progress < 0.5
        ? 4 * progress * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 3) / 2

      const ax = startA + (centerX - startA) * eased
      const bx = startB - (startB - centerX) * eased

      if (dotA) dotA.setAttribute('cx', String(ax))
      if (dotB) dotB.setAttribute('cx', String(bx))

      // Dashed line appears when dots are within 20px of each other
      if (line) {
        const gap = bx - ax
        const lineOpacity = gap < 20 ? Math.max(0, (20 - gap) / 20) * 0.6 : 0
        line.setAttribute('x1',      String(ax))
        line.setAttribute('x2',      String(bx))
        line.setAttribute('opacity', String(lineOpacity))
      }

      rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [])

  return (
    <svg ref={svgRef} viewBox="0 0 56 56" width={56} height={56} aria-hidden>
      <line
        id="ma-line"
        x1="10" y1="28" x2="46" y2="28"
        stroke={AMBER}
        strokeWidth={1}
        strokeDasharray="3 3"
        opacity={0}
      />
      <circle id="ma-dot-a" cx={10} cy={28} r={5.5} fill={AMBER}  opacity={0.85} />
      <circle id="ma-dot-b" cx={46} cy={28} r={5.5} fill={TEAL}   opacity={0.85} />
    </svg>
  )
}

// ---------------------------------------------------------------------------
// embed – orbiting dot
// ---------------------------------------------------------------------------
function EmbedIcon() {
  const svgRef   = useRef<SVGSVGElement>(null)
  const rafRef   = useRef<number>(0)
  const startRef = useRef<number>(0)

  useEffect(() => {
    const svg = svgRef.current
    if (!svg) return
    const orbiter = svg.querySelector<SVGCircleElement>('#em-orbiter')

    const cx     = 28
    const cy     = 28
    const orbitR = 16
    const speed  = 0.7 // radians per second

    function tick(ts: number) {
      if (!startRef.current) startRef.current = ts
      const t     = (ts - startRef.current) / 1000
      const angle = t * speed

      if (orbiter) {
        orbiter.setAttribute('cx', String(cx + orbitR * Math.cos(angle)))
        orbiter.setAttribute('cy', String(cy + orbitR * Math.sin(angle)))
      }

      rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [])

  return (
    <svg ref={svgRef} viewBox="0 0 56 56" width={56} height={56} aria-hidden>
      {/* Faint outer dashed ring */}
      <circle cx={28} cy={28} r={22} fill="none" stroke={TEAL}  strokeWidth={0.8} strokeDasharray="4 4" opacity={0.3} />
      {/* Orbit path */}
      <circle cx={28} cy={28} r={16} fill="none" stroke={AMBER} strokeWidth={0.5} opacity={0.2} />
      {/* Fixed center */}
      <circle cx={28} cy={28} r={5}  fill={TEAL}  opacity={0.85} />
      {/* Orbiting dot */}
      <circle id="em-orbiter" cx={44} cy={28} r={3.5} fill={AMBER} opacity={0.9} />
    </svg>
  )
}

// ---------------------------------------------------------------------------
// deliver – ascending diagonal trace
// ---------------------------------------------------------------------------
function DeliverIcon() {
  const svgRef   = useRef<SVGSVGElement>(null)
  const rafRef   = useRef<number>(0)
  const startRef = useRef<number>(0)

  useEffect(() => {
    const svg = svgRef.current
    if (!svg) return

    const dot   = svg.querySelector<SVGCircleElement>('#dv-dot')
    const trail = svg.querySelector<SVGLineElement>('#dv-trail')

    const x1 = 10, y1 = 46
    const x2 = 46, y2 = 10
    const duration = 1.6 // seconds per sweep

    function tick(ts: number) {
      if (!startRef.current) startRef.current = ts
      const elapsed = (ts - startRef.current) / 1000
      const raw = (elapsed % duration) / duration

      // Ease-in-out quad
      const p = raw < 0.5
        ? 2 * raw * raw
        : 1 - Math.pow(-2 * raw + 2, 2) / 2

      const dotX = x1 + (x2 - x1) * p
      const dotY = y1 + (y2 - y1) * p

      if (dot) {
        dot.setAttribute('cx', String(dotX))
        dot.setAttribute('cy', String(dotY))
      }

      if (trail) {
        trail.setAttribute('x1', String(x1))
        trail.setAttribute('y1', String(y1))
        trail.setAttribute('x2', String(dotX))
        trail.setAttribute('y2', String(dotY))
        trail.setAttribute('opacity', String(0.15 + 0.65 * p))
      }

      rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [])

  return (
    <svg ref={svgRef} viewBox="0 0 56 56" width={56} height={56} aria-hidden>
      {/* Ghost full-path line */}
      <line x1={10} y1={46} x2={46} y2={10} stroke={AMBER} strokeWidth={1} opacity={0.12} />
      {/* Growing trail */}
      <line id="dv-trail" x1={10} y1={46} x2={10} y2={46} stroke={AMBER} strokeWidth={1.5} strokeLinecap="round" opacity={0} />
      {/* Moving dot */}
      <circle id="dv-dot" cx={10} cy={46} r={3.5} fill={AMBER} opacity={0.9} />
      {/* Destination marker */}
      <circle cx={46} cy={10} r={2.5} fill={TEAL} opacity={0.6} />
    </svg>
  )
}

// ---------------------------------------------------------------------------
// Public component
// ---------------------------------------------------------------------------
type IconType = 'listen' | 'match' | 'embed' | 'deliver'

export default function ProcessStepIcon({ type }: { type: IconType }) {
  switch (type) {
    case 'listen':  return <ListenIcon />
    case 'match':   return <MatchIcon />
    case 'embed':   return <EmbedIcon />
    case 'deliver': return <DeliverIcon />
  }
}
