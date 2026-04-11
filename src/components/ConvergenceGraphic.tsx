'use client';

import { useEffect, useRef } from 'react';

// ── Geometry ───────────────────────────────────────────────────────────────
// Equilateral triangle CENTRED at (200, 180) with circumradius 18px.
// V0 = top, V1 = bottom-right, V2 = bottom-left.
const R  = 18;
const CX = 200, CY = 180;
const SIN60 = Math.sin(Math.PI / 3); // √3/2 ≈ 0.866

const VERTS: [number, number][] = [
  [CX,                CY - R      ],   // top
  [CX + R * SIN60,    CY + R / 2  ],   // bottom-right
  [CX - R * SIN60,    CY + R / 2  ],   // bottom-left
];

// Fixed origin anchor points
const ORIGINS: [number, number][] = [
  [44,  52 ],   // amber — top-left
  [44,  308],   // teal  — bottom-left
  [364, 180],   // ink   — right
];

// Offsets from midpoint(origin, endpoint) that reproduce original control pts
// when endpoint is at (200, 180):
//   pathA: midpt (122,116) + (-4,-16) → (118,100) ✓
//   pathB: midpt (122,244) + (-4, 16) → (118,260) ✓
//   pathC: midpt (282,180) + (10, -8) → (292,172) ✓
const CTRL_OFFSETS: [number, number][] = [
  [-4, -16],
  [-4,  16],
  [10,  -8],
];

const PERIOD      = 7000;  // ms per full triangle loop
const RAMP_MS     = 900;   // ms to ramp from centre to full triangle amplitude

function easeInOut(t: number) {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}

function trianglePoint(elapsed: number): [number, number] {
  const t    = ((elapsed % PERIOD) / PERIOD) * 3;
  const seg  = Math.floor(t) % 3;
  const frac = easeInOut(t - Math.floor(t));
  const [ax, ay] = VERTS[seg];
  const [bx, by] = VERTS[(seg + 1) % 3];
  return [ax + (bx - ax) * frac, ay + (by - ay) * frac];
}

function buildD(i: number, ex: number, ey: number): string {
  const [ox, oy]   = ORIGINS[i];
  const [ocx, ocy] = CTRL_OFFSETS[i];
  const mx = (ox + ex) / 2 + ocx;
  const my = (oy + ey) / 2 + ocy;
  return `M ${ox},${oy} Q ${mx},${my} ${ex},${ey}`;
}

