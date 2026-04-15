import { motion } from "motion/react";
import { Cpu, Factory, Scaling, FlaskConical } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="card card-feature">
      <div>
        <div className="card-tag">Why VBFM?</div>
        <h3 className="text-2xl font-bold mb-4">Scalable Production</h3>
        <p className="text-sm text-text-secondary leading-relaxed">
          We use continuous flow reactor based technology for scalable production of nanomaterials from mg to kg scale.
        </p>
      </div>
      <div className="mt-8 flex items-center justify-between">
        <div className="flex -space-x-2">
          {[1, 2, 3].map((i) => (
            <div key={i} className="w-8 h-8 rounded-full border-2 border-card-bg bg-accent/20 flex items-center justify-center">
              <FlaskConical className="w-4 h-4 text-accent" />
            </div>
          ))}
        </div>
        <span className="text-[10px] font-bold text-accent uppercase tracking-widest">Scalable Tech</span>
      </div>
    </section>
  );
}
