'use client'
import React, { useEffect, useRef, useState } from 'react'

export default function StatCounter({
  value,
  className = '',
  style,
}: {
  value: string
  className?: string
  style?: React.CSSProperties
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const [display, setDisplay] = useState('0')
  const triggered = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const match = value.match(/^(\d+)(.*)$/)
    if (!match) { setDisplay(value); return }
    const target = parseInt(match[1], 10)
    const suffix = match[2]

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered.current) {
          triggered.current = true
          const duration = 1400
          const start = performance.now()
          const tick = (now: number) => {
            const p = Math.min((now - start) / duration, 1)
            const eased = 1 - (1 - p) ** 3
            setDisplay(Math.round(eased * target) + suffix)
            if (p < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
          observer.unobserve(el)
        }
      },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [value])

  return <span ref={ref} className={className} style={style}>{display}</span>
}
