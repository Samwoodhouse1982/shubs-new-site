'use client'
import { useEffect, useRef } from 'react'

const AMBER = '#C9933A'
const TEAL  = '#2A6B62'
const SPEED = 0.35
const RADIUS = 2.5
const NODE_OPACITY = 0.7
const CONNECT_DIST = 120
const LINE_WIDTH = 0.5
const NODE_COUNT = 19

interface Node {
  x: number
  y: number
  vx: number
  vy: number
  amber: boolean
}

function makeNodes(w: number, h: number): Node[] {
  const nodes: Node[] = []
  for (let i = 0; i < NODE_COUNT; i++) {
    const angle = Math.random() * Math.PI * 2
    nodes.push({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: Math.cos(angle) * SPEED,
      vy: Math.sin(angle) * SPEED,
      // ~2/3 amber, ~1/3 teal
      amber: i < Math.round(NODE_COUNT * (2 / 3)),
    })
  }
  return nodes
}

export default function ServicesMeshGraphic() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const rafRef    = useRef<number>(0)
  const nodesRef  = useRef<Node[]>([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Seed nodes once we know the initial size
    const initW = canvas.offsetWidth  || 400
    const initH = canvas.offsetHeight || 300
    nodesRef.current = makeNodes(initW, initH)

    // Keep canvas buffer matched to rendered size
    const ro = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect
        canvas.width  = Math.round(width)
        canvas.height = Math.round(height)
        // Reinitialise node positions when canvas changes size significantly
        nodesRef.current = makeNodes(canvas.width, canvas.height)
      }
    })
    ro.observe(canvas)

    // Set initial buffer size
    canvas.width  = initW
    canvas.height = initH

    // Capture non-null refs into typed consts before any closure uses them
    const c: HTMLCanvasElement          = canvas
    const g: CanvasRenderingContext2D   = ctx

    function tick() {
      const w = c.width
      const h = c.height
      const nodes = nodesRef.current

      g.clearRect(0, 0, w, h)

      // Update positions and bounce
      for (const node of nodes) {
        node.x += node.vx
        node.y += node.vy
        if (node.x < RADIUS) { node.x = RADIUS; node.vx = Math.abs(node.vx) }
        if (node.x > w - RADIUS) { node.x = w - RADIUS; node.vx = -Math.abs(node.vx) }
        if (node.y < RADIUS) { node.y = RADIUS; node.vy = Math.abs(node.vy) }
        if (node.y > h - RADIUS) { node.y = h - RADIUS; node.vy = -Math.abs(node.vy) }
      }

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i]
          const b = nodes[j]
          const dx = b.x - a.x
          const dy = b.y - a.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < CONNECT_DIST) {
            const opacity = (1 - dist / CONNECT_DIST) * 0.55
            g.beginPath()
            g.moveTo(a.x, a.y)
            g.lineTo(b.x, b.y)
            // Blend amber→teal when connecting across types
            g.strokeStyle = a.amber === b.amber
              ? (a.amber ? AMBER : TEAL)
              : AMBER
            g.globalAlpha = opacity
            g.lineWidth   = LINE_WIDTH
            g.stroke()
          }
        }
      }

      // Draw nodes
      for (const node of nodes) {
        g.beginPath()
        g.arc(node.x, node.y, RADIUS, 0, Math.PI * 2)
        g.fillStyle   = node.amber ? AMBER : TEAL
        g.globalAlpha = NODE_OPACITY
        g.fill()
      }

      g.globalAlpha = 1

      rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(rafRef.current)
      ro.disconnect()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
      aria-hidden
    />
  )
}
