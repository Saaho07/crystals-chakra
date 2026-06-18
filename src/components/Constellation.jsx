import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { CONSTELLATIONS } from '../readingEngine'

export default function Constellation({ pattern, intensity, visible }) {
  const [activePattern, setActivePattern] = useState(pattern)

  useEffect(() => {
    if (pattern) setActivePattern(pattern)
  }, [pattern])

  const data = CONSTELLATIONS[activePattern]
  if (!data) return null

  const opacity = visible ? 0.35 + intensity * 0.45 : 0

  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" aria-hidden="true">
      <motion.g animate={{ opacity }} transition={{ duration: 0.5, ease: 'easeOut' }}>
        {data.links.map(([a, b], i) => (
          <line
            key={i}
            x1={data.points[a][0]} y1={data.points[a][1]}
            x2={data.points[b][0]} y2={data.points[b][1]}
            stroke="#5EEAD4" strokeWidth="0.4" strokeLinecap="round"
          />
        ))}
        {data.points.map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="1.2" fill="#7AA2F7" />
        ))}
      </motion.g>
    </svg>
  )
}
