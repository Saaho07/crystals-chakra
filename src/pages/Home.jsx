import { useState, useRef, useEffect } from 'react';
import { ArrowRight, Star, Shield, Brain } from 'lucide-react';
import { Link } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';
import Starfield from '../components/Starfield';
import OrbitSystem from '../components/OrbitSystem';
import ReadingOverlay from '../components/ReadingOverlay';
import CursorGlow from '../components/CursorGlow';
import { generateCosmicState, generateReading, PATTERN_THEMES } from '../readingEngine';

const PERSPECTIVES = ['neutral', 'them', 'you'];

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [cosmicState, setCosmicState] = useState(null);
  const [perspective, setPerspective] = useState('neutral');
  const [readingLines, setReadingLines] = useState([]);
  const [scrollY, setScrollY] = useState(0);
  const scrollRef = useRef(null);

  // Parallax scroll listener
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleGetReading = () => {
    const state = generateCosmicState();
    setCosmicState(state);
    setPerspective('neutral');
    setReadingLines(generateReading(state, 'neutral'));
    setTimeout(() => setIsOpen(true), 250);
  };

  const regenerate = (state, p) => {
    setPerspective(p);
    setReadingLines(generateReading(state, p));
  };

  const handleShift = () => {
    const next = PERSPECTIVES[(PERSPECTIVES.indexOf(perspective) + 1) % PERSPECTIVES.length];
    regenerate(cosmicState, next);
  };

  const handleClose = () => {
    setIsOpen(false);
    setCosmicState(null);
  };

  return (
    <div className="relative min-h-screen bg-chakra-bg overflow-x-hidden flex flex-col">
      {/* Background layer – parallax at 0.3x scroll speed */}
      <div
        className="fixed inset-0 z-0"
        style={{ transform: `translateY(${scrollY * 0.15}px)` }}
      >
        <Starfield />
      </div>

      {/* Cursor glow – follows mouse globally */}
      <CursorGlow />

      <div className="fixed inset-0 z-[2] bg-gradient-to-b from-chakra-bg/30 via-chakra-surface/60 to-chakra-bg pointer-events-none" />

      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center min-h-[80vh]">
        
        {/* Zodiac Wheel – parallax at 0.5x scroll speed */}
        <div
          className="mb-8"
          style={{ transform: `translateY(${scrollY * -0.2}px)` }}
        >
          <OrbitSystem cosmicState={cosmicState} />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-center mb-6 tracking-tight">
          Unlock Your <span className="gold-gradient-text">Destiny</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-chakra-muted text-center max-w-2xl mb-12 leading-relaxed">
          Align, Heal, and Transform with precision astrological science. Discover your true path with our expert Kundli readings.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 items-center">
          <button 
            onClick={handleGetReading}
            className="bg-chakra-cyan hover:bg-chakra-blue text-chakra-bg font-bold py-4 px-8 rounded-full transition-all transform hover:scale-105 flex items-center gap-2 shadow-[0_0_20px_rgba(37,169,186,0.3)] hover:shadow-[0_0_30px_rgba(20,70,125,0.5)]"
          >
            Get a Free Cosmic Snapshot <ArrowRight className="w-5 h-5" />
          </button>
          <Link to="/science" className="text-chakra-text hover:text-chakra-gold py-4 px-8 font-medium transition-colors flex items-center gap-2">
            Explore the Science
          </Link>
        </div>

        {/* Trust Banner */}
        <div className="mt-20 flex flex-wrap justify-center gap-8 md:gap-16 opacity-80">
          <div className="flex flex-col items-center gap-2">
            <Star className="w-8 h-8 text-chakra-gold" />
            <span className="text-sm font-semibold tracking-widest uppercase">10,000+ Happy Customers</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Shield className="w-8 h-8 text-chakra-gold" />
            <span className="text-sm font-semibold tracking-widest uppercase">100% Confidential</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Brain className="w-8 h-8 text-chakra-gold" />
            <span className="text-sm font-semibold tracking-widest uppercase">Expert Astrologers</span>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="relative z-10 py-24 bg-chakra-surface/50 border-t border-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">Reveal What Your Stars Say</h2>
            <p className="text-chakra-muted max-w-2xl mx-auto">Your future is already written, it's time to understand it. Choose from our specialized, deeply personalized Kundli readings.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard 
              title="Birhaat Kundli"
              price="500"
              features={[
                "Life Purpose & Hidden Strengths",
                "Career Growth & Financial Success",
                "Marriage & Relationship Insights",
                "Doshas & Powerful Remedies"
              ]}
            />
            <ServiceCard 
              title="Bhrigu Patrika"
              price="700"
              isPopular={true}
              features={[
                "Detailed Life Analysis",
                "Past Life Karma Influences",
                "Year-by-Year Predictions",
                "Specific Gemstone Recommendations"
              ]}
            />
            <ServiceCard 
              title="Parashara Patrika Plus"
              price="1000"
              features={[
                "Complete Astrological Audit",
                "Detailed Dashas & Transits",
                "Career & Wealth Specifics",
                "Comprehensive Remedy Plan"
              ]}
            />
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/services" className="text-chakra-gold hover:text-chakra-goldLight font-semibold inline-flex items-center gap-2 transition-colors">
              View all services details <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <ReadingOverlay
        isOpen={isOpen}
        lines={readingLines}
        theme={cosmicState ? PATTERN_THEMES[cosmicState.activeConstellation] : ''}
        perspective={perspective}
        onClose={handleClose}
        onShift={handleShift}
        onFocusThem={() => regenerate(cosmicState, 'them')}
        onFocusYou={() => regenerate(cosmicState, 'you')}
      />
    </div>
  );
}

