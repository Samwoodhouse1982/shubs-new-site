'use client'
import { useEffect, useRef } from 'react'

const SIZE = 240
const CX   = SIZE / 2
const CY    = SIZE / 2

const RING_RADII  = [28, 44, 60, 76, 92, 106]
const WAVE_COUNT  = 18

export default function PodcastArtGraphic() {
  const svgRef  = useRef<SVGSVGElement>(null)
  const rafRef  = useRef<number>(0)
  const t0      = useRef<number>(0)

  useEffect(() => {
    const svg = svgRef.current
    if (!svg) return

    const spinGroup  = svg.querySelector<SVGGElement>('#pa-spin')
    const centerDot  = svg.querySelector<SVGCircleElement>('#pa-center')
    const waveDots   = Array.from(svg.querySelectorAll<SVGCircleElement>('.pa-wave'))

    function tick(ts: number) {
      if (!t0.current) t0.current = ts
      const t = (ts - t0.current) / 1000

      // Slow groove rotation
      if (spinGroup) {
        spinGroup.setAttribute('transform', `rotate(${t * 4}, ${CX}, ${CY})`)
      }

      // Pulse centre dot
      if (centerDot) {
        const r = 6 + 2.5 * Math.abs(Math.sin(t * 1.8))
        centerDot.setAttribute('r', String(r))
        centerDot.setAttribute('opacity', String(0.65 + 0.3 * Math.abs(Math.sin(t * 1.8))))
      }

      // Wave dots at bottom — oscillate vertically
      waveDots.forEach((dot, i) => {
        const baseY = SIZE - 22
        const amp   = 7 * Math.sin(t * 3.2 + i * 0.45)
        dot.setAttribute('cy',      String(baseY + amp))
        dot.setAttribute('opacity', String(0.25 + 0.35 * ((Math.sin(t * 2.5 + i * 0.4) + 1) / 2)))
      })

      rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [])

  return (
    <svg
      ref={svgRef}
      viewBox={`0 0 ${SIZE} ${SIZE}`}
      width="100%"
      height="100%"
      style={{ display: 'block' }}
      aria-hidden
    >
      {/* Background disc */}
      <circle cx={CX} cy={CY} r={SIZE / 2 - 2} fill="#080E0C" />

      {/* Static outer border ring */}
      <circle cx={CX} cy={CY} r={SIZE / 2 - 3} fill="none" stroke="#2A6B62" strokeWidth="1" opacity="0.35" />

      {/* Rotating groove rings */}
      <g id="pa-spin">
        {RING_RADII.map((r, i) => (
          <circle
            key={r}
            cx={CX} cy={CY} r={r}
            fill="none"
            stroke={i % 2 === 0 ? '#2A6B62' : '#C9933A'}
            strokeWidth={i % 3 === 0 ? '0.7' : '0.4'}
            strokeDasharray={i % 2 === 0 ? '4 3' : 'none'}
            opacity={0.12 + (RING_RADII.length - i) * 0.045}
          />
        ))}
      </g>

      {/* GPODH label */}
      <text
        x={CX} y={CY - 2}
        textAnchor="middle"
        fill="#2A6B62"
        fontSize="30"
        fontWeight="600"
        opacity="0.85"
        style={{ fontFamily: 'var(--font-cormorant)' }}
      >
        GPODH
      </text>
      <text
        x={CX} y={CY + 16}
        textAnchor="middle"
        fill="#A8A49D"
        fontSize="5.5"
        letterSpacing="2.5"
        opacity="0.5"
        style={{ fontFamily: 'var(--font-dm-mono)' }}
      >
        DIGITAL HEALTH
      </text>

      {/* Centre spindle dot */}
      <circle id="pa-center" cx={CX} cy={CY + 30} r="6" fill="#C9933A" opacity="0.8" />
      <circle cx={CX} cy={CY + 30} r="2.5" fill="#080E0C" />

      {/* Animated waveform strip at bottom */}
      {Array.from({ length: WAVE_COUNT }, (_, i) => (
        <circle
          key={i}
          className="pa-wave"
          cx={CX - (WAVE_COUNT / 2) * 7 + i * 7 + 3}
          cy={SIZE - 22}
          r="1.8"
          fill="#C9933A"
          opacity="0.3"
        />
      ))}
    </svg>
  )
}
