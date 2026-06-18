import { motion } from 'framer-motion';

export default function BrandLogo({ className = "", size = "md" }) {
  // Sizes mapping
  const sizes = {
    sm: "w-10 h-10",
    md: "w-24 h-24",
    lg: "w-40 h-40"
  };

  // Filter scale mapping
  const filters = {
    sm: "drop-shadow(0px 0px 2px rgba(37,169,186,0.5)) drop-shadow(0px 0px 5px rgba(20,70,125,0.4))",
    md: "drop-shadow(0px 0px 10px rgba(37,169,186,0.4)) drop-shadow(0px 0px 20px rgba(20,70,125,0.3))",
    lg: "drop-shadow(0px 0px 15px rgba(37,169,186,0.4)) drop-shadow(0px 0px 30px rgba(20,70,125,0.3))"
  };

  const currentFilter = filters[size] || filters.md;
  const currentSize = sizes[size] || sizes.md;

  return (
    <motion.div 
      className={`relative flex items-center justify-center ${currentSize} ${className} group`}
      initial={{ rotateY: -10, rotateX: 5 }}
      animate={{ 
        rotateY: [-10, 10, -10],
        rotateX: [5, -5, 5]
      }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      style={{ 
        filter: currentFilter 
      }}
    >
      {/* 3D Shine overlay that moves on hover */}
      <div className="absolute inset-0 z-50 pointer-events-none overflow-hidden rounded-lg">
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-[shine_1.5s_ease-in-out]" />
      </div>

      <svg 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full relative z-10"
      >
        {/* Outer Frames */}
        {/* Light Cyan Frame */}
        <path d="M10,10 L90,10 L90,20 L20,20 L20,90 L10,90 Z M90,10 L90,90 L80,90 L80,20 L90,20 Z" fill="#25A9BA" />
        <path d="M10,90 L90,90 L90,80 L20,80 L20,90 Z" fill="#25A9BA" />
        
        {/* Deep Blue Frame (Offset) */}
        <path d="M15,15 L85,15 L85,85 L15,85 Z" stroke="#14467D" strokeWidth="4" />
        
        {/* Central Interlocking Shapes */}
        <g style={{ transformOrigin: '50px 50px' }}>
          {/* Top (Blue) */}
          <path d="M50,25 L65,40 L55,40 L50,35 L45,40 L35,40 Z" fill="#14467D" />
          {/* Bottom (Blue) */}
          <path d="M50,75 L35,60 L45,60 L50,65 L55,60 L65,60 Z" fill="#14467D" />
          {/* Left (Cyan) */}
          <path d="M25,50 L40,35 L40,45 L35,50 L40,55 L40,65 Z" fill="#25A9BA" />
          {/* Right (Cyan) */}
          <path d="M75,50 L60,65 L60,55 L65,50 L60,45 L60,35 Z" fill="#25A9BA" />
        </g>
      </svg>
    </motion.div>
  );
}
