import { motion } from 'framer-motion'

export default function TextOverlay() {
  return (
    <motion.div
      className="text-center px-6 mt-8"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <h1 className="text-xl font-medium text-cosmic-text">Feel stuck?</h1>
      <p className="mt-2 text-sm text-cosmic-muted">
        Overthinking that last conversation?
      </p>
    </motion.div>
  )
}
