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
            Beyond superstition and placebo. Discover the profound mathematics, astronomy, and psychology that form the bedrock of true astrological readings.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 animate-fade-in-up" style={{ animationDelay: '1.2s', animationFillMode: 'both' }}>
          <section className="glass-panel p-6 sm:p-8 rounded-2xl border-t-4 border-t-chakra-cyan flex flex-col justify-start min-h-[280px]">
            <div className="flex items-center gap-4 mb-4 sm:mb-6">
              <div className="p-3 bg-chakra-cyan/10 rounded-lg shrink-0">
                <Atom className="w-6 h-6 sm:w-8 sm:h-8 text-chakra-cyan" />
              </div>
              <h2 className="text-xl sm:text-2xl font-serif font-bold">Cosmic Geometry & Energy</h2>
            </div>
            <p className="text-chakra-text/80 leading-relaxed text-sm sm:text-base">
              Astrology is fundamentally the study of cycles and geometric relationships. The gravitational and electromagnetic fields of massive planetary bodies in our solar system interact with Earth constantly. Just as the Moon undeniably controls the ocean's tides, these subtle but massive energetic shifts influence the delicate electrochemical balances within the human brain and body during critical developmental phases.
            </p>
          </section>

          <section className="glass-panel p-6 sm:p-8 rounded-2xl border-t-4 border-t-chakra-gold flex flex-col justify-start min-h-[280px]">
            <div className="flex items-center gap-4 mb-4 sm:mb-6">
              <div className="p-3 bg-chakra-gold/10 rounded-lg shrink-0">
                <Compass className="w-6 h-6 sm:w-8 sm:h-8 text-chakra-gold" />
              </div>
              <h2 className="text-xl sm:text-2xl font-serif font-bold">Precision Mathematics</h2>
            </div>
            <p className="text-chakra-text/80 leading-relaxed text-sm sm:text-base">
              A Kundli (Birth Chart) is not a magical drawing; it is a highly precise astronomical snapshot. It calculates the exact longitudinal positions of planets, the Earth's axial tilt, and the specific latitude and longitude of your birthplace. This requires complex spherical trigonometry. The accuracy of a Bhrigu Patrika relies entirely on these hard mathematical data points, completely removing the "guesswork" often mistakenly associated with astrology.
            </p>
          </section>

          <section className="glass-panel p-6 sm:p-8 rounded-2xl border-t-4 border-t-chakra-blue flex flex-col justify-start min-h-[280px]">
            <div className="flex items-center gap-4 mb-4 sm:mb-6">
              <div className="p-3 bg-chakra-blue/10 rounded-lg shrink-0">
                <LineChart className="w-6 h-6 sm:w-8 sm:h-8 text-chakra-blue" />
              </div>
              <h2 className="text-xl sm:text-2xl font-serif font-bold">Predictive Psychology & Patterns</h2>
            </div>
            <p className="text-chakra-text/80 leading-relaxed text-sm sm:text-base">
              Human behavior operates in patterns. Ancient astrologers observed these patterns over millennia, correlating astronomical positions with historical and psychological trends (what Carl Jung later called "Synchronicity"). When an expert astrologer reads your Birhaat Kundli, they are interpreting a complex data matrix of these established psychological and situational probabilities, offering strategic insights rather than fatalistic decrees.
            </p>
          </section>

          <section className="glass-panel p-6 sm:p-8 rounded-2xl border-t-4 border-t-white/20 flex flex-col justify-start min-h-[280px]">
            <div className="flex items-center gap-4 mb-4 sm:mb-6">
              <div className="p-3 bg-white/5 rounded-lg shrink-0">
                <BookOpen className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h2 className="text-xl sm:text-2xl font-serif font-bold">Not a Placebo</h2>
            </div>
            <p className="text-chakra-text/80 leading-relaxed text-sm sm:text-base">
              The "placebo effect" requires belief to function. However, the foundational rules of Vedic Astrology operate independently of belief. Financial cycles, agricultural timings, and socio-political shifts have been accurately predicted using these mathematical models long before the subjects involved had any "belief" in the system. Our goal at Crystals Chakra is to return this pure, unadulterated science to those seeking genuine guidance.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
