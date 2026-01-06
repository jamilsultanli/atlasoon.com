import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, Smartphone, Lock, Rocket } from 'lucide-react';

export const VenturesGrid: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress relative to this section for parallax effects
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax transform values - Background elements move at different speeds
  const yBgLarge = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const yBgSmall = useTransform(scrollYProgress, [0, 1], [-30, 30]);
  const rotateOp = useTransform(scrollYProgress, [0, 1], [0, 15]);

  return (
    <section id="ventures" className="py-24 relative" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl font-display font-bold mb-4">Bizim Startaplar</h2>
          <p className="text-gray-400">Qlobal problemləri həll edən yerli məhsullar.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 h-auto md:h-[600px]">
          
          {/* Card 1: Anacan (Large) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group md:col-span-2 md:row-span-2 glass-card rounded-3xl p-8 relative overflow-hidden flex flex-col justify-between transition-all duration-500 hover:border-atlas-sage/30 hover:shadow-[0_0_50px_-10px_rgba(143,174,150,0.2)] bg-gradient-to-br from-white/5 to-transparent hover:to-atlas-sage/5"
          >
            {/* Parallax Background */}
            <motion.div 
              style={{ y: yBgLarge }}
              className="absolute top-0 right-0 w-96 h-96 bg-atlas-sage/20 blur-[100px] rounded-full pointer-events-none opacity-50 group-hover:opacity-80 transition-opacity duration-500" 
            />
            
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-atlas-sage/20 text-atlas-sage border border-atlas-sage/30">
                  FemTech / AI
                </span>
                <span className="flex items-center gap-1 text-green-400 text-xs font-bold uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  Bazarda
                </span>
              </div>
              <h3 className="text-3xl font-display font-bold mb-2">Anacan</h3>
              <p className="text-gray-400 max-w-sm">Azərbaycanlı analar üçün ağıllı hamiləlik bələdçisi. Gündəlik izləmə və ekspert məsləhətləri.</p>
            </div>

            <div className="relative z-10 mt-8 flex-1 flex items-end justify-center md:justify-end">
               {/* Abstract Phone Mockup - Enhanced Animation */}
               <motion.div 
                 whileHover={{ y: -25, rotateZ: -2, scale: 1.02 }}
                 transition={{ type: "spring", stiffness: 200, damping: 20 }}
                 className="w-48 md:w-56 h-80 md:h-96 border-[8px] border-gray-800 rounded-[2.5rem] bg-gray-900 overflow-hidden shadow-2xl relative translate-y-12 transition-transform duration-500"
               >
                  <div className="absolute top-0 w-full h-full bg-[#8FAE96]/10 flex flex-col items-center pt-8">
                     <div className="w-16 h-16 rounded-full bg-atlas-sage/30 mb-4 flex items-center justify-center shadow-lg shadow-atlas-sage/20">
                        <Smartphone className="text-atlas-sage" />
                     </div>
                     <div className="w-32 h-2 bg-gray-800 rounded-full opacity-50 mb-2"></div>
                     <div className="w-24 h-2 bg-gray-800 rounded-full opacity-30"></div>
                     
                     {/* UI Elements */}
                     <div className="mt-8 w-full px-4 space-y-3">
                        <div className="h-24 bg-gradient-to-br from-atlas-sage/20 to-transparent rounded-xl w-full border border-atlas-sage/10"></div>
                        <div className="h-20 bg-gray-800/50 rounded-xl w-full"></div>
                        <div className="h-20 bg-gray-800/30 rounded-xl w-full"></div>
                     </div>
                  </div>
               </motion.div>
            </div>

            <button className="absolute bottom-8 left-8 w-12 h-12 rounded-full bg-white text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0 z-20 shadow-lg hover:scale-110">
               <ArrowUpRight size={20} />
            </button>
          </motion.div>

          {/* Card 2: Project X (Medium) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group col-span-1 md:row-span-1 glass-card rounded-3xl p-6 relative overflow-hidden flex flex-col hover:bg-white/5 transition-colors"
          >
             <motion.div 
               style={{ rotate: rotateOp }}
               className="absolute inset-0 bg-gradient-to-br from-atlas-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" 
             />
             
             <div className="flex justify-between items-start mb-6 relative z-10">
                <span className="p-2 rounded-lg bg-atlas-primary/20 text-atlas-primary">
                   <Lock size={20} />
                </span>
                <span className="text-xs text-yellow-500 font-mono bg-yellow-500/10 px-2 py-1 rounded">Hazırlanır</span>
             </div>
             
             <h3 className="text-xl font-display font-bold mb-1 relative z-10">Project X</h3>
             <p className="text-gray-400 text-sm mb-4 relative z-10">Yeni nəsil ödəniş sistemləri.</p>
             
             <div className="mt-auto h-24 w-full bg-atlas-primary/5 rounded-xl border border-atlas-primary/10 flex items-center justify-center overflow-hidden relative z-10">
                <motion.div style={{ y: yBgSmall }} className="w-full h-full relative">
                   <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-mono text-xs text-atlas-primary/50">
                      ENCRYPTED_DATA
                   </div>
                </motion.div>
             </div>
          </motion.div>

          {/* Card 3: Mission (Small) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="group col-span-1 md:row-span-1 bg-atlas-primary text-white rounded-3xl p-6 flex flex-col justify-center relative overflow-hidden"
          >
             <motion.div 
                style={{ y: yBgLarge }}
                className="absolute -right-4 -bottom-4 w-32 h-32 bg-white/10 rounded-full blur-2xl" 
             />
             
             <div className="relative z-10">
                <h3 className="text-lg font-medium opacity-80 mb-4 uppercase tracking-widest text-xs">Missiyamız</h3>
                <div className="space-y-4">
                   <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-sm">1</div>
                      <span className="font-display font-bold text-lg">İdeya</span>
                   </div>
                   <div className="w-0.5 h-4 bg-white/20 ml-4"></div>
                   <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-sm">2</div>
                      <span className="font-display font-bold text-lg">MVP</span>
                   </div>
                   <div className="w-0.5 h-4 bg-white/20 ml-4"></div>
                   <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-white text-atlas-primary flex items-center justify-center text-sm">
                         <Rocket size={14} />
                      </div>
                      <span className="font-display font-bold text-lg">Qlobal Bazar</span>
                   </div>
                </div>
             </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};