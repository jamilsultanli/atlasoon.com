import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern bg-[size:40px_40px] opacity-20 pointer-events-none" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-atlas-primary/20 rounded-full blur-[128px]" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-atlas-purple/20 rounded-full blur-[128px]" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Text Content */}
        <div className="space-y-8 text-center lg:text-left z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-atlas-primary text-xs font-medium mb-6 backdrop-blur-md">
              <Sparkles size={12} />
              <span>Gələcəyi İnşa Edirik</span>
            </div>
            <h1 className="font-display font-bold text-5xl md:text-7xl leading-[1.1] tracking-tight mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-500">
                Gələcəyin Texnologiyalarını
              </span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-atlas-primary to-atlas-purple">
                Bu Gündən Qururuq
              </span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Atlasoon – İdeyaları qlobal məhsullara çevirən innovasiya mərkəzidir.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
          >
            <button className="group relative px-8 py-4 bg-white text-black rounded-full font-medium tracking-wide overflow-hidden hover:scale-105 transition-transform duration-300 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]">
              <span className="relative z-10 flex items-center gap-2">
                Portfoliomuzla Tanış Olun
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-atlas-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            </button>
            
            <a href="#contact" className="text-gray-400 hover:text-white transition-colors underline-offset-4 hover:underline">
              Bizimlə əlaqə saxlayın
            </a>
          </motion.div>
        </div>

        {/* Visual Element - Holographic Neural Core */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="relative h-[400px] md:h-[600px] flex items-center justify-center perspective-[1200px]"
        >
           {/* The Neural Core Container */}
           <div className="relative w-64 h-64 md:w-96 md:h-96" style={{ transformStyle: 'preserve-3d' }}>
              
              {/* Spinning Data Rings */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ rotateX: [0, 360], rotateY: [0, 360], rotateZ: [0, 180] }}
                  transition={{ 
                    duration: 15 + i * 5, 
                    repeat: Infinity, 
                    ease: "linear",
                    repeatType: "loop"
                  }}
                  className={`absolute inset-0 rounded-full border border-atlas-primary/30 ${i === 1 ? 'border-dashed' : 'border-solid'}`}
                  style={{ 
                    transformStyle: 'preserve-3d',
                    borderWidth: '1px',
                    boxShadow: `0 0 20px rgba(37, 99, 235, ${0.1 + i * 0.1})`
                  }}
                />
              ))}

              {/* Inner Core */}
              <motion.div 
                 animate={{ scale: [1, 1.1, 1] }}
                 transition={{ duration: 4, repeat: Infinity }}
                 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-atlas-primary/10 rounded-full blur-xl"
              />
              
              {/* Holographic Projection Planes */}
              <motion.div
                animate={{ rotateY: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-white/5"
                style={{ transformStyle: 'preserve-3d', transform: 'rotateX(60deg)' }}
              >
                 <div className="absolute top-0 left-1/2 w-2 h-2 bg-white rounded-full shadow-[0_0_10px_white]" />
                 <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-atlas-purple rounded-full shadow-[0_0_10px_#7C3AED]" />
              </motion.div>

              <motion.div
                animate={{ rotateX: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-atlas-purple/20"
                style={{ transformStyle: 'preserve-3d', transform: 'rotateY(60deg)' }}
              >
                 <div className="absolute top-1/2 right-0 w-2 h-2 bg-atlas-primary rounded-full shadow-[0_0_10px_#2563EB]" />
              </motion.div>

              {/* Floating Data Particles */}
              <div className="absolute inset-0 pointer-events-none">
                 <motion.div 
                   animate={{ y: [-10, 10, -10], opacity: [0.5, 1, 0.5] }}
                   transition={{ duration: 3, repeat: Infinity }}
                   className="absolute -top-10 -right-10 px-4 py-2 bg-black/50 backdrop-blur-md border border-white/10 rounded-lg text-[10px] font-mono text-atlas-primary shadow-lg"
                 >
                    PROCESSING...
                 </motion.div>
                 <motion.div 
                   animate={{ y: [10, -10, 10], opacity: [0.5, 1, 0.5] }}
                   transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                   className="absolute -bottom-5 -left-5 px-4 py-2 bg-black/50 backdrop-blur-md border border-white/10 rounded-lg text-[10px] font-mono text-atlas-purple shadow-lg"
                 >
                    AI_MODEL_V2.0
                 </motion.div>
              </div>
           </div>
        </motion.div>
      </div>
    </section>
  );
};