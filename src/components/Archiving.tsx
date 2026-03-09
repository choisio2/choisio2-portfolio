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
          className="text-5xl md:text-6xl font-black text-center mb-6 text-white"
        >
          Archiving
        </motion.h2>
        <br/>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center text-frost/60 text-base leading-relaxed mb-24"
        >
          진행한 프로젝트의 개발 과정, 트러블슈팅, 회고를 블로그에 상세히 정리해두었어요.{' '}
          <span className="text-matcha font-bold">꼭 들어가서 확인해주세요! 🙇‍♀️</span>
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {[
            { 
              name: 'GitHub', 
              icon: <FaGithub size={40} />, 
              link: 'https://github.com/choisio2', 
              desc: ' 👾 소스 코드 저장소입니다',
              items: ['프로젝트 소스 코드', '과제 코드 기록', '프로젝트 협업 기여'],
              highlight: null,
            },
            { 
              name: 'Tistory', 
              icon: <FaBloggerB size={40} />, 
              link: 'https://sio2-dev.tistory.com/', 
              desc: '💻 개발 블로그입니다',
              items: ['프로젝트 회고', '문제 해결 과정 기록', '스터디 내용 정리'],
              highlight: {
                label: '📝 프로젝트 기록',
                text: '진행한 프로젝트의 개발 과정, 트러블슈팅, 회고를 상세히 정리해두었습니다. ',
              },
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
                    <span className="w-2 h-2 bg-matcha/60 rounded-full mr-4 group-hover:bg-matcha transition-colors duration-300 shrink-0" />
                    {listItem}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex items-center text-matcha font-bold text-sm transition-opacity duration-300">
                <span>View More</span>
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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