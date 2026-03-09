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
    desc: "ROTC 학군단 소속으로 군사 훈련을 병행하고 있습니다. 훈련을 통해 체력과 책임감과 리더십을 몸으로 익히고 있습니다. 기초군사훈련 당시 노력을 인정받아 교육여단장상을 수상했습니다. ",
    tags: ["리더십", "책임감", "자기관리"],
  },
];

const memories = [
  { src: "/images/memories/memory1.jpg", title: "캐나다 나이아가라 폭포",   label: "Canada, 2025" },
  { src: "/images/memories/memory2.jpg", title: "학군단 기초군사훈련 수료",     label: "ROTC Training" },
  { src: "/images/memories/memory3.jpg", title: "라이프가드 근무", label: "Lifeguard Duty" },
  { src: "/images/memories/memory4.jpg", title: "프로젝트 협업",   label: "Team DIP" },
  { src: "/images/memories/memory5.jpg", title: "여행의 기록",   label: "Memories" },
  { src: "/images/memories/memory6.jpg", title: "미국 뉴욕 여행",     label: "Journey" },
];

const PhotoCard = ({
  photo,
  idx,
  className = "",
}: {
  photo: (typeof memories)[0];
  idx: number;
  className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: idx * 0.08, duration: 0.6 }}
    className={`relative group overflow-hidden rounded-2xl border border-white/8 ${className}`}
  >
    <img
      src={photo.src}
      alt={photo.title}
      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      onError={(e) => {
        (e.target as HTMLImageElement).src =
          `https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80`;
      }}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />
    <div className="absolute inset-0 bg-matcha/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <div className="absolute bottom-0 left-0 p-5">
      <p className="text-[9px] text-matcha font-black uppercase tracking-[0.25em] mb-1">
        {photo.label}
      </p>
      <p className="text-white font-bold text-sm leading-tight">{photo.title}</p>
    </div>
  </motion.div>
);

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

        {/* ── 카드 3열 ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-32">
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
                    <p className="text-xs text-matcha font-bold tracking-widest mt-0.5">
                      {item.duration}
                    </p>
                  )}
                </div>
              </div>
              <div className="w-full h-[1px] bg-white/5 mb-4" />
              <p className="text-frost/70 text-sm leading-relaxed mb-5">{item.desc}</p>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag, tidx) => (
                  <span
                    key={tidx}
                    className="text-[10px] font-black uppercase tracking-wider text-frost/50 bg-white/5 border border-white/8 px-3 py-1 rounded-full group-hover:border-matcha/20 group-hover:text-frost/70 transition-all duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Moments & Memories ── */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[10px] font-black text-matcha tracking-[0.3em] uppercase text-center mb-10"
        >
          Moments &amp; Memories
        </motion.p>

        {/* 매거진 레이아웃 */}
        <div className="flex flex-col gap-3">

          {/* Row 1: 큰 피처(2) + 세로(1) */}
          <div className="flex gap-3 h-[320px]">
            <PhotoCard photo={memories[0]} idx={0} className="flex-[2] min-w-0" />
            <PhotoCard photo={memories[1]} idx={1} className="flex-[1] min-w-0" />
          </div>

          {/* Row 2: 세로(1) + 와이드(2) */}
          <div className="flex gap-3 h-[240px]">
            <PhotoCard photo={memories[2]} idx={2} className="flex-[1] min-w-0" />
            <PhotoCard photo={memories[3]} idx={3} className="flex-[2] min-w-0" />
          </div>

          {/* Row 3: 균일 2등분 */}
          <div className="flex gap-3 h-[200px]">
            <PhotoCard photo={memories[4]} idx={4} className="flex-[1] min-w-0" />
            <PhotoCard photo={memories[5]} idx={5} className="flex-[1] min-w-0" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default MoreAboutMe;