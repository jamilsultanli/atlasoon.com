import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github } from 'lucide-react';

const teamMembers = [
  {
    name: "Elvin Abbasov",
    role: "Təsisçi & CEO",
    color: "from-blue-500 to-cyan-500"
  },
  {
    name: "Aysel Əliyeva",
    role: "Məhsul Meneceri (Anacan)",
    color: "from-emerald-500 to-green-500"
  },
  {
    name: "Rəşad Məmmədov",
    role: "Baş Mühəndis",
    color: "from-purple-500 to-pink-500"
  },
  {
    name: "Leyla Kərimova",
    role: "UI/UX Dizayner",
    color: "from-orange-500 to-red-500"
  },
  {
    name: "Fərid Quliyev",
    role: "Mobile Developer",
    color: "from-indigo-500 to-blue-500"
  },
  {
    name: "Nigar Həsənova",
    role: "Marketinq",
    color: "from-yellow-500 to-orange-500"
  }
];

export const Team: React.FC = () => {
  return (
    <div className="pt-32 pb-20 animate-in fade-in duration-500 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="text-center mb-16"
        >
           <h1 className="text-5xl font-display font-bold mb-6">Komandamız</h1>
           <p className="text-gray-400 text-xl max-w-2xl mx-auto">
             İnnovasiyanı reallığa çevirən istedadlı insanlar.
           </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="group glass-card p-6 rounded-2xl relative overflow-hidden hover:bg-white/5 transition-all duration-300"
            >
               <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${member.color} opacity-50 group-hover:opacity-100 transition-opacity`} />
               
               <div className="flex items-center gap-4 mb-4">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${member.color} flex items-center justify-center text-2xl font-bold`}>
                     {member.name.charAt(0)}
                  </div>
                  <div>
                     <h3 className="text-xl font-bold font-display">{member.name}</h3>
                     <p className="text-sm text-gray-400">{member.role}</p>
                  </div>
               </div>
               
               <div className="flex gap-3 mt-4 border-t border-white/5 pt-4">
                  <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 hover:text-atlas-primary transition-colors">
                     <Linkedin size={18} />
                  </a>
                  <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 hover:text-white transition-colors">
                     <Github size={18} />
                  </a>
               </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};