import { useState, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';

const ZODIAC_SIGNS = [
  { symbol: '♈', name: 'Aries' },
  { symbol: '♉', name: 'Taurus' },
  { symbol: '♊', name: 'Gemini' },
  { symbol: '♋', name: 'Cancer' },
  { symbol: '♌', name: 'Leo' },
  { symbol: '♍', name: 'Virgo' },
  { symbol: '♎', name: 'Libra' },
  { symbol: '♏', name: 'Scorpio' },
  { symbol: '♐', name: 'Sagittarius' },
  { symbol: '♑', name: 'Capricorn' },
  { symbol: '♒', name: 'Aquarius' },
  { symbol: '♓', name: 'Pisces' },
];

export default function ZodiacWheel({ size = 400, className = "" }) {
  const containerRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);
    setTilt({ x: dy * -18, y: dx * 18 });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setTilt({ x: 0, y: 0 });
  }, []);

  const center = size / 2;
  const outerR = center - 8;
  const signR = center - 35;   // radius where signs sit
  const innerR = center - 60;  // inner boundary of sign band
  const coreR = center - 90;   // inner sacred geometry zone

  // House divider lines
  const dividers = Array.from({ length: 12 }).map((_, i) => {
    const angle = ((i * 30 - 90) * Math.PI) / 180;
    return {
      x1: center + innerR * Math.cos(angle),
      y1: center + innerR * Math.sin(angle),
      x2: center + outerR * Math.cos(angle),
      y2: center + outerR * Math.sin(angle),
    };
  });

  // Position each zodiac sign between dividers
  const signs = ZODIAC_SIGNS.map((sign, i) => {
    const angle = ((i * 30 + 15 - 90) * Math.PI) / 180;
    return {
      ...sign,
      x: center + signR * Math.cos(angle),
      y: center + signR * Math.sin(angle),
    };
  });

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative ${className}`}
      style={{ width: size, height: size, perspective: '800px' }}
    >
      <motion.div
        className="w-full h-full"
        animate={{
          rotateX: tilt.x,
          rotateY: tilt.y,
        }}
        transition={{ type: 'spring', stiffness: 120, damping: 20, mass: 0.8 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Slow continuous rotation layer */}
        <motion.div
          className="absolute inset-0"
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}
        >
          <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="w-full h-full">
            {/* Outer ring */}
            <circle cx={center} cy={center} r={outerR} fill="none" stroke="#25A9BA" strokeWidth="2" strokeOpacity="0.5" />
            <circle cx={center} cy={center} r={outerR - 2} fill="none" stroke="#25A9BA" strokeWidth="0.5" strokeOpacity="0.2" />
            {/* Inner ring of sign band */}
            <circle cx={center} cy={center} r={innerR} fill="none" stroke="#25A9BA" strokeWidth="1.5" strokeOpacity="0.4" />
            {/* Core circle */}
            <circle cx={center} cy={center} r={coreR} fill="none" stroke="#14467D" strokeWidth="1.5" strokeOpacity="0.6" />

            {/* House dividers */}
            {dividers.map((d, i) => (
              <line
                key={`div-${i}`}
                x1={d.x1} y1={d.y1} x2={d.x2} y2={d.y2}
                stroke="#25A9BA" strokeWidth="1" strokeOpacity="0.35"
              />
            ))}

            {/* Zodiac symbols */}
            {signs.map((s, i) => (
              <text
                key={`sign-${i}`}
                x={s.x}
                y={s.y}
                textAnchor="middle"
                dominantBaseline="central"
                fill="#D4AF37"
                fontSize={size * 0.055}
                fontFamily="serif"
                opacity="0.9"
                style={{ filter: 'drop-shadow(0 0 6px rgba(212,175,55,0.6))' }}
              >
                {s.symbol}
              </text>
            ))}

            {/* Sacred geometry – Star of David */}
            <polygon
              points={`
                ${center},${center - coreR}
                ${center + coreR * Math.cos(Math.PI / 6)},${center + coreR * Math.sin(Math.PI / 6)}
                ${center - coreR * Math.cos(Math.PI / 6)},${center + coreR * Math.sin(Math.PI / 6)}
              `}
              fill="none" stroke="#D4AF37" strokeWidth="0.8" strokeOpacity="0.35"
            />
            <polygon
              points={`
                ${center},${center + coreR}
                ${center + coreR * Math.cos(Math.PI / 6)},${center - coreR * Math.sin(Math.PI / 6)}
                ${center - coreR * Math.cos(Math.PI / 6)},${center - coreR * Math.sin(Math.PI / 6)}
              `}
              fill="none" stroke="#D4AF37" strokeWidth="0.8" strokeOpacity="0.35"
            />

            {/* Cross lines through center */}
            <line x1={center} y1={center - coreR} x2={center} y2={center + coreR} stroke="#14467D" strokeWidth="0.5" strokeOpacity="0.4" />
            <line x1={center - coreR} y1={center} x2={center + coreR} y2={center} stroke="#14467D" strokeWidth="0.5" strokeOpacity="0.4" />

            {/* Innermost dashed circle */}
            <circle cx={center} cy={center} r={coreR * 0.45} fill="none" stroke="#14467D" strokeWidth="0.8" strokeOpacity="0.4" strokeDasharray="5 5" />
          </svg>
        </motion.div>
      </motion.div>
    </div>
  );
}
