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

        {/* ── 프로필 소개 ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass p-10 rounded-[2.5rem] mb-8 flex flex-col md:flex-row items-center md:items-start gap-10"
        >
          {/* 프로필 이모지 */}
          <div className="shrink-0">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-matcha/30 shadow-lg shadow-matcha/10 bg-white/5 flex items-center justify-center">
              <span className="text-6xl md:text-7xl">👩‍💻</span>
            </div>
          </div>

          {/* 소개 텍스트 */}
          <div className="flex flex-col justify-center text-center md:text-left">
            <p className="text-[10px] font-black text-matcha uppercase tracking-[0.3em] mb-3">
              Hello, I'm
            </p>
            <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
              최수정입니다.
            </h3>
            <p className="text-frost/70 leading-relaxed text-base">
              아이디어를 실제로 만들어내는 개발자입니다.{' '}
              <span className="text-white font-semibold">플레이스토어에 앱 출시</span>부터{' '}
              <span className="text-white font-semibold">데이터 분석 모델링</span>까지,
              배운 것을 직접 실행하여 왔습니다. 
              
            </p>
          </div>
        </motion.div>

        {/* ── 인적 정보 카드 ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="glass p-12 rounded-[2.5rem] relative group"
        >
          <div className="absolute inset-0 bg-matcha/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[2.5rem]" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-12 relative z-10">
            {[
              { label: 'Name',      value: '최수정' },
              { label: 'Birth',     value: '2004.10.02' },
              { label: 'Education', value: '서강대학교 컴퓨터공학과' },
              { label: 'Email',     value: 'suho3938@gmail.com' },
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