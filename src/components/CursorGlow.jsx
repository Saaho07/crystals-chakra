import { useEffect, useRef, useCallback, memo } from 'react';

// Lightweight cursor glow using refs + RAF instead of framer-motion springs
const CursorGlow = memo(function CursorGlow() {
  const ringRef = useRef(null);
  const dotRef = useRef(null);
  const pos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const hovering = useRef(false);
  const rafId = useRef(null);
  const visible = useRef(false);

  // Single RAF loop — much cheaper than framer-motion springs
  const tick = useCallback(() => {
    const lerp = 0.15;
    ringPos.current.x += (pos.current.x - ringPos.current.x) * lerp;
    ringPos.current.y += (pos.current.y - ringPos.current.y) * lerp;

    if (ringRef.current) {
      const size = hovering.current ? 48 : 28;
      ringRef.current.style.transform = `translate(${ringPos.current.x - size / 2}px, ${ringPos.current.y - size / 2}px)`;
      ringRef.current.style.width = `${size}px`;
      ringRef.current.style.height = `${size}px`;
      ringRef.current.style.backgroundColor = hovering.current ? 'rgba(37, 169, 186, 0.1)' : 'transparent';
    }

    if (dotRef.current) {
      dotRef.current.style.transform = `translate(${pos.current.x - 3}px, ${pos.current.y - 3}px)`;
      dotRef.current.style.opacity = hovering.current ? '0' : '1';
    }

    rafId.current = requestAnimationFrame(tick);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      pos.current.x = e.clientX;
      pos.current.y = e.clientY;
      if (!visible.current) {
        visible.current = true;
        if (ringRef.current) ringRef.current.style.opacity = '1';
        if (dotRef.current) dotRef.current.style.opacity = '1';
      }
    };

    const handleMouseOver = (e) => {
      hovering.current = !!e.target.closest('a, button, input, [role="button"], .group');
    };

    const handleMouseLeave = () => {
      visible.current = false;
      if (ringRef.current) ringRef.current.style.opacity = '0';
      if (dotRef.current) dotRef.current.style.opacity = '0';
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    rafId.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [tick]);

  // Only render on pointer devices
  return (
    <>
      <div
        ref={ringRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full border border-chakra-cyan/60 shadow-[0_0_10px_rgba(37,169,186,0.4)] hidden md:block"
        style={{
          width: 28,
          height: 28,
          opacity: 0,
          transition: 'width 0.2s, height 0.2s, background-color 0.2s',
          willChange: 'transform',
        }}
      />
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-[10000] rounded-full bg-chakra-cyan shadow-[0_0_8px_rgba(37,169,186,0.8)] hidden md:block"
        style={{
          width: 6,
          height: 6,
          opacity: 0,
          transition: 'opacity 0.2s',
          willChange: 'transform',
        }}
      />
    </>
  );
});

export default CursorGlow;
