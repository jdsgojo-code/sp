import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Product", href: "/#products" },
    { name: "About Us", href: "/#about" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg/80 backdrop-blur-lg border-b border-border">
      <div className="w-full px-4 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Left */}
          <Link to="/">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-3 cursor-pointer shrink-0"
            >
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
            </motion.div>
          </Link>

          {/* Desktop Links - Centered */}
          <div className="hidden md:flex flex-1 justify-center">
            <div className="flex items-baseline space-x-12">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  whileHover={{ y: -2 }}
                  className="text-xs font-bold uppercase tracking-widest text-text-secondary hover:text-accent transition-colors duration-200 relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Request Quote Button - Right */}
          <div className="hidden md:block shrink-0">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-accent text-bg px-6 py-2 rounded-lg text-xs font-black uppercase tracking-widest hover:bg-white transition-all duration-300 shadow-lg shadow-accent/20"
            >
              Request Quote
            </motion.a>
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
          className="md:hidden bg-card-bg border-b border-border"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-4 text-base font-medium text-gray-300 hover:text-accent border-b border-border last:border-0"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="block px-3 py-4 text-base font-bold text-accent"
              onClick={() => setIsOpen(false)}
            >
              Request Quote
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
