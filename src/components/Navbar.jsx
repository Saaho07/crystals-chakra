import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import BrandLogo from './BrandLogo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 glass-panel border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-3">
              <BrandLogo size="sm" />
              <div className="flex flex-col">
                <span className="text-xl font-serif font-bold text-chakra-cyan leading-none">CRYSTALS <span className="text-white">CHAKRA</span></span>
                <span className="text-[10px] tracking-widest text-chakra-gold uppercase leading-none mt-1">Unlock Your Destiny</span>
              </div>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link to="/" className="text-chakra-text hover:text-chakra-cyan px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</Link>
              <Link to="/services" className="text-chakra-text hover:text-chakra-cyan px-3 py-2 rounded-md text-sm font-medium transition-colors">Kundli Services</Link>
              <Link to="/science" className="text-chakra-text hover:text-chakra-cyan px-3 py-2 rounded-md text-sm font-medium transition-colors">Science of Astrology</Link>
              <Link to="/shop" className="text-chakra-text hover:text-chakra-cyan px-3 py-2 rounded-md text-sm font-medium transition-colors">Shop</Link>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-chakra-text hover:text-chakra-cyan p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass-panel border-t border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" onClick={() => setIsOpen(false)} className="text-chakra-text hover:text-chakra-cyan block px-3 py-2 rounded-md text-base font-medium">Home</Link>
            <Link to="/services" onClick={() => setIsOpen(false)} className="text-chakra-text hover:text-chakra-cyan block px-3 py-2 rounded-md text-base font-medium">Kundli Services</Link>
            <Link to="/science" onClick={() => setIsOpen(false)} className="text-chakra-text hover:text-chakra-cyan block px-3 py-2 rounded-md text-base font-medium">Science of Astrology</Link>
            <Link to="/shop" onClick={() => setIsOpen(false)} className="text-chakra-text hover:text-chakra-cyan block px-3 py-2 rounded-md text-base font-medium">Shop</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
