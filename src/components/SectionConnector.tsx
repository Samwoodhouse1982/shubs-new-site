'use client'
import { useEffect, useRef } from 'react'

// Animated nodes flowing along a sine-wave path — visually bridges sections.
const NODE_COUNT = 6
const WAVE_AMP   = 22   // px amplitude
const WAVE_LEN   = 520  // px wavelength

interface WaveNode {
  x: number
  speed: number    // px / second
  amber: boolean
}

export default function SectionConnector() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const rafRef    = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const cvs: HTMLCanvasElement        = canvas
    const c2d: CanvasRenderingContext2D = ctx

    let W = 0, H = 0, lastTs = 0

    function resize() {
      W = cvs.offsetWidth  || 1200
      H = cvs.offsetHeight || 72
      cvs.width  = W
      cvs.height = H
    }
    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(cvs)

    const nodes: WaveNode[] = Array.from({ length: NODE_COUNT }, (_, i) => ({
      x:     (W / NODE_COUNT) * i - 20,
      speed: 38 + i * 9,
      amber: i % 3 !== 1,
    }))

    function waveY(x: number, t: number): number {
      return H / 2 + WAVE_AMP * Math.sin((x / WAVE_LEN) * Math.PI * 2 - t * 1.0)
    }

    function draw(ts: number) {
      const dt = lastTs ? (ts - lastTs) / 1000 : 0
      lastTs = ts
      const t  = ts / 1000

      nodes.forEach(n => { n.x = (n.x + n.speed * dt + W + 60) % (W + 60) - 30 })

      c2d.clearRect(0, 0, W, H)

      // Faint wave guide
      c2d.beginPath()
      for (let px = 0; px <= W; px += 4) {
        const y = waveY(px, t)
        px === 0 ? c2d.moveTo(px, y) : c2d.lineTo(px, y)
      }
      c2d.strokeStyle = 'rgba(0,85,255,0.12)'
      c2d.lineWidth   = 1
      c2d.stroke()

      // Nodes + trails
      nodes.forEach((node, i) => {
        const TRAIL = 14
        for (let j = TRAIL; j >= 0; j--) {
          const tx    = node.x - j * node.speed * 0.016
          const ty    = waveY(tx, t)
          const alpha = ((TRAIL - j) / TRAIL) * 0.4
          const r     = j === 0 ? 3 : 1.2
          c2d.beginPath()
          c2d.arc(tx, ty, r, 0, Math.PI * 2)
          c2d.fillStyle = node.amber
            ? `rgba(0,85,255,${j === 0 ? 0.9 : alpha})`
            : `rgba(240,48,106,${j === 0 ? 0.9 : alpha})`
          c2d.fill()
        }
        void i // suppress lint
      })

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
      className="w-full pointer-events-none"
      style={{ height: 72, display: 'block' }}
    />
  )
}
