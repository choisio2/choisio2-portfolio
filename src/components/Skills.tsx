"use client";

import { motion } from 'framer-motion';
import { FaPython, FaJava, FaGitAlt, FaGithub } from 'react-icons/fa6';
import { SiC, SiCplusplus, SiKotlin, SiCloudflare, SiFirebase } from "react-icons/si";

const skills = {
  Languages: [
    { name: 'Kotlin', icon: <SiKotlin size={40} /> },
    { name: 'Python', icon: <FaPython size={40} /> },
    { name: 'Java', icon: <FaJava size={40} /> },
    { name: 'C', icon: <SiC size={40} /> },
    { name: 'C++', icon: <SiCplusplus size={40} /> },
  ],
  "Tools & Version Control": [
    { name: 'Git', icon: <FaGitAlt size={40} /> },
    { name: 'GitHub', icon: <FaGithub size={40} /> },
  ],
  "Deployment": [
    { name: 'Cloudflare', icon: <SiCloudflare size={40} /> },
    { name: 'Firebase', icon: <SiFirebase size={40} /> },
  ],
};

const Skills = () => {
  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-black text-center mb-24 text-white"
        >
          Skills
        </motion.h2>

        <div className="space-y-24">
          {Object.entries(skills).map(([category, items], catIdx) => (
            <div key={category}>
              <motion.h3 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-xl font-black text-matcha mb-10 border-l-4 border-matcha pl-6 tracking-widest uppercase"
              >
                {category}
              </motion.h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {items.map((skill, idx) => (
                  <motion.div 
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex flex-col items-center gap-5 p-8 glass rounded-3xl transition-all duration-300"
                  >
                    <div className="text-frost">
                      {skill.icon}
                    </div>
                    <p className="font-black text-xs tracking-[0.2em] text-frost/80 uppercase">{skill.name}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
