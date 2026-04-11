'use client';

import { useEffect, useRef } from 'react';

export default function ConvergenceGraphic() {
  const pathA    = useRef<SVGPathElement>(null);
  const pathB    = useRef<SVGPathElement>(null);
  const pathC    = useRef<SVGPathElement>(null);
  const centreGrp = useRef<SVGGElement>(null);

  useEffect(() => {
    // Draw lines in sequence
    const entries: { el: SVGPathElement | null; delay: number }[] = [
      { el: pathA.current, delay: 0 },
      { el: pathB.current, delay: 260 },
      { el: pathC.current, delay: 520 },
    ];

    entries.forEach(({ el, delay }) => {
      if (!el) return;
      const len = el.getTotalLength();
      el.style.strokeDasharray  = String(len);
      el.style.strokeDashoffset = String(len);
      setTimeout(() => {
        el.style.transition      = 'stroke-dashoffset 1s cubic-bezier(0.4, 0, 0.2, 1)';
        el.style.strokeDashoffset = '0';
      }, delay);
    });

    // Fade in convergence point after all lines arrive
    const grp = centreGrp.current;
    if (grp) {
      grp.style.opacity = '0';
      setTimeout(() => {
        grp.style.transition = 'opacity 0.5s ease';
        grp.style.opacity    = '1';
      }, 1560);
    }
  }, []);

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
        .orig-glow       { animation: origGlow 3.2s ease-in-out infinite; }
        .orig-glow-delay { animation: origGlow 3.2s ease-in-out 1.1s infinite; }
        .orig-glow-late  { animation: origGlow 3.2s ease-in-out 2.1s infinite; }
      `}</style>

      <svg
        viewBox="0 0 400 360"
        width="100%"
        height="100%"
        fill="none"
        aria-hidden
      >
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
            <stop offset="0%" stopColor="var(--sq-amber)" stopOpacity="0.2" />
            <stop offset="100%" stopColor="var(--sq-amber)" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* ── Breathing origin halos ── */}
        <circle cx="44"  cy="52"  r="44" fill="url(#cGlowA)" className="orig-glow"      />
        <circle cx="44"  cy="308" r="44" fill="url(#cGlowB)" className="orig-glow-delay" />
        <circle cx="364" cy="180" r="44" fill="url(#cGlowC)" className="orig-glow-late"  />

        {/* ── Faint ghost traces (always present, very dim) ── */}
        <path d="M 44,52 Q 118,100 200,180"   stroke="var(--sq-amber)" strokeWidth="0.5" opacity="0.10" />
        <path d="M 44,308 Q 118,260 200,180"  stroke="var(--sq-teal)"  strokeWidth="0.5" opacity="0.08" />
        <path d="M 364,180 Q 292,172 200,180" stroke="var(--sq-ink)"   strokeWidth="0.5" opacity="0.07" />

        {/* ── Animated draw-in paths ── */}
        {/* Amber — top-left */}
        <path
          ref={pathA}
          d="M 44,52 Q 118,100 200,180"
          stroke="var(--sq-amber)"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.88"
        />
        {/* Teal — bottom-left */}
        <path
          ref={pathB}
          d="M 44,308 Q 118,260 200,180"
          stroke="var(--sq-teal)"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.72"
        />
        {/* Muted — right */}
        <path
          ref={pathC}
          d="M 364,180 Q 292,172 200,180"
          stroke="var(--sq-ink)"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.32"
        />

        {/* ── Origin nodes ── */}
        <circle cx="44"  cy="52"  r="3.5" fill="var(--sq-amber)" opacity="0.9" />
        <circle cx="44"  cy="308" r="3.5" fill="var(--sq-teal)"  opacity="0.8" />
        <circle cx="364" cy="180" r="3.5" fill="var(--sq-ink)"   opacity="0.4" />

        {/* Midpoint waypoints */}
        <circle cx="121" cy="116" r="2" fill="var(--sq-amber)" opacity="0.45" />
        <circle cx="121" cy="244" r="2" fill="var(--sq-teal)"  opacity="0.40" />
        <circle cx="282" cy="176" r="2" fill="var(--sq-ink)"   opacity="0.20" />

        {/* ── Convergence centre group (fades in after lines arrive) ── */}
        <g ref={centreGrp}>
          {/* Ambient centre glow */}
          <circle cx="200" cy="180" r="80" fill="url(#cGlowCentre)" />
          {/* Pulse rings */}
          <circle cx="200" cy="180" r="6" fill="none" stroke="var(--sq-amber)" strokeWidth="1"   className="conv-p1" />
          <circle cx="200" cy="180" r="6" fill="none" stroke="var(--sq-amber)" strokeWidth="0.5" className="conv-p2" />
          {/* Core dot */}
          <circle cx="200" cy="180" r="5"   fill="var(--sq-amber)" />
          <circle cx="200" cy="180" r="2.5" fill="var(--sq-bg, #FAFAF8)" opacity="0.7" />
        </g>
      </svg>
    </>
  );
}
