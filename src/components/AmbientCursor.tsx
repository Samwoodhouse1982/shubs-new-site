'use client';

import { useEffect, useRef, useState } from 'react';

// Two glowing orbs that follow the cursor with a soft spring lag.
// When the cursor leaves the viewport they drift in a slow Lissajous pattern.

const LERP_PRIMARY   = 0.055;   // how fast the amber orb chases the cursor
const LERP_SECONDARY = 0.028;   // teal orb follows slower → more lag
const IDLE_SPEED     = 0.00055; // how fast the idle drift advances

export default function AmbientCursor() {
  const [mounted, setMounted] = useState(false);
  const primaryRef   = useRef<HTMLDivElement>(null);
  const secondaryRef = useRef<HTMLDivElement>(null);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    if (!mounted) return;
    let mouseX    = window.innerWidth  * 0.35;
    let mouseY    = window.innerHeight * 0.30;
    let onScreen  = false;
    let idleT     = 0;

    let px = mouseX, py = mouseY;   // primary current pos
    let sx = mouseX, sy = mouseY;   // secondary current pos

    function onMove(e: MouseEvent) {
      mouseX   = e.clientX;
      mouseY   = e.clientY;
      onScreen = true;
    }
    function onLeave() { onScreen = false; }

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseleave', onLeave);

    let raf: number;

    function tick() {
      idleT += IDLE_SPEED;

      const w = window.innerWidth;
      const h = window.innerHeight;

      let tx: number, ty: number;

      if (onScreen) {
        tx = mouseX;
        ty = mouseY;
      } else {
        // Slow Lissajous drift — covers the viewport without repeating too quickly
        tx = w * 0.5 + Math.sin(idleT * 1.1) * w * 0.32;
        ty = h * 0.5 + Math.sin(idleT * 0.7) * h * 0.30;
      }

      px += (tx - px) * LERP_PRIMARY;
      py += (ty - py) * LERP_PRIMARY;
      sx += (tx - sx) * LERP_SECONDARY;
      sy += (ty - sy) * LERP_SECONDARY;

      // Centre the div on the target point
      if (primaryRef.current) {
        primaryRef.current.style.transform = `translate(${px - 300}px, ${py - 300}px)`;
      }
      if (secondaryRef.current) {
        secondaryRef.current.style.transform = `translate(${sx - 250}px, ${sy - 250}px)`;
      }

      raf = requestAnimationFrame(tick);
    }

    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
    };
  }, [mounted]);

  if (!mounted) return null;

  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 0 }}
      aria-hidden
    >
      {/* Primary — amber, follows closely */}
      <div
        ref={primaryRef}
        className="absolute w-[600px] h-[600px] rounded-full"
        style={{
          top: 0,
          left: 0,
          willChange: 'transform',
          background: 'radial-gradient(circle, rgba(var(--sq-amber-rgb),0.09) 0%, transparent 65%)',
        }}
      />
      {/* Secondary — teal, lags behind */}
      <div
        ref={secondaryRef}
        className="absolute w-[500px] h-[500px] rounded-full"
        style={{
          top: 0,
          left: 0,
          willChange: 'transform',
          background: 'radial-gradient(circle, rgba(var(--sq-teal-rgb),0.07) 0%, transparent 65%)',
        }}
      />
    </div>
  );
}
