'use client'
import { useEffect, useRef } from 'react'

// Two dots tracing a Lissajous figure-8, representing two parties in conversation.
// A = amber,  B = teal — always on opposite sides of the loop.

const SIZE = 320
const CX   = SIZE / 2
const CY    = SIZE / 2
const RX    = 90   // horizontal radius of the figure-8
const RY    = 52   // vertical radius
const SPEED = 0.45 // radians / second
const TRAIL = 28   // number of trailing positions to draw

export default function ContactOrbitGraphic() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const rafRef    = useRef<number>(0)
  const t0        = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const cvs: HTMLCanvasElement         = canvas
    const c2d: CanvasRenderingContext2D  = ctx

    cvs.width  = SIZE
    cvs.height = SIZE

    // Lissajous figure-8: x = RX*sin(t),  y = RY*sin(2t)
    function pos(t: number): [number, number] {
      return [CX + RX * Math.sin(t), CY + RY * Math.sin(2 * t)]
    }

    const histA: [number, number][] = []
    const histB: [number, number][] = []

    function tick(ts: number) {
      if (!t0.current) t0.current = ts
      const t = (ts - t0.current) / 1000 * SPEED

      const pA = pos(t)
      const pB = pos(t + Math.PI) // opposite phase

      histA.push(pA)
      histB.push(pB)
      if (histA.length > TRAIL) histA.shift()
      if (histB.length > TRAIL) histB.shift()

      c2d.clearRect(0, 0, SIZE, SIZE)

      // Ghost path of the figure-8
      c2d.beginPath()
      for (let s = 0; s <= 100; s++) {
        const [px, py] = pos((s / 100) * Math.PI * 2)
        s === 0 ? c2d.moveTo(px, py) : c2d.lineTo(px, py)
      }
      c2d.closePath()
      c2d.strokeStyle = 'rgba(201,147,58,0.07)'
      c2d.lineWidth = 1
      c2d.stroke()

      // Trail — A (amber)
      histA.forEach(([px, py], i) => {
        const alpha = (i / TRAIL) * 0.45
        const r     = 1.5 + (i / TRAIL) * 2
        c2d.beginPath()
        c2d.arc(px, py, r, 0, Math.PI * 2)
        c2d.fillStyle = `rgba(201,147,58,${alpha})`
        c2d.fill()
      })

      // Trail — B (teal)
      histB.forEach(([px, py], i) => {
        const alpha = (i / TRAIL) * 0.45
        const r     = 1.5 + (i / TRAIL) * 2
        c2d.beginPath()
        c2d.arc(px, py, r, 0, Math.PI * 2)
        c2d.fillStyle = `rgba(42,107,98,${alpha})`
        c2d.fill()
      })

      // Leading dot — A
      c2d.beginPath()
      c2d.arc(pA[0], pA[1], 5, 0, Math.PI * 2)
      c2d.fillStyle = '#C9933A'
      c2d.globalAlpha = 0.9
      c2d.fill()
      c2d.globalAlpha = 1

      // Leading dot — B
      c2d.beginPath()
      c2d.arc(pB[0], pB[1], 5, 0, Math.PI * 2)
      c2d.fillStyle = '#2A6B62'
      c2d.globalAlpha = 0.9
      c2d.fill()
      c2d.globalAlpha = 1

      rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      width={SIZE}
      height={SIZE}
      className="pointer-events-none opacity-70"
      style={{ width: SIZE, height: SIZE, display: 'block' }}
    />
  )
}
