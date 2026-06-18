import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import OrbitSystem from './OrbitSystem'; // Ensure we can render the spinner
import ZodiacWheel from './ZodiacWheel';

const reveal = {
  hidden: { opacity: 0, y: 8 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.4, delay: i * 0.4, ease: 'easeOut' } }),
};

const LOADING_TEXTS = [
  "Calculating planetary longitudes...",
  "Plotting geometric alignments...",
  "Decoding karmic patterns...",
];

export default function ReadingOverlay({ 
  isOpen, 
  lines, 
  theme, 
  onClose, 
  onGenerate, // new prop to trigger calculation
  userData // passes back the submitted name
}) {
  const [step, setStep] = useState('input'); // input, calculating, reading
  const [formData, setFormData] = useState({ name: '', dob: '' });
  const [loadingStep, setLoadingStep] = useState(0);

  // Reset state when closed
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setStep('input');
        setFormData({ name: '', dob: '' });
      }, 300);
    }
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep('calculating');
    setLoadingStep(0);

    // Sequence loading texts
    const interval = setInterval(() => {
      setLoadingStep(prev => Math.min(prev + 1, 2));
    }, 600);

    // After 2 seconds, trigger generation and move to reading
    setTimeout(() => {
      clearInterval(interval);
      onGenerate(formData);
      setStep('reading');
    }, 2000);
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 z-30 bg-black/80 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleClose}
          />
          <motion.div
            className={`fixed bottom-0 left-0 right-0 z-40 rounded-t-3xl bg-chakra-bg border-t border-chakra-ring px-6 pt-5 pb-8 max-w-2xl mx-auto shadow-[0_-10px_40px_rgba(37,169,186,0.15)] flex flex-col ${step === 'calculating' ? 'items-center justify-center min-h-[400px]' : ''}`}
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Header (hidden in calculating state) */}
            {step !== 'calculating' && (
              <div className="flex justify-between items-center mb-6">
                <span className="text-xs uppercase tracking-[0.2em] text-chakra-cyan font-bold">
                  {step === 'input' ? 'Cosmic Snapshot' : `${userData?.name || 'Your'} Cosmic Snapshot`}
                </span>
                <button onClick={handleClose} aria-label="Close" className="text-chakra-muted hover:text-white transition-colors text-xl leading-none p-2 -mr-2">
                  ✕
                </button>
              </div>
            )}

            <AnimatePresence mode="wait">
              {/* STEP 1: INPUT FORM */}
              {step === 'input' && (
                <motion.div
                  key="input"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-chakra-muted text-sm mb-6">Enter your birth details. We use this exact data to mathematically calculate your personal planetary alignments.</p>
                  
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <input type="text" placeholder="First Name" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full bg-chakra-surface border border-white/10 rounded-xl px-4 py-3 text-white placeholder-chakra-muted focus:outline-none focus:border-chakra-cyan transition-colors" />
                    </div>
                    <div>
                      <input type="date" required value={formData.dob} onChange={(e) => setFormData({...formData, dob: e.target.value})} className="w-full bg-chakra-surface border border-white/10 rounded-xl px-4 py-3 text-white placeholder-chakra-muted focus:outline-none focus:border-chakra-cyan transition-colors" />
                    </div>
                    
                    <button type="submit" className="w-full bg-chakra-cyan hover:bg-chakra-blue text-chakra-bg font-bold py-4 rounded-xl mt-4 transition-transform active:scale-[0.98]">
                      Align Stars
                    </button>
                  </form>
                </motion.div>
              )}

              {/* STEP 2: CALCULATING */}
              {step === 'calculating' && (
                <motion.div
                  key="calculating"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col items-center justify-center py-8"
                >
                  <div className="relative w-48 h-48 mb-8 flex items-center justify-center">
                    <motion.div 
                      className="absolute inset-0 opacity-40"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                    >
                      <ZodiacWheel size={192} />
                    </motion.div>
                    {/* A fast spinning inner element */}
                    <div className="w-12 h-12 rounded-full border-2 border-chakra-cyan border-t-transparent animate-spin" />
                  </div>
                  
                  <motion.p
                    key={loadingStep}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-chakra-gold font-serif text-lg text-center"
                  >
                    {LOADING_TEXTS[loadingStep]}
                  </motion.p>
                  
                  <p className="text-xs text-chakra-muted/60 italic mt-6">
                    We never store this data. It is only used for calculation.
                  </p>
                </motion.div>
              )}

              {/* STEP 3: READING */}
              {step === 'reading' && lines && lines.length > 0 && (
                <motion.div
                  key="reading"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="mb-4 inline-block bg-white/5 border border-white/10 px-3 py-1 rounded-full text-xs text-chakra-gold">
                    Dominant Pattern: {theme}
                  </div>
                  
                  <div className="space-y-4 min-h-[120px]">
                    {lines.map((line, i) => (
                      <motion.p
                        key={i}
                        custom={i}
                        variants={reveal}
                        initial="hidden"
                        animate="visible"
                        className="text-base sm:text-lg text-white leading-relaxed"
                      >
                        {line}
                      </motion.p>
                    ))}
                  </div>

                  <div className="mt-8 pt-6 border-t border-chakra-ring text-center">
                    <p className="text-sm text-chakra-muted mb-4">Want the full picture mathematically mapped to your birth chart?</p>
                    <Link to="/services" onClick={handleClose} className="inline-block w-full bg-gradient-to-r from-chakra-goldLight via-chakra-gold to-chakra-goldLight text-chakra-bg font-bold py-4 rounded-xl shadow-lg transform transition-transform hover:scale-[1.02] active:scale-[0.98]">
                      Get Your Full Kundli Reading
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
