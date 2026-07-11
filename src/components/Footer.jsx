import { BRAND_NAME } from '../constants';

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 py-6 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-chakra-muted text-xs">
          © {new Date().getFullYear()} {BRAND_NAME}. All rights reserved.
        </p>
        <div className="flex space-x-4">
          <span className="text-chakra-muted text-xs">100% Confidential</span>
          <span className="text-chakra-muted text-xs">•</span>
          <span className="text-chakra-muted text-xs">Expert Astrologers</span>
        </div>
      </div>
    </footer>
  );
}
