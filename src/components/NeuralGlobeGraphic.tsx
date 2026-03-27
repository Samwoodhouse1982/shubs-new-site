'use client'
import { useEffect, useRef } from 'react'

// ── Node positions forming a brain-like sphere (viewed from front) ────────────
const NODES = [
  // Outer ring — 12 nodes
  { x: 200, y:  52 }, { x: 278, y:  68 }, { x: 338, y: 122 },
  { x: 356, y: 196 }, { x: 335, y: 268 }, { x: 276, y: 328 },
  { x: 200, y: 348 }, { x: 124, y: 328 }, { x:  65, y: 268 },
  { x:  44, y: 196 }, { x:  65, y: 122 }, { x: 122, y:  68 },
  // Inner ring — 8 nodes
  { x: 200, y: 112 }, { x: 278, y: 148 }, { x: 308, y: 200 },
  { x: 268, y: 262 }, { x: 200, y: 290 }, { x: 132, y: 262 },
  { x:  92, y: 200 }, { x: 122, y: 148 },
  // Centre cluster — 5 nodes
  { x: 200, y: 168 }, { x: 236, y: 200 }, { x: 200, y: 232 },
  { x: 164, y: 200 }, { x: 200, y: 200 },
]

// Auto-connect nodes within threshold, cap connections per node
function buildConnections(): [number, number][] {
  const conns: [number, number][] = []
  const counts = new Array(NODES.length).fill(0)
  const MAX_DIST = 128
  const MAX_PER  = 4
  for (let i = 0; i < NODES.length; i++) {
    for (let j = i + 1; j < NODES.length; j++) {
      if (counts[i] >= MAX_PER || counts[j] >= MAX_PER) continue
      const dx = NODES[i].x - NODES[j].x
      const dy = NODES[i].y - NODES[j].y
      if (Math.sqrt(dx * dx + dy * dy) < MAX_DIST) {
        conns.push([i, j])
        counts[i]++
        counts[j]++
      }
    }
  }
  return conns
}

const CONNECTIONS = buildConnections()

// One signal particle per connection, staggered phase
interface Signal {
  conn: [number, number]
  phase: number  // 0–1, position along connection
  speed: number  // phase units per second
  amber: boolean
}

const SIGNALS: Signal[] = CONNECTIONS.map((conn, i) => ({
  conn,
  phase: (i / CONNECTIONS.length),
  speed: 0.12 + (i % 7) * 0.018,
  amber: i % 3 !== 1,
}))

export default function NeuralGlobeGraphic() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const rafRef    = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const cvs: HTMLCanvasElement        = canvas
    const c2d: CanvasRenderingContext2D = ctx

    let lastTs = 0
    const signals = SIGNALS.map(s => ({ ...s }))

    function draw(ts: number) {
      const dt = lastTs ? (ts - lastTs) / 1000 : 0
      lastTs = ts
      const t = ts / 1000

      c2d.clearRect(0, 0, 400, 400)

      // Outer sphere glow ring
      c2d.beginPath()
      c2d.arc(200, 200, 170, 0, Math.PI * 2)
      c2d.strokeStyle = 'rgba(201,147,58,0.08)'
      c2d.lineWidth = 1
      c2d.stroke()

      c2d.beginPath()
      c2d.arc(200, 200, 155, 0, Math.PI * 2)
      c2d.strokeStyle = 'rgba(42,107,98,0.06)'
      c2d.lineWidth = 0.8
      c2d.stroke()

      // Connections
      CONNECTIONS.forEach(([a, b], i) => {
        const na = NODES[a], nb = NODES[b]
        const pulse = 0.06 + 0.06 * Math.abs(Math.sin(t * 0.4 + i * 0.3))
        c2d.beginPath()
        c2d.moveTo(na.x, na.y)
        c2d.lineTo(nb.x, nb.y)
        c2d.strokeStyle = i % 3 !== 1
          ? `rgba(201,147,58,${pulse})`
          : `rgba(42,107,98,${pulse})`
        c2d.lineWidth = 0.7
        c2d.stroke()
      })

      // Advance and draw signal particles
      signals.forEach(sig => {
        sig.phase = (sig.phase + sig.speed * dt) % 1

        const [a, b] = sig.conn
        const na = NODES[a], nb = NODES[b]
        const x = na.x + (nb.x - na.x) * sig.phase
        const y = na.y + (nb.y - na.y) * sig.phase

        // Fade in/out at endpoints
        const fadeAlpha = Math.min(sig.phase, 1 - sig.phase) * 4
        const alpha = Math.min(fadeAlpha, 0.9)

        // Trail
        for (let j = 4; j >= 0; j--) {
          const tp = Math.max(0, sig.phase - j * 0.025)
          const tx = na.x + (nb.x - na.x) * tp
          const ty = na.y + (nb.y - na.y) * tp
          const ta = alpha * ((4 - j) / 4) * 0.4
          c2d.beginPath()
          c2d.arc(tx, ty, 1.2, 0, Math.PI * 2)
          c2d.fillStyle = sig.amber
            ? `rgba(201,147,58,${ta})`
            : `rgba(42,107,98,${ta})`
          c2d.fill()
        }

        // Head dot
        c2d.beginPath()
        c2d.arc(x, y, 2, 0, Math.PI * 2)
        c2d.fillStyle = sig.amber
          ? `rgba(201,147,58,${alpha})`
          : `rgba(42,107,98,${alpha})`
        c2d.fill()
      })

      // Nodes
      NODES.forEach((node, i) => {
        const pulse = 0.5 + 0.35 * Math.abs(Math.sin(t * 1.1 + i * 0.7))
        const r     = 2.2 + 1.2 * Math.abs(Math.sin(t * 0.9 + i * 0.55))
        const amber = i % 3 !== 1

        // Glow ring on larger nodes
        if (i % 5 === 0) {
          c2d.beginPath()
          c2d.arc(node.x, node.y, r + 4 + 3 * Math.abs(Math.sin(t * 0.6 + i)), 0, Math.PI * 2)
          c2d.fillStyle = amber ? `rgba(201,147,58,0.07)` : `rgba(42,107,98,0.07)`
          c2d.fill()
        }

        c2d.beginPath()
        c2d.arc(node.x, node.y, r, 0, Math.PI * 2)
        c2d.fillStyle = amber
          ? `rgba(201,147,58,${pulse})`
          : `rgba(42,107,98,${pulse})`
        c2d.fill()
      })

      rafRef.current = requestAnimationFrame(draw)
    }

    rafRef.current = requestAnimationFrame(draw)
    return () => cancelAnimationFrame(rafRef.current)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      width={400}
      height={400}
      style={{ display: 'block', width: '100%', height: '100%' }}
    />
  )
}
