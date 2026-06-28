import { siteData } from '../data/content';

export function Footer() {
  return (
    <footer className="py-12 border-t border-white/10 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-brand-purple/50 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-brand-purple flex items-center justify-center">
            <span className="font-display font-bold text-white text-sm">V</span>
          </div>
          <span className="font-display font-medium text-white">Vivekananda Driving School</span>
        </div>
        
        <p className="text-white/40 text-sm text-center md:text-left">
          &copy; {new Date().getFullYear()} Vivekananda Driving School. All rights reserved.
        </p>
        
        <div className="flex items-center gap-4">
          <a href="#" className="text-sm text-white/40 hover:text-white transition-colors">Privacy</a>
          <a href="#" className="text-sm text-white/40 hover:text-white transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
}
