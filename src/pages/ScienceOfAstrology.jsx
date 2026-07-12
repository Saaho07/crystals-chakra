import { Atom, Compass, BookOpen, LineChart } from 'lucide-react';
import PageMeta from '../components/PageMeta';
import CosmicBackground from '../components/CosmicBackground';
import AnimatedTitle from '../components/AnimatedTitle';

export default function ScienceOfAstrology() {
  return (
    <div className="relative min-h-screen bg-chakra-bg overflow-x-hidden flex flex-col">
      <PageMeta
        title="The Science of Astrology"
        description="Discover the precision mathematics, astronomy, and psychology that form the bedrock of Vedic astrology. Beyond superstition and placebo."
        path="/science"
      />

      {/* Animated constellation background */}
      <CosmicBackground />

      {/* Content */}
      <div className="relative z-10 pt-20 sm:pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="text-center mb-10 sm:mb-16">
          <AnimatedTitle
            text="The Science of Astrology"
            goldWord="Astrology"
            className="text-5xl sm:text-6xl md:text-8xl font-serif font-bold text-center mb-4 sm:mb-8 tracking-wide"
            startDelay={0.1}
          />
          <p className="text-lg sm:text-xl text-chakra-muted max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.9s', animationFillMode: 'both' }}>
            Beyond blind faith. Discover the profound Vedic mathematics, planetary geometry, and karmic patterns that form the bedrock of a true Kundli reading.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 animate-fade-in-up" style={{ animationDelay: '1.2s', animationFillMode: 'both' }}>
          <section className="glass-panel p-6 sm:p-8 rounded-2xl border-t-4 border-t-chakra-cyan flex flex-col justify-start min-h-[280px]">
            <div className="flex items-center gap-4 mb-4 sm:mb-6">
              <div className="p-3 bg-chakra-cyan/10 rounded-lg shrink-0">
                <Atom className="w-6 h-6 sm:w-8 sm:h-8 text-chakra-cyan" />
              </div>
              <h2 className="text-xl sm:text-2xl font-serif font-bold">The Geometry of Karma</h2>
            </div>
            <p className="text-chakra-text/80 leading-relaxed text-sm sm:text-base">
              Vedic Astrology isn't just magic; it is the study of cosmic cycles. The positions of the Navagrahas (nine planets) create subtle gravitational and energetic shifts that influence us on Earth. Just as the Moon undeniably controls the ocean's tides, these planetary movements interact with our own energies, shaping our temperament, our inherent challenges, and the timing of our life's major milestones.
            </p>
          </section>

          <section className="glass-panel p-6 sm:p-8 rounded-2xl border-t-4 border-t-chakra-gold flex flex-col justify-start min-h-[280px]">
            <div className="flex items-center gap-4 mb-4 sm:mb-6">
              <div className="p-3 bg-chakra-gold/10 rounded-lg shrink-0">
                <Compass className="w-6 h-6 sm:w-8 sm:h-8 text-chakra-gold" />
              </div>
              <h2 className="text-xl sm:text-2xl font-serif font-bold">Precision Vedic Mathematics</h2>
            </div>
            <p className="text-chakra-text/80 leading-relaxed text-sm sm:text-base">
              A Kundli (Birth Chart) is not guesswork—it is a highly precise astronomical snapshot of the heavens at the exact moment of your birth. By calculating the exact longitude of the planets, your ascendant (Lagna), and your birth Nakshatra, our experts create a mathematical blueprint of your life. The accuracy of our Bhrigu Patrika relies entirely on these hard mathematical calculations.
            </p>
          </section>

          <section className="glass-panel p-6 sm:p-8 rounded-2xl border-t-4 border-t-chakra-blue flex flex-col justify-start min-h-[280px]">
            <div className="flex items-center gap-4 mb-4 sm:mb-6">
              <div className="p-3 bg-chakra-blue/10 rounded-lg shrink-0">
                <LineChart className="w-6 h-6 sm:w-8 sm:h-8 text-chakra-blue" />
              </div>
              <h2 className="text-xl sm:text-2xl font-serif font-bold">Numerology & Life Patterns</h2>
            </div>
            <p className="text-chakra-text/80 leading-relaxed text-sm sm:text-base">
              Life operates in cycles, and these cycles are governed by numbers. Numerology (Ank Jyotish) decodes your Life Path to reveal your hidden potential. When our ancient Rishis combined these numeric vibrations with planetary time periods (Mahadashas), they weren't just predicting the future—they were mapping out probabilities. We help you read these patterns to make informed decisions in career, family, and wealth.
            </p>
          </section>

          <section className="glass-panel p-6 sm:p-8 rounded-2xl border-t-4 border-t-white/20 flex flex-col justify-start min-h-[280px]">
            <div className="flex items-center gap-4 mb-4 sm:mb-6">
              <div className="p-3 bg-white/5 rounded-lg shrink-0">
                <BookOpen className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h2 className="text-xl sm:text-2xl font-serif font-bold">Remedies That Realign</h2>
            </div>
            <p className="text-chakra-text/80 leading-relaxed text-sm sm:text-base">
              Astrology isn't just about knowing the future; it's about correcting your course. Whether you are facing a difficult Rahu Mahadasha, career stagnation, or relationship hurdles, the right guidance can balance these energies. Through precise gemstone recommendations, tailored mantras, and simple lifestyle shifts, we help you realign your karma to remove obstacles and invite prosperity.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
