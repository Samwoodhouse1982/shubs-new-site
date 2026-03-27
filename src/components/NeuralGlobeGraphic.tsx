'use client'
import { useEffect, useRef } from 'react'

// Canvas is 480×480 with centre at (240,240) — gives 80px clearance beyond
// the outer ring (~r170) so plucked nodes never clip the canvas edge.
const CX = 240, CY = 240

// ── Node positions forming a brain-like sphere (viewed from front) ────────────
const NODES = [
  // Outer ring — 12 nodes (indices 0–11, eligible to be plucked)
  { x: 240, y:  92 }, { x: 318, y: 108 }, { x: 378, y: 162 },
  { x: 396, y: 236 }, { x: 375, y: 308 }, { x: 316, y: 368 },
  { x: 240, y: 388 }, { x: 164, y: 368 }, { x: 105, y: 308 },
  { x:  84, y: 236 }, { x: 105, y: 162 }, { x: 162, y: 108 },
  // Inner ring — 8 nodes
  { x: 240, y: 152 }, { x: 318, y: 188 }, { x: 348, y: 240 },
  { x: 308, y: 302 }, { x: 240, y: 330 }, { x: 172, y: 302 },
  { x: 132, y: 240 }, { x: 162, y: 188 },
  // Centre cluster — 5 nodes
  { x: 240, y: 208 }, { x: 276, y: 240 }, { x: 240, y: 272 },
  { x: 204, y: 240 }, { x: 240, y: 240 },
]

// Only outer-ring nodes can be plucked (they have a clear outward direction)
const PLUCKABLE = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

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

interface Signal {
  conn: [number, number]
  phase: number
  speed: number
  amber: boolean
}

const SIGNALS: Signal[] = CONNECTIONS.map((conn, i) => ({
  conn,
  phase: i / CONNECTIONS.length,
  speed: 0.12 + (i % 7) * 0.018,
  amber: i % 3 !== 1,
}))

