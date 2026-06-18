import { motion } from 'framer-motion'

export default function CTAButton({ onClick }) {
  return (
    <motion.button
      onClick={onClick}
      className="w-[88%] max-w-xs py-3.5 rounded-full text-sm font-medium text-cosmic-bg
                 bg-gradient-to-r from-cosmic-teal to-cosmic-blue
                 shadow-[0_0_24px_rgba(94,234,212,0.25)]"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
      whileTap={{ scale: 0.97 }}
    >
      Get Your Reading
    </motion.button>
  )
}