// ── Component ──────────────────────────────────────────────────────────────
export default function ConvergenceGraphic() {
  const pathA     = useRef<SVGPathElement>(null);
  const pathB     = useRef<SVGPathElement>(null);
  const pathC     = useRef<SVGPathElement>(null);
  const wpA       = useRef<SVGCircleElement>(null);
  const wpB       = useRef<SVGCircleElement>(null);
  const wpC       = useRef<SVGCircleElement>(null);
  const centreGrp = useRef<SVGGElement>(null);
  const rafRef    = useRef<number>(0);

  useEffect(() => {
    const mainPaths = [pathA.current, pathB.current, pathC.current];
    const waypoints = [wpA.current,   wpB.current,   wpC.current];

    // ── Phase 1: draw-in via strokeDashoffset ────────────────────────────
    mainPaths.forEach((el, i) => {
      if (!el) return;
      const len = el.getTotalLength();
      el.style.strokeDasharray  = String(len);
      el.style.strokeDashoffset = String(len);
      setTimeout(() => {
        el.style.transition       = 'stroke-dashoffset 1s cubic-bezier(0.4, 0, 0.2, 1)';
        el.style.strokeDashoffset = '0';
      }, i * 260);
    });

    // Fade in centre dot after last line finishes
    const grp = centreGrp.current;
    if (grp) {
      grp.style.opacity = '0';
      setTimeout(() => {
        grp.style.transition = 'opacity 0.5s ease';
        grp.style.opacity    = '1';
      }, 1560);
    }

    // ── Phase 2: triangle motion ─────────────────────────────────────────
    let animStart: number | null = null;

    function tick(ts: number) {
      if (!animStart) animStart = ts;
      const elapsed = ts - animStart;

      // Ramp amplitude from 0 → full over RAMP_MS so there's no jump
      const ramp = Math.min(elapsed / RAMP_MS, 1);
      const [tx, ty] = trianglePoint(elapsed);
      const ex = CX + (tx - CX) * ramp;
      const ey = CY + (ty - CY) * ramp;

      mainPaths.forEach((el, i) => {
        el?.setAttribute('d', buildD(i, ex, ey));
      });

      waypoints.forEach((el, i) => {
        if (!el) return;
        const [ox, oy]   = ORIGINS[i];
        const [ocx, ocy] = CTRL_OFFSETS[i];
        el.setAttribute('cx', String((ox + ex) / 2 + ocx));
        el.setAttribute('cy', String((oy + ey) / 2 + ocy));
      });

      if (grp) {
        grp.setAttribute('transform', `translate(${ex - CX}, ${ey - CY})`);
      }

      rafRef.current = requestAnimationFrame(tick);
    }

    // Start motion after draw-in is safely complete
    const motionTimer = setTimeout(() => {
      mainPaths.forEach((el) => {
        if (!el) return;
        el.style.transition       = '';
        el.style.strokeDasharray  = '';
        el.style.strokeDashoffset = '';
      });
      rafRef.current = requestAnimationFrame(tick);
    }, 2100);

    return () => {
      clearTimeout(motionTimer);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const dA0 = buildD(0, CX, CY);
  const dB0 = buildD(1, CX, CY);
  const dC0 = buildD(2, CX, CY);

  return (
    <>
      <style>{`
        @keyframes convPulse {
          0%   { r: 6;  opacity: 0.55; }
          100% { r: 50; opacity: 0;    }
        }
        @keyframes convPulse2 {
          0%   { r: 6;  opacity: 0.3;  }
          100% { r: 72; opacity: 0;    }
        }
        .conv-p1 { animation: convPulse  2.6s ease-out infinite; }
        .conv-p2 { animation: convPulse2 2.6s ease-out 1.3s infinite; }

        @keyframes origGlow {
          0%, 100% { opacity: 0.12; }
          50%       { opacity: 0.28; }
        }
        .orig-glow   { animation: origGlow 3.2s ease-in-out infinite; }
        .orig-glow-b { animation: origGlow 3.2s ease-in-out 1.1s infinite; }
        .orig-glow-c { animation: origGlow 3.2s ease-in-out 2.1s infinite; }

        @keyframes twinkle {
          0%, 100% { opacity: var(--base-op, 0.10); }
          50%       { opacity: var(--peak-op, 0.28); }
        }
        .star { animation: twinkle var(--dur, 4s) ease-in-out var(--delay, 0s) infinite; }
      `}</style>

      <svg viewBox="0 0 400 360" width="100%" height="100%" fill="none" aria-hidden>
        <defs>
          <radialGradient id="cGlowA" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--sq-amber)" stopOpacity="0.28" />
            <stop offset="100%" stopColor="var(--sq-amber)" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="cGlowB" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--sq-teal)" stopOpacity="0.22" />
            <stop offset="100%" stopColor="var(--sq-teal)" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="cGlowC" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--sq-amber)" stopOpacity="0.14" />
            <stop offset="100%" stopColor="var(--sq-amber)" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="cGlowCentre" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--sq-amber)" stopOpacity="0.20" />
            <stop offset="100%" stopColor="var(--sq-amber)" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* ── Star field ── */}
        {([
          { cx:  28, cy:  18, r: 1.0, dur: '5.1s', delay: '0.0s', base: 0.10, peak: 0.30 },
          { cx:  80, cy:  90, r: 0.8, dur: '4.3s', delay: '1.2s', base: 0.08, peak: 0.22 },
          { cx: 155, cy:  28, r: 1.2, dur: '6.0s', delay: '0.6s', base: 0.12, peak: 0.35 },
          { cx: 240, cy:  14, r: 0.7, dur: '3.8s', delay: '2.1s', base: 0.07, peak: 0.20 },
          { cx: 320, cy:  50, r: 1.0, dur: '5.4s', delay: '0.3s', base: 0.10, peak: 0.28 },
          { cx: 375, cy: 110, r: 0.8, dur: '4.7s', delay: '1.7s', base: 0.08, peak: 0.24 },
          { cx: 385, cy: 260, r: 1.1, dur: '5.9s', delay: '0.9s', base: 0.11, peak: 0.30 },
          { cx: 330, cy: 320, r: 0.7, dur: '4.1s', delay: '2.4s', base: 0.07, peak: 0.18 },
          { cx: 210, cy: 340, r: 1.0, dur: '3.6s', delay: '1.5s', base: 0.09, peak: 0.26 },
          { cx: 110, cy: 335, r: 0.8, dur: '5.2s', delay: '0.7s', base: 0.08, peak: 0.22 },
          { cx:  18, cy: 240, r: 1.2, dur: '4.8s', delay: '2.0s', base: 0.12, peak: 0.32 },
          { cx:  60, cy: 170, r: 0.7, dur: '6.2s', delay: '1.1s', base: 0.06, peak: 0.18 },
          { cx: 170, cy: 120, r: 0.9, dur: '4.5s', delay: '3.0s', base: 0.08, peak: 0.24 },
          { cx: 270, cy: 100, r: 0.8, dur: '5.7s', delay: '0.4s', base: 0.08, peak: 0.20 },
          { cx: 350, cy: 200, r: 1.0, dur: '3.9s', delay: '1.8s', base: 0.09, peak: 0.26 },
          { cx: 140, cy: 200, r: 0.6, dur: '5.5s', delay: '2.7s', base: 0.06, peak: 0.16 },
          { cx: 260, cy: 290, r: 0.9, dur: '4.2s', delay: '1.3s', base: 0.08, peak: 0.22 },
          { cx:  95, cy: 260, r: 0.7, dur: '6.5s', delay: '0.8s', base: 0.06, peak: 0.18 },
        ] as const).map((s, i) => (
          <circle
            key={i}
            cx={s.cx} cy={s.cy} r={s.r}
            fill="var(--sq-amber)"
            className="star"
            style={{
              '--dur':     s.dur,
              '--delay':   s.delay,
              '--base-op': String(s.base),
              '--peak-op': String(s.peak),
            } as React.CSSProperties}
          />
        ))}

        {/* ── Breathing origin halos ── */}
        <circle cx="44"  cy="52"  r="44" fill="url(#cGlowA)" className="orig-glow"   />
        <circle cx="44"  cy="308" r="44" fill="url(#cGlowB)" className="orig-glow-b" />
        <circle cx="364" cy="180" r="44" fill="url(#cGlowC)" className="orig-glow-c" />

        {/* ── Animated paths ── */}
        <path ref={pathA} d={dA0} stroke="var(--sq-amber)" strokeWidth="1.5" strokeLinecap="round" opacity="0.88" />
        <path ref={pathB} d={dB0} stroke="var(--sq-teal)"  strokeWidth="1.5" strokeLinecap="round" opacity="0.72" />
        <path ref={pathC} d={dC0} stroke="var(--sq-ink)"   strokeWidth="1.5" strokeLinecap="round" opacity="0.32" />

        {/* ── Fixed origin nodes ── */}
        <circle cx="44"  cy="52"  r="3.5" fill="var(--sq-amber)" opacity="0.9" />
        <circle cx="44"  cy="308" r="3.5" fill="var(--sq-teal)"  opacity="0.8" />
        <circle cx="364" cy="180" r="3.5" fill="var(--sq-ink)"   opacity="0.4" />

        {/* ── Midpoint waypoint dots ── */}
        <circle ref={wpA} cx="118" cy="100" r="2" fill="var(--sq-amber)" opacity="0.45" />
        <circle ref={wpB} cx="118" cy="260" r="2" fill="var(--sq-teal)"  opacity="0.40" />
        <circle ref={wpC} cx="292" cy="172" r="2" fill="var(--sq-ink)"   opacity="0.20" />

        {/* ── Convergence centre (translates with motion) ── */}
        <g ref={centreGrp}>
          <circle cx={CX} cy={CY} r="80" fill="url(#cGlowCentre)" />
          <circle cx={CX} cy={CY} r="6" fill="none" stroke="var(--sq-amber)" strokeWidth="1"   className="conv-p1" />
          <circle cx={CX} cy={CY} r="6" fill="none" stroke="var(--sq-amber)" strokeWidth="0.5" className="conv-p2" />
          <circle cx={CX} cy={CY} r="5"   fill="var(--sq-amber)" />
          <circle cx={CX} cy={CY} r="2.5" fill="var(--sq-bg, #FAFAF8)" opacity="0.7" />
        </g>
      </svg>
    </>
  );
}
