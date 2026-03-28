'use client'
import { useEffect, useRef } from 'react'

const SIZE = 440
const CX   = SIZE / 2
const CY    = SIZE / 2
const RX    = 124
const RY    = 72
const SPEED = 0.45
const TRAIL = 28

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

    // Read theme colors; update when data-theme changes
    function readColors() {
      const style = getComputedStyle(document.documentElement)
      return {
        amberRgb: style.getPropertyValue('--sq-amber-rgb').trim() || '201,147,58',
        tealRgb:  style.getPropertyValue('--sq-teal-rgb').trim()  || '42,107,98',
        amber:    style.getPropertyValue('--sq-amber').trim()     || '#C9933A',
        teal:     style.getPropertyValue('--sq-teal').trim()      || '#2A6B62',
      }
    }
    let colors = readColors()
    const mo = new MutationObserver(() => { colors = readColors() })
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })

    function pos(t: number): [number, number] {
      return [CX + RX * Math.sin(t), CY + RY * Math.sin(2 * t)]
    }

    const histA: [number, number][] = []
    const histB: [number, number][] = []

    function tick(ts: number) {
      if (!t0.current) t0.current = ts
      const t = (ts - t0.current) / 1000 * SPEED

      const { amberRgb, tealRgb, amber, teal } = colors

      const pA = pos(t)
      const pB = pos(t + Math.PI)

      histA.push(pA)
      histB.push(pB)
      if (histA.length > TRAIL) histA.shift()
      if (histB.length > TRAIL) histB.shift()

      c2d.clearRect(0, 0, SIZE, SIZE)

      // Ghost path
      c2d.beginPath()
      for (let s = 0; s <= 100; s++) {
        const [px, py] = pos((s / 100) * Math.PI * 2)
        s === 0 ? c2d.moveTo(px, py) : c2d.lineTo(px, py)
      }
      c2d.closePath()
      c2d.strokeStyle = `rgba(${amberRgb},0.07)`
      c2d.lineWidth = 1
      c2d.stroke()

      // Trail — A (amber)
      histA.forEach(([px, py], i) => {
        const alpha = (i / TRAIL) * 0.45
        const r     = 1.5 + (i / TRAIL) * 2
        c2d.beginPath()
        c2d.arc(px, py, r, 0, Math.PI * 2)
        c2d.fillStyle = `rgba(${amberRgb},${alpha})`
        c2d.fill()
      })

      // Trail — B (teal)
      histB.forEach(([px, py], i) => {
        const alpha = (i / TRAIL) * 0.45
        const r     = 1.5 + (i / TRAIL) * 2
        c2d.beginPath()
        c2d.arc(px, py, r, 0, Math.PI * 2)
        c2d.fillStyle = `rgba(${tealRgb},${alpha})`
        c2d.fill()
      })

      // Leading dot — A
      c2d.beginPath()
      c2d.arc(pA[0], pA[1], 5, 0, Math.PI * 2)
      c2d.fillStyle = amber
      c2d.globalAlpha = 0.9
      c2d.fill()
      c2d.globalAlpha = 1

      // Leading dot — B
      c2d.beginPath()
      c2d.arc(pB[0], pB[1], 5, 0, Math.PI * 2)
      c2d.fillStyle = teal
      c2d.globalAlpha = 0.9
      c2d.fill()
      c2d.globalAlpha = 1

      rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => {
      cancelAnimationFrame(rafRef.current)
      mo.disconnect()
    }
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
