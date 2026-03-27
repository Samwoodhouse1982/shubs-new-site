'use client'
import React from 'react'
import { useEffect, useRef } from 'react'

type ServiceNum = '01' | '02' | '03' | '04' | '05' | '06'

// ── Individual animated icons ────────────────────────────────────────────────

function CmoIcon() {
  // Person with expanding sonar ring from head
  const svgRef = useRef<SVGSVGElement>(null)
  const rafRef = useRef<number>(0)
  const t0     = useRef<number>(0)
  useEffect(() => {
    const svg = svgRef.current; if (!svg) return
    const ring = svg.querySelector<SVGCircleElement>('#cmo-ring')
    const ring2 = svg.querySelector<SVGCircleElement>('#cmo-ring2')
    function tick(ts: number) {
      if (!t0.current) t0.current = ts
      const t = (ts - t0.current) / 1000
      // Two staggered sonar rings from head (cx=14, cy=7.5, r=3.5)
      const p1 = (t * 0.7) % 1
      const p2 = ((t * 0.7) + 0.5) % 1
      if (ring) {
        ring.setAttribute('r', String(3.5 + p1 * 8))
        ring.setAttribute('opacity', String((1 - p1) * 0.5))
      }
      if (ring2) {
        ring2.setAttribute('r', String(3.5 + p2 * 8))
        ring2.setAttribute('opacity', String((1 - p2) * 0.5))
      }
      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [])
  return (
    <svg ref={svgRef} viewBox="0 0 28 28" width="28" height="28" fill="none" stroke="#C9933A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle id="cmo-ring"  cx="14" cy="7.5" r="3.5" fill="none" stroke="#C9933A" strokeWidth="0.8" opacity="0" />
      <circle id="cmo-ring2" cx="14" cy="7.5" r="3.5" fill="none" stroke="#C9933A" strokeWidth="0.8" opacity="0" />
      <circle cx="14" cy="7.5" r="3.5" />
      <path d="M3.5 24.5a10.5 10.5 0 0 1 21 0" />
    </svg>
  )
}

function ProductIcon() {
  // Monitor with cross that pulses outward
  const svgRef = useRef<SVGSVGElement>(null)
  const rafRef = useRef<number>(0)
  const t0     = useRef<number>(0)
  useEffect(() => {
    const svg = svgRef.current; if (!svg) return
    const cross = svg.querySelector<SVGGElement>('#prod-cross')
    function tick(ts: number) {
      if (!t0.current) t0.current = ts
      const t = (ts - t0.current) / 1000
      const scale = 1 + 0.12 * Math.abs(Math.sin(t * 1.8))
      if (cross) cross.setAttribute('transform', `scale(${scale}) translate(${14 * (1 - scale) / scale}, ${10 * (1 - scale) / scale})`)
      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [])
  return (
    <svg ref={svgRef} viewBox="0 0 28 28" width="28" height="28" fill="none" stroke="#C9933A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="2" y="3" width="24" height="16" rx="2" />
      <path d="M9 25h10M14 19v6" />
      <g id="prod-cross">
        <path d="M10.5 11h7M14 7.5v7" />
      </g>
    </svg>
  )
}

function EvidenceIcon() {
  // Bar chart — bars grow sequentially then loop
  const svgRef = useRef<SVGSVGElement>(null)
  const rafRef = useRef<number>(0)
  const t0     = useRef<number>(0)
  const BASE_HEIGHTS = [12, 17, 22, 14] // natural heights of 4 bars
  const XS = [4, 9, 14, 19]
  useEffect(() => {
    const svg = svgRef.current; if (!svg) return
    const bars = Array.from(svg.querySelectorAll<SVGRectElement>('.ev-bar'))
    function tick(ts: number) {
      if (!t0.current) t0.current = ts
      const t = (ts - t0.current) / 1000
      bars.forEach((bar, i) => {
        const phase = i * 0.35
        const mult  = 0.6 + 0.4 * Math.abs(Math.sin(t * 1.1 + phase))
        const h = BASE_HEIGHTS[i] * mult
        bar.setAttribute('height', String(h))
        bar.setAttribute('y', String(23 - h))
        bar.setAttribute('opacity', String(0.5 + 0.4 * Math.abs(Math.sin(t * 1.1 + phase))))
      })
      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [])
  return (
    <svg ref={svgRef} viewBox="0 0 28 28" width="28" height="28" fill="none" stroke="#C9933A" strokeWidth="1.5" strokeLinecap="round" aria-hidden>
      {XS.map((x, i) => (
        <rect key={i} className="ev-bar" x={x} y={23 - BASE_HEIGHTS[i]} width="4" height={BASE_HEIGHTS[i]} rx="1" fill="#C9933A" stroke="none" opacity="0.7" />
      ))}
      <path d="M2 23h24" strokeWidth="1" />
    </svg>
  )
}

function MarketIcon() {
  // Shield that breathes, checkmark draws on
  const svgRef = useRef<SVGSVGElement>(null)
  const rafRef = useRef<number>(0)
  const t0     = useRef<number>(0)
  useEffect(() => {
    const svg = svgRef.current; if (!svg) return
    const shield = svg.querySelector<SVGPathElement>('#mkt-shield')
    const check  = svg.querySelector<SVGPathElement>('#mkt-check')
    if (!check) return
    const ck: SVGPathElement = check
    const tLen = ck.getTotalLength()
    function tick(ts: number) {
      if (!t0.current) t0.current = ts
      const t = (ts - t0.current) / 1000
      // Shield pulse
      if (shield) {
        const s = 1 + 0.03 * Math.sin(t * 1.5)
        shield.setAttribute('transform', `scale(${s}) translate(${14 * (1 - s) / s}, ${13 * (1 - s) / s})`)
      }
      // Checkmark draws on and fades, looping every 3s
      const cycle = t % 3
      let dashOffset: number
      if (cycle < 1.2) {
        dashOffset = tLen * (1 - cycle / 1.2)
      } else {
        dashOffset = 0
      }
      ck.style.strokeDasharray  = String(tLen)
      ck.style.strokeDashoffset = String(dashOffset)
      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [])
  return (
    <svg ref={svgRef} viewBox="0 0 28 28" width="28" height="28" fill="none" stroke="#C9933A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path id="mkt-shield" d="M14 2l9 4v6c0 5-3.9 9.4-9 11-5.1-1.6-9-6-9-11V6l9-4z" />
      <path id="mkt-check" d="M10 14l2.5 2.5 5-5.5" />
    </svg>
  )
}

function CommsIcon() {
  // Speech bubble with lines that animate typing left-to-right
  const svgRef = useRef<SVGSVGElement>(null)
  const rafRef = useRef<number>(0)
  const t0     = useRef<number>(0)
  useEffect(() => {
    const svg = svgRef.current; if (!svg) return
    const lines = Array.from(svg.querySelectorAll<SVGLineElement>('.comms-line'))
    function tick(ts: number) {
      if (!t0.current) t0.current = ts
      const t = (ts - t0.current) / 1000
      lines.forEach((line, i) => {
        const phase  = i * 0.6
        const cycle  = (t * 0.7 + phase) % 2  // 2s cycle
        const full   = i === 0 ? 10 : 7        // full width of line
        const x2 = parseFloat(line.getAttribute('x1') || '8') + (cycle < 1 ? cycle * full : full)
        line.setAttribute('x2', String(x2))
        line.setAttribute('opacity', String(cycle < 1 ? 0.4 + cycle * 0.4 : 0.8))
      })
      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [])
  return (
    <svg ref={svgRef} viewBox="0 0 28 28" width="28" height="28" fill="none" stroke="#C9933A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M4 5h20a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H9l-5 4V6a1 1 0 0 1 1-1z" />
      <line className="comms-line" x1="8" y1="10.5" x2="8" y2="10.5" stroke="#C9933A" strokeWidth="1.5" />
      <line className="comms-line" x1="8" y1="13.5" x2="8" y2="13.5" stroke="#C9933A" strokeWidth="1.5" />
    </svg>
  )
}

function NetworkIcon() {
  // Three nodes — connections flash in sequence
  const svgRef = useRef<SVGSVGElement>(null)
  const rafRef = useRef<number>(0)
  const t0     = useRef<number>(0)
  useEffect(() => {
    const svg = svgRef.current; if (!svg) return
    const conns = Array.from(svg.querySelectorAll<SVGLineElement>('.net-conn'))
    const nodes = Array.from(svg.querySelectorAll<SVGCircleElement>('.net-node'))
    function tick(ts: number) {
      if (!t0.current) t0.current = ts
      const t = (ts - t0.current) / 1000
      conns.forEach((conn, i) => {
        const phase   = (i * Math.PI * 2) / conns.length
        const opacity = 0.2 + 0.6 * ((Math.sin(t * 1.5 + phase) + 1) / 2)
        conn.setAttribute('opacity', String(opacity))
      })
      nodes.forEach((node, i) => {
        const phase   = (i * Math.PI * 2) / nodes.length
        const r       = 2.5 + 0.8 * Math.abs(Math.sin(t * 1.2 + phase))
        node.setAttribute('r', String(r))
      })
      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [])
  return (
    <svg ref={svgRef} viewBox="0 0 28 28" width="28" height="28" fill="none" stroke="#C9933A" strokeWidth="1.5" strokeLinecap="round" aria-hidden>
      <line className="net-conn" x1="14" y1="5" x2="5.5" y2="21" stroke="#C9933A" strokeWidth="0.8" />
      <line className="net-conn" x1="14" y1="5" x2="22.5" y2="21" stroke="#C9933A" strokeWidth="0.8" />
      <line className="net-conn" x1="5.5" y1="21" x2="22.5" y2="21" stroke="#C9933A" strokeWidth="0.8" />
      <circle className="net-node" cx="14"   cy="5"  r="2.5" fill="#C9933A" />
      <circle className="net-node" cx="5.5"  cy="21" r="2.5" fill="#C9933A" />
      <circle className="net-node" cx="22.5" cy="21" r="2.5" fill="#C9933A" />
    </svg>
  )
}

// ── Public component ─────────────────────────────────────────────────────────

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
