import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'

const reveal = {
  hidden: { opacity: 0, y: 8 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.4, delay: i * 0.4, ease: 'easeOut' } }),
}

export default function ReadingOverlay({ isOpen, lines, theme, perspective, onClose, onShift, onFocusThem, onFocusYou }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 z-30 bg-black/70 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
          />
          <motion.div
            className="fixed bottom-0 left-0 right-0 z-40 rounded-t-3xl bg-chakra-surface border-t border-chakra-ring px-6 pt-5 pb-8 max-w-2xl mx-auto shadow-[0_-10px_40px_rgba(37,169,186,0.1)]"
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <div className="flex justify-between items-center mb-6">
              <span className="text-xs uppercase tracking-[0.2em] text-chakra-cyan font-bold">{theme}</span>
              <button onClick={onClose} aria-label="Close reading" className="text-chakra-muted hover:text-white transition-colors text-lg leading-none">
                ✕
              </button>
            </div>

            <div key={lines.join('|')} className="space-y-4 min-h-[120px]">
              {lines.map((line, i) => (
                <motion.p
                  key={i}
                  custom={i}
                  variants={reveal}
                  initial="hidden"
                  animate="visible"
                  className="text-base text-chakra-text leading-relaxed"
                >
                  {line}
                </motion.p>
              ))}
            </div>

            <div className="flex gap-2 mt-8">
              <button
                onClick={onShift}
                className="flex-1 text-xs py-2.5 rounded-full border border-chakra-ring text-chakra-muted hover:bg-white/5 transition-colors"
              >
                Shift perspective
              </button>
              <button
                onClick={onFocusThem}
                className={`flex-1 text-xs py-2.5 rounded-full border transition-colors ${
                  perspective === 'them' ? 'border-chakra-cyan text-chakra-cyan bg-chakra-cyan/10' : 'border-chakra-ring text-chakra-muted hover:bg-white/5'
                }`}
              >
                Focus on them
              </button>
              <button
                onClick={onFocusYou}
                className={`flex-1 text-xs py-2.5 rounded-full border transition-colors ${
                  perspective === 'you' ? 'border-chakra-cyan text-chakra-cyan bg-chakra-cyan/10' : 'border-chakra-ring text-chakra-muted hover:bg-white/5'
                }`}
              >
                Focus on you
              </button>
            </div>

            {/* Upsell CTA */}
            <div className="mt-8 pt-6 border-t border-chakra-ring text-center">
              <p className="text-sm text-chakra-muted mb-4">Want the full picture mapped to your birth chart?</p>
              <Link 
                to="/services" 
                onClick={onClose}
                className="inline-block w-full bg-gradient-to-r from-chakra-goldLight via-chakra-gold to-chakra-goldLight text-chakra-bg font-bold py-4 rounded-full shadow-lg transform transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                Get Your Full Kundli Reading
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
