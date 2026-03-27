'use client'
import { useEffect, useRef } from 'react'

export default function FlatlineGraphic() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const rafRef   = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Capture non-null references for use inside closures
    const cvs: HTMLCanvasElement = canvas
    const c2d: CanvasRenderingContext2D = ctx

    let W = 0, H = 0, offset = 0, lastTs = 0

    function resize() {
      W = cvs.offsetWidth  || 800
      H = cvs.offsetHeight || 60
      cvs.width  = W
      cvs.height = H
    }
    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(cvs)

    const CYCLE = 300 // px per heartbeat
    const SPEED  = 55  // px / second

    // Returns y-coordinate on canvas for a given x position in the scrolling wave
    function sample(px: number): number {
      const mid = H / 2
      const c   = ((px % CYCLE) + CYCLE) % CYCLE / CYCLE // 0–1 within cycle

      // Flat baseline
      if (c < 0.28) return mid
      // P wave — gentle bump
      if (c < 0.34) {
        const p = (c - 0.28) / 0.06
        return mid - Math.sin(p * Math.PI) * H * 0.10
      }
      // PR segment — flat
      if (c < 0.38) return mid
      // Q — small dip
      if (c < 0.41) {
        const p = (c - 0.38) / 0.03
        return mid + Math.sin(p * Math.PI) * H * 0.08
      }
      // R — sharp spike up
      if (c < 0.445) {
        const p = (c - 0.41) / 0.035
        return mid - Math.sin(p * Math.PI) * H * 0.48
      }
      // S — overshoot below baseline
      if (c < 0.47) {
        const p = (c - 0.445) / 0.025
        return mid + Math.sin(p * Math.PI) * H * 0.14
      }
      // ST — slightly elevated
      if (c < 0.54) return mid - H * 0.03
      // T wave — smooth bump
      if (c < 0.70) {
        const p = (c - 0.54) / 0.16
        return mid - Math.sin(p * Math.PI) * H * 0.18
      }
      // TP flat
      return mid
    }

    function draw(ts: number) {
      if (lastTs) offset += SPEED * (ts - lastTs) / 1000
      lastTs = ts

      c2d.clearRect(0, 0, W, H)
      c2d.strokeStyle = '#C9933A'
      c2d.lineWidth   = 1.5
      c2d.lineJoin    = 'round'
      c2d.beginPath()

      for (let px = 0; px <= W; px += 2) {
        const y = sample(px + offset)
        px === 0 ? c2d.moveTo(px, y) : c2d.lineTo(px, y)
      }
      c2d.stroke()

      rafRef.current = requestAnimationFrame(draw)
    }

    rafRef.current = requestAnimationFrame(draw)
    return () => {
      cancelAnimationFrame(rafRef.current)
      ro.unobserve(cvs)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.18 }}
    />
  )
}
