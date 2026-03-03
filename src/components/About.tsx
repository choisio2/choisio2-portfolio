"use client";

import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-black text-center mb-20 text-white"
        >
          About <span className="text-matcha">Me</span>
        </motion.h2>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass p-12 rounded-[2.5rem] relative group"
        >
          {/* Subtle Accent Glow */}
          <div className="absolute inset-0 bg-matcha/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[2.5rem]" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-12 relative z-10">
            {[
              { label: 'Name', value: '최수정' },
              { label: 'Birth', value: '2004.10.02' },
              { label: 'Education', value: '서강대학교 컴퓨터공학과' },
              { label: 'Email', value: 'suho3938@gmail.com' }
            ].map((item, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 + 0.3 }}
                className="flex flex-col space-y-3 border-l-4 border-matcha/20 pl-8 hover:border-matcha transition-colors duration-300"
              >
                <span className="text-matcha text-xs font-black uppercase tracking-[0.25em]">{item.label}</span>
                <span className="text-2xl font-bold text-frost group-hover:text-white transition-colors duration-300">{item.value}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