// Easing
const easeInOut = (t: number) =>
  t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2

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

    // ── Pluck state machine ────────────────────────────────────────────────────
    type PluckPhase = 'idle' | 'lifting' | 'dwelling' | 'returning'
    const pluck: {
      phase:   PluckPhase
      nodeIdx: number
      elapsed: number
      nextIn:  number   // countdown to next pluck (idle only)
      ox: number; oy: number  // original position
      tx: number; ty: number  // target position (outside ring)
      cx: number; cy: number  // current animated position
      glowPulse: number       // time accumulator for dwell glow
    } = {
      phase: 'idle', nodeIdx: 0, elapsed: 0, nextIn: 2.5,
      ox: 0, oy: 0, tx: 0, ty: 0, cx: 0, cy: 0, glowPulse: 0,
    }

    function startPluck() {
      // Pick a random outer-ring node, push it radially outward to r≈230
      // (outer ring ≈ r170; target r230 → 60px clearance; canvas 480 → fits all)
      const idx = PLUCKABLE[Math.floor(Math.random() * PLUCKABLE.length)]
      const node = NODES[idx]
      const dx = node.x - CX
      const dy = node.y - CY
      const dist = Math.sqrt(dx * dx + dy * dy) || 1
      const targetR = 230
      pluck.nodeIdx   = idx
      pluck.ox = node.x; pluck.oy = node.y
      pluck.tx = CX + (dx / dist) * targetR
      pluck.ty = CY + (dy / dist) * targetR
      pluck.cx = node.x; pluck.cy = node.y
      pluck.elapsed   = 0
      pluck.glowPulse = 0
      pluck.phase     = 'lifting'
    }

    const DUR_LIFT  = 1.0
    const DUR_DWELL = 2.2
    const DUR_RET   = 0.8

    function draw(ts: number) {
      const dt = lastTs ? (ts - lastTs) / 1000 : 0
      lastTs = ts
      const t = ts / 1000

      // ── Advance pluck state ──────────────────────────────────────────────
      pluck.elapsed += dt
      if (pluck.phase === 'idle') {
        pluck.nextIn -= dt
        if (pluck.nextIn <= 0) startPluck()
      } else if (pluck.phase === 'lifting') {
        const p = Math.min(pluck.elapsed / DUR_LIFT, 1)
        const e = easeInOut(p)
        pluck.cx = pluck.ox + (pluck.tx - pluck.ox) * e
        pluck.cy = pluck.oy + (pluck.ty - pluck.oy) * e
        if (p >= 1) { pluck.phase = 'dwelling'; pluck.elapsed = 0 }
      } else if (pluck.phase === 'dwelling') {
        pluck.glowPulse += dt
        pluck.cx = pluck.tx; pluck.cy = pluck.ty
        if (pluck.elapsed >= DUR_DWELL) { pluck.phase = 'returning'; pluck.elapsed = 0 }
      } else if (pluck.phase === 'returning') {
        const p = Math.min(pluck.elapsed / DUR_RET, 1)
        const e = easeInOut(p)
        pluck.cx = pluck.tx + (pluck.ox - pluck.tx) * e
        pluck.cy = pluck.ty + (pluck.oy - pluck.ty) * e
        if (p >= 1) {
          pluck.phase  = 'idle'
          pluck.nextIn = 3.0 + Math.random() * 2.5
          pluck.elapsed = 0
        }
      }

      c2d.clearRect(0, 0, 480, 480)

      // ── Sphere rings ────────────────────────────────────────────────────
      c2d.beginPath()
      c2d.arc(CX, CY, 170, 0, Math.PI * 2)
      c2d.strokeStyle = 'rgba(201,147,58,0.08)'
      c2d.lineWidth = 1
      c2d.stroke()

      c2d.beginPath()
      c2d.arc(CX, CY, 155, 0, Math.PI * 2)
      c2d.strokeStyle = 'rgba(42,107,98,0.06)'
      c2d.lineWidth = 0.8
      c2d.stroke()

      // ── Thread: faint dashed line from centre to plucked node ───────────
      if (pluck.phase !== 'idle') {
        const threadAlpha = pluck.phase === 'dwelling' ? 0.22 : 0.12
        c2d.setLineDash([4, 6])
        c2d.beginPath()
        c2d.moveTo(CX, CY)
        c2d.lineTo(pluck.cx, pluck.cy)
        c2d.strokeStyle = `rgba(201,147,58,${threadAlpha})`
        c2d.lineWidth = 0.8
        c2d.stroke()
        c2d.setLineDash([])
      }

      // ── Connections (use animated position for plucked node) ─────────────
      CONNECTIONS.forEach(([a, b], i) => {
        const isPlucked = pluck.phase !== 'idle'
        const ax = isPlucked && a === pluck.nodeIdx ? pluck.cx : NODES[a].x
        const ay = isPlucked && a === pluck.nodeIdx ? pluck.cy : NODES[a].y
        const bx = isPlucked && b === pluck.nodeIdx ? pluck.cx : NODES[b].x
        const by = isPlucked && b === pluck.nodeIdx ? pluck.cy : NODES[b].y

        const pulse = 0.06 + 0.06 * Math.abs(Math.sin(t * 0.4 + i * 0.3))
        c2d.beginPath()
        c2d.moveTo(ax, ay)
        c2d.lineTo(bx, by)
        c2d.strokeStyle = i % 3 !== 1
          ? `rgba(201,147,58,${pulse})`
          : `rgba(42,107,98,${pulse})`
        c2d.lineWidth = 0.7
        c2d.stroke()
      })

      // ── Signal particles ─────────────────────────────────────────────────
      signals.forEach(sig => {
        sig.phase = (sig.phase + sig.speed * dt) % 1
        const [a, b] = sig.conn
        const isPlucked = pluck.phase !== 'idle'
        const ax = isPlucked && a === pluck.nodeIdx ? pluck.cx : NODES[a].x
        const ay = isPlucked && a === pluck.nodeIdx ? pluck.cy : NODES[a].y
        const bx = isPlucked && b === pluck.nodeIdx ? pluck.cx : NODES[b].x
        const by = isPlucked && b === pluck.nodeIdx ? pluck.cy : NODES[b].y
        const x = ax + (bx - ax) * sig.phase
        const y = ay + (by - ay) * sig.phase
        const fadeAlpha = Math.min(sig.phase, 1 - sig.phase) * 4
        const alpha = Math.min(fadeAlpha, 0.9)

        for (let j = 4; j >= 0; j--) {
          const tp = Math.max(0, sig.phase - j * 0.025)
          const tx = ax + (bx - ax) * tp
          const ty = ay + (by - ay) * tp
          const ta = alpha * ((4 - j) / 4) * 0.4
          c2d.beginPath()
          c2d.arc(tx, ty, 1.2, 0, Math.PI * 2)
          c2d.fillStyle = sig.amber ? `rgba(201,147,58,${ta})` : `rgba(42,107,98,${ta})`
          c2d.fill()
        }
        c2d.beginPath()
        c2d.arc(x, y, 2, 0, Math.PI * 2)
        c2d.fillStyle = sig.amber ? `rgba(201,147,58,${alpha})` : `rgba(42,107,98,${alpha})`
        c2d.fill()
      })

      // ── Nodes ────────────────────────────────────────────────────────────
      NODES.forEach((node, i) => {
        const isPluckedNode = pluck.phase !== 'idle' && i === pluck.nodeIdx
        const nx = isPluckedNode ? pluck.cx : node.x
        const ny = isPluckedNode ? pluck.cy : node.y

        if (isPluckedNode) {
          // Large expanding glow rings during dwell
          if (pluck.phase === 'dwelling') {
            const gp = pluck.glowPulse
            for (let ring = 0; ring < 3; ring++) {
              const rp = ((gp * 0.55 + ring * 0.33) % 1)
              const gr = 8 + rp * 28
              const ga = (1 - rp) * 0.35
              c2d.beginPath()
              c2d.arc(nx, ny, gr, 0, Math.PI * 2)
              c2d.strokeStyle = `rgba(201,147,58,${ga})`
              c2d.lineWidth = 1
              c2d.stroke()
            }
          }
          // Plucked dot — bigger, brighter
          const liftP = pluck.phase === 'lifting'
            ? Math.min(pluck.elapsed / DUR_LIFT, 1)
            : pluck.phase === 'returning'
              ? 1 - Math.min(pluck.elapsed / DUR_RET, 1)
              : 1
          const r = 3 + easeInOut(liftP) * 4
          // Outer glow
          c2d.beginPath()
          c2d.arc(nx, ny, r + 5, 0, Math.PI * 2)
          c2d.fillStyle = `rgba(201,147,58,${0.15 * easeInOut(liftP)})`
          c2d.fill()
          // Core dot
          c2d.beginPath()
          c2d.arc(nx, ny, r, 0, Math.PI * 2)
          c2d.fillStyle = `rgba(201,147,58,${0.6 + 0.35 * easeInOut(liftP)})`
          c2d.fill()
        } else {
          const pulse = 0.5 + 0.35 * Math.abs(Math.sin(t * 1.1 + i * 0.7))
          const r     = 2.2 + 1.2 * Math.abs(Math.sin(t * 0.9 + i * 0.55))
          const amber = i % 3 !== 1
          if (i % 5 === 0) {
            c2d.beginPath()
            c2d.arc(nx, ny, r + 4 + 3 * Math.abs(Math.sin(t * 0.6 + i)), 0, Math.PI * 2)
            c2d.fillStyle = amber ? 'rgba(201,147,58,0.07)' : 'rgba(42,107,98,0.07)'
            c2d.fill()
          }
          c2d.beginPath()
          c2d.arc(nx, ny, r, 0, Math.PI * 2)
          c2d.fillStyle = amber ? `rgba(201,147,58,${pulse})` : `rgba(42,107,98,${pulse})`
          c2d.fill()
        }
      })

      rafRef.current = requestAnimationFrame(draw)
    }

    rafRef.current = requestAnimationFrame(draw)
    return () => cancelAnimationFrame(rafRef.current)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      width={480}
      height={480}
      style={{ display: 'block', width: '100%', height: '100%' }}
    />
  )
}
