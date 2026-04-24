"use client";
import { useEffect, useRef } from "react";

export default function ScrollThread() {
  const fillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const update = () => {
      if (!fillRef.current) return;
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const p = total > 0 ? scrolled / total : 0;
      fillRef.current.style.transform = `scaleY(${p})`;
    };
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div
      className="fixed left-0 top-0 bottom-0 z-30 hidden xl:block pointer-events-none"
      aria-hidden
    >
      {/* Track */}
      <div
        className="absolute top-0 bottom-0"
        style={{ left: 22, width: 1, background: "rgba(0,85,255,0.10)" }}
      />
      {/* Fill */}
      <div
        ref={fillRef}
        className="absolute top-0"
        style={{
          left: 22,
          width: 1,
          height: "100%",
          background: "linear-gradient(180deg, #0055FF 0%, #F0306A 100%)",
          transformOrigin: "top",
          transform: "scaleY(0)",
          transition: "transform 0.05s linear",
        }}
      />
    </div>
  );
}
