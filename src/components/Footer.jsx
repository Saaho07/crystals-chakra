import { Link } from 'react-router-dom';
import BrandLogo from './BrandLogo';

export default function Footer() {
  return (
    <footer className="bg-chakra-surface border-t border-white/10 pt-16 pb-8 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <BrandLogo size="sm" />
              <span className="text-lg font-serif font-bold text-chakra-cyan">CRYSTALS <span className="text-white">CHAKRA</span></span>
            </div>
            <p className="text-chakra-muted text-sm leading-relaxed max-w-sm">
              Discover the profound science of astrology. We provide expert Kundli readings and insights to help you unlock your destiny and align your path with the cosmos.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-chakra-muted hover:text-chakra-cyan text-sm transition-colors">Kundli Services</Link></li>
              <li><Link to="/science" className="text-chakra-muted hover:text-chakra-cyan text-sm transition-colors">Science of Astrology</Link></li>
              <li><Link to="/shop" className="text-chakra-muted hover:text-chakra-cyan text-sm transition-colors">Shop</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-chakra-muted text-sm">WhatsApp: +91 9810228209</li>
              <li className="text-chakra-muted text-sm">Email: support@crystalschakra.com</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-chakra-muted text-xs">
            © {new Date().getFullYear()} Crystals Chakra. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <span className="text-chakra-muted text-xs">100% Confidential</span>
            <span className="text-chakra-muted text-xs">•</span>
            <span className="text-chakra-muted text-xs">Expert Astrologers</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
