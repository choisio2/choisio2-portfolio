"use client";

import { motion } from 'framer-motion';
import { FaGithub, FaBloggerB } from 'react-icons/fa';

const Archiving = () => {
  return (
    <section id="archiving" className="py-32 relative overflow-hidden bg-white/[0.01]">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-black text-center mb-24 text-white"
        >
          Archiving
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {[
            { 
              name: 'GitHub', 
              icon: <FaGithub size={40} />, 
              link: 'https://github.com/choisio2', 
              desc: '소스 코드 저장소입니다.',
              items: ['과거 프로젝트 소스 코드', '학습 내용 기록', '오픈소스 기여 및 협업']
            },
            { 
              name: 'Tistory', 
              icon: <FaBloggerB size={40} />, 
              link: 'https://sio2-dev.tistory.com/', 
              desc: '학습 및 개발 블로그입니다.',
              items: ['문제 해결 과정 기록', '신기술 학습 정리', '프로젝트 회고']
            }
          ].map((item, idx) => (
            <motion.a 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03, y: -5 }}
              viewport={{ once: true }}
              href={item.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="glass p-10 rounded-[2rem] border-white/10 hover:border-matcha/40 transition-all duration-300 block group"
            >
              <div className="flex items-center space-x-6 mb-8">
                <div className="text-frost group-hover:text-matcha transition-colors duration-300">
                  {item.icon}
                </div>
                <h3 className="text-3xl font-black text-white group-hover:text-matcha transition-colors duration-300">{item.name}</h3>
              </div>
              
              <p className="text-frost mb-8 leading-relaxed opacity-80">
                {item.desc}
              </p>
              
              <ul className="space-y-4">
                {item.items.map((listItem, lidx) => (
                  <li key={lidx} className="flex items-center text-sm text-frost/70">
                    <span className="w-2 h-2 bg-matcha/60 rounded-full mr-4 group-hover:bg-matcha transition-colors duration-300" />
                    {listItem}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex items-center text-matcha font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span>View More</span>
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Archiving;
