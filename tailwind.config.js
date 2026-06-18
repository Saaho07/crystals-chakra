/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        chakra: {
          bg: '#0a0514', // Deep dark purple/black
          surface: '#150a21', // Dark purple surface
          ring: '#2a1b42', // Slightly lighter purple
          cyan: '#25A9BA', // Cyan from logo
          blue: '#14467D', // Deep blue from logo
          gold: '#D4AF37', // Gold from ads
          goldLight: '#F3E5AB', // Light gold
          text: '#F8FAFC',
          muted: '#94A3B8',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      keyframes: {
        twinkle: {
          '0%, 100%': { opacity: '0.15' },
          '50%': { opacity: '0.9' },
        },
        glowpulse: {
          '0%, 100%': { opacity: '0.35', transform: 'scale(0.94)' },
          '50%': { opacity: '0.65', transform: 'scale(1.06)' },
        },
        align: {
          '0%, 100%': { opacity: '0', transform: 'scale(0.7)' },
          '45%, 55%': { opacity: '0.2', transform: 'scale(1.2)' },
        },
      },
      animation: {
        twinkle: 'twinkle 4s ease-in-out infinite',
        'glow-pulse': 'glowpulse 7s ease-in-out infinite',
        align: 'align 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
