import { useEffect, useState, useCallback } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CursorGlow() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth spring for the outer ring & ambient glow
  const ringX = useSpring(mouseX, { stiffness: 150, damping: 15, mass: 0.5 });
  const ringY = useSpring(mouseY, { stiffness: 150, damping: 15, mass: 0.5 });

  // Tight spring for the dot
  const dotX = useSpring(mouseX, { stiffness: 800, damping: 30 });
  const dotY = useSpring(mouseY, { stiffness: 800, damping: 30 });

  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseMove = useCallback((e) => {
    if (!isVisible) setIsVisible(true);
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  }, [mouseX, mouseY, isVisible]);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    
    const handleMouseOver = (e) => {
      if (e.target.closest('a, button, input, [role="button"], .group')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };
    
    const handleMouseLeave = () => setIsVisible(false);
    
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [handleMouseMove]);

  if (!isVisible) return null;

  return (
    <>
      {/* Ambient localized glow */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[1] hidden md:block"
        style={{
          x: ringX,
          y: ringY,
          width: 300,
          height: 300,
          translateX: '-50%',
          translateY: '-50%',
          background: 'radial-gradient(circle, rgba(37,169,186,0.08) 0%, rgba(37,169,186,0) 70%)',
        }}
      />
      {/* Custom Cursor Ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full border border-chakra-cyan/60 shadow-[0_0_10px_rgba(37,169,186,0.4)] flex items-center justify-center mix-blend-screen hidden md:block"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
          width: isHovering ? 48 : 28,
          height: isHovering ? 48 : 28,
          backgroundColor: isHovering ? 'rgba(37, 169, 186, 0.1)' : 'transparent',
          transition: 'width 0.2s, height 0.2s, background-color 0.2s'
        }}
      />
      {/* Custom Cursor Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[10000] rounded-full bg-chakra-cyan shadow-[0_0_8px_rgba(37,169,186,0.8)] hidden md:block"
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
          width: 6,
          height: 6,
          opacity: isHovering ? 0 : 1,
          transition: 'opacity 0.2s'
        }}
      />
    </>
  );
}
