import { ShoppingBag, Sparkles } from 'lucide-react';

export default function Shop() {
  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-[80vh] flex flex-col items-center justify-center text-center">
      <div className="w-24 h-24 bg-chakra-surface rounded-full flex items-center justify-center mb-8 border border-chakra-cyan/30 shadow-[0_0_30px_rgba(37,169,186,0.1)]">
        <ShoppingBag className="w-10 h-10 text-chakra-cyan" />
      </div>
      
      <h1 className="text-5xl font-serif font-bold mb-6 gold-gradient-text">Crystals & Tools</h1>
      
      <p className="text-xl text-chakra-muted max-w-2xl mx-auto mb-12">
        We are carefully curating a collection of high-vibration crystal wristbands and authentic astrological tools to support your journey.
      </p>

      <div className="glass-panel p-8 rounded-2xl max-w-md border-chakra-gold/30 relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-r from-chakra-gold/0 via-chakra-gold/10 to-chakra-gold/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
        <Sparkles className="w-8 h-8 text-chakra-gold mx-auto mb-4" />
        <h2 className="text-2xl font-bold mb-2">Coming Soon</h2>
        <p className="text-chakra-text/80 text-sm">
          Our online store is launching soon. Get your personalized Kundli reading today to know exactly which crystals will benefit your specific planetary alignments.
        </p>
      </div>
    </div>
  );
}
