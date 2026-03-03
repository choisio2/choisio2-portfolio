"use client";

import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden">
      {/* Decorative Blur Elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-matcha/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-frost/10 rounded-full blur-[150px] -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="max-w-5xl"
      >
        <h1 className="text-5xl md:text-8xl font-black mb-10 leading-[1.1] tracking-tight text-white">
          <span className="text-matcha">사용자의 일상</span>과 맥락을<br />
          <span className="text-frost opacity-90">기술로 가치를</span> 만듭니다.
        </h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="text-xl md:text-3xl text-frost/80 max-w-3xl mx-auto leading-relaxed font-medium"
        >
          안녕하세요. 소통과 실행으로 결과를 만들어내는 <br />
          개발자 <span className="text-matcha font-bold border-b-4 border-matcha/20">최수정</span>입니다.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-20"
        >
          <a href="#about" className="glass px-12 py-5 text-matcha font-black rounded-full hover:bg-matcha hover:text-white hover:scale-110 transition-all duration-500 uppercase tracking-widest text-sm">
            Explore My Work
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-frost/30 rounded-full flex justify-center p-2">
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-1.5 h-1.5 bg-matcha rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
