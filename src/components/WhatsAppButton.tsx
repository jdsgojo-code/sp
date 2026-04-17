import React from 'react';
import { motion } from 'motion/react';

const WhatsAppButton: React.FC = () => {
  // Replace with your actual WhatsApp number
  const phoneNumber = "1234567890"; 
  const message = encodeURIComponent("Hello! I'm interested in your functional materials.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.5, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      whileHover={{ scale: 1.1, y: -4 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-50 flex items-center justify-center w-16 h-16 bg-[#25D366] rounded-full shadow-[0_10px_40px_rgba(37,211,102,0.4)] transition-shadow hover:shadow-[0_15px_50px_rgba(37,211,102,0.6)] group"
      aria-label="Chat on WhatsApp"
    >
      <svg 
        viewBox="0 0 24 24" 
        className="w-8 h-8 text-white fill-current"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-4.821 7.454c-1.932 0-3.821-.52-5.464-1.503l-.392-.233-4.067.1.393-3.967-.255-.406C1.354 14.375 1.127 12.33 1.127 10.3c0-4.962 4.038-9 9-9s9 4.038 9 9-4.038 9-9 9m0-19.1c-5.592 0-10.127 4.535-10.127 10.127 0 1.93.548 3.812 1.583 5.454L1 23l5.056-1.325a10.05 10.05 0 005.071 1.365c5.592 0 10.127-4.535 10.127-10.127s-4.535-10.127-10.127-10.127z"/>
      </svg>
      
      {/* Tooltip */}
      <div className="absolute right-full mr-4 px-3 py-1 bg-white text-bg text-[10px] font-black uppercase tracking-widest rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-xl border border-white/10">
        Chat with us
      </div>
    </motion.a>
  );
};

export default WhatsAppButton;
