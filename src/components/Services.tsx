import type { ReactNode } from 'react';
import { motion } from 'motion/react';
import { siteData } from '../data/content';
import { Car, Bike, FileText, CheckCircle2, Heart, Moon } from 'lucide-react';
import { cn } from '../lib/utils';

const iconMap: Record<string, ReactNode> = {
  car: <Car className="w-6 h-6" />,
  bike: <Bike className="w-6 h-6" />,
  file: <FileText className="w-6 h-6" />,
  check: <CheckCircle2 className="w-6 h-6" />,
  heart: <Heart className="w-6 h-6" />,
  moon: <Moon className="w-6 h-6" />
};

export function Services() {
  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl font-bold tracking-tight text-white mb-6"
          >
            Premium <span className="text-brand-purple-light">Services.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-white/60 max-w-2xl mx-auto"
          >
            Comprehensive training and assistance tailored to build your confidence and ensure compliance.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteData.services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group glass-panel p-8 rounded-3xl hover:bg-white/5 transition-all duration-300 relative overflow-hidden"
            >
              {/* Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/0 via-brand-purple/0 to-brand-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="w-14 h-14 rounded-2xl bg-brand-gray-light border border-white/10 flex items-center justify-center text-brand-purple-light mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                {iconMap[service.icon]}
              </div>
              
              <h3 className="font-display text-xl font-medium text-white mb-3 relative z-10">{service.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed relative z-10">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
