import { useMemo, memo, useEffect, useRef } from 'react'

// Fast seeded PRNG — no dependencies
function seededRandom(seed) {
  let s = seed
  return () => {
    s = (s * 9301 + 49297) % 233280
    return s / 233280
  }
}

const CONSTELLATIONS = [
  { name: 'orion', stars: [[8, 12], [12, 18], [10, 25], [6, 25], [9, 32], [11, 38], [7, 40], [14, 40]], links: [[0, 1], [1, 2], [1, 3], [2, 4], [3, 4], [4, 5], [4, 6], [4, 7]], drift: 0 },
  { name: 'cassiopeia', stars: [[72, 8], [78, 14], [83, 8], [88, 15], [93, 9]], links: [[0, 1], [1, 2], [2, 3], [3, 4]], drift: 1 },
  { name: 'dipper', stars: [[55, 72], [62, 70], [68, 74], [72, 80], [78, 82], [80, 88], [72, 88]], links: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 3]], drift: 2 },
  { name: 'scorpius', stars: [[22, 62], [26, 58], [30, 55], [35, 56], [38, 60], [40, 66], [38, 72], [34, 76]], links: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7]], drift: 3 },
  { name: 'leo', stars: [[82, 35], [87, 32], [90, 38], [86, 42], [80, 44], [76, 40]], links: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 0]], drift: 4 },
  { name: 'lyra', stars: [[45, 15], [50, 10], [55, 16], [50, 20]], links: [[0, 1], [1, 2], [2, 3], [3, 0]], drift: 5 },
  { name: 'gemini', stars: [[18, 42], [22, 38], [20, 48], [24, 44], [17, 52]], links: [[0, 1], [0, 2], [1, 3], [2, 4], [2, 3]], drift: 6 },
  { name: 'cygnus', stars: [[58, 45], [62, 40], [66, 45], [62, 50], [62, 35]], links: [[0, 1], [1, 2], [1, 4], [1, 3]], drift: 7 },
]

const CosmicBackground = memo(function CosmicBackground({ showConstellations = true }) {
  const containerRef = useRef(null)

  // Independent scroll listener — zero React renders on scroll!
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (containerRef.current) {
            containerRef.current.style.transform = `translateY(${window.scrollY * 0.15}px)`;
          }
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const stars = useMemo(() => {
    const rand = seededRandom(42)
    return Array.from({ length: 100 }, (_, i) => ({
      id: i,
      x: rand() * 100,
      y: rand() * 100,
      size: rand() * 0.14 + 0.04,
      opacity: rand() * 0.5 + 0.15,
      twinkle: rand() > 0.85,
      delay: rand() * 6,
      duration: 3 + rand() * 4,
    }))
  }, [])

  const constellationElements = useMemo(() => {
    if (!showConstellations) return null
    return CONSTELLATIONS.map((c) => (
      <g
        key={c.name}
        className="animate-constellation-drift"
        style={{
          animationDelay: `${c.drift * 2.5}s`,
          animationDuration: `${18 + c.drift * 3}s`,
        }}
      >
        {c.links.map(([a, b], i) => (
          <line
            key={i}
            x1={c.stars[a][0]}
            y1={c.stars[a][1]}
            x2={c.stars[b][0]}
            y2={c.stars[b][1]}
            stroke="#25A9BA"
            strokeWidth="0.06"
            strokeLinecap="round"
            opacity="0.35"
          />
        ))}
        {c.stars.map(([x, y], i) => (
          <circle key={`s${i}`} cx={x} cy={y} r={0.2} fill="#E6EDF3" opacity={0.85} />
        ))}
      </g>
    ))
  }, [showConstellations])

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-0 overflow-hidden pointer-events-none"
      style={{ willChange: 'transform' }}
    >
      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice" viewBox="0 0 100 100" aria-hidden="true">
        {stars.map((s) => (
          <circle
            key={s.id} cx={s.x} cy={s.y} r={s.size} fill="#E6EDF3" opacity={s.opacity}
            className={s.twinkle ? 'animate-twinkle' : undefined}
            style={s.twinkle ? { animationDelay: `${s.delay}s`, animationDuration: `${s.duration}s` } : undefined}
          />
        ))}
        {constellationElements}
      </svg>
      <div className="absolute inset-0 bg-gradient-to-b from-chakra-bg/30 via-chakra-surface/60 to-chakra-bg pointer-events-none" />
    </div>
  )
})

export default CosmicBackground
