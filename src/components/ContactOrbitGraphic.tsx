'use client'
import { useEffect, useRef } from 'react'

const SIZE  = 440
const CX    = SIZE / 2
const CY    = SIZE / 2
const RX    = 124
const RY    = 72
const SPEED = 0.45
const TRAIL = 28

// Number of spark particles / lines radiating from the flash centre
const SPARK_COUNT  = 8
const FLASH_DUR    = 0.65  // seconds for flash to fully decay

export default function ContactOrbitGraphic() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const rafRef    = useRef<number>(0)
  const t0        = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const cvs: HTMLCanvasElement        = canvas
    const c2d: CanvasRenderingContext2D = ctx

    cvs.width  = SIZE
    cvs.height = SIZE

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

    // Flash state
    let flashAge = 1.0   // 1 = fully decayed, 0 = just triggered
    let prevDx   = RX    // previous x-offset of dotA from centre (starts non-zero)
    let lastTs   = 0

    function drawFlash(f: number, amberRgb: string, tealRgb: string) {
      // f: 0 = triggered, 1 = fully gone
      const intensity = 1 - f

      // ── Core bright burst (fast: only first 30%) ───────────────────────
      if (f < 0.3) {
        const cf = f / 0.3
        const cr = 2 + (1 - cf) * 12
        c2d.beginPath()
        c2d.arc(CX, CY, cr, 0, Math.PI * 2)
        c2d.fillStyle = `rgba(${amberRgb},${(1 - cf) * 0.95})`
        c2d.fill()
        // Teal inner core overlapping
        c2d.beginPath()
        c2d.arc(CX, CY, cr * 0.55, 0, Math.PI * 2)
        c2d.fillStyle = `rgba(${tealRgb},${(1 - cf) * 0.7})`
        c2d.fill()
      }

      // ── Expanding amber ring ────────────────────────────────────────────
      const ringR1 = 4 + f * 42
      c2d.beginPath()
      c2d.arc(CX, CY, ringR1, 0, Math.PI * 2)
      c2d.strokeStyle = `rgba(${amberRgb},${intensity * 0.85})`
      c2d.lineWidth   = Math.max(0.3, 2.5 * intensity)
      c2d.stroke()

      // ── Expanding teal ring (slightly delayed) ──────────────────────────
      const f2 = Math.max(0, (f - 0.12) / 0.88)
      if (f2 < 1) {
        const i2 = 1 - f2
        const ringR2 = 4 + f2 * 34
        c2d.beginPath()
        c2d.arc(CX, CY, ringR2, 0, Math.PI * 2)
        c2d.strokeStyle = `rgba(${tealRgb},${i2 * 0.65})`
        c2d.lineWidth   = Math.max(0.3, 1.8 * i2)
        c2d.stroke()
      }

      // ── Spark particles — dots shooting outward ─────────────────────────
      for (let s = 0; s < SPARK_COUNT; s++) {
        const angle = (s / SPARK_COUNT) * Math.PI * 2
        const dist  = 5 + f * 36
        const sx    = CX + Math.cos(angle) * dist
        const sy    = CY + Math.sin(angle) * dist
        const sr    = Math.max(0, 2.2 * intensity)
        c2d.beginPath()
        c2d.arc(sx, sy, sr, 0, Math.PI * 2)
        c2d.fillStyle = s % 2 === 0
          ? `rgba(${amberRgb},${intensity * 0.95})`
          : `rgba(${tealRgb},${intensity * 0.9})`
        c2d.fill()
      }

      // ── Spark lines — short streaks radiating outward, offset from dots ──
      for (let s = 0; s < SPARK_COUNT; s++) {
        const angle    = (s / SPARK_COUNT) * Math.PI * 2 + Math.PI / SPARK_COUNT
        // Inner end moves outward, line shrinks as it goes — like a trailing spark
        const r0 = 4  + f * 14
        const r1 = r0 + Math.max(0, (1 - f * 1.4) * 12)
        c2d.beginPath()
        c2d.moveTo(CX + Math.cos(angle) * r0, CY + Math.sin(angle) * r0)
        c2d.lineTo(CX + Math.cos(angle) * r1, CY + Math.sin(angle) * r1)
        c2d.strokeStyle = s % 2 === 0
          ? `rgba(${tealRgb},${intensity * 0.7})`
          : `rgba(${amberRgb},${intensity * 0.7})`
        c2d.lineWidth   = Math.max(0.3, 1.4 * intensity)
        c2d.lineCap     = 'round'
        c2d.stroke()
      }
    }

    function tick(ts: number) {
      if (!t0.current) t0.current = ts
      const t  = (ts - t0.current) / 1000 * SPEED
      const dt = lastTs ? (ts - lastTs) / 1000 : 0
      lastTs = ts

      const { amberRgb, tealRgb, amber, teal } = colors

      const pA = pos(t)
      const pB = pos(t + Math.PI)

      // Detect centre crossing: sign change on dotA's x-offset from centre
      // pA[0] - CX = RX*sin(t) — crosses zero every π radians
      const dx = pA[0] - CX
      if (prevDx * dx < 0) flashAge = 0   // zero crossing → trigger flash
      prevDx = dx

      // Advance flash timer
      flashAge = Math.min(flashAge + dt / FLASH_DUR, 1)

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
      c2d.strokeStyle = `rgba(${amberRgb},0.4)`
      c2d.lineWidth = 2
      c2d.stroke()

      // Trail — A (amber)
      histA.forEach(([px, py], i) => {
        const alpha = 0.25 + (i / TRAIL) * 0.75
        const r     = 1.5 + (i / TRAIL) * 2.5
        c2d.beginPath()
        c2d.arc(px, py, r, 0, Math.PI * 2)
        c2d.fillStyle = `rgba(${amberRgb},${alpha})`
        c2d.fill()
      })

      // Trail — B (teal)
      histB.forEach(([px, py], i) => {
        const alpha = 0.25 + (i / TRAIL) * 0.75
        const r     = 1.5 + (i / TRAIL) * 2.5
        c2d.beginPath()
        c2d.arc(px, py, r, 0, Math.PI * 2)
        c2d.fillStyle = `rgba(${tealRgb},${alpha})`
        c2d.fill()
      })

      // Flash / spark — drawn before leading dots so dots sit on top
      if (flashAge < 1) {
        drawFlash(flashAge, amberRgb, tealRgb)
      }

      // Leading dot — A (amber)
      c2d.beginPath()
      c2d.arc(pA[0], pA[1], 5, 0, Math.PI * 2)
      c2d.fillStyle = amber
      c2d.globalAlpha = 0.9
      c2d.fill()
      c2d.globalAlpha = 1

      // Leading dot — B (teal)
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
      className="pointer-events-none"
      aria-hidden
      style={{ width: SIZE, height: SIZE, display: 'block' }}
    />
  )
}
