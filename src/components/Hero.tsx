"use client";

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

/* ── 타이핑 훅 ── */
function useTypewriter(texts: string[], speed = 80, pause = 2000) {
  const [display, setDisplay] = useState('');
  const [textIdx, setTextIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = texts[textIdx];
    const timeout = setTimeout(() => {
      if (!deleting) {
        setDisplay(current.slice(0, charIdx + 1));
        if (charIdx + 1 === current.length) {
          setTimeout(() => setDeleting(true), pause);
        } else {
          setCharIdx(c => c + 1);
        }
      } else {
        setDisplay(current.slice(0, charIdx - 1));
        if (charIdx - 1 === 0) {
          setDeleting(false);
          setCharIdx(0);
          setTextIdx(i => (i + 1) % texts.length);
        } else {
          setCharIdx(c => c - 1);
        }
      }
    }, deleting ? speed / 2 : speed);
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, textIdx, texts, speed, pause]);

  return display;
}

/* ── 떠다니는 아이콘들 ── */
const floatItems = [
  { icon: '< />', x: '8%',  y: '20%', delay: 0,   size: 'text-sm',  rotate: -12 },
  { icon: '{ }', x: '88%', y: '15%', delay: 0.5, size: 'text-xs',  rotate: 8  },
  { icon: '☕',   x: '5%',  y: '65%', delay: 1,   size: 'text-xl',  rotate: 0  },
  { icon: '🎵',   x: '90%', y: '60%', delay: 1.5, size: 'text-lg',  rotate: 0  },
  { icon: '✦',   x: '15%', y: '85%', delay: 0.8, size: 'text-xs',  rotate: 0  },
  { icon: '( )', x: '82%', y: '82%', delay: 1.2, size: 'text-xs',  rotate: 15 },
  { icon: '★',   x: '50%', y: '10%', delay: 0.3, size: 'text-xs',  rotate: 20 },
  { icon: '🤖',      x: '92%',  y: '38%', delay: 0.7,  size: 'text-lg',  rotate: -5  },
  { icon: '[ ]',    x: '3%',   y: '42%', delay: 1.1,  size: 'text-xs',  rotate: -8  },
  { icon: '⌨️',      x: '22%',  y: '12%', delay: 1.6,  size: 'text-base',rotate: -10 },
  { icon: '💡',      x: '60%',  y: '88%', delay: 0.9,  size: 'text-base',rotate: 0   },
  { icon: '=> ',    x: '70%',  y: '12%', delay: 0.6,  size: 'text-xs font-mono', rotate: 0 },
  { icon: '◆',      x: '78%',  y: '5%',  delay: 2.2,  size: 'text-[9px]', rotate: 30 },
];

export default function Hero() {
  const typed = useTypewriter(
    ['Android Developer', '실행하는 개발자', '서강대 컴퓨터공학과'],
    75,
    1800
  );

  /* 마우스 따라 움직이는 글로우 */
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const glowX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const glowY = useSpring(mouseY, { stiffness: 60, damping: 20 });
  const sectionRef = useRef<HTMLElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden"
    >
      {/* ── 마우스 추적 글로우 ── */}
      <motion.div
        className="pointer-events-none absolute w-[500px] h-[500px] rounded-full"
        style={{
          x: glowX,
          y: glowY,
          translateX: '-50%',
          translateY: '-50%',
          background: 'radial-gradient(circle, rgba(56,189,248,0.08) 0%, transparent 70%)',
        }}
      />

      {/* ── 배경 고정 글로우 ── */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-matcha/5 rounded-full blur-[100px] pointer-events-none" />

      {/* ── 떠다니는 아이콘들 ── */}
      {floatItems.map((item, i) => (
        <motion.div
          key={i}
          className={`absolute ${item.size} font-black text-matcha/20 select-none pointer-events-none font-mono`}
          style={{ left: item.x, top: item.y, rotate: item.rotate }}
          initial={{ opacity: 0, y: 10 }}
          animate={{
            opacity: [0, 0.6, 0.4, 0.6],
            y: [10, 0, -8, 0],
          }}
          transition={{
            opacity: { delay: item.delay + 1, duration: 2, repeat: Infinity, repeatType: 'mirror' },
            y:       { delay: item.delay,     duration: 4 + i * 0.5, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' },
          }}
        >
          {item.icon}
        </motion.div>
      ))}

      {/* ── 메인 컨텐츠 ── */}
      <div className="relative z-10 max-w-4xl flex flex-col items-center gap-8">

        {/* 아바타 영역 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'backOut' }}
          className="relative"
        >
          {/* 바깥 링 */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 rounded-full border border-matcha/20 border-dashed scale-110"
          />
          {/* 아바타 원 */}
          <div className="w-24 h-24 rounded-full bg-navy-mid border border-matcha/30 flex items-center justify-center text-4xl shadow-lg shadow-matcha/10">
            👩‍💻
          </div>
          {/* 초록 온라인 점 */}
          <motion.div
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-1 right-1 w-4 h-4 bg-matcha rounded-full border-2 border-navy"
          />
        </motion.div>

        {/* 헤드라인 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tight text-white">
            소통과 실행으로<br />
            <span className="text-matcha">결과를 만드는</span> 개발자
          </h1>
        </motion.div>

        {/* 타이핑 텍스트 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="h-8 flex items-center justify-center gap-2"
        >
          <span className="text-frost/50 text-lg font-medium">저는</span>
          <span className="text-matcha font-black text-lg min-w-[200px] text-left">
            {typed}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.6, repeat: Infinity }}
              className="inline-block w-[2px] h-5 bg-matcha ml-0.5 align-middle"
            />
          </span>
          <span className="text-frost/50 text-lg font-medium">입니다.</span>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <a
            href="#about"
            className="group relative inline-flex items-center gap-3 px-10 py-4 rounded-full font-black text-sm uppercase tracking-widest overflow-hidden border border-matcha/30 text-matcha hover:text-navy transition-colors duration-500"
          >
            {/* 호버 fill 효과 */}
            <span className="absolute inset-0 bg-matcha translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out rounded-full" />
            <span className="relative z-10">Explore My Work</span>
            <motion.span
              className="relative z-10"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              ↓
            </motion.span>
          </a>
        </motion.div>
      </div>

      {/* ── 스크롤 인디케이터 ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-5 h-8 border border-frost/20 rounded-full flex justify-center pt-1.5">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="w-1 h-1 bg-matcha rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}