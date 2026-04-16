import { motion } from "motion/react";

export default function Specs() {
  const specs = [
    { d: "100 nm", l: "60 µm" },
    { d: "200 nm", l: "45 µm" },
    { d: "300 nm", l: "30 µm" },
    { d: "500 nm", l: "20 µm" },
  ];

  return (
    <motion.section 
      id="specs" 
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="card card-feature group cursor-default"
    >
      <div>
        <div className="card-tag group-hover:text-accent transition-colors">Technical</div>
        <h3 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors">AgNW Specs</h3>
      </div>
      <div className="space-y-3">
        {specs.map((s, i) => (
          <motion.div 
            key={i} 
            whileHover={{ x: 5 }}
            className="flex justify-between items-center text-[11px] border-b border-white/5 pb-2 last:border-0 group/item"
          >
            <span className="text-text-secondary font-mono group-hover/item:text-text-primary transition-colors">D: {s.d}</span>
            <span className="text-accent font-bold font-mono group-hover/item:scale-110 transition-transform origin-right">L: {s.l}</span>
          </motion.div>
        ))}
      </div>
      <motion.div 
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="mt-4 text-[10px] text-center text-text-secondary uppercase tracking-widest"
      >
        Custom geometries available
      </motion.div>
    </motion.section>
  );
}
