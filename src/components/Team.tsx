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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="card card-wide group"
    >
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/3">
          <div className="card-tag group-hover:text-accent transition-colors">Our Foundation</div>
          <h3 className="text-2xl font-bold mb-4">Expertise & Trust</h3>
          <p className="text-sm text-text-secondary leading-relaxed">
            VBFM is built on a foundation of rigorous scientific research and industrial engineering expertise.
          </p>
        </div>
        <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {expertise.map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-accent/30 transition-all"
            >
              <div className="text-accent mb-3">{item.icon}</div>
              <h4 className="text-xs font-bold uppercase tracking-widest mb-2">{item.title}</h4>
              <p className="text-[10px] text-text-secondary leading-tight">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
