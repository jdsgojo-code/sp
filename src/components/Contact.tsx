import { motion } from "motion/react";
import { Phone, Mail, MapPin, Send, Atom } from "lucide-react";

export default function Contact() {
  return (
    <motion.section 
      id="contact" 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="card card-wide !bg-accent !text-bg border-none shadow-2xl shadow-accent/20 group"
    >
      <div className="flex flex-col lg:flex-row justify-between gap-12 h-full relative z-10">
        <div className="lg:w-1/2">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-3xl md:text-5xl font-black tracking-tighter mb-6 !text-bg"
          >
            Join the material revolution.
          </motion.h2>
          <p className="text-bg/90 text-base leading-relaxed font-bold mb-8">
            Scale your operations with VBFM. From research to industrial production, we have you covered with tailored nanomaterials.
          </p>
          
          <div className="space-y-4">
            <motion.div 
              whileHover={{ scale: 1.02, x: 5 }}
              className="flex items-center gap-3 text-sm font-black uppercase tracking-widest text-bg bg-white/20 px-4 py-3 rounded-lg w-full md:w-auto cursor-pointer hover:bg-white/30 transition-colors"
            >
              <Mail className="w-5 h-5" />
              name@gmail.com
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.02, x: 5 }}
              className="flex items-center gap-3 text-sm font-black uppercase tracking-widest text-bg bg-white/20 px-4 py-3 rounded-lg w-full md:w-auto cursor-pointer hover:bg-white/30 transition-colors"
            >
              <Phone className="w-5 h-5" />
              123456789
            </motion.div>
          </div>
        </div>

        <div className="lg:w-1/2 bg-white/10 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-white/20">
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase tracking-widest text-bg/60 ml-1">Company Name</label>
                <input type="text" className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-sm text-bg placeholder:text-bg/40 focus:outline-none focus:border-bg/50" placeholder="Acme Corp" />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase tracking-widest text-bg/60 ml-1">Application Type</label>
                <select className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-sm text-bg focus:outline-none focus:border-bg/50">
                  <option className="text-bg">Microelectronics</option>
                  <option className="text-bg">PCB Printing</option>
                  <option className="text-bg">RFID Tags</option>
                  <option className="text-bg">Other</option>
                </select>
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-black uppercase tracking-widest text-bg/60 ml-1">Required Scale</label>
              <div className="flex gap-4">
                {['mg Scale', 'kg Scale', 'Industrial'].map((scale) => (
                  <label key={scale} className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="scale" className="accent-bg" />
                    <span className="text-xs font-bold text-bg">{scale}</span>
                  </label>
                ))}
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-black uppercase tracking-widest text-bg/60 ml-1">Message</label>
              <textarea className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-sm text-bg placeholder:text-bg/40 focus:outline-none focus:border-bg/50 h-24 resize-none" placeholder="Tell us about your requirements..." />
            </div>
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-bg text-white py-4 rounded-xl font-black uppercase tracking-widest text-sm hover:shadow-2xl transition-all duration-300"
            >
              Submit Inquiry
            </motion.button>
          </form>
        </div>
      </div>
      
      <div className="mt-12 pt-8 border-t border-bg/20 flex flex-col md:flex-row justify-between items-center gap-4 w-full relative z-10">
        <div className="flex items-center gap-2">
          <motion.div 
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <span className="text-3xl font-black tracking-tighter text-bg leading-none">VB</span>
            <div className="flex flex-col ml-0.5 leading-none">
              <span className="text-xs font-black text-bg/70">F</span>
              <span className="text-xs font-black text-bg/70">M</span>
            </div>
          </motion.div>
        </div>
        <p className="text-[10px] text-bg/70 font-black uppercase tracking-widest">
          © 2024 Vasanthabala Functional Materials Pvt. Ltd.
        </p>
      </div>
    </motion.section>
  );
}
