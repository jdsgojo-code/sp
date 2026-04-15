import { motion } from "motion/react";

export default function Specs() {
  const specs = [
    { d: "100 nm", l: "60 µm" },
    { d: "200 nm", l: "45 µm" },
    { d: "300 nm", l: "30 µm" },
    { d: "500 nm", l: "20 µm" },
  ];

  return (
    <section id="specs" className="card card-feature">
      <div>
        <div className="card-tag">Technical</div>
        <h3 className="text-2xl font-bold mb-4">AgNW Specs</h3>
      </div>
      <div className="space-y-3">
        {specs.map((s, i) => (
          <div key={i} className="flex justify-between items-center text-[11px] border-b border-white/5 pb-2 last:border-0">
            <span className="text-text-secondary font-mono">D: {s.d}</span>
            <span className="text-accent font-bold font-mono">L: {s.l}</span>
          </div>
        ))}
      </div>
      <div className="mt-4 text-[10px] text-center text-text-secondary uppercase tracking-widest">
        Custom geometries available
      </div>
    </section>
  );
}
