import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <div className="pt-32 pb-20 animate-in fade-in duration-500 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            <motion.div
               initial={{ opacity: 0, x: -20 }}
               animate={{ opacity: 1, x: 0 }}
            >
               <h1 className="text-5xl font-display font-bold mb-6">Əlaqə</h1>
               <p className="text-gray-400 text-lg mb-12">
                  Yeni bir ideyanız var və ya sadəcə salam demək istəyirsiniz? 
                  Bizimlə əlaqə saxlayın.
               </p>

               <div className="space-y-8">
                  <div className="flex items-start gap-4">
                     <div className="w-12 h-12 rounded-xl bg-atlas-primary/10 flex items-center justify-center text-atlas-primary">
                        <Mail size={24} />
                     </div>
                     <div>
                        <h3 className="text-lg font-bold mb-1">Email</h3>
                        <p className="text-gray-400">info@atlasoon.com</p>
                        <p className="text-gray-400">careers@atlasoon.com</p>
                     </div>
                  </div>

                  <div className="flex items-start gap-4">
                     <div className="w-12 h-12 rounded-xl bg-atlas-purple/10 flex items-center justify-center text-atlas-purple">
                        <MapPin size={24} />
                     </div>
                     <div>
                        <h3 className="text-lg font-bold mb-1">Ofis</h3>
                        <p className="text-gray-400">Port Baku Towers</p>
                        <p className="text-gray-400">Bakı, Azərbaycan, AZ1010</p>
                     </div>
                  </div>
               </div>
            </motion.div>

            <motion.div
               initial={{ opacity: 0, x: 20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ delay: 0.2 }}
               className="glass-card p-8 rounded-3xl"
            >
               <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-300">Adınız</label>
                        <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-atlas-primary focus:ring-1 focus:ring-atlas-primary transition-all" placeholder="Ad Soyad" />
                     </div>
                     <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-300">Email</label>
                        <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-atlas-primary focus:ring-1 focus:ring-atlas-primary transition-all" placeholder="numune@email.com" />
                     </div>
                  </div>
                  
                  <div className="space-y-2">
                     <label className="text-sm font-medium text-gray-300">Mövzu</label>
                     <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-atlas-primary focus:ring-1 focus:ring-atlas-primary transition-all text-gray-300">
                        <option>Əməkdaşlıq</option>
                        <option>İş müraciəti</option>
                        <option>Ümumi sorğu</option>
                     </select>
                  </div>

                  <div className="space-y-2">
                     <label className="text-sm font-medium text-gray-300">Mesajınız</label>
                     <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-atlas-primary focus:ring-1 focus:ring-atlas-primary transition-all" placeholder="Mesajınızı bura yazın..."></textarea>
                  </div>

                  <button type="button" className="w-full bg-atlas-primary text-white font-medium py-4 rounded-xl hover:bg-blue-600 transition-colors flex items-center justify-center gap-2">
                     Göndər <Send size={18} />
                  </button>
               </form>
            </motion.div>

         </div>
      </div>
    </div>
  );
};