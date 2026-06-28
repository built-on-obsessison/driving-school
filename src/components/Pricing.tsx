import { motion } from 'motion/react';
import { siteData } from '../data/content';
import { Check } from 'lucide-react';
import { cn } from '../lib/utils';

export function Pricing() {
  return (
    <section id="pricing" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl font-bold tracking-tight text-white mb-6"
          >
            Transparent <span className="text-brand-purple-light">Pricing.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-white/60 max-w-2xl mx-auto"
          >
            Choose the perfect package to start your driving journey.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {siteData.pricing.map((pkg, i) => (
            <motion.div
              key={pkg.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={cn(
                "rounded-3xl p-8 relative flex flex-col h-full transition-all duration-300",
                pkg.recommended 
                  ? "bg-gradient-to-b from-brand-purple/20 to-brand-gray/50 border border-brand-purple/50 shadow-[0_0_40px_rgba(139,92,246,0.15)] scale-105 z-10" 
                  : "glass-panel hover:bg-white/5"
              )}
            >
              {pkg.recommended && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-purple-light text-white text-xs font-bold uppercase tracking-wider py-1 px-4 rounded-full shadow-lg">
                  Most Popular
                </div>
              )}
              
              <h3 className="font-display text-xl font-medium text-white mb-2">{pkg.title}</h3>
              <div className="mb-6">
                <span className="font-display text-4xl font-bold text-white">{pkg.price}</span>
              </div>
              
              <ul className="flex-1 space-y-4 mb-8">
                {pkg.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-brand-purple-light shrink-0" />
                    <span className="text-white/70 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a 
                href={`https://wa.me/${siteData.whatsapp}?text=Hi, I'm interested in the ${pkg.title} package.`}
                target="_blank"
                rel="noreferrer"
                className={cn(
                  "w-full py-4 rounded-xl font-medium flex items-center justify-center transition-all",
                  pkg.recommended 
                    ? "bg-brand-purple hover:bg-brand-purple-light text-white shadow-lg" 
                    : "bg-white/10 hover:bg-white/20 text-white"
                )}
              >
                Get Started
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
