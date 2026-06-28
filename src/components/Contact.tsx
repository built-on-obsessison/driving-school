import { motion } from 'motion/react';
import { siteData } from '../data/content';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-24 relative bg-brand-gray/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
              Let's get you <br/><span className="text-brand-purple-light">started.</span>
            </h2>
            <p className="text-lg text-white/60 mb-10 max-w-md">
              Ready to take the wheel? Reach out to us today to schedule your first lesson or ask any questions.
            </p>
            
            <div className="space-y-6">
              <a href={siteData.mapsLink} target="_blank" rel="noreferrer" className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-purple-light group-hover:bg-brand-purple group-hover:text-white transition-all">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white mb-1">Location</p>
                  <p className="text-sm text-white/50 max-w-[250px]">{siteData.address}</p>
                </div>
              </a>
              
              <a href={`tel:${siteData.phone}`} className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-purple-light group-hover:bg-brand-purple group-hover:text-white transition-all">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white mb-1">Phone</p>
                  <p className="text-sm text-white/50">{siteData.phone}</p>
                </div>
              </a>

              <a href={`mailto:${siteData.email}`} className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-purple-light group-hover:bg-brand-purple group-hover:text-white transition-all">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white mb-1">Email</p>
                  <p className="text-sm text-white/50">{siteData.email}</p>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-panel p-8 md:p-10 rounded-[2.5rem]"
          >
            <h3 className="font-display text-2xl font-medium text-white mb-6">Send a Message</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-xs font-medium text-white/50 mb-2 ml-1">Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-white/50 mb-2 ml-1">Phone Number</label>
                <input 
                  type="tel" 
                  placeholder="+91 98765 43210"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-white/50 mb-2 ml-1">Message</label>
                <textarea 
                  rows={4}
                  placeholder="I'm interested in manual car training..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-all resize-none"
                ></textarea>
              </div>
              <button className="w-full py-4 rounded-xl bg-white text-black font-medium hover:bg-white/90 transition-all flex items-center justify-center gap-2 mt-4">
                Request Callback
              </button>
            </form>
            
            <div className="mt-6 pt-6 border-t border-white/10">
              <a 
                href={`https://wa.me/${siteData.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="w-full py-4 rounded-xl bg-[#25D366]/20 text-[#25D366] border border-[#25D366]/30 hover:bg-[#25D366]/30 font-medium transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
