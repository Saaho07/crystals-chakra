import { MessageCircle } from 'lucide-react';

export default function WhatsAppCTA({ phoneNumber = "919810228209", message = "Hello, I would like to get a personalized Kundli reading." }) {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a 
      href={whatsappUrl} 
      target="_blank" 
      rel="noopener noreferrer"
      className="inline-flex items-center gap-3 bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#128C7E] hover:to-[#075E54] text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-[#25D366]/30 transform transition-all hover:scale-105 active:scale-95"
    >
      <MessageCircle className="w-6 h-6" />
      <div className="flex flex-col text-left">
        <span className="text-xs uppercase tracking-wider opacity-90 leading-none mb-1">WhatsApp Now</span>
        <span className="text-xl leading-none">9810228209</span>
      </div>
    </a>
  );
}
