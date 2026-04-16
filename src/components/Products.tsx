import { motion } from "motion/react";
import { Box, Layers, PenTool, Cpu, Zap, Activity } from "lucide-react";

export default function Products() {
  const nanomaterials = [
    { 
      title: "Silver Nanowires", 
      desc: "High aspect ratio nanowires for transparent conductive films.",
      icon: <Box className="w-6 h-6" />,
      specs: ["99.9% Purity", "Tailored Aspect Ratio"]
    },
    { 
      title: "Conductive Adhesives", 
      desc: "Isotropic and anisotropic adhesives for microelectronics.",
      icon: <Layers className="w-6 h-6" />,
      specs: ["High Conductivity", "Low Curing Temp"]
    },
    { 
      title: "Conductive Inks", 
      desc: "Silver-based inks for screen and inkjet printing.",
      icon: <PenTool className="w-6 h-6" />,
      specs: ["Excellent Adhesion", "High Resolution"]
    },
    { 
      title: "Nanoparticle Pastes", 
      desc: "Sintering pastes for high-power electronic packaging.",
      icon: <Zap className="w-6 h-6" />,
      specs: ["Superior Thermal Mgmt", "Lead-Free"]
    },
  ];

  const flexibleElectronics = [
    { 
      title: "Flexible Sensors", 
      desc: "Wearable and stretchable sensors for health monitoring.",
      icon: <Activity className="w-6 h-6" />,
      specs: ["High Sensitivity", "Biocompatible"]
    },
    { 
      title: "Smart Packaging", 
      desc: "RFID and NFC integrated flexible circuits for logistics.",
      icon: <Cpu className="w-6 h-6" />,
      specs: ["Ultra-Thin", "Scalable Design"]
    },
  ];

  return (
    <section id="products" className="py-8 space-y-16">
      {/* Nanomaterials Category */}
      <div className="space-y-10">
        <div className="flex items-center gap-4">
          <div className="h-px flex-1 bg-border" />
          <h2 className="text-2xl font-black uppercase tracking-[0.3em] text-accent">Nanomaterials</h2>
          <div className="h-px flex-1 bg-border" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Premium Silver Nanowires Card */}
          <motion.div 
            whileHover={{ y: -8 }}
            className="group relative flex flex-col p-8 rounded-2xl bg-[#121214] border border-white/5 hover:border-[#D4AF37]/30 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(212,175,55,0.1)]"
          >
            {/* Product Image */}
            <div className="relative h-40 mb-6 rounded-xl overflow-hidden bg-white/5 border border-white/10">
              <img 
                src="https://picsum.photos/seed/nanotech/600/400" 
                alt="Silver Nanowires Micrograph" 
                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121214] via-transparent to-transparent" />
            </div>

            <div className="mb-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
                <h3 className="text-xl font-black tracking-tight text-white group-hover:text-[#D4AF37] transition-colors">Silver Nanowires</h3>
              </div>
              <p className="text-xs font-medium text-text-secondary">Nanoodles: High-purity geometries.</p>
            </div>

            {/* Data Display - Minimalist Grid */}
            <div className="flex flex-col gap-3 mb-8">
              {[
                { d: "100 nm (Ø)", l: "60 μm (L)" },
                { d: "200 nm (Ø)", l: "45 µm (L)" },
                { d: "300 nm (Ø)", l: "30 µm (L)" },
                { d: "500 nm (Ø)", l: "20 µm (L)" },
              ].map((config, idx) => (
                <div key={idx} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
                  <span className="text-[10px] font-bold text-text-secondary uppercase tracking-widest">{config.d}</span>
                  <div className="h-px flex-1 mx-4 bg-white/5" />
                  <span className="text-[10px] font-black text-[#D4AF37] tracking-tighter">{config.l}</span>
                </div>
              ))}
            </div>

            {/* Footer Tags */}
            <div className="mt-auto flex flex-wrap gap-2">
              <div className="px-3 py-1.5 rounded-lg border border-[#D4AF37] bg-transparent">
                <span className="text-[9px] font-black uppercase tracking-widest text-[#D4AF37]">R&D Scale (mg)</span>
              </div>
              <div className="px-3 py-1.5 rounded-lg border border-[#D4AF37] bg-transparent">
                <span className="text-[9px] font-black uppercase tracking-widest text-[#D4AF37]">Industrial Scale (kg)</span>
              </div>
            </div>
          </motion.div>

          {nanomaterials.slice(1).map((p, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="card group p-8 flex flex-col gap-6"
            >
              <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                {p.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">{p.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{p.desc}</p>
              </div>
              <div className="mt-auto pt-6 border-t border-border flex flex-wrap gap-2">
                {p.specs.map((spec, si) => (
                  <span key={si} className="text-[8px] font-bold uppercase tracking-widest px-2 py-1 rounded bg-white/5 text-text-secondary">
                    {spec}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Flexible Electronics Category */}
      <div className="space-y-10">
        <div className="flex items-center gap-4">
          <div className="h-px flex-1 bg-border" />
          <h2 className="text-2xl font-black uppercase tracking-[0.3em] text-accent">Flexible Electronics</h2>
          <div className="h-px flex-1 bg-border" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto w-full">
          {flexibleElectronics.map((p, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="card group p-8 flex flex-col gap-6"
            >
              <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                {p.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">{p.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{p.desc}</p>
              </div>
              <div className="mt-auto pt-6 border-t border-border flex flex-wrap gap-2">
                {p.specs.map((spec, si) => (
                  <span key={si} className="text-[8px] font-bold uppercase tracking-widest px-2 py-1 rounded bg-white/5 text-text-secondary">
                    {spec}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
