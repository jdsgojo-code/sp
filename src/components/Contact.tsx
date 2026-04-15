import { motion } from "motion/react";
import { Phone, Mail, MapPin, Send, Atom } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="card card-wide !bg-accent !text-bg border-none shadow-2xl shadow-accent/20">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 h-full relative z-10">
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-4 !text-bg">Join the material revolution.</h2>
          <p className="text-bg/90 text-base leading-relaxed font-bold">
            Scale your operations with VBFM. From research to industrial production, we have you covered with tailored nanomaterials.
          </p>
        </div>
        <div className="md:w-1/2 flex flex-col items-end gap-5 w-full">
          <div className="flex items-center gap-3 text-sm font-black uppercase tracking-widest text-bg bg-white/20 px-4 py-2 rounded-lg w-full md:w-auto">
            <Mail className="w-5 h-5" />
            name@gmail.com
          </div>
          <div className="flex items-center gap-3 text-sm font-black uppercase tracking-widest text-bg bg-white/20 px-4 py-2 rounded-lg w-full md:w-auto">
            <Phone className="w-5 h-5" />
            123456789
          </div>
          <button className="mt-4 w-full md:w-auto bg-bg text-white px-10 py-4 rounded-xl font-black uppercase tracking-widest text-sm hover:scale-105 transition-all duration-300 shadow-lg">
            Send Inquiry →
          </button>
        </div>
      </div>
      
      <div className="mt-12 pt-8 border-t border-bg/20 flex flex-col md:flex-row justify-between items-center gap-4 w-full relative z-10">
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            <span className="text-3xl font-black tracking-tighter text-bg leading-none">VB</span>
            <div className="flex flex-col ml-0.5 leading-none">
              <span className="text-xs font-black text-bg/70">F</span>
              <span className="text-xs font-black text-bg/70">M</span>
            </div>
          </div>
        </div>
        <p className="text-[10px] text-bg/70 font-black uppercase tracking-widest">
          © 2024 Vasanthabala Functional Materials Pvt. Ltd.
        </p>
      </div>
    </section>
  );
}
