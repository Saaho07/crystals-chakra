import { useState } from 'react';
import { Sparkles, Mail, Bell } from 'lucide-react';
import PageMeta from '../components/PageMeta';

const TEASER_PRODUCTS = [
  {
    name: 'Tiger Eye Clarity Band',
    description: 'Grounding, focus, and protection. Ideal for Rahu-afflicted charts.',
    price: '₹1,200',
  },
  {
    name: 'Rose Quartz Heart Band',
    description: 'Love, emotional healing, and Venus strengthening. Perfect for relationship harmony.',
    price: '₹1,400',
  },
  {
    name: 'Amethyst Crown Band',
    description: 'Intuition, spiritual clarity, and Saturn balance. For meditation and inner peace.',
    price: '₹1,600',
  },
];

export default function Shop() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    // Store to localStorage for now
    const existing = JSON.parse(localStorage.getItem('cc_waitlist') || '[]');
    existing.push({ email, timestamp: new Date().toISOString() });
    localStorage.setItem('cc_waitlist', JSON.stringify(existing));
    setSubmitted(true);
    setEmail('');
  };

  return (
    <div className="pt-24 sm:pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-[80vh]">
      <PageMeta 
        title="Crystal Shop" 
        description="Coming soon: high-vibration crystal wristbands matched to your planetary alignments. Join the waitlist."
        path="/shop"
      />

      <div className="text-center mb-12 sm:mb-16">
        <div className="w-20 h-20 sm:w-24 sm:h-24 bg-chakra-surface rounded-full flex items-center justify-center mb-6 sm:mb-8 mx-auto border border-chakra-cyan/30 shadow-[0_0_30px_rgba(37,169,186,0.1)]">
          <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 text-chakra-gold" />
        </div>
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-4 sm:mb-6 gold-gradient-text">Crystals & Tools</h1>
        
        <p className="text-lg sm:text-xl text-chakra-muted max-w-2xl mx-auto mb-8 sm:mb-12">
          We're curating a collection of high-vibration crystal wristbands matched to your specific planetary alignments. Be the first to know when we launch.
        </p>

        {/* Waitlist Form */}
        <div className="max-w-md mx-auto">
          {submitted ? (
            <div className="glass-panel rounded-2xl p-6 sm:p-8 text-center">
              <Bell className="w-8 h-8 text-chakra-gold mx-auto mb-3" />
              <p className="text-chakra-gold font-bold mb-1">You're on the list!</p>
              <p className="text-chakra-muted text-sm">We'll notify you the moment our crystal collection goes live.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-chakra-muted" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full pl-12 pr-4 py-4 rounded-full bg-chakra-surface border border-white/10 text-white placeholder:text-chakra-muted/50 focus:outline-none focus:border-chakra-cyan focus:ring-1 focus:ring-chakra-cyan/30 transition-colors"
                />
              </div>
              <button
                type="submit"
                className="bg-chakra-cyan hover:bg-chakra-blue text-chakra-bg font-bold py-4 px-8 rounded-full transition-all hover:scale-105 whitespace-nowrap"
              >
                Join Waitlist
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Teaser Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
        {TEASER_PRODUCTS.map((product, i) => (
          <div key={i} className="glass-panel rounded-2xl p-6 sm:p-8 flex flex-col items-center text-center relative overflow-hidden group">
            <div className="w-16 h-16 bg-chakra-gold/10 rounded-full flex items-center justify-center mb-4">
              <Sparkles className="w-7 h-7 text-chakra-gold" />
            </div>
            <h3 className="text-lg font-bold mb-2">{product.name}</h3>
            <p className="text-chakra-muted text-sm mb-4 flex-1">{product.description}</p>
            <span className="text-chakra-gold font-bold text-lg mb-4">{product.price}</span>
            <button 
              onClick={() => {
                // Also store interest to localStorage
                const interests = JSON.parse(localStorage.getItem('cc_product_interest') || '[]');
                interests.push({ product: product.name, timestamp: new Date().toISOString() });
                localStorage.setItem('cc_product_interest', JSON.stringify(interests));
                alert(`We'll notify you when ${product.name} is available!`);
              }}
              className="text-xs border border-chakra-cyan text-chakra-cyan hover:bg-chakra-cyan hover:text-chakra-bg px-6 py-2 rounded-full font-bold transition-all"
            >
              Notify Me
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
