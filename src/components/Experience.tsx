"use client";

import { motion } from 'framer-motion';

const experiences = {
  "Tech & Development": [
    {
      name: "TAVE 16기",
      role: "대학생 IT 연합 동아리",
      duration: "2025.09 - 2026.01",
      desc: "안드로이드 스터디를 통해 Kotlin 기반 앱 개발 역량을 쌓고, 팀 프로젝트로 DIP(AI 노래 추천 앱)를 개발하여 구글 플레이스토어 정식 출시까지 완료했습니다.",
      tags: ["Android", "Kotlin", "Team Project"],
    },
    {
      name: "BDAI 11기",
      role: "AI 빅데이터분석학회",
      duration: "2025.09 - 2026.02",
      desc: "데이터 분석 이론과 머신러닝 모델링을 실습하며 AI 역량을 키웠습니다. 학회 내 경진대회에 출전하여 733팀 중 상위 10%(74등)를 달성했습니다.",
      tags: ["Python", "Machine Learning", "Data Analysis"],
    },
    {
      name: "CNU",
      role: "서강대학교 웹개발 학회",
      duration: "2024.09 - 2025.02",
      desc: "React 기반 웹 개발 스터디를 진행하며 프론트엔드 개발의 기초를 다졌습니다. 컴포넌트 설계와 상태 관리 패턴을 학습했습니다.",
      tags: ["React", "Web", "Frontend"],
    },
  ],
  "Planning & Communication": [
    {
      name: "플래너즈 14기",
      role: "남양주시 대학생 기획단",
      duration: "2024.02 - 2025.02",
      desc: "남양주시 시정 사업에 참여하여 기획부터 운영까지 전 과정을 경험했습니다. 단원들과 함께 지역사회에 실질적인 가치를 제공하는 아이디어를 발굴하였습니다. ",
      tags: ["기획", "운영", "커뮤니케이션"],
    },
    {
      name: "영크리에이터크루 5기",
      role: "이석영뉴미디어도서관 기획운영 크루",
      duration: "2024.04 - 2024.12",
      desc: "도서관 콘텐츠 기획 및 크루로 활동하며 문화 프로그램을 기획하고 행사 운영에 참여했습니다.",
      tags: ["콘텐츠 기획", "봉사", "운영"],
    },
    {
      name: "SHOCK 25기",
      role: "서강대학교 댄스동아리 섭외부장",
      duration: "2023.03 - 2025.01",
      desc: "댄스동아리 섭외부장으로 공연 섭외 및 대외 협력을 담당했습니다. 다양한 무대 기획과 팀원들과의 협업을 통해 리더십과 커뮤니케이션 능력을 키웠습니다.",
      tags: ["리더십", "협업", "공연 기획"],
    },
  ],
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
          {Object.entries(experiences).map(([category, items]) => (
            <div key={category}>
              {/* 카테고리 헤더 */}
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-sm font-black text-matcha mb-12 tracking-[0.25em] uppercase"
              >
                {category}
              </motion.h3>

              <div className="space-y-6">
                {items.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="glass p-8 rounded-2xl group hover:border-matcha/20 transition-all duration-300"
                  >
                    {/* 상단: 이름 + 기간 */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-3 gap-3">
                      <div>
                        <p className="font-black text-xl text-white group-hover:text-matcha transition-colors duration-300">
                          {exp.name}
                        </p>
                        <p className="text-frost/60 text-sm font-medium mt-0.5">{exp.role}</p>
                      </div>
                      <div className="shrink-0 text-xs text-matcha font-black tracking-widest bg-matcha/10 px-4 py-2 rounded-lg border border-matcha/10">
                        {exp.duration}
                      </div>
                    </div>

                    {/* 구분선 */}
                    <div className="w-full h-[1px] bg-white/5 mb-4" />

                    {/* 설명 */}
                    <p className="text-frost/70 text-sm leading-relaxed mb-5">
                      {exp.desc}
                    </p>

                    {/* 태그 */}
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag, tidx) => (
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;