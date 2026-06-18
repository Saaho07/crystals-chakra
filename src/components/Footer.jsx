import { Link } from 'react-router-dom';
import BrandLogo from './BrandLogo';
import { WHATSAPP_DISPLAY, SUPPORT_EMAIL, WHATSAPP_NUMBER } from '../constants';

export default function Footer() {
  return (
    <footer className="bg-chakra-surface border-t border-white/10 pt-12 sm:pt-16 pb-8 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 mb-12">
          <div className="col-span-1 sm:col-span-2">
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
              <li>
                <a href={`https://wa.me/${WHATSAPP_NUMBER}`} className="text-chakra-muted hover:text-chakra-cyan text-sm transition-colors">
                  WhatsApp: {WHATSAPP_DISPLAY}
                </a>
              </li>
              <li>
                <a href={`mailto:${SUPPORT_EMAIL}`} className="text-chakra-muted hover:text-chakra-cyan text-sm transition-colors">
                  {SUPPORT_EMAIL}
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-chakra-muted text-xs">
            © {new Date().getFullYear()} Crystals Chakra. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <span className="text-chakra-muted text-xs">100% Confidential</span>
            <span className="text-chakra-muted text-xs">•</span>
            <span className="text-chakra-muted text-xs">Expert Astrologers</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

