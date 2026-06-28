import { motion } from 'motion/react';
import { siteData } from '../data/content';

export function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Animated Text */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
              Master the <br/><span className="text-brand-purple-light">Road Ahead.</span>
            </h2>
            <p className="text-lg text-white/60 leading-relaxed mb-8">
              At Vivekananda Driving School, we don't just teach you how to drive; we instill confidence and safety into every maneuver. Based in the heart of Mandapeta, our expert instructors are dedicated to turning nervous beginners into road-ready masters.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {siteData.stats.map((stat, i) => (
                <div key={i} className="glass-panel p-6 rounded-2xl">
                  <p className="font-display text-3xl font-bold text-white mb-2">{stat.value}</p>
                  <p className="text-sm text-white/50">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Abstract 3D-like Graphic / Image representation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[2.5rem] bg-gradient-to-tr from-brand-purple/20 to-transparent border border-white/10 relative overflow-hidden flex items-center justify-center p-8">
               <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-luminosity"></div>
               <div className="absolute inset-0 bg-gradient-to-t from-brand-gray-dark via-transparent to-transparent"></div>
               
               {/* Decorative elements */}
               <motion.div 
                 animate={{ rotate: 360 }}
                 transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                 className="absolute top-10 right-10 w-32 h-32 border border-brand-purple/30 rounded-full border-dashed"
               />
               
               <div className="glass-panel p-8 rounded-2xl relative z-10 w-full backdrop-blur-xl">
                 <h3 className="font-display text-2xl text-white mb-2">Our Mission</h3>
                 <p className="text-white/60 text-sm">To provide unparalleled driving education focusing on safety, skill, and deep confidence for a lifetime of safe driving.</p>
               </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
