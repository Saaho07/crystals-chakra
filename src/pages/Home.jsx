import { useState, useRef, useEffect } from 'react';
import { ArrowRight, Star, Shield, Brain, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';
import Starfield from '../components/Starfield';
import OrbitSystem from '../components/OrbitSystem';
import ReadingOverlay from '../components/ReadingOverlay';
import ZodiacWheel from '../components/ZodiacWheel';
import PageMeta from '../components/PageMeta';
import { generateCosmicState, generateReading, PATTERN_THEMES } from '../readingEngine';

const TESTIMONIALS = [
  {
    name: 'Priya M.',
    city: 'Mumbai',
    stars: 5,
    text: 'The Bhrigu Patrika was astonishingly accurate about my career shift. The remedies they suggested actually aligned with what my family pandit said independently. This is the real deal.',
  },
  {
    name: 'Rahul S.',
    city: 'Delhi',
    stars: 5,
    text: "I was skeptical, but the year-by-year breakdown matched events that had already happened in my life. That's what convinced me. Ordered readings for my entire family after that.",
  },
  {
    name: 'Ananya K.',
    city: 'Bangalore',
    stars: 5,
    text: "The gemstone recommendations were spot on — I was already wearing the wrong stone for my Rahu placement. Within weeks of switching, I noticed genuine changes. Highly recommend the Parashara Patrika Plus.",
  },
];

const FAQ_ITEMS = [
  {
    q: 'How does the reading process work?',
    a: "After you place your order via WhatsApp, we'll ask for your exact date, time, and place of birth. Our expert astrologers then prepare your personalized Kundli and deliver a detailed PDF report within 3-5 business days.",
  },
  {
    q: 'How long does delivery take?',
    a: 'Standard delivery is 3-5 business days. For urgent requests, we offer a 24-hour express option at an additional ₹200.',
  },
  {
    q: 'Is my birth data kept confidential?',
    a: 'Absolutely. Your personal information is never shared, sold, or stored beyond what is needed to prepare your reading. We take data privacy extremely seriously.',
  },
  {
    q: "What if I'm not satisfied?",
    a: 'We offer a full refund within 7 days if you feel the reading does not meet the described scope. Simply message us on WhatsApp with your order details.',
  },
  {
    q: 'Do I need to believe in astrology for it to work?',
    a: "No. Vedic astrology is based on mathematical calculations of planetary positions, not belief. The insights are derived from astronomical data and millennia of documented correlations.",
  },
];

function FAQItem({ item }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/10">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full py-5 text-left"
      >
        <span className="text-base sm:text-lg font-medium text-white pr-4">{item.q}</span>
        <ChevronDown className={`w-5 h-5 text-chakra-cyan shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-40 pb-5' : 'max-h-0'}`}
      >
        <p className="text-chakra-muted text-sm sm:text-base leading-relaxed">{item.a}</p>
      </div>
    </div>
  );
}

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [cosmicState, setCosmicState] = useState(null);
  const [readingLines, setReadingLines] = useState([]);
  const [userData, setUserData] = useState(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleGenerate = (data) => {
    setUserData(data);
    const inputString = `${data.name}-${data.dob}`;
    const state = generateCosmicState(inputString);
    setCosmicState(state);
    setReadingLines(generateReading(state, 'neutral'));
  };

  const handleClose = () => {
    setIsOpen(false);
    setCosmicState(null);
  };

  return (
    <div className="relative min-h-screen bg-chakra-bg overflow-x-hidden flex flex-col">
      <PageMeta path="/" />

      {/* Background layer – parallax */}
      <div
        className="fixed inset-0 z-0"
        style={{ transform: `translateY(${scrollY * 0.15}px)` }}
      >
        <Starfield />
      </div>

      <div className="fixed inset-0 z-[2] bg-gradient-to-b from-chakra-bg/30 via-chakra-surface/60 to-chakra-bg pointer-events-none" />

      {/* Hero Section */}
      <section className="relative z-10 pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center min-h-[85vh]">
        
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold text-center mb-4 sm:mb-6 tracking-tight">
          Unlock Your <span className="gold-gradient-text">Destiny</span>
        </h1>
        
        <p className="text-lg sm:text-xl md:text-2xl text-chakra-muted text-center max-w-2xl mb-8 sm:mb-12 leading-relaxed px-4">
          Align, Heal, and Transform with precision astrological science. Discover your true path with our expert Kundli readings.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center w-full sm:w-auto px-4 sm:px-0">
          <button 
            onClick={handleOpenModal}
            className="w-full sm:w-auto bg-chakra-cyan hover:bg-chakra-blue text-chakra-bg font-bold py-4 px-8 rounded-full transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(37,169,186,0.3)] hover:shadow-[0_0_30px_rgba(20,70,125,0.5)]"
          >
            Get a Free Cosmic Snapshot <ArrowRight className="w-5 h-5" />
          </button>
          <Link to="/science" className="text-chakra-text hover:text-chakra-gold py-3 sm:py-4 px-8 font-medium transition-colors flex items-center gap-2">
            Explore the Science
          </Link>
        </div>

        {/* Cosmic Snapshot Disclaimer */}
        <p className="mt-3 text-chakra-muted/60 text-xs text-center">
          ✨ This is a fun preview experience — your full Kundli uses your exact birth data
        </p>

        {/* Trust Banner */}
        <div className="mt-12 sm:mt-20 flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-16 opacity-80">
          <div className="flex flex-col items-center gap-2">
            <Star className="w-6 h-6 sm:w-8 sm:h-8 text-chakra-gold" />
            <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase">10,000+ Customers</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-chakra-gold" />
            <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase">100% Confidential</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Brain className="w-6 h-6 sm:w-8 sm:h-8 text-chakra-gold" />
            <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase">Expert Astrologers</span>
          </div>
        </div>
      </section>

      {/* Services Preview Section — with zodiac wheel behind */}
      <section className="relative z-10 py-16 sm:py-24 bg-chakra-surface/50 border-t border-white/5 backdrop-blur-sm overflow-hidden">
        {/* Large zodiac wheel behind cards, slow rotation */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
          <ZodiacWheel size={900} className="hidden sm:block" />
          <ZodiacWheel size={500} className="block sm:hidden" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-4">Reveal What Your Stars Say</h2>
            <p className="text-chakra-muted max-w-2xl mx-auto text-sm sm:text-base">Your future is already written, it's time to understand it. Choose from our specialized, deeply personalized Kundli readings.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
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
          
          <div className="mt-10 sm:mt-12 text-center">
            <Link to="/services" className="text-chakra-gold hover:text-chakra-goldLight font-semibold inline-flex items-center gap-2 transition-colors">
              View all services details <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative z-10 py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-4">What Our Clients Say</h2>
            <p className="text-chakra-muted text-sm sm:text-base">Real experiences from people who discovered their cosmic blueprint.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="glass-panel rounded-2xl p-6 sm:p-8 flex flex-col">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-chakra-gold fill-chakra-gold" />
                  ))}
                </div>
                <p className="text-chakra-text/90 text-sm leading-relaxed flex-1 mb-6">"{t.text}"</p>
                <div className="border-t border-white/10 pt-4">
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-chakra-muted text-xs">{t.city}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative z-10 py-16 sm:py-24 bg-chakra-surface/30 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-chakra-muted text-sm sm:text-base">Everything you need to know before ordering your reading.</p>
          </div>

          <div className="glass-panel rounded-2xl p-4 sm:p-8">
            {FAQ_ITEMS.map((item, i) => (
              <FAQItem key={i} item={item} />
            ))}
          </div>
        </div>
      </section>

      <ReadingOverlay
        isOpen={isOpen}
        lines={readingLines}
        theme={cosmicState ? PATTERN_THEMES[cosmicState.activeConstellation] : ''}
        onClose={handleClose}
        onGenerate={handleGenerate}
        userData={userData}
      />
    </div>
  );
}
