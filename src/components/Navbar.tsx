import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone } from 'lucide-react';
import { siteData } from '../data/content';
import { cn } from '../lib/utils';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'py-4' : 'py-6'
      )}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className={cn(
          "flex items-center justify-between rounded-2xl px-6 py-4 transition-all duration-500",
          isScrolled 
            ? "bg-black/40 backdrop-blur-xl border border-white/10 shadow-2xl" 
            : "bg-transparent"
        )}>
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-purple to-brand-purple-light flex items-center justify-center shadow-[0_0_20px_rgba(139,92,246,0.3)] group-hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] transition-all duration-300">
              <span className="font-display font-bold text-white text-xl tracking-tighter">V</span>
            </div>
            <span className="font-display font-bold text-lg hidden sm:block tracking-tight text-white/90">
              Vivekananda<br/><span className="text-sm text-brand-purple-light font-medium tracking-normal">Driving School</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium text-white/70 hover:text-white transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-brand-purple-light transition-all duration-300 group-hover:w-full rounded-full"></span>
              </a>
            ))}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a 
              href={`tel:${siteData.phone}`}
              className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-white text-sm font-medium transition-all hover:scale-105 active:scale-95"
            >
              <Phone className="w-4 h-4" />
              <span>{siteData.phone}</span>
            </a>
            
            <button 
              className="md:hidden p-2 text-white/80 hover:text-white"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-2xl"
          >
            <div className="flex flex-col h-full p-6">
              <div className="flex justify-end">
                <button 
                  className="p-2 text-white/80 hover:text-white bg-white/10 rounded-full"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="flex-1 flex flex-col items-center justify-center gap-8">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-3xl font-display font-medium text-white hover:text-brand-purple-light transition-colors"
                  >
                    {link.name}
                  </motion.a>
                ))}
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navLinks.length * 0.1 }}
                  href={`tel:${siteData.phone}`}
                  className="mt-8 px-8 py-4 rounded-full bg-brand-purple text-white font-medium flex items-center gap-3 shadow-[0_0_30px_rgba(139,92,246,0.3)]"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
