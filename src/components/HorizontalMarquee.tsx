import React from "react";
import { Box, Layers, PenTool } from "lucide-react";

/**
 * Expertly crafted Infinite Marquee component
 * Fixes vertical alignment and ensures zero horizontal overflow.
 */
const HorizontalMarquee: React.FC = () => {
  const items = [
    { text: "SILVER NANOWIRES", icon: <Box className="w-6 h-6 md:w-8 md:h-8 flex-shrink-0" /> },
    { text: "CONDUCTIVE ADHESIVES", icon: <Layers className="w-6 h-6 md:w-8 md:h-8 flex-shrink-0" /> },
    { text: "CONDUCTIVE INKS", icon: <PenTool className="w-6 h-6 md:w-8 md:h-8 flex-shrink-0" /> },
  ];

  // Helper to render one full set of marquee content
  const MarqueeContent = () => (
    <div className="flex items-center gap-6 md:gap-8 pr-6 md:pr-8">
      {items.map((item, idx) => (
        <React.Fragment key={idx}>
          <div className="flex items-center gap-3 md:gap-4 flex-shrink-0">
            <span className="text-lg md:text-xl font-black uppercase tracking-wider text-[#FFB800] leading-none">
              {item.text}
            </span>
            <div className="text-[#FFB800]/50 flex items-center justify-center scale-75 md:scale-90">
              {item.icon}
            </div>
            <span className="text-lg md:text-xl font-black text-[#FFB800]/30 leading-none flex items-center">•</span>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
  
  return (
    <div className="w-full relative overflow-hidden bg-transparent py-2 md:py-4 select-none">
      {/* Container that animates */}
      <div 
        className="flex w-max items-center whitespace-nowrap animate-marquee"
        aria-hidden="true"
      >
        {/* We repeat the content multiple times to ensure enough width for the loop */}
        <MarqueeContent />
        <MarqueeContent />
        <MarqueeContent />
        <MarqueeContent />
      </div>
    </div>
  );
};

export default HorizontalMarquee;
