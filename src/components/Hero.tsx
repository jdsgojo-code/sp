import { motion } from "motion/react";
import { ArrowRight, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="card card-hero">
      <div className="flex flex-col h-full">
        <div className="mb-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-[10px] font-bold uppercase tracking-widest mb-6">
            <Zap className="w-3 h-3" />
            Presents Nanoodles
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-[0.9] tracking-tighter mb-6 text-text-primary">
            Vasanthabala <br />
            <span className="text-accent">Functional</span> <br />
            Materials
          </h1>
          <p className="text-lg text-text-secondary max-w-md leading-relaxed mb-8">
            Nanoodles: Silver Nanowires of different geometries. Tailored viscosity of adhesives and inks for microelectronics packaging.
          </p>
        </div>
        
        <div className="flex flex-wrap gap-4 mt-8">
          <a
            href="#products"
            className="bg-accent text-bg px-8 py-3 rounded-xl font-black uppercase tracking-widest text-xs flex items-center gap-2 hover:bg-white transition-all duration-300"
          >
            Explore Portfolio
            <ArrowRight className="w-4 h-4" />
          </a>
          <div className="h-12 px-6 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
            <span className="text-[10px] font-bold text-text-secondary uppercase tracking-widest">Scalable Production</span>
          </div>
        </div>
      </div>
    </section>
  );
}
