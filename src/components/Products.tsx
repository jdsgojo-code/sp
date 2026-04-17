import { motion } from "motion/react";
import { Box, Layers, PenTool, Cpu, Zap, Activity } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import LemniscateBloom from "./LemniscateBloom";

export default function Products() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("nanomaterials");

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px", // Focus more on the top-middle segment
      threshold: [0, 0.1, 0.2]
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      // Find the entry that is most prominent in the top section
      const visible = entries.filter(e => e.isIntersecting);
      if (visible.length > 0) {
        // Sort by how close the top of the element is to the top of our observation root area
        visible.sort((a, b) => Math.abs(a.boundingClientRect.top) - Math.abs(b.boundingClientRect.top));
        setActiveCategory(visible[0].target.id);
      }
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const targets = document.querySelectorAll("[data-product-category]");
    targets.forEach((t) => observer.observe(t));

    // Fallback/Secondary mechanism: Manual scroll position check for edge cases
    const handleScroll = () => {
      const scrollPos = window.scrollY + 150;
      const sections = document.querySelectorAll("[data-product-category]");
      
      sections.forEach((section) => {
        const top = (section as HTMLElement).offsetTop;
        const height = (section as HTMLElement).offsetHeight;
        if (scrollPos >= top && scrollPos <= top + height) {
          setActiveCategory(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const nanomaterialsData = [
    { id: 1, tag: "Nanomaterials", title: "Silver Nanowires", description: "High aspect ratio silver nanowires ideal for transparent conductive films and flexible electronics.", applications: ["Flexible Displays", "Touch Screens", "Smart Windows", "Wearable Electronics"], slug: "silver-nanowires" },
    { id: 2, tag: "Nanomaterials", title: "Silver Nanoparticles", description: "High-purity silver nanoparticles for catalysis, antimicrobial coatings, and conductive applications.", applications: ["Conductive Inks", "Antimicrobial Coatings", "Sensors", "Catalysis"], slug: "silver-nanoparticles" },
    { id: 3, tag: "Nanomaterials", title: "Copper Nanoparticles", description: "Cost-effective, highly conductive copper nanoparticles for conductive and catalytic applications with excellent oxidation resistance.", applications: ["Printed Electronics", "Thermal Management", "Catalysts", "Conductive Pastes"], slug: "copper-nanoparticles" },
    { id: 4, tag: "Nanomaterials", title: "Copper Oxide Nanoparticles", description: "Precision-synthesized copper oxide nanoparticles for advanced catalytic and sensing applications.", applications: ["Gas Sensors", "Photocatalysis", "Energy Storage", "Antimicrobial Agents"], slug: "copper-oxide-nanoparticles" },
    { id: 5, tag: "Nanomaterials", title: "Silver based Electrically Conductive Inks", description: "Customizable, high-performance conductive inks optimized for various printing technologies.", applications: ["RFID/NFC Tags", "Printed Circuit Boards", "Flexible Sensors", "Membrane Switches"], slug: "silver-based-electrically-conductive-inks" }
  ];

  const flexibleElectronics = [
    { 
      id: 1,
      tag: "Flexible Electronics",
      title: "Screen printed electrodes", 
      description: "High-quality, reproducible screen printed electrodes for electrochemical sensing and biosensor applications.", 
      applications: ["Biosensors", "Environmental Monitoring", "Point-of-Care Diagnostics"],
      slug: "screen-printed-electrodes"
    },
    { 
      id: 2,
      tag: "Flexible Electronics",
      title: "Customized screen printed sensors", 
      description: "Tailored sensor solutions designed to meet specific detection requirements for industrial and medical use.", 
      applications: ["Wearable Health Monitors", "Industrial Automation", "Smart Packaging"],
      slug: "screen-printed-sensors"
    },
    { 
      id: 3,
      tag: "Flexible Electronics",
      title: "Customized screen printed patterns", 
      description: "Precision printed conductive patterns for flexible circuit designs and advanced electronic integration.", 
      applications: ["Flexible Circuits", "Antennas", "Heaters", "Touch Interfaces"],
      slug: "screen-printed-patterns"
    }
  ];

  return (
    <section id="products" className="pt-0 pb-12 space-y-16">
      {/* Product Section Navigation */}
      <div className="sticky top-20 z-30 bg-bg/80 backdrop-blur-md py-6 border-b border-white/5 mx-auto w-full flex justify-center mb-12">
        <div className="flex gap-6">
          {[
            { id: 'nanomaterials', label: 'Nanomaterials' },
            { id: 'flexible-electronics', label: 'Flexible Electronics' }
          ].map((cat) => (
            <a 
              key={cat.id}
              href={`#${cat.id}`}
              className={`text-[9px] font-black uppercase tracking-[0.25em] px-5 py-2 rounded-full transition-all duration-300 ${activeCategory === cat.id ? 'bg-[#FFB800] text-[#050505] shadow-[0_0_15px_rgba(255,184,0,0.2)]' : 'text-text-secondary hover:text-[#FFB800]'}`}
            >
              {cat.label}
            </a>
          ))}
        </div>
      </div>

      {/* Nanomaterials Category */}
      <div id="nanomaterials" data-product-category className="space-y-8 scroll-mt-36">
        <div className="flex items-center justify-center gap-4">
          <div className="h-px w-12 bg-[#FFB800]/20" />
          <h2 className="text-xl font-black uppercase tracking-[0.3em] text-[#FFB800] text-center">Nanomaterials</h2>
          <div className="h-px w-12 bg-[#FFB800]/20" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 w-full">
          {nanomaterialsData.map((p) => (
            <motion.div 
              key={p.id}
              whileHover={{ y: -8 }}
              className="group flex flex-col h-full bg-[#121212] border border-[#333333] rounded-[16px] overflow-hidden transition-all duration-500 hover:border-[#FFB800]/50"
            >
              {/* Image Wrapper (Top 40%) */}
              <div className="relative h-48 overflow-hidden bg-[#080808]">
                <div className="absolute inset-0 opacity-40 group-hover:opacity-100 transition-opacity duration-700">
                  <LemniscateBloom color="#FFB800" className="w-full h-full scale-125 group-hover:scale-150 transition-transform duration-1000" />
                </div>
                {/* Tag Pill */}
                <span className="absolute bottom-4 left-4 bg-[#080808] text-[#FFB800] px-3 py-1 rounded-sm text-[8px] font-black uppercase tracking-widest border border-[#333]">
                  {p.tag}
                </span>
              </div>

              {/* Text Area (Remaining) */}
              <div className="flex-1 p-6 flex flex-col">
                <h3 className="text-xl font-black text-white mb-3 tracking-tighter group-hover:text-[#FFB800] transition-colors">{p.title}</h3>
                <p className="text-[#A0A0A0] text-sm leading-relaxed mb-6 font-medium">
                  {p.description}
                </p>

                {/* Applications Grid */}
                <div className="flex flex-wrap gap-2 mt-auto mb-8">
                  {p.applications.map((app, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-transparent border border-[#333333] text-[10px] text-white font-bold rounded-full hover:border-[#FFB800] hover:text-[#FFB800] transition-all cursor-default"
                    >
                      {app}
                    </span>
                  ))}
                </div>

                {/* Button Group */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <motion.button 
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 py-3 bg-[#FFB800] text-[#050505] font-black uppercase tracking-[0.2em] text-[10px] rounded-lg hover:bg-white transition-colors duration-300"
                  >
                    Request Quote
                  </motion.button>
                  <motion.button 
                    onClick={() => p.slug && navigate(`/product/${p.slug}`)}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 py-3 bg-transparent border border-[#FFB800] text-[#FFB800] font-black uppercase tracking-[0.2em] text-[10px] rounded-lg hover:bg-[#FFB800] hover:text-[#050505] transition-all duration-300"
                  >
                    Visit Detail
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Flexible Electronics Category */}
      <div id="flexible-electronics" data-product-category className="space-y-8 scroll-mt-36">
        <div className="flex items-center justify-center gap-4">
          <div className="h-px w-12 bg-[#FFB800]/20" />
          <h2 className="text-xl font-black uppercase tracking-[0.3em] text-[#FFB800] text-center">Flexible Electronics</h2>
          <div className="h-px w-12 bg-[#FFB800]/20" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 w-full">
          {flexibleElectronics.map((p) => (
            <motion.div 
              key={p.id}
              whileHover={{ y: -8 }}
              className="group flex flex-col h-full bg-[#121212] border border-[#333333] rounded-[16px] overflow-hidden transition-all duration-500 hover:border-[#FFB800]/50"
            >
              {/* Image Wrapper (Top 40%) */}
              <div className="relative h-48 overflow-hidden bg-[#080808]">
                <div className="absolute inset-0 opacity-40 group-hover:opacity-100 transition-opacity duration-700">
                  <LemniscateBloom color="#FFB800" className="w-full h-full scale-125 group-hover:scale-150 transition-transform duration-1000" />
                </div>
                {/* Tag Pill */}
                <span className="absolute bottom-4 left-4 bg-[#080808] text-[#FFB800] px-3 py-1 rounded-sm text-[8px] font-black uppercase tracking-widest border border-[#333]">
                  {p.tag}
                </span>
              </div>

              <div className="flex-1 p-6 flex flex-col">
                <h3 className="text-xl font-black text-white mb-3 tracking-tighter group-hover:text-[#FFB800] transition-colors">{p.title}</h3>
                <p className="text-[#A0A0A0] text-sm leading-relaxed mb-6 font-medium">
                  {p.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto mb-8">
                  {p.applications.map((app, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-transparent border border-[#333333] text-[10px] text-white font-bold rounded-full hover:border-[#FFB800] hover:text-[#FFB800] transition-all cursor-default"
                    >
                      {app}
                    </span>
                  ))}
                </div>

                {/* Button Group */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <motion.button 
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 py-3 bg-[#FFB800] text-[#050505] font-black uppercase tracking-[0.2em] text-[10px] rounded-lg hover:bg-white transition-colors duration-300"
                  >
                    Request Quote
                  </motion.button>
                  <motion.button 
                    onClick={() => p.slug && navigate(`/product/${p.slug}`)}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 py-3 bg-transparent border border-[#FFB800] text-[#FFB800] font-black uppercase tracking-[0.2em] text-[10px] rounded-lg hover:bg-[#FFB800] hover:text-[#050505] transition-all duration-300"
                  >
                    Visit Detail
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
