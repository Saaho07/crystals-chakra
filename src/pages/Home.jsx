import { useState } from 'react';
import { ArrowRight, Star, Shield, Brain, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ServiceCard from '../components/ServiceCard';
import CosmicBackground from '../components/CosmicBackground';
import ReadingOverlay from '../components/ReadingOverlay';
import ZodiacWheel from '../components/ZodiacWheel';
import PageMeta from '../components/PageMeta';
import AnimatedTitle from '../components/AnimatedTitle';
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
    <div className="border-b border-white/10 last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full py-5 sm:py-6 text-left group/faq"
      >
        <span className="text-base sm:text-lg font-medium text-white pr-4 group-hover/faq:text-chakra-cyan transition-colors">{item.q}</span>
        <ChevronDown className={`w-5 h-5 text-chakra-cyan shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-out ${open ? 'max-h-40 pb-5' : 'max-h-0'}`}
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

  // Calculate when the title animation finishes so subsequent elements can sequence after it
  const heroTitle = 'Unlock Your Destiny';
  const totalChars = heroTitle.length;
  const titleAnimEnd = 0.3 + 0.8 - 0.2; // startDelay + text anim - overlap buffer

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

      {/* Animated constellation background */}
      <CosmicBackground />

      {/* Hero Section */}
      <section className="relative z-10 pt-[18vh] pb-[10vh] px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-start min-h-screen">
        
        <AnimatedTitle
          text="Unlock Your Destiny"
          goldWord="Destiny"
          className="text-5xl sm:text-6xl md:text-8xl font-serif font-bold text-center mb-4 sm:mb-8 tracking-wide"
          startDelay={0.3}
        />
        
        <motion.p
          className="text-lg sm:text-xl md:text-2xl text-chakra-muted text-center max-w-4xl mb-10 sm:mb-14 leading-relaxed px-4"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: titleAnimEnd, ease: 'easeOut' }}
        >
          Align, Heal, and Transform with precision astrological science. Discover your true path with our expert Kundli readings.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center w-full sm:w-auto px-4 sm:px-0"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: titleAnimEnd + 0.15, ease: 'easeOut' }}
        >
          {/* Snapshot Button Container with Tooltip */}
          <div className="relative group w-full sm:w-[320px]">
            {/* Desktop Tooltip */}
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 bg-chakra-surface/90 backdrop-blur-md border border-white/10 text-chakra-muted text-xs px-4 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden sm:block whitespace-nowrap z-20">
              ✨ This is a fun preview experience — your full Kundli uses your exact birth data
              {/* Tooltip Arrow */}
              <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-chakra-surface/90 border-b border-r border-white/10 rotate-45"></div>
            </div>

            <button 
              onClick={handleOpenModal}
              className="w-full bg-chakra-cyan hover:bg-chakra-blue text-chakra-bg font-bold py-4 px-8 rounded-full transition-all transform group-hover:scale-105 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(37,169,186,0.3)] hover:shadow-[0_0_30px_rgba(20,70,125,0.5)]"
            >
              Get a Free Cosmic Snapshot <ArrowRight className="w-5 h-5 shrink-0" />
            </button>
          </div>

          <Link 
            to="/science" 
            className="w-full sm:w-[320px] border border-white/10 bg-white/5 hover:bg-white/10 hover:border-chakra-cyan/30 text-white font-bold py-4 px-8 rounded-full transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-sm text-center"
          >
            Explore the Science
          </Link>
        </motion.div>

        {/* Trust Banner */}
        <motion.div
          className="mt-12 sm:mt-20 flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-16"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 0.8, y: 0 }}
          transition={{ duration: 0.6, delay: titleAnimEnd + 0.5, ease: 'easeOut' }}
        >
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
        </motion.div>
      </section>

      {/* Services Preview Section — transparent, no separate bg */}
      <section className="relative z-10 py-20 sm:py-28 bg-chakra-surface/50 border-t border-b border-white/5 backdrop-blur-sm overflow-hidden">
        {/* Zodiac wheel spanning full viewport width */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.08] overflow-visible">
          <div className="w-[100vw] h-[100vw] flex items-center justify-center">
            <ZodiacWheel size={2000} className="min-w-[100vw] min-h-[100vw]" />
          </div>
        </div>

        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-5">Reveal What Your Stars Say</h2>
            <p className="text-chakra-muted max-w-3xl mx-auto text-base sm:text-lg">Your future is already written, it's time to understand it. Choose from our specialized, deeply personalized Kundli readings.</p>
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
          
          <div className="mt-10 sm:mt-14 text-center">
            <Link to="/services" className="text-chakra-gold hover:text-chakra-goldLight font-semibold inline-flex items-center gap-2 transition-colors text-base sm:text-lg">
              View all services details <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section — transparent, no separate bg */}
      <section className="relative z-10 py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-5">What Our Clients Say</h2>
            <p className="text-chakra-muted text-base sm:text-lg">Real experiences from people who discovered their cosmic blueprint.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="glass-panel rounded-2xl p-6 sm:p-8 flex flex-col">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-chakra-gold fill-chakra-gold" />
                  ))}
                </div>
                <p className="text-chakra-text/90 text-sm sm:text-base leading-relaxed flex-1 mb-6">"{t.text}"</p>
                <div className="border-t border-white/10 pt-4">
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-chakra-muted text-xs">{t.city}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section — transparent, no separate bg */}
      <section className="relative z-10 py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-5">Frequently Asked Questions</h2>
            <p className="text-chakra-muted text-base sm:text-lg">Everything you need to know before ordering your reading.</p>
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
