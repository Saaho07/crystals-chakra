import { useState, useEffect, useCallback } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CursorGlow() {
  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);

  const springX = useSpring(mouseX, { stiffness: 60, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 30 });

  const handleMouseMove = useCallback((e) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  }, [mouseX, mouseY]);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  return (
    <motion.div
      className="fixed pointer-events-none z-[1]"
      style={{
        x: springX,
        y: springY,
        width: 500,
        height: 500,
        translateX: '-50%',
        translateY: '-50%',
        background: 'radial-gradient(circle, rgba(37,169,186,0.12) 0%, rgba(20,70,125,0.06) 40%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(10px)',
      }}
    />
  );
}
