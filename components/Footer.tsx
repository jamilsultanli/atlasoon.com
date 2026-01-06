import React from 'react';
import { Instagram, Linkedin, Github, Mail, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="py-12 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-display font-bold mb-2">Atlasoon</h2>
            <p className="text-gray-500 text-sm">Baku-based Venture Builder.</p>
          </div>
          
          <div className="flex gap-6">
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-all">
              <Linkedin size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-all">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-all">
              <Github size={18} />
            </a>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8 border-t border-white/5">
          <div className="flex flex-col gap-4">
             <a href="mailto:info@atlasoon.com" className="flex items-center gap-3 text-gray-300 hover:text-atlas-primary transition-colors">
                <Mail size={16} />
                info@atlasoon.com
             </a>
             <div className="flex items-center gap-3 text-gray-300">
                <MapPin size={16} />
                Bakı, Azərbaycan
             </div>
          </div>
          
          <div className="md:text-right">
             <p className="text-gray-500 text-sm">
                &copy; 2026 Atlasoon. Bütün hüquqlar qorunur.
             </p>
          </div>
        </div>
      </div>
    </footer>
  );
};