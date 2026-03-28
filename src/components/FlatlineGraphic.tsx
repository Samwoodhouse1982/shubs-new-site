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

    const cvs: HTMLCanvasElement        = canvas
    const c2d: CanvasRenderingContext2D = ctx

    let W = 0, H = 0
    let scrollOffset = 0

    function resize() {
      W = cvs.offsetWidth  || 800
      H = cvs.offsetHeight || 60
      cvs.width  = W
      cvs.height = H
    }
    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(cvs)

    function onScroll() {
      scrollOffset = window.scrollY * 0.5
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    // Read theme color; update when data-theme changes
    let amber = getComputedStyle(document.documentElement).getPropertyValue('--sq-amber').trim()
    const mo = new MutationObserver(() => {
      amber = getComputedStyle(document.documentElement).getPropertyValue('--sq-amber').trim()
    })
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })

    const CYCLE = 300

    function sample(px: number): number {
      const mid = H / 2
      const c   = ((px % CYCLE) + CYCLE) % CYCLE / CYCLE

      if (c < 0.28) return mid
      if (c < 0.34) {
        const p = (c - 0.28) / 0.06
        return mid - Math.sin(p * Math.PI) * H * 0.10
      }
      if (c < 0.38) return mid
      if (c < 0.41) {
        const p = (c - 0.38) / 0.03
        return mid + Math.sin(p * Math.PI) * H * 0.08
      }
      if (c < 0.445) {
        const p = (c - 0.41) / 0.035
        return mid - Math.sin(p * Math.PI) * H * 0.48
      }
      if (c < 0.47) {
        const p = (c - 0.445) / 0.025
        return mid + Math.sin(p * Math.PI) * H * 0.14
      }
      if (c < 0.54) return mid - H * 0.03
      if (c < 0.70) {
        const p = (c - 0.54) / 0.16
        return mid - Math.sin(p * Math.PI) * H * 0.18
      }
      return mid
    }

    function draw() {
      c2d.clearRect(0, 0, W, H)
      c2d.strokeStyle = amber || '#C9933A'
      c2d.lineWidth   = 1.2
      c2d.lineJoin    = 'round'
      c2d.globalAlpha = 1
      c2d.beginPath()

      for (let px = 0; px <= W; px += 2) {
        const y = sample(px + scrollOffset)
        px === 0 ? c2d.moveTo(px, y) : c2d.lineTo(px, y)
      }
      c2d.stroke()

      rafRef.current = requestAnimationFrame(draw)
    }

    rafRef.current = requestAnimationFrame(draw)
    return () => {
      cancelAnimationFrame(rafRef.current)
      ro.unobserve(cvs)
      mo.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden
      style={{ opacity: 0.07 }}
    />
  )
}
