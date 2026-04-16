import { motion } from "motion/react";
import { Linkedin, Twitter, Globe, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-border pt-12 pb-8">
      <div className="w-full px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl font-black tracking-tighter text-white leading-none">VB</span>
              <div className="flex flex-col ml-1 leading-none">
                <span className="text-lg font-bold text-accent">F</span>
                <span className="text-lg font-bold text-accent">M</span>
              </div>
            </div>
            <p className="text-sm text-text-secondary max-w-sm leading-relaxed">
              Vasanthabala Functional Materials Pvt. Ltd. is a leading innovator in the synthesis of high-performance nanomaterials for the next generation of electronics.
            </p>
          </div>
          
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white mb-6">Registered Office</h4>
            <div className="flex gap-3 text-sm text-text-secondary leading-relaxed">
              <MapPin className="w-5 h-5 text-accent shrink-0" />
              <p>
                [Insert Registered Address Here]<br />
                Chennai, Tamil Nadu, India
              </p>
            </div>
          </div>
          
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white mb-6">Connect</h4>
            <div className="flex gap-4">
              <motion.a whileHover={{ y: -3, color: "#F2A900" }} href="#" className="text-text-secondary transition-colors">
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a whileHover={{ y: -3, color: "#F2A900" }} href="#" className="text-text-secondary transition-colors">
                <Twitter className="w-5 h-5" />
              </motion.a>
              <motion.a whileHover={{ y: -3, color: "#F2A900" }} href="#" className="text-text-secondary transition-colors">
                <Globe className="w-5 h-5" />
              </motion.a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-text-secondary font-bold uppercase tracking-widest">
            © 2024 Vasanthabala Functional Materials Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-[10px] text-text-secondary font-bold uppercase tracking-widest hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="text-[10px] text-text-secondary font-bold uppercase tracking-widest hover:text-accent transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
