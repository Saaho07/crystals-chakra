import ServiceCard from '../components/ServiceCard';
import Starfield from '../components/Starfield';
import ConstellationLines from '../components/ConstellationLines';

export default function Services() {
  return (
    <div className="relative min-h-screen bg-chakra-bg overflow-hidden flex flex-col pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      {/* Background Artifacts */}
      <div className="fixed inset-0 z-0">
        <Starfield />
        <ConstellationLines />
      </div>
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-chakra-bg/40 via-chakra-surface/80 to-chakra-bg pointer-events-none" />

      {/* Foreground Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 gold-gradient-text">Our Kundli Services</h1>
        <p className="text-xl text-chakra-muted max-w-3xl mx-auto">
          Prepared by expert astrologers, our personalized Patrikas decode the cosmic geometry at the time of your birth. 
          Discover your strengths, anticipate challenges, and align your life with the universe.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <ServiceCard 
          title="Birhaat Kundli"
          price="500"
          features={[
            "Basic Life Overview",
            "Personality & Traits Analysis",
            "Career & Financial Success",
            "Marriage & Relationship Insights",
            "Major Doshas & Basic Remedies",
            "100% Personalized & Confidential"
          ]}
        />
        <ServiceCard 
          title="Bhrigu Patrika"
          price="700"
          isPopular={true}
          features={[
            "Everything in Birhaat Kundli",
            "In-depth Karma & Life Path",
            "Detailed Health Predictions",
            "Year-by-Year Breakdown (Next 5 Years)",
            "Specific Gemstone & Mantra Recommendations",
            "Favorable Timings for Major Decisions"
          ]}
        />
        <ServiceCard 
          title="Parashara Patrika Plus"
          price="1000"
          features={[
            "Complete Astrological Master Blueprint",
            "Detailed Vimshottari Dasha Analysis",
            "Micro-level Transit (Gochar) Impact",
            "Advanced Wealth & Property Yogas",
            "Intensive Relationship Compatibility",
            "Comprehensive, Powerful Custom Remedies"
          ]}
        />
      </div>

      <div className="mt-24 glass-panel rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto border-chakra-cyan/30">
        <h2 className="text-3xl font-serif font-bold mb-4">Need Help Choosing?</h2>
        <p className="text-chakra-muted mb-8">
          Not sure which Patrika is right for you? Message our team of expert astrologers on WhatsApp for a free consultation to find the perfect reading for your current life situation.
        </p>
        <a 
          href="https://wa.me/919810228209?text=Hello,%20I%20need%20help%20choosing%20a%20Kundli%20reading." 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-transparent border-2 border-chakra-cyan text-chakra-cyan hover:bg-chakra-cyan hover:text-chakra-bg px-8 py-3 rounded-full font-bold transition-all"
        >
          Chat with an Expert
        </a>
      </div>
      </div>
    </div>
  );
}
