import React from 'react';
import { motion } from 'framer-motion';
import { Search, Code2, Globe } from 'lucide-react';

const steps = [
  {
    icon: <Search className="w-8 h-8 text-atlas-primary" />,
    title: "Araşdırma",
    description: "Bazarın ehtiyaclarını dərindən analiz edirik. Problemi tapır və həll yolunu təyin edirik."
  },
  {
    icon: <Code2 className="w-8 h-8 text-atlas-purple" />,
    title: "İnkişaf",
    description: "Sürətli MVP və çevik (Agile) proqramlaşdırma. İdeyanı reallığa çeviririk."
  },
  {
    icon: <Globe className="w-8 h-8 text-green-400" />,
    title: "Böyümə",
    description: "Məhsulu bazara çıxarır və miqyaslayırıq. Yerli uğurdan qlobal bazara."
  }
];

export const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-black/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-display font-bold mb-4"
          >
            İş Prinsipimiz
          </motion.h2>
          <div className="w-24 h-1 bg-gradient-to-r from-atlas-primary to-atlas-purple mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="glass-card p-8 rounded-2xl border-t border-white/10 relative group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="mb-6 bg-white/5 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:bg-white/10 transition-colors">
                {step.icon}
              </div>
              
              <h3 className="text-2xl font-bold mb-4 font-display">{step.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};