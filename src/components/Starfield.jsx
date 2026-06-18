import { useMemo } from 'react'

function seededRandom(seed) {
  let s = seed
  return () => {
    s = (s * 9301 + 49297) % 233280
    return s / 233280
  }
}

export default function Starfield({ count = 70 }) {
  const stars = useMemo(() => {
    const rand = seededRandom(42)
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: rand() * 100,
      y: rand() * 100,
      size: rand() * 1.6 + 0.6,
      opacity: rand() * 0.5 + 0.2,
      twinkle: rand() > 0.85,
      delay: rand() * 4,
    }))
  }, [count])

  return (
    <svg
      className="absolute inset-0 w-full h-full"
      preserveAspectRatio="xMidYMid slice"
      viewBox="0 0 100 100"
      aria-hidden="true"
    >
      {stars.map((s) => (
        <circle
          key={s.id}
          cx={s.x}
          cy={s.y}
          r={s.size * 0.15}
          fill="#E6EDF3"
          opacity={s.opacity}
          className={s.twinkle ? 'animate-twinkle' : ''}
          style={s.twinkle ? { animationDelay: `${s.delay}s` } : undefined}
        />
      ))}
    </svg>
  )
}
