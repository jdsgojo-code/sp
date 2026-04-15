import { motion } from "motion/react";
import { Menu, X, Atom } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Product", href: "#products" },
    { name: "Solutions", href: "#about" },
    { name: "Specs", href: "#specs" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <div className="flex items-center">
              <span className="text-4xl font-black tracking-tighter text-white leading-none">VB</span>
              <div className="flex flex-col ml-1 leading-none">
                <span className="text-lg font-bold text-accent">F</span>
                <span className="text-lg font-bold text-accent">M</span>
              </div>
            </div>
            <div className="hidden lg:block h-8 w-px bg-border mx-2" />
            <span className="hidden lg:block text-xs font-bold uppercase tracking-[0.2em] text-text-secondary leading-tight">
              Vasanthabala <br /> Functional Materials
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs font-bold uppercase tracking-widest text-text-secondary hover:text-accent transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                className="bg-accent text-bg px-6 py-2 rounded-lg text-xs font-black uppercase tracking-widest hover:bg-white transition-all duration-300"
              >
                Inquire
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-brand-gray border-b border-white/5"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-4 text-base font-medium text-gray-300 hover:text-brand-amber border-b border-white/5 last:border-0"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
}
