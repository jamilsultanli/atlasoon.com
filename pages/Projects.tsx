import React from 'react';
import { VenturesGrid } from '../components/VenturesGrid';
import { motion } from 'framer-motion';

export const Projects: React.FC = () => {
  return (
    <div className="pt-32 pb-20 animate-in fade-in duration-500 min-h-screen">
       <div className="max-w-7xl mx-auto px-6 mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-display font-bold mb-6"
          >
            Portfoliomuz
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400 max-w-2xl"
          >
            Biz sadəcə proqram təminatı yazmırıq, biz gələcəyin bizneslərini qururuq. 
            Hər bir layihə Atlasoon-un daxili laboratoriyasında doğulur.
          </motion.p>
       </div>
       <VenturesGrid />
    </div>
  );
};