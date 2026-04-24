'use client'

/** Animated icon for "Digital health founders and their teams"
 *  Three layers slide up and stack sequentially, hold, then reset */
export function BuildersIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden="true">
      <rect x="6" y="8"  width="32" height="8" rx="2" fill="var(--sq-amber)"
        style={{ animation: 'who-layer-1 2.8s ease-in-out infinite' }} />
      <rect x="6" y="18" width="32" height="8" rx="2" fill="var(--sq-amber)"
        style={{ animation: 'who-layer-2 2.8s ease-in-out 0.38s infinite' }} />
      <rect x="6" y="28" width="32" height="8" rx="2" fill="var(--sq-amber)"
        style={{ animation: 'who-layer-3 2.8s ease-in-out 0.76s infinite' }} />
    </svg>
  )
}

/** Animated icon for "Startups and scale-ups"
 *  Lightning bolt descends gently from top to bottom, holds, then fades */
export function ScaleupsIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden="true">
      {/* Ghost bolt — faint guide always present */}
      <path d="M26 4 L12 24 L21 24 L18 40 L32 20 L23 20 Z" fill="var(--sq-amber)" opacity="0.10" />
      {/* Animated bolt — drops top to bottom */}
      <path d="M26 4 L12 24 L21 24 L18 40 L32 20 L23 20 Z" fill="var(--sq-amber)"
        style={{ animation: 'bolt-drop 3.4s ease-in-out infinite', transformBox: 'fill-box', transformOrigin: '50% 0%' }} />
    </svg>
  )
}

/** Animated icon for "Philanthropy, foundations, and impact investors"
 *  Bars grow up from zero left-to-right in sequence, then collapse */
export function InvestorsIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden="true">
      <rect x="5"  y="30" width="8" height="10" rx="1.5" fill="var(--sq-amber)"
        style={{ animation: 'who-bar-1 2.8s ease-in-out infinite' }} />
      <rect x="18" y="20" width="8" height="20" rx="1.5" fill="var(--sq-amber)"
        style={{ animation: 'who-bar-2 2.8s ease-in-out 0.3s infinite' }} />
      <rect x="31" y="8"  width="8" height="32" rx="1.5" fill="var(--sq-amber)"
        style={{ animation: 'who-bar-3 2.8s ease-in-out 0.6s infinite' }} />
    </svg>
  )
}
