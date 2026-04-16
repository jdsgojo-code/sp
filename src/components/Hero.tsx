import { motion } from "motion/react";
import { ArrowRight, Zap, Sparkles, ShieldCheck, Award, Box, Layers, PenTool, FlaskConical } from "lucide-react";

import HorizontalMarquee from "./HorizontalMarquee";

export default function Hero() {
  const products = [
    { title: "Silver Nanowires", icon: <Box className="w-4 h-4" /> },
    { title: "Conductive Adhesives", icon: <Layers className="w-4 h-4" /> },
    { title: "Conductive Inks", icon: <PenTool className="w-4 h-4" /> },
  ];

  const specs = [
    { label: "ISO 9001 Certified", icon: <ShieldCheck className="w-5 h-5" /> },
    { label: "99.9% Material Purity", icon: <Award className="w-5 h-5" /> },
    { label: "RoHS Compliant", icon: <Zap className="w-5 h-5" /> },
    { label: "mg to kg Scalable", icon: <FlaskConical className="w-5 h-5" /> },
  ];

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="card card-hero group relative w-full py-16 md:py-24 flex flex-col justify-center border-0 rounded-none bg-transparent shadow-none"
    >
      {/* Background Video Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden opacity-15 group-hover:opacity-25 transition-opacity duration-700 pointer-events-none">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover scale-105"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-abstract-3d-render-of-flowing-lines-and-particles-32856-large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-bg via-transparent to-bg" />
      </div>

      <div className="relative z-10 w-full mx-auto text-center">
        {/* Top Badge */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-[10px] font-bold uppercase tracking-widest mb-6"
        >
          <Zap className="w-3 h-3 animate-pulse" />
          Presents Nanoodles
        </motion.div>
        
        {/* Main Title */}
        <h1 className="text-3xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tighter mb-6 text-text-primary px-4">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="block"
          >
            Vasanthabala
          </motion.span>
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="text-accent block"
          >
            Functional Materials
          </motion.span>
        </h1>
        
        {/* Description */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-sm md:text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed mb-10 px-4"
        >
          Nanoodles: Silver Nanowires of different geometries. Tailored viscosity of adhesives and inks for microelectronics packaging.
        </motion.p>
 
        {/* Integrated Details - Compact Row */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-wrap md:flex-nowrap justify-center gap-3 mb-8 max-w-6xl mx-auto px-4"
        >
          {specs.map((spec, i) => (
            <div key={i} className="flex-1 min-w-[140px] flex items-center justify-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-accent/30 hover:bg-accent/5 transition-all group/spec">
              <div className="p-2 rounded-lg bg-accent/10 text-accent group-hover/spec:scale-110 transition-transform shrink-0">
                {spec.icon}
              </div>
              <span className="text-[9px] font-bold uppercase tracking-wider text-white/80 group-hover/spec:text-white transition-all text-left leading-tight">
                {spec.label}
              </span>
            </div>
          ))}
        </motion.div>
 
        {/* Product Portfolio Row - Infinite Marquee */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mb-8 w-full overflow-hidden"
        >
          <HorizontalMarquee />
        </motion.div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="flex justify-center"
        >
          <a
            href="#contact"
            className="bg-accent text-bg px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-sm flex items-center gap-3 hover:bg-white hover:scale-105 transition-all duration-300 active:scale-95 shadow-2xl shadow-accent/30"
          >
            Request Quote
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>

        {/* Floating Decoration */}
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-10 right-10 text-accent/5 pointer-events-none hidden xl:block"
        >
          <Sparkles className="w-48 h-48" />
        </motion.div>
      </div>
    </motion.section>
  );
}
