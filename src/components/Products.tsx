import { motion } from "motion/react";
import { Layers, PenTool, Box } from "lucide-react";

export default function Products() {
  const products = [
    { title: "Silver Nanowires", icon: <Box className="w-5 h-5" /> },
    { title: "Conductive Adhesives", icon: <Layers className="w-5 h-5" /> },
    { title: "Conductive Inks", icon: <PenTool className="w-5 h-5" /> },
  ];

  return (
    <section id="products" className="card card-wide">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="md:w-1/3">
          <div className="card-tag">What's Available?</div>
          <h3 className="text-2xl font-bold mb-4">Product Portfolio</h3>
          <p className="text-sm text-text-secondary">
            Silver nanowires, ECAs for microelectronics, and conductive inks for PCBs and RFIDs.
          </p>
        </div>
        <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
          {products.map((p, i) => (
            <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col items-center text-center gap-3 hover:border-accent/50 transition-colors">
              <div className="text-accent">{p.icon}</div>
              <span className="text-[10px] font-bold uppercase tracking-tighter leading-tight">{p.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
