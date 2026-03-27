'use client'
import { useEffect, useRef } from 'react'

// Geometry — viewBox 0 0 320 268
// Circles large enough to overlap clearly; labels placed outside each circle
const TOP = { cx: 160, cy: 100, r: 72 }  // amber — Clinical Rigour
const BL  = { cx: 112, cy: 176, r: 72 }  // teal  — Implementation
const BR  = { cx: 208, cy: 176, r: 72 }  // stone — Strategic Clarity

export default function VennGraphic() {
  const svgRef = useRef<SVGSVGElement>(null)
  const rafRef = useRef<number>(0)
  const t0     = useRef<number>(0)

  useEffect(() => {
    const svg = svgRef.current
    if (!svg) return

    const fills   = Array.from(svg.querySelectorAll<SVGCircleElement>('.vg-fill'))
    const borders = Array.from(svg.querySelectorAll<SVGCircleElement>('.vg-border'))
    const radii   = [TOP.r, BL.r, BR.r]

    function tick(ts: number) {
      if (!t0.current) t0.current = ts
      const t = (ts - t0.current) / 1000

      fills.forEach((c, i) => {
        const ph = (i * Math.PI * 2) / 3
        c.setAttribute('r',       String(radii[i] + 3 * Math.sin(t * 0.55 + ph)))
        c.setAttribute('opacity', String(0.05 + 0.02 * Math.sin(t * 0.45 + ph)))
      })

      borders.forEach((c, i) => {
        const ph  = (i * Math.PI * 2) / 3
        c.setAttribute('r', String(radii[i] + 3 * Math.sin(t * 0.55 + ph)))
        // Slow rotating dashes — much gentler than before
        const dir    = i % 2 === 0 ? 1 : -1
        const offset = (t * 5 * dir) % 100
        c.setAttribute('stroke-dashoffset', String(offset))
      })

      rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [])

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 320 268"
      width="100%"
      height="100%"
      aria-hidden
    >
      <defs>
        {/* Static clip paths for triple-intersection fill */}
        <clipPath id="vcp-top"><circle cx={TOP.cx} cy={TOP.cy} r={TOP.r} /></clipPath>
        <clipPath id="vcp-bl"> <circle cx={BL.cx}  cy={BL.cy}  r={BL.r}  /></clipPath>
      </defs>

      {/* ── Circle fills (breathe) ─────────────────────────── */}
      <circle className="vg-fill" cx={TOP.cx} cy={TOP.cy} r={TOP.r} fill="#C9933A" opacity="0.05" />
      <circle className="vg-fill" cx={BL.cx}  cy={BL.cy}  r={BL.r}  fill="#2A6B62" opacity="0.05" />
      <circle className="vg-fill" cx={BR.cx}  cy={BR.cy}  r={BR.r}  fill="#A8A49D" opacity="0.05" />

      {/* ── Triple-intersection highlight ──────────────────── */}
      {/* Nested clip groups = circle1 ∩ circle2 ∩ circle3 */}
      <g clipPath="url(#vcp-top)">
        <g clipPath="url(#vcp-bl)">
          <circle cx={BR.cx} cy={BR.cy} r={BR.r} fill="#C9933A" opacity="0.28" />
        </g>
      </g>

      {/* ── Dashed borders (breathe + slow rotate) ─────────── */}
      <circle className="vg-border" cx={TOP.cx} cy={TOP.cy} r={TOP.r}
        fill="none" stroke="#C9933A" strokeWidth="0.9" strokeDasharray="6 4" opacity="0.45" />
      <circle className="vg-border" cx={BL.cx}  cy={BL.cy}  r={BL.r}
        fill="none" stroke="#2A6B62" strokeWidth="0.9" strokeDasharray="6 4" opacity="0.4"  />
      <circle className="vg-border" cx={BR.cx}  cy={BR.cy}  r={BR.r}
        fill="none" stroke="#A8A49D" strokeWidth="0.9" strokeDasharray="6 4" opacity="0.35" />

      {/* ── SANDIQ — centre of triple intersection ─────────── */}
      <text
        x="160" y="148"
        textAnchor="middle"
        fill="#C9933A"
        fontSize="7"
        letterSpacing="2"
        opacity="0.85"
        style={{ fontFamily: 'var(--font-dm-mono)' }}
      >
        SANDIQ
      </text>

      {/* ── Outer labels — clearly outside the circles ─────── */}
      {/* Clinical Rigour — above top circle (top edge ≈ y 28) */}
      <text x="160" y="10"
        textAnchor="middle" fill="#C9933A" fontSize="6" letterSpacing="1"
        opacity="0.55" style={{ fontFamily: 'var(--font-dm-mono)' }}>
        CLINICAL RIGOUR
      </text>

      {/* Implementation — below-left of BL circle (bottom ≈ y 248) */}
      <text x="50" y="262"
        textAnchor="middle" fill="#2A6B62" fontSize="6" letterSpacing="1"
        opacity="0.55" style={{ fontFamily: 'var(--font-dm-mono)' }}>
        IMPLEMENTATION
      </text>

      {/* Strategic Clarity — below-right of BR circle */}
      <text x="270" y="262"
        textAnchor="middle" fill="#A8A49D" fontSize="6" letterSpacing="1"
        opacity="0.55" style={{ fontFamily: 'var(--font-dm-mono)' }}>
        STRATEGIC CLARITY
      </text>
    </svg>
  )
}
