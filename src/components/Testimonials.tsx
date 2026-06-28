import { motion } from 'motion/react';
import { siteData } from '../data/content';
import { Star, Quote } from 'lucide-react';

export function Testimonials() {
  return (
    <section id="reviews" className="py-24 relative overflow-hidden bg-brand-gray/30">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl font-bold tracking-tight text-white mb-6"
          >
            Student <span className="text-brand-purple-light">Reviews.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {siteData.testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass-panel p-8 rounded-3xl relative"
            >
              <Quote className="absolute top-8 right-8 w-12 h-12 text-white/5" />
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-brand-purple-light text-brand-purple-light" />
                ))}
              </div>
              <p className="text-white/80 text-lg leading-relaxed mb-8 relative z-10">"{testimonial.review}"</p>
              
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-brand-gray-light to-brand-gray flex items-center justify-center font-display font-medium text-white border border-white/10">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-medium text-white text-sm">{testimonial.name}</p>
                  <p className="text-white/40 text-xs">Verified Student</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
