import { motion } from "motion/react";
import { Users, GraduationCap, Microscope } from "lucide-react";

export default function Team() {
  const expertise = [
    {
      title: "Engineering Excellence",
      desc: "Deep expertise in continuous flow reactor design and chemical process scaling.",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Research Background",
      desc: "Founded by PhDs with extensive research in nanomaterial synthesis and microelectronics.",
      icon: <GraduationCap className="w-6 h-6" />
    },
    {
      title: "Material Science",
      desc: "Specialized in tailoring material properties for specific industrial applications.",
      icon: <Microscope className="w-6 h-6" />
    }
  ];

  return (
    <motion.section 
      id="team"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="card card-wide group !bg-[#0a0a0a] border border-[#FFB800]/30 shadow-[0px_0px_100px_rgba(255,184,0,0.15)] relative overflow-hidden"
    >
      {/* Decorative radial background glow */}
      <div className="absolute -top-24 -left-24 w-64 h-64 bg-[#FFB800]/10 blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-[#FFB800]/5 blur-[80px] pointer-events-none" />
      
      {/* Technical Corner Brackets */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#FFB800]/40 rounded-tl-lg pointer-events-none" />
      <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#FFB800]/40 rounded-tr-lg pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#FFB800]/40 rounded-bl-lg pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#FFB800]/40 rounded-br-lg pointer-events-none" />

      {/* Subtle Scanline/Grid Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff05_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

      {/* Decorative vertical accent */}
      <div className="absolute left-0 top-12 bottom-12 w-[3px] bg-gradient-to-b from-transparent via-[#FFB800] to-transparent shadow-[0_0_15px_rgba(255,184,0,0.5)]" />
      
      <div className="flex flex-col md:flex-row gap-12 relative z-10">
        <div className="md:w-1/3">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-[#FFB800]/10 border border-[#FFB800]/30 text-[9px] font-black uppercase tracking-[0.25em] text-[#FFB800] mb-8 shadow-[0_0_20px_rgba(255,184,0,0.1)]">
            <span className="w-2 h-2 rounded-full bg-[#FFB800] shadow-[0_0_10px_#FFB800] animate-pulse" />
            Our Foundation
          </div>
          <h3 className="text-4xl font-black mb-6 text-[#FFB800] tracking-tighter leading-none drop-shadow-[0_0_15px_rgba(255,184,0,0.4)]">Expertise & Trust</h3>
          <p className="text-sm text-text-secondary leading-relaxed font-medium">
            VBFM is built on a foundation of rigorous scientific research and industrial engineering expertise.
          </p>
        </div>
        <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {expertise.map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ 
                y: -8,
                backgroundColor: "#1a1a1a",
                borderColor: "rgba(255, 184, 0, 0.7)",
                boxShadow: "0px 15px 40px rgba(255, 184, 0, 0.15)"
              }}
              className="p-6 rounded-2xl bg-[#0d0d0d] border border-white/10 transition-all duration-300 group/card"
            >
              <div className="text-[#FFB800] mb-4 group-hover/card:scale-110 transition-transform duration-300 drop-shadow-[0_0_8px_rgba(255,184,0,0.3)]">{item.icon}</div>
              <h4 className="text-xs font-black uppercase tracking-widest mb-3 text-white group-hover/card:text-[#FFB800] transition-colors">{item.title}</h4>
              <p className="text-[11px] text-text-secondary leading-snug font-medium group-hover/card:text-white transition-colors">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
