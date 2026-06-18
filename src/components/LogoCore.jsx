import { motion, useReducedMotion } from 'framer-motion'

export default function LogoCore() {
  const reduce = useReducedMotion()

  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
      <div className="absolute w-24 h-24 rounded-full bg-cosmic-teal/20 blur-xl animate-glow-pulse" />
      <motion.div
        className="relative w-16 h-16 rounded-full bg-gradient-to-br from-cosmic-teal to-cosmic-blue flex items-center justify-center shadow-[0_0_30px_rgba(94,234,212,0.35)]"
        animate={reduce ? {} : { rotate: 360 }}
        transition={{ duration: 90, repeat: Infinity, ease: 'linear' }}
      >
        <svg viewBox="0 0 24 24" className="w-6 h-6 text-cosmic-bg" fill="currentColor" aria-hidden="true">
          <path d="M12 2l2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4z" />
        </svg>
      </motion.div>
    </div>
  )
}
