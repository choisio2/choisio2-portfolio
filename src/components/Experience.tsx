"use client";

import { motion } from 'framer-motion';

const experiences = {
  "Tech & Development": [
    { name: "[TAVE] 16기", role: "대학생 IT 연합 동아리", duration: "2025.09 - 2026.01" },
    { name: "[BDAI] 11기", role: "AI 빅데이터분석학회", duration: "2025.09 - 2026.02" },
    { name: "[CNU]", role: "서강대학교 웹개발 학회", duration: "2024.09 - 2025.02" },
  ],
  "Planning & Communication": [
    { name: "[플래너즈]", role: "남양주시 대학생 기획단", duration: "2024.02 - 2025.02" },
    { name: "[이석영뉴미디어도서관]", role: "영크리에이터크루 기획운영 크루", duration: "2024.04 - 2024.12" },
    { name: "[SHOCK]", role: "서강대학교 댄스동아리 섭외부장", duration: "2023.03 - 2025.01" },
  ]
};

const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-black text-center mb-24 text-white"
        >
          Experience
        </motion.h2>

        <div className="space-y-24">
          {Object.entries(experiences).map(([category, items], catIdx) => (
            <div key={category}>
              <motion.h3 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-[10px] font-black text-matcha mb-12 tracking-[0.4em] uppercase flex items-center"
              >
                <span className="w-12 h-[2px] bg-matcha mr-6" />
                {category}
              </motion.h3>

              <div className="space-y-8">
                {items.map((exp, index) => (
                  <motion.div 
                    key={index} 
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    whileHover={{ x: 10 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex flex-col md:flex-row justify-between items-start md:items-center glass p-8 rounded-2xl group transition-all duration-300"
                  >
                    <div>
                      <p className="font-black text-2xl text-white group-hover:text-matcha transition-colors mb-2">{exp.name}</p>
                      <p className="text-frost font-bold opacity-80">{exp.role}</p>
                    </div>
                    <div className="mt-4 md:mt-0 text-xs text-matcha font-black tracking-widest bg-matcha/10 px-4 py-2 rounded-lg border border-matcha/10">
                      {exp.duration}
                    </div>
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

export default Experience;
