import { motion } from 'motion/react';
import { Phone, ArrowRight } from 'lucide-react';
import { siteData } from '../data/content';

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-purple/20 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/4 opacity-50 mix-blend-screen animate-pulse duration-10000" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-purple-dark/20 rounded-full blur-[100px] -translate-x-1/4 translate-y-1/4 opacity-50 mix-blend-screen" />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full flex flex-col items-center text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl flex flex-col items-center"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-8">
            <span className="w-2 h-2 rounded-full bg-brand-purple-light animate-pulse" />
            <span className="text-sm font-medium tracking-wide text-white/80 uppercase">Mandapeta's #1 Driving School</span>
          </motion.div>
          
          <motion.h1 
            variants={itemVariants}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-6 leading-[1.1]"
          >
            Drive with <span className="text-gradient">Confidence,</span><br className="hidden md:block"/> Learn with <span className="text-gradient">Experts.</span>
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-white/60 mb-10 max-w-2xl font-light leading-relaxed"
          >
            {siteData.description}
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <a 
              href={`tel:${siteData.phone}`}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-black font-medium flex items-center justify-center gap-3 transition-all hover:scale-105 active:scale-95 group"
            >
              <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              Call Now
            </a>
            <a 
              href="#services"
              className="w-full sm:w-auto px-8 py-4 rounded-full glass-panel text-white font-medium flex items-center justify-center gap-3 transition-all hover:bg-white/10 hover:scale-105 active:scale-95 group"
            >
              View Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
