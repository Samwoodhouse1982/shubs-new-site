'use client'
import { useEffect, useRef } from 'react'

const NODES = [
  { x: 200, y: 170, amber: true },
  { x: 140, y: 210, amber: false },
  { x: 260, y: 190, amber: true },
  { x: 180, y: 250, amber: false },
  { x: 230, y: 150, amber: true },
  { x: 170, y: 140, amber: false },
  { x: 290, y: 220, amber: true },
  { x: 150, y: 260, amber: false },
  { x: 240, y: 270, amber: true },
]

// Which nodes define the direction for each connection line
const CONN_INDICES = [0, 1, 2, 3, 4, 6]

// Precompute the angle from center (200,200) to each connection node
const CONN_ANGLES = CONN_INDICES.map(idx =>
  Math.atan2(NODES[idx].y - 200, NODES[idx].x - 200)
)

const LAT_OFFSETS = [-120, -80, -40, 0, 40, 80, 120]
const LON_ANGLES  = [0, 30, 60, 90, 120, 150]

export default function HeroGlobe() {
  const svgRef   = useRef<SVGSVGElement>(null)
  const rafRef   = useRef<number>(0)
  const startRef = useRef<number>(0)

  useEffect(() => {
    const svg = svgRef.current
    if (!svg) return

    const lonGroup  = svg.querySelector<SVGGElement>('#sg-lon-group')
    const outerRing = svg.querySelector<SVGCircleElement>('#sg-outer-ring')
    const midRing   = svg.querySelector<SVGCircleElement>('#sg-mid-ring')
    const dots      = Array.from(svg.querySelectorAll<SVGCircleElement>('.sg-dot'))
    const connLines = Array.from(svg.querySelectorAll<SVGLineElement>('.sg-conn'))
    const centerDot = svg.querySelector<SVGCircleElement>('#sg-center')

    const nodePhases = NODES.map((_, i) => (i * Math.PI * 2) / NODES.length)
    // Stagger each line's phase so they extend/retract at different times
    const connPhases = CONN_INDICES.map((_, i) => (i * Math.PI * 2) / CONN_INDICES.length)

    function animate(ts: number) {
      if (!startRef.current) startRef.current = ts
      const t = (ts - startRef.current) / 1000

      // Spin the globe grid
      if (lonGroup) {
        lonGroup.setAttribute('transform', `rotate(${t * 7}, 200, 200)`)
      }

      // Counter-rotate outer dashed ring
      if (outerRing) {
        outerRing.setAttribute('transform', `rotate(${-t * 4.5}, 200, 200)`)
      }

      // Mid ring same direction, slower
      if (midRing) {
        midRing.setAttribute('transform', `rotate(${t * 2.5}, 200, 200)`)
      }

      // Center dot pulse
      if (centerDot) {
        const s = 3.5 + 1.2 * Math.abs(Math.sin(t * 1.1))
        centerDot.setAttribute('r', String(s))
        centerDot.setAttribute('opacity', String(0.7 + 0.25 * Math.sin(t * 1.1)))
      }

      // Drift nodes + pulse size
      dots.forEach((dot, i) => {
        const node = NODES[i]
        const ph   = nodePhases[i]
        const dx   = 7 * Math.sin(t * 0.55 + ph)
        const dy   = 6 * Math.cos(t * 0.70 + ph * 1.2)
        const r    = 2.5 * (1 + 0.45 * Math.sin(t * 1.4 + ph))
        dot.setAttribute('cx', String(node.x + dx))
        dot.setAttribute('cy', String(node.y + dy))
        dot.setAttribute('r',  String(r))
        dot.setAttribute('opacity', String(0.35 + 0.45 * ((Math.sin(t * 1.1 + ph) + 1) / 2)))
      })

      // Lines extend out to outer ring (r≈180) then retract, staggered
      connLines.forEach((line, i) => {
        const angle = CONN_ANGLES[i]
        const ph    = connPhases[i]
        // r swings from 12 (near center) to 178 (just inside outer ring)
        const r = 12 + 166 * ((Math.sin(t * 0.85 + ph) + 1) / 2)
        // Micro-drift the anchor point so lines don't all pivot from the exact same pixel
        const cx = 200 + 2.5 * Math.sin(t * 0.5 + i * 1.1)
        const cy = 200 + 2.0 * Math.cos(t * 0.6 + i * 0.9)
        line.setAttribute('x1', String(cx))
        line.setAttribute('y1', String(cy))
        line.setAttribute('x2', String(200 + r * Math.cos(angle)))
        line.setAttribute('y2', String(200 + r * Math.sin(angle)))
        // Opacity tracks extension: brighter when fully extended
        line.setAttribute('opacity', String(0.12 + 0.45 * ((Math.sin(t * 0.85 + ph) + 1) / 2)))
      })

      rafRef.current = requestAnimationFrame(animate)
    }

    rafRef.current = requestAnimationFrame(animate)
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current) }
  }, [])

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 400 400"
      width="100%"
      height="100%"
      style={{ display: 'block' }}
      xmlns="http://www.w3.org/2000/svg"
      className="opacity-90"
    >
      {/* Outer dashed ring — counter-rotates */}
      <circle
        id="sg-outer-ring"
        cx="200" cy="200" r="180"
        fill="none" stroke="#C9933A" strokeWidth="0.8"
        strokeDasharray="10 5" opacity="0.45"
      />

      {/* Mid dashed ring */}
      <circle
        id="sg-mid-ring"
        cx="200" cy="200" r="130"
        fill="none" stroke="#2A6B62" strokeWidth="0.6"
        strokeDasharray="6 8" opacity="0.3"
      />

      {/* Inner ring — static */}
      <circle
        cx="200" cy="200" r="80"
        fill="none" stroke="#C9933A" strokeWidth="0.5" opacity="0.2"
      />

      {/* Spinning globe grid */}
      <g id="sg-lon-group">
        {LAT_OFFSETS.map((offset, i) => {
          const y = 200 + offset
          const hw = Math.sqrt(Math.max(0, 180 * 180 - offset * offset))
          return (
            <line key={`lat-${i}`}
              x1={200 - hw} y1={y} x2={200 + hw} y2={y}
              stroke="#C9933A" strokeWidth="0.5" opacity="0.18"
            />
          )
        })}
        {LON_ANGLES.map((angle, i) => {
          const rad = (angle * Math.PI) / 180
          return (
            <line key={`lon-${i}`}
              x1={200 + 180 * Math.cos(rad)} y1={200 + 180 * Math.sin(rad)}
              x2={200 - 180 * Math.cos(rad)} y2={200 - 180 * Math.sin(rad)}
              stroke="#2A6B62" strokeWidth="0.5" opacity="0.18"
            />
          )
        })}
      </g>

      {/* Connection lines — extend to outer ring and retract */}
      {CONN_INDICES.map((nodeIdx, i) => (
        <line
          key={`conn-${i}`}
          className="sg-conn"
          x1="200" y1="200"
          x2={NODES[nodeIdx].x} y2={NODES[nodeIdx].y}
          stroke={i % 2 === 0 ? '#C9933A' : '#2A6B62'}
          strokeWidth="0.8"
          opacity="0.3"
        />
      ))}

      {/* Network nodes — drift + pulse */}
      {NODES.map((node, i) => (
        <circle
          key={`dot-${i}`}
          className="sg-dot"
          cx={node.x} cy={node.y} r="2.5"
          fill={node.amber ? '#C9933A' : '#2A6B62'}
          opacity="0.6"
        />
      ))}

      {/* Centre node */}
      <circle id="sg-center" cx="200" cy="200" r="4" fill="#C9933A" opacity="0.9" />
    </svg>
  )
}
