'use client'
import { useEffect, useRef } from 'react'

export default function ScrollDot() {
  const dotRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function onScroll() {
      const scrollTop  = window.scrollY
      const docHeight  = document.documentElement.scrollHeight - window.innerHeight
      const progress   = docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0
      if (dotRef.current) {
        // Travels within the inner 80% of the viewport height (10%–90%)
        dotRef.current.style.top = `${10 + progress * 80}%`
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className="fixed right-5 xl:right-8 top-0 bottom-0 z-40 pointer-events-none hidden lg:block"
      aria-hidden
    >
      {/* Faint vertical track */}
      <div
        className="absolute left-1/2 -translate-x-1/2"
        style={{
          top: '10%',
          bottom: '10%',
          width: 1,
          background:
            'linear-gradient(to bottom, transparent 0%, var(--sq-amber-12) 15%, var(--sq-amber-12) 85%, transparent 100%)',
        }}
      />

      {/* Moving dot */}
      <div
        ref={dotRef}
        className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ top: '10%', transition: 'top 0.12s ease-out' }}
      >
        {/* Sonar ring */}
        <span
          className="absolute sonar-ring rounded-full"
          style={{
            inset: -4,
            background: 'var(--sq-amber-15)',
          }}
        />
        {/* Core dot */}
        <span
          className="block w-2 h-2 rounded-full"
          style={{
            backgroundColor: 'var(--sq-amber)',
            boxShadow: '0 0 7px var(--sq-amber-50)',
          }}
        />
      </div>
    </div>
  )
}
