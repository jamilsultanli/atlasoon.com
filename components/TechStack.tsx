import React from 'react';

const technologies = [
  "React Native", "Flutter", "Next.js", "Python", "Firebase", "Appwrite", "TensorFlow", "Node.js", "TypeScript", "Tailwind CSS"
];

export const TechStack: React.FC = () => {
  return (
    <section className="py-20 border-y border-white/5 bg-black overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
        <h3 className="text-xl text-gray-400 font-medium">Güc Aldığımız Texnologiyalar</h3>
      </div>
      
      <div className="relative flex overflow-x-hidden group">
        <div className="py-4 animate-marquee whitespace-nowrap flex gap-12 items-center">
          {technologies.map((tech, index) => (
            <span key={index} className="text-2xl md:text-4xl font-display font-bold text-white/20 hover:text-white/80 transition-colors cursor-default">
              {tech}
            </span>
          ))}
          {/* Duplicate for seamless loop */}
          {technologies.map((tech, index) => (
            <span key={`dup-${index}`} className="text-2xl md:text-4xl font-display font-bold text-white/20 hover:text-white/80 transition-colors cursor-default">
              {tech}
            </span>
          ))}
           {technologies.map((tech, index) => (
            <span key={`dup2-${index}`} className="text-2xl md:text-4xl font-display font-bold text-white/20 hover:text-white/80 transition-colors cursor-default">
              {tech}
            </span>
          ))}
        </div>
        
        {/* Gradient fades for edges */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-atlas-bg to-transparent z-10" />
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-atlas-bg to-transparent z-10" />
      </div>
      
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
};