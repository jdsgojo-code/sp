import { motion } from "motion/react";
import { FlaskConical, ShieldCheck, Award, Zap } from "lucide-react";

export default function About() {
  const certifications = [
    { label: "ISO 9001", icon: <ShieldCheck className="w-4 h-4" /> },
    { label: "99.9% Purity", icon: <Award className="w-4 h-4" /> },
    { label: "RoHS Compliant", icon: <Zap className="w-4 h-4" /> },
  ];

  return (
    <motion.section 
      id="about" 
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="card card-feature group cursor-default"
    >
      <div className="flex flex-col h-full">
        <div className="mb-auto">
          <div className="card-tag group-hover:text-accent transition-colors">Why VBFM?</div>
          <h3 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors">Scalable Production</h3>
          <p className="text-sm text-text-secondary leading-relaxed mb-6">
            We use continuous flow reactor based technology for scalable production of nanomaterials from mg to kg scale.
          </p>
          
          <div className="flex flex-wrap gap-2 mb-8">
            {certifications.map((cert, i) => (
              <div key={i} className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-white/5 border border-white/10 text-[9px] font-black uppercase tracking-widest text-text-secondary group-hover:border-accent/30 transition-colors">
                <span className="text-accent">{cert.icon}</span>
                {cert.label}
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex -space-x-2">
            {[1, 2, 3].map((i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -10, zIndex: 10 }}
                className="w-10 h-10 rounded-full border-2 border-card-bg bg-accent/20 flex items-center justify-center cursor-pointer transition-colors hover:bg-accent hover:text-bg"
              >
                <FlaskConical className="w-5 h-5" />
              </motion.div>
            ))}
          </div>
          <motion.span 
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-[10px] font-bold text-accent uppercase tracking-widest"
          >
            Scalable Tech
          </motion.span>
        </div>
      </div>
    </motion.section>
  );
}
