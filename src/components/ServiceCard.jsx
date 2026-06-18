import { CheckCircle } from 'lucide-react';
import WhatsAppCTA from './WhatsAppCTA';

export default function ServiceCard({ title, price, features, isPopular, oldPrice }) {
  return (
    <div className={`relative glass-panel bg-chakra-surface/30 backdrop-blur-xl rounded-2xl p-8 flex flex-col h-full ${isPopular ? 'border-chakra-gold ring-1 ring-chakra-gold/50' : 'border-white/10'}`}>
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-chakra-goldLight via-chakra-gold to-chakra-goldLight text-chakra-bg px-4 py-1 rounded-full text-sm font-bold shadow-lg">
          MOST POPULAR
        </div>
      )}
      
      <h3 className="text-2xl font-serif font-bold text-center mb-2 gold-gradient-text">{title}</h3>
      
      <div className="text-center mb-6">
        <span className="text-4xl font-bold text-white">₹{price}</span>
        {oldPrice && <span className="text-chakra-muted line-through ml-2">₹{oldPrice}</span>}
      </div>

      <div className="flex-1 space-y-4 mb-8">
        {features.map((feature, idx) => (
          <div key={idx} className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-chakra-cyan shrink-0 mt-0.5" />
            <span className="text-chakra-text/90 text-sm">{feature}</span>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-auto">
        <WhatsAppCTA message={`Hi! I'm interested in the ${title} (₹${price}). Please provide more details.`} />
      </div>
    </div>
  );
}
