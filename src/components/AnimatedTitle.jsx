import { useMemo } from 'react';
import { motion } from 'framer-motion';

export default function AnimatedTitle({ text, className = "", goldWord = "", startDelay = 0 }) {
  const letters = useMemo(() => {
    const result = [];
    let charIndex = 0;
    const words = text.split(' ');
    words.forEach((word, wi) => {
      const isGold = word === goldWord || word === goldWord.replace(/[^a-zA-Z]/g, ''); // Handle punctuation if needed
      for (let i = 0; i < word.length; i++) {
        result.push({ char: word[i], isGold, index: charIndex });
        charIndex++;
      }
      if (wi < words.length - 1) {
        result.push({ char: '\u00A0', isGold: false, index: charIndex });
        charIndex++;
      }
    });
    return result;
  }, [text, goldWord]);

  return (
    <h1 className={`${className} flex flex-wrap justify-center`}>
      {letters.map((l) => (
        <span key={l.index} className="overflow-hidden inline-flex relative leading-[1.2] pt-2 -mt-2">
          <motion.span
            className={`${l.isGold ? 'gold-gradient-text' : ''} inline-block`}
            initial={{ y: '100%' }}
            animate={{ y: '0%' }}
            transition={{
              duration: 0.4,
              // Adaptive per-letter delay: targets exactly 0.8s total regardless of text length
              delay: startDelay + l.index * Math.max(0.001, 0.4 / Math.max(text.length, 1)),
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {l.char}
          </motion.span>
        </span>
      ))}
    </h1>
  );
}
