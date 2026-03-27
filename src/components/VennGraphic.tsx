'use client'
import { useEffect, useRef } from 'react'

// Equilateral arrangement, centres closer → larger triple intersection
// Side length 84, r=82, centroid at (160, 152)
const CX = 160, CY = 152

// Equilateral triangle with side 84, centroid at (CX, CY)
// h = 84 * sqrt(3)/2 ≈ 72.7
const H = 84 * Math.sqrt(3) / 2
const TOP = { cx: CX,          cy: CY - (2 * H / 3), r: 82 }  // ≈ (160, 103)
const BL  = { cx: CX - 42,     cy: CY + (H / 3),     r: 82 }  // ≈ (118, 176)
const BR  = { cx: CX + 42,     cy: CY + (H / 3),     r: 82 }  // ≈ (202, 176)

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
        c.setAttribute('opacity', String(0.05 + 0.018 * Math.sin(t * 0.45 + ph)))
      })

      borders.forEach((c, i) => {
        const ph  = (i * Math.PI * 2) / 3
        c.setAttribute('r', String(radii[i] + 3 * Math.sin(t * 0.55 + ph)))
        const dir    = i % 2 === 0 ? 1 : -1
        const offset = (t * 5 * dir) % 100
        c.setAttribute('stroke-dashoffset', String(offset))
      })

      rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [])

  // Round values for SVG attributes
  const topCx = Math.round(TOP.cx), topCy = Math.round(TOP.cy)
  const blCx  = Math.round(BL.cx),  blCy  = Math.round(BL.cy)
  const brCx  = Math.round(BR.cx),  brCy  = Math.round(BR.cy)

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 320 272"
      width="100%"
      height="100%"
      aria-hidden
    >
      <defs>
        {/* Static clip paths match circle centres exactly */}
        <clipPath id="vcp-top"><circle cx={topCx} cy={topCy} r={TOP.r} /></clipPath>
        <clipPath id="vcp-bl"> <circle cx={blCx}  cy={blCy}  r={BL.r}  /></clipPath>
      </defs>

      {/* ── Circle fills (breathe) ─────────────────────────── */}
      <circle className="vg-fill" cx={topCx} cy={topCy} r={TOP.r} fill="#C9933A" opacity="0.05" />
      <circle className="vg-fill" cx={blCx}  cy={blCy}  r={BL.r}  fill="#2A6B62" opacity="0.05" />
      <circle className="vg-fill" cx={brCx}  cy={brCy}  r={BR.r}  fill="#A8A49D" opacity="0.05" />

      {/* ── Triple-intersection highlight ──────────────────── */}
      {/* c1 ∩ c2 ∩ c3 via nested clipPath groups */}
      <g clipPath="url(#vcp-top)">
        <g clipPath="url(#vcp-bl)">
          <circle cx={brCx} cy={brCy} r={BR.r} fill="#C9933A" opacity="0.32" />
        </g>
      </g>

      {/* ── Dashed borders (breathe + slow rotate) ─────────── */}
      <circle className="vg-border" cx={topCx} cy={topCy} r={TOP.r}
        fill="none" stroke="#C9933A" strokeWidth="0.9" strokeDasharray="6 4" opacity="0.45" />
      <circle className="vg-border" cx={blCx}  cy={blCy}  r={BL.r}
        fill="none" stroke="#2A6B62" strokeWidth="0.9" strokeDasharray="6 4" opacity="0.4"  />
      <circle className="vg-border" cx={brCx}  cy={brCy}  r={BR.r}
        fill="none" stroke="#A8A49D" strokeWidth="0.9" strokeDasharray="6 4" opacity="0.35" />

      {/* ── SANDIQ — centroid of triple intersection ────────── */}
      <text
        x={CX} y={CY + 2.5}
        textAnchor="middle" dominantBaseline="middle"
        fill="#C9933A"
        fontSize="7.5"
        letterSpacing="2.5"
        opacity="0.9"
        style={{ fontFamily: 'var(--font-dm-mono)' }}
      >
        SANDIQ
      </text>

      {/* ── Outer labels — clearly outside the circles ─────── */}
      {/* Clinical Rigour — above top circle (top edge ≈ y 21) */}
      <text x={CX} y="10"
        textAnchor="middle" fill="#C9933A" fontSize="6" letterSpacing="1.2"
        opacity="0.6" style={{ fontFamily: 'var(--font-dm-mono)' }}>
        CLINICAL RIGOUR
      </text>

      {/* Implementation — below-left (bottom edge ≈ y 258) */}
      <text x="52" y="268"
        textAnchor="middle" fill="#2A6B62" fontSize="6" letterSpacing="1.2"
        opacity="0.6" style={{ fontFamily: 'var(--font-dm-mono)' }}>
        IMPLEMENTATION
      </text>

      {/* Strategic Clarity — below-right */}
      <text x="268" y="268"
        textAnchor="middle" fill="#A8A49D" fontSize="6" letterSpacing="1.2"
        opacity="0.6" style={{ fontFamily: 'var(--font-dm-mono)' }}>
        STRATEGIC CLARITY
      </text>
    </svg>
  )
}
