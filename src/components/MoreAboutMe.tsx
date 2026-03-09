"use client";

import { motion } from 'framer-motion';

const moreItems = [
  {
    emoji: "🍁",
    title: "캐나다 어학연수",
    duration: "2025.03 - 2025.05",
    desc: "3개월간 캐나다에서 어학연수를 다녀왔습니다. 현지 생활을 통해 영어 커뮤니케이션 능력을 키우고, 다양한 문화권의 사람들과 협업하는 경험을 쌓았습니다.",
    tags: ["English", "글로벌 경험", "자기계발"],
  },
  {
    emoji: "🏊",
    title: "라이프가드 자격증",
    duration: "",
    desc: "라이프가드 자격증을 취득하고 실제 수영장에서 근무까지 했습니다. 안전을 책임지는 경험을 통해 침착함과 순간 판단력, 체력을 키웠습니다.",
    tags: ["자격증", "책임감", "현장 경험"],
  },
  {
    emoji: "🪖",
    title: "ROTC 학군사관후보생",
    duration: "",
    desc: "ROTC 학군단 소속으로 군사 훈련을 병행하고 있습니다. 강도 높은 훈련을 통해 체력과 인내심은 물론, 조직 안에서의 책임감과 리더십을 몸으로 익히고 있습니다.",
    tags: ["리더십", "책임감", "자기관리"],
  },
];

const memories = [
  { 
    src: "/images/memories/memory1.jpg", 
    title: "캐나다의 가을", 
    span: "md:col-span-2 md:row-span-2 h-[400px] md:h-full" 
  },
  { 
    src: "/images/memories/memory2.jpg", 
    title: "학군단 훈련", 
    span: "md:col-span-1 md:row-span-1 h-[250px] md:h-full" 
  },
  { 
    src: "/images/memories/memory3.jpg", 
    title: "프로젝트 협업", 
    span: "md:col-span-1 md:row-span-1 h-[250px] md:h-full" 
  },
  { 
    src: "/images/memories/memory4.jpg", 
    title: "라이프가드 근무", 
    span: "md:col-span-1 md:row-span-2 h-[400px] md:h-full" 
  },
  { 
    src: "/images/memories/memory5.jpg", 
    title: "소중한 순간들", 
    span: "md:col-span-2 md:row-span-1 h-[200px] md:h-full" 
  },
  { 
    src: "/images/memories/memory6.jpg", 
    title: "여행의 기록", 
    span: "md:col-span-1 md:row-span-1 h-[200px] md:h-full" 
  },
];

const MoreAboutMe = () => {
  return (
    <section id="more" className="py-32 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-black text-center mb-24 text-white"
        >
          More About Me
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-40">
          {moreItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="glass p-8 rounded-2xl group hover:border-matcha/20 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-3">
                <span className="text-3xl">{item.emoji}</span>
                <div>
                  <p className="font-black text-lg text-white group-hover:text-matcha transition-colors duration-300">
                    {item.title}
                  </p>
                  {item.duration && (
                    <p className="text-xs text-matcha font-bold tracking-widest mt-0.5">{item.duration}</p>
                  )}
                </div>
              </div>
              <div className="w-full h-[1px] bg-white/5 mb-4" />
              <p className="text-frost/70 text-sm leading-relaxed mb-5">{item.desc}</p>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag, tidx) => (
                  <span key={tidx} className="text-[10px] font-black uppercase tracking-wider text-frost/50 bg-white/5 border border-white/8 px-3 py-1 rounded-full group-hover:border-matcha/20 group-hover:text-frost/70 transition-all duration-300">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Moments & Memories (Bento Grid) ── */}
        <div className="mt-40">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-black text-matcha mb-12 tracking-[0.25em] uppercase text-center"
          >
            Moments & Memories
          </motion.h3>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:auto-rows-[200px]">
            {memories.map((photo, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`relative group overflow-hidden rounded-3xl border border-white/10 shadow-2xl ${photo.span}`}
              >
                <img 
                  src={photo.src} 
                  alt={photo.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&q=80`;
                  }}
                />
                {/* 그라데이션 오버레이 */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-matcha text-[10px] font-black uppercase tracking-[0.2em] mb-2">Memory {idx + 1}</p>
                    <p className="text-white font-black text-lg">{photo.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoreAboutMe;