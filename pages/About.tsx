import React from 'react';
import { Process } from '../components/Process';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  return (
    <div className="pt-32 pb-20 animate-in fade-in duration-500 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h1 className="text-5xl font-display font-bold mb-8">
              Haqqımızda
            </h1>
            <div className="space-y-6 text-lg text-gray-400">
              <p>
                <span className="text-white font-medium">Atlasoon</span>, Bakı mərkəzli "Venture Builder" şirkətidir. Biz ənənəvi proqramlaşdırma agentliyi deyilik. Biz öz startaplarımızı qurur, onları böyüdür və qlobal bazara çıxarırıq.
              </p>
              <p>
                Komandamız təcrübəli mühəndislər, dizaynerlər və məhsul menecerlərindən ibarətdir. Məqsədimiz texnologiyanın gücü ilə insanların həyatını yaxşılaşdıran davamlı bizneslər yaratmaqdır.
              </p>
            </div>
          </div>
          <div className="relative">
             <div className="absolute inset-0 bg-atlas-primary/20 blur-[100px] rounded-full" />
             <div className="relative glass-card p-8 rounded-3xl border border-white/10">
                <h3 className="text-2xl font-bold mb-4 text-white">Vizyonumuz</h3>
                <p className="text-gray-400 italic">"Azərbaycandan dünyaya açılan texnologiya körpüsü olmaq."</p>
             </div>
          </div>
        </motion.div>
      </div>
      
      <Process />
    </div>
  );
};