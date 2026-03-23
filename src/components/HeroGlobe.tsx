'use client'
import { useEffect, useRef } from 'react'

// Base node positions
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

// Which nodes the center connects to
const CONN_INDICES = [0, 1, 2, 3, 6]

const LAT_OFFSETS = [-120, -80, -40, 0, 40, 80, 120]
const LON_ANGLES = [0, 30, 60, 90, 120, 150]

export default function HeroGlobe() {
  const svgRef = useRef<SVGSVGElement>(null)
  const rafRef = useRef<number>()
  const startRef = useRef<number>()

  useEffect(() => {
    const svg = svgRef.current
    if (!svg) return

    const lonGroup = svg.querySelector<SVGGElement>('#sg-lon-group')
    const outerRing = svg.querySelector<SVGCircleElement>('#sg-outer-ring')
    const midRing = svg.querySelector<SVGCircleElement>('#sg-mid-ring')
    const dots = Array.from(svg.querySelectorAll<SVGCircleElement>('.sg-dot'))
    const connLines = Array.from(svg.querySelectorAll<SVGLineElement>('.sg-conn'))
    const centerDot = svg.querySelector<SVGCircleElement>('#sg-center')

    const nodePhases = NODES.map((_, i) => (i * Math.PI * 2) / NODES.length)

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

      // Mid ring rotates slowly same direction
      if (midRing) {
        midRing.setAttribute('transform', `rotate(${t * 2.5}, 200, 200)`)
      }

      // Center dot subtle pulse
      if (centerDot) {
        const s = 3.5 + 1.2 * Math.abs(Math.sin(t * 1.1))
        centerDot.setAttribute('r', String(s))
        centerDot.setAttribute('opacity', String(0.7 + 0.25 * Math.sin(t * 1.1)))
      }

      // Drift nodes + pulse size
      dots.forEach((dot, i) => {
        const node = NODES[i]
        const ph = nodePhases[i]
        const dx = 7 * Math.sin(t * 0.55 + ph)
        const dy = 6 * Math.cos(t * 0.7 + ph * 1.2)
        const rScale = 1 + 0.45 * Math.sin(t * 1.4 + ph)
        dot.setAttribute('cx', String(node.x + dx))
        dot.setAttribute('cy', String(node.y + dy))
        dot.setAttribute('r', String(2.5 * rScale))
        dot.setAttribute('opacity', String(0.35 + 0.45 * ((Math.sin(t * 1.1 + ph) + 1) / 2)))
      })

      // Drift connection line endpoints to match drifting nodes
      connLines.forEach((line, i) => {
        const nodeIdx = CONN_INDICES[i]
        const node = NODES[nodeIdx]
        const ph = nodePhases[nodeIdx]
        const dx = 7 * Math.sin(t * 0.55 + ph)
        const dy = 6 * Math.cos(t * 0.7 + ph * 1.2)
        // Also vary center anchor slightly for organic feel
        const cx = 200 + 3 * Math.sin(t * 0.4 + i)
        const cy = 200 + 2 * Math.cos(t * 0.5 + i * 1.3)
        line.setAttribute('x1', String(cx))
        line.setAttribute('y1', String(cy))
        line.setAttribute('x2', String(node.x + dx))
        line.setAttribute('y2', String(node.y + dy))
        // Pulse opacity to make lines appear/fade
        const op = 0.15 + 0.3 * ((Math.sin(t * 0.8 + ph) + 1) / 2)
        line.setAttribute('opacity', String(op))
      })

      rafRef.current = requestAnimationFrame(animate)
    }

    rafRef.current = requestAnimationFrame(animate)
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 400 400"
      width="420"
      height="420"
      xmlns="http://www.w3.org/2000/svg"
      className="opacity-60"
    >
      {/* Outer dashed ring — counter-rotates */}
      <circle
        id="sg-outer-ring"
        cx="200"
        cy="200"
        r="180"
        fill="none"
        stroke="#C9933A"
        strokeWidth="0.8"
        strokeDasharray="10 5"
        opacity="0.45"
      />

      {/* Mid ring */}
      <circle
        id="sg-mid-ring"
        cx="200"
        cy="200"
        r="130"
        fill="none"
        stroke="#2A6B62"
        strokeWidth="0.6"
        strokeDasharray="6 8"
        opacity="0.3"
      />

      {/* Inner ring — static */}
      <circle
        cx="200"
        cy="200"
        r="80"
        fill="none"
        stroke="#C9933A"
        strokeWidth="0.5"
        opacity="0.2"
      />

      {/* Spinning globe grid */}
      <g id="sg-lon-group">
        {/* Latitude lines */}
        {LAT_OFFSETS.map((offset, i) => {
          const y = 200 + offset
          const halfWidth = Math.sqrt(Math.max(0, 180 * 180 - offset * offset))
          return (
            <line
              key={`lat-${i}`}
              x1={200 - halfWidth}
              y1={y}
              x2={200 + halfWidth}
              y2={y}
              stroke="#C9933A"
              strokeWidth="0.5"
              opacity="0.18"
            />
          )
        })}

        {/* Longitude lines */}
        {LON_ANGLES.map((angle, i) => {
          const rad = (angle * Math.PI) / 180
          return (
            <line
              key={`lon-${i}`}
              x1={200 + 180 * Math.cos(rad)}
              y1={200 + 180 * Math.sin(rad)}
              x2={200 - 180 * Math.cos(rad)}
              y2={200 - 180 * Math.sin(rad)}
              stroke="#2A6B62"
              strokeWidth="0.5"
              opacity="0.18"
            />
          )
        })}
      </g>

      {/* Connection lines — endpoints drift with nodes */}
      {CONN_INDICES.map((nodeIdx, i) => (
        <line
          key={`conn-${i}`}
          className="sg-conn"
          x1="200"
          y1="200"
          x2={NODES[nodeIdx].x}
          y2={NODES[nodeIdx].y}
          stroke={i % 2 === 0 ? '#C9933A' : '#2A6B62'}
          strokeWidth="0.7"
          opacity="0.3"
        />
      ))}

      {/* Network nodes — drift + pulse */}
      {NODES.map((node, i) => (
        <circle
          key={`dot-${i}`}
          className="sg-dot"
          cx={node.x}
          cy={node.y}
          r="2.5"
          fill={node.amber ? '#C9933A' : '#2A6B62'}
          opacity="0.6"
        />
      ))}

      {/* Centre node */}
      <circle
        id="sg-center"
        cx="200"
        cy="200"
        r="4"
        fill="#C9933A"
        opacity="0.9"
      />
    </svg>
  )
}
