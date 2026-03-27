'use client'
import { useEffect, useRef } from 'react'

const CIRCLES = [
  { cx: 120, cy: 72,  r: 58, stroke: '#C9933A', label: 'CLINICAL RIGOUR',      lx: 120, ly: 14  },
  { cx: 86,  cy: 132, r: 58, stroke: '#2A6B62', label: 'IMPLEMENTATION',        lx: 34,  ly: 178 },
  { cx: 154, cy: 132, r: 58, stroke: '#A8A49D', label: 'STRATEGIC CLARITY',     lx: 206, ly: 178 },
]

export default function VennGraphic() {
  const svgRef = useRef<SVGSVGElement>(null)
  const rafRef = useRef<number>(0)
  const t0     = useRef<number>(0)

  useEffect(() => {
    const svg = svgRef.current
    if (!svg) return

    const fills   = Array.from(svg.querySelectorAll<SVGCircleElement>('.vg-fill'))
    const borders = Array.from(svg.querySelectorAll<SVGCircleElement>('.vg-border'))

    function tick(ts: number) {
      if (!t0.current) t0.current = ts
      const t = (ts - t0.current) / 1000

      fills.forEach((c, i) => {
        const ph   = (i * Math.PI * 2) / 3
        const base = CIRCLES[i].r
        c.setAttribute('r',       String(base + 2.5 * Math.sin(t * 0.65 + ph)))
        c.setAttribute('opacity', String(0.055 + 0.022 * Math.sin(t * 0.5 + ph)))
      })

      borders.forEach((c, i) => {
        const ph   = (i * Math.PI * 2) / 3
        const base = CIRCLES[i].r
        c.setAttribute('r', String(base + 2.5 * Math.sin(t * 0.65 + ph)))
        // Spin the dashed stroke — alternate direction per circle
        const dir    = i % 2 === 0 ? 1 : -1
        const offset = (t * 18 * dir) % 100
        c.setAttribute('stroke-dashoffset', String(offset))
      })

      rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [])

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 240 195"
      width="100%"
      height="100%"
      aria-hidden
    >
      {/* Filled circles (breathe) */}
      {CIRCLES.map((c, i) => (
        <circle
          key={`fill-${i}`}
          className="vg-fill"
          cx={c.cx} cy={c.cy} r={c.r}
          fill={c.stroke}
          opacity="0.055"
        />
      ))}

      {/* Dashed stroke borders (spin) */}
      {CIRCLES.map((c, i) => (
        <circle
          key={`border-${i}`}
          className="vg-border"
          cx={c.cx} cy={c.cy} r={c.r}
          fill="none"
          stroke={c.stroke}
          strokeWidth="0.7"
          strokeDasharray="5 3"
          opacity="0.4"
        />
      ))}

      {/* Centre label */}
      <text
        x="120" y="108"
        textAnchor="middle"
        fill="#C9933A"
        fontSize="6"
        letterSpacing="1.5"
        opacity="0.65"
        style={{ fontFamily: 'var(--font-dm-mono)' }}
      >
        SANDIQ
      </text>

      {/* Outer labels */}
      {CIRCLES.map((c, i) => (
        <text
          key={`lbl-${i}`}
          x={c.lx} y={c.ly}
          textAnchor="middle"
          fill={c.stroke}
          fontSize="5.2"
          letterSpacing="0.8"
          opacity="0.5"
          style={{ fontFamily: 'var(--font-dm-mono)' }}
        >
          {c.label}
        </text>
      ))}
    </svg>
  )
}
