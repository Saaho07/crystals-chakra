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
      <CosmicBackground showConstellations={false} />

      {/* Brand Logo watermark — off-centre to the left, animated idle hover */}
      <div className="fixed inset-0 z-[1] pointer-events-none overflow-hidden">
        <div
          className="absolute animate-logo-float"
          style={{
            top: '15%',
            left: '-2%',
            width: '52vw',
            maxWidth: '650px',
            opacity: 0.3,
          }}
        >
          {/* Delicate outline blueprint of the logo for watermark */}
          <svg viewBox="360 300 360 360" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-chakra-cyan" style={{ filter: 'drop-shadow(0 0 20px rgba(37,169,186,0.6)) brightness(1.5)' }}>
            <defs>
<clipPath id="clip_1">
<path transform="matrix(1,0,0,-1,0,1080)" d="M0 1080H1080V0H0Z"/>
</clipPath>
</defs>
<g  >
<path transform="matrix(1,0,0,-1,395.2626,622.037)" d="M0 0V254.551H-9.502V-9.502H10.499V0Z" fill="#179daf"/>
<path transform="matrix(1,0,0,-1,385.7609,324.3954)" d="M0 0V-19.336H9.502V-9.502H264.718V0Z" fill="#179daf"/>
<path transform="matrix(1,0,0,-1,684.7562,622.037)" d="M0 0H-255.24V-9.502H9.502V9.834H0Z" fill="#179daf"/>
<path transform="matrix(1,0,0,-1,674.2331,324.3954)" d="M0 0V-9.502H10.523V-264.053H20.025V0Z" fill="#179daf"/>
<path transform="matrix(1,0,0,-1,657.6056,638.6461)" d="M0 0V-2.51H-235.211V43.061H-255.205V33.583H-244.732V-11.988H9.521V0ZM-235.211 278.272V297.617H-244.732V287.793H-290.26V33.583H-278.965V43.061H-280.739V278.272ZM43.796 287.793V278.272H45.571V43.061H0V23.716H9.521V33.583H55.049V287.793ZM9.521 287.793V333.364H-244.732V321.376H-235.211V323.843H0V278.272H20.037V287.793Z" fill="#034587"/>
<g clipPath="url(#clip_1)">
<path transform="matrix(1,0,0,-1,522.4973,570.8344)" d="M0 0V-39.365L-37.892-2.127C-47.334 7.157-47.284 22.406-37.769 31.618L1.317 69.501C10.506 78.408 25.107 78.408 34.296 69.5L73.376 31.618C82.89 22.406 82.948 7.157 73.498-2.127L35.614-39.365V0L49.677 14.623 17.807 45.178-14.063 14.623Z" fill="#034587"/>
<path transform="matrix(1,0,0,-1,446.9356,461.08729)" d="M0 0H-39.365L-2.127 37.892C7.157 47.334 22.406 47.284 31.618 37.769L69.501-1.317C78.408-10.506 78.408-25.107 69.5-34.296L31.618-73.376C22.406-82.89 7.157-82.948-2.127-73.498L-39.365-35.614H0L14.623-49.677 45.178-17.807 14.623 14.063Z" fill="#179daf"/>
<path transform="matrix(1,0,0,-1,557.5027,385.08198)" d="M0 0V39.365L37.892 2.127C47.334-7.157 47.284-22.406 37.769-31.618L-1.317-69.501C-10.506-78.408-25.107-78.408-34.296-69.5L-73.376-31.618C-82.89-22.406-82.948-7.157-73.498 2.127L-35.614 39.365V0L-49.677-14.623-17.807-45.178 14.063-14.623Z" fill="#034587"/>
<path transform="matrix(1,0,0,-1,633.0644,494.82923)" d="M0 0H39.365L2.127-37.892C-7.157-47.334-22.406-47.284-31.618-37.769L-69.501 1.317C-78.408 10.506-78.408 25.107-69.5 34.296L-31.618 73.376C-22.406 82.89-7.157 82.948 2.127 73.498L39.365 35.614H0L-14.623 49.677-45.178 17.807-14.623-14.063Z" fill="#179daf"/>
</g>
</g>
          </svg>
        </div>
      </div>
      {/* Content */}
      <div className="relative z-10 pt-20 sm:pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full">
        <div className="text-center mb-10 sm:mb-16">
          <AnimatedTitle
            text="The Science of Astrology"
            className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-4 sm:mb-6"
            startDelay={0.1}
          />
          <p className="text-lg sm:text-xl text-chakra-muted max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '1.2s', animationFillMode: 'both' }}>
            Beyond superstition and placebo. Discover the profound mathematics, astronomy, and psychology that form the bedrock of true astrological readings.
          </p>
        </div>

        <div className="space-y-10 sm:space-y-16 animate-fade-in-up" style={{ animationDelay: '1.5s', animationFillMode: 'both' }}>
          <section className="glass-panel p-6 sm:p-8 md:p-10 rounded-2xl border-l-4 border-l-chakra-cyan">
            <div className="flex items-center gap-4 mb-4 sm:mb-6">
              <div className="p-3 bg-chakra-cyan/10 rounded-lg shrink-0">
                <Atom className="w-6 h-6 sm:w-8 sm:h-8 text-chakra-cyan" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold">Cosmic Geometry & Energy</h2>
            </div>
            <p className="text-chakra-text/80 leading-relaxed mb-4 text-sm sm:text-base">
              Astrology is fundamentally the study of cycles and geometric relationships. The gravitational and electromagnetic fields of massive planetary bodies in our solar system interact with Earth constantly. Just as the Moon undeniably controls the ocean's tides, these subtle but massive energetic shifts influence the delicate electrochemical balances within the human brain and body during critical developmental phases.
            </p>
          </section>

          <section className="glass-panel p-6 sm:p-8 md:p-10 rounded-2xl border-l-4 border-l-chakra-gold">
            <div className="flex items-center gap-4 mb-4 sm:mb-6">
              <div className="p-3 bg-chakra-gold/10 rounded-lg shrink-0">
                <Compass className="w-6 h-6 sm:w-8 sm:h-8 text-chakra-gold" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold">Precision Mathematics</h2>
            </div>
            <p className="text-chakra-text/80 leading-relaxed mb-4 text-sm sm:text-base">
              A Kundli (Birth Chart) is not a magical drawing; it is a highly precise astronomical snapshot. It calculates the exact longitudinal positions of planets, the Earth's axial tilt, and the specific latitude and longitude of your birthplace. This requires complex spherical trigonometry. The accuracy of a Bhrigu Patrika relies entirely on these hard mathematical data points, completely removing the "guesswork" often mistakenly associated with astrology.
            </p>
          </section>

          <section className="glass-panel p-6 sm:p-8 md:p-10 rounded-2xl border-l-4 border-l-chakra-blue">
            <div className="flex items-center gap-4 mb-4 sm:mb-6">
              <div className="p-3 bg-chakra-blue/10 rounded-lg shrink-0">
                <LineChart className="w-6 h-6 sm:w-8 sm:h-8 text-chakra-blue" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold">Predictive Psychology & Patterns</h2>
            </div>
            <p className="text-chakra-text/80 leading-relaxed mb-4 text-sm sm:text-base">
              Human behavior operates in patterns. Ancient astrologers observed these patterns over millennia, correlating astronomical positions with historical and psychological trends (what Carl Jung later called "Synchronicity"). When an expert astrologer reads your Birhaat Kundli, they are interpreting a complex data matrix of these established psychological and situational probabilities, offering strategic insights rather than fatalistic decrees.
            </p>
          </section>

          <section className="glass-panel p-6 sm:p-8 md:p-10 rounded-2xl border-l-4 border-l-white/20">
            <div className="flex items-center gap-4 mb-4 sm:mb-6">
              <div className="p-3 bg-white/5 rounded-lg shrink-0">
                <BookOpen className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold">Not a Placebo</h2>
            </div>
            <p className="text-chakra-text/80 leading-relaxed mb-4 text-sm sm:text-base">
              The "placebo effect" requires belief to function. However, the foundational rules of Vedic Astrology operate independently of belief. Financial cycles, agricultural timings, and socio-political shifts have been accurately predicted using these mathematical models long before the subjects involved had any "belief" in the system. Our goal at Crystals Chakra is to return this pure, unadulterated science to those seeking genuine guidance.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
