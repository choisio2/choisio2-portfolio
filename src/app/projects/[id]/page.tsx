"use client";

import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { projects } from '@/data/projects';
import Link from 'next/link';
import Image from 'next/image';

export const runtime = 'edge';

export default function ProjectDetailPage() {
  const params = useParams();
  const router = useRouter();
  
  // URL 파라미터로 전달된 id를 통해 프로젝트 데이터를 가져옵니다.
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-white">
        <h1 className="text-4xl font-black mb-8">Project Not Found</h1>
        <Link href="/#projects" className="text-[#3B82F6] font-bold border-b-2 border-[#3B82F6]">
          Go Back Home
        </Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen text-gray-300 py-24 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => router.back()}
          className="flex items-center space-x-2 text-gray-400 hover:text-[#3B82F6] transition-colors mb-16 group"
        >
          <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span className="font-bold uppercase tracking-widest text-xs">Back to Projects</span>
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* 상단 공통 정보 섹션 */}
          <div className="mb-8">
            <span className="text-[#3B82F6] font-black uppercase tracking-[0.3em] text-xs bg-[#3B82F6]/10 px-4 py-2 rounded-full border border-[#3B82F6]/20">
              {project.duration}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-7xl font-black text-white mb-12 leading-tight">
            {project.title}
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <div className="space-y-8">
              <div>
                <h2 className="text-[10px] font-black text-[#3B82F6] uppercase tracking-[0.4em] mb-4">Role & Team</h2>
                <div className="space-y-2">
                  <p className="text-xl font-bold text-white">{project.position}</p>
                  <p className="text-gray-400 font-medium">{project.team}</p>
                </div>
              </div>

              <div>
                <h2 className="text-[10px] font-black text-[#3B82F6] uppercase tracking-[0.4em] mb-4">Tech Stack</h2>
                <p className="text-gray-300 font-bold text-lg">{project.stack}</p>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10">
              <h2 className="text-[10px] font-black text-white uppercase tracking-[0.4em] mb-6">Overview</h2>
              <p className="text-gray-300 leading-relaxed font-medium">
                {project.description}
              </p>
            </div>
          </div>

          {/* DIP 프로젝트 전용 상세 페이지 */}
          {project.id === 'dip' && (
            <div className="mt-24 space-y-32">
              
              {/* 1. 배너 이미지 */}
              <motion.div 
                className="w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <img 
                  src="https://github.com/user-attachments/assets/79dcf6fa-a081-4527-b1cf-78f2f1fb8c06" 
                  alt="DIP Cover" 
                  className="w-full object-cover"
                />
              </motion.div>

              {/* 2. 프로젝트 컨셉 */}
              <section>
                <h2 className="text-3xl font-black text-white mb-8">🎵 음악, 맥락을 읽다</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { title: "위치를 읽다", desc: "머무는 공간의 특성을 분석하여 장소의 감성을 극대화합니다." },
                    { title: "소음을 분석하다", desc: "주변 데시벨을 측정해 강력한 비트 혹은 고요한 선율을 골라냅니다." },
                    { title: "목표에 집중하다", desc: "오늘의 목표에 맞춰 음악이 활동을 돕는 완벽한 도구가 됩니다." }
                  ].map((item, idx) => (
                    <div key={idx} className="bg-white/5 border border-white/10 p-8 rounded-2xl">
                      <h3 className="text-[#3B82F6] font-bold text-xl mb-3">0{idx + 1}. {item.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* 3. 나의 역할 및 기술적 문제 해결 */}
              <section>
                <h2 className="text-3xl font-black text-white mb-8">💡 My Contributions & Engineering</h2>
                <div className="space-y-6">
                  <div className="bg-white/5 border border-white/10 p-8 rounded-3xl">
                    <h3 className="text-white font-bold text-xl mb-2 flex items-center">
                      <span className="w-2 h-2 rounded-full bg-[#3B82F6] mr-3"></span>
                      맥락 데이터 수집 및 처리 로직 구현
                    </h3>
                    <p className="text-gray-400 leading-relaxed pl-5">
                    안드로이드 기기의 마이크 권한을 획득하여 실시간으로 주변 소음(데시벨)을 측정하는 모듈을 개발했습니다. 사용자의 현재 환경 데이터를 수집하여 AI 추천 플레이리스트를 생성하기 위한 환경을 구축했습니다. 
                    </p>
                  </div>
                  
                  <div className="bg-white/5 border border-white/10 p-8 rounded-3xl">
                    <h3 className="text-white font-bold text-xl mb-2 flex items-center">
                      <span className="w-2 h-2 rounded-full bg-[#3B82F6] mr-3"></span>
                      Spotify API 연동 및 딥링크(Deep Link) 구현
                    </h3>
                    <p className="text-gray-400 leading-relaxed pl-5">
                    외부 API인 Spotify API를 연동하여 사용자의 아티스트 취향 데이터와 플레이리스트 커버 이미지를 매핑했습니다. 생성된 맞춤형 플레이리스트를 재생하기 위해 Spotify 앱의 해당 플레이리스트로 즉시 이동하도록 딥링크를 구현하여 UX을 개선했습니다.
                    </p>
                  </div>

                  <div className="bg-white/5 border border-white/10 p-8 rounded-3xl">
                    <h3 className="text-white font-bold text-xl mb-2 flex items-center">
                      <span className="w-2 h-2 rounded-full bg-[#3B82F6] mr-3"></span>
                      사전 배포 및 구글 플레이스토어 런칭 
                    </h3>
                    <p className="text-gray-400 leading-relaxed pl-5">
                    단순 개발에 그치지 않고 실제 서비스를 배포하기 위해 구글 플레이스토어 런칭을 주도했습니다. 비공개 사전 테스트를 진행하였고, 이 단계에서 수집된 유저 피드백을 바탕으로 3번의 업데이트를 진행했습니다. 특히 14일의 비공개 테스트를 통과하여 성공적으로 앱을 배포했습니다.
                    </p>
                  </div>
                </div>
              </section>

              {/* 4. 주요 기술 스택 구조 */}
              <section>
                <h2 className="text-3xl font-black text-white mb-8">🛠 Architecture & Tech Stack</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { label: "Architecture", value: "MVVM" },
                    { label: "Language", value: "Kotlin" },
                    { label: "Network", value: "Retrofit2" },
                    { label: "Async", value: "Coroutines" },
                    { label: "Local DB", value: "Room Database" },
                    { label: "Auth", value: "Kakao OAuth" },
                    { label: "Image Loading", value: "Glide" },
                    { label: "External API", value: "Spotify SDK" },
                  ].map((tech, idx) => (
                    <div key={idx} className="bg-[#0F172A] border border-[#3B82F6]/30 p-4 rounded-xl text-center">
                      <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-1">{tech.label}</p>
                      <p className="text-white font-bold text-sm">{tech.value}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* 5. 실행 화면 (UI/UX) */}
              <section>
                <h2 className="text-3xl font-black text-white mb-8">📱 UI & Flow</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { title: "온보딩", src: "https://github.com/user-attachments/assets/500f6079-8c37-428e-8069-7ab2987bedc9" },
                    { title: "추천 받기", src: "https://github.com/user-attachments/assets/15bf8aa5-ed76-4be7-a292-4c64e36a4ab5" },
                    { title: "라이브러리", src: "https://github.com/user-attachments/assets/3350eff3-9bf9-49e6-be80-18b31127aa21" },
                    { title: "둘러보기", src: "https://github.com/user-attachments/assets/37769da1-5a81-4baf-82f8-afcb2b589fe0" }
                  ].map((img, idx) => (
                    <div key={idx} className="flex flex-col items-center">
                      <div className="w-full rounded-2xl overflow-hidden border border-white/10 mb-3 bg-black">
                        <img src={img.src} alt={img.title} className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500" />
                      </div>
                      <p className="text-gray-400 text-sm font-medium">{img.title}</p>
                    </div>
                  ))}
                </div>
              </section>

            </div>
          )}

          {/* =============================================
              BDAI 프로젝트 전용 상세 페이지
          ============================================= */}
          {project.id === 'bdai' && (
            <div className="mt-24 space-y-32">

              {/* 1. 대회 개요 카드 */}
              <motion.section
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <h2 className="text-3xl font-black text-white mb-8">🏆 대회 개요</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    {
                      title: "문제 정의",
                      desc: "학회 수강생의 수료 여부를 예측하는 이진 분류 문제."
                    },
                    {
                      title: "평가 지표",
                      desc: "F1 Score를 기준으로 평가. 불균형 데이터에서 정밀도와 재현율의 균형을 동시에 고려하는 지표입니다."
                    },
                    {
                      title: "데이터 규모",
                      desc: "학습 데이터 748건 / 테스트 데이터 814건. 수강생의 배경, 전공, 관심 직무 등 수십 개의 범주형·수치형 피처로 구성됩니다."
                    }
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.15 }}
                      className="bg-white/5 border border-white/10 p-8 rounded-2xl"
                    >
                      <h3 className="text-[#3B82F6] font-bold text-lg mb-3">0{idx + 1}. {item.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.section>

              {/* 2. 파이프라인 플로우 */}
              <motion.section
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <h2 className="text-3xl font-black text-white mb-8">⚙️ ML Pipeline</h2>
                <div className="relative">
                  <div className="hidden md:block absolute top-10 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#3B82F6]/30 to-transparent z-0" />
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative z-10">
                    {[
                      { step: "01", label: "Data Loading", sub: "train.csv / test.csv" },
                      { step: "02", label: "Feature Engineering", sub: "IT전공여부, Freq Encoding 등 파생변수 생성" },
                      { step: "03", label: "Preprocessing", sub: "결측치 80% 이상 컬럼 제거, 인코딩" },
                      { step: "04", label: "Feature Selection", sub: "RF Importance 기반 Top 40 피처 선별" },
                      { step: "05", label: "5-Fold CV + Predict", sub: "Hybrid Threshold 최적화 및 제출" },
                    ].map((item, idx) => (
                      <div key={idx} className="flex flex-col items-center text-center">
                        <div className="w-16 h-16 rounded-2xl bg-[#3B82F6]/10 border border-[#3B82F6]/30 flex items-center justify-center mb-4">
                          <span className="text-[#3B82F6] font-black text-lg">{item.step}</span>
                        </div>
                        <p className="text-white font-bold text-sm mb-1">{item.label}</p>
                        <p className="text-gray-500 text-xs leading-relaxed">{item.sub}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.section>

              {/* 3. 핵심 기여 내용 */}
              <motion.section
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <h2 className="text-3xl font-black text-white mb-8">💡 Key Contributions</h2>
                <div className="space-y-6">
                  <div className="bg-white/5 border border-white/10 p-8 rounded-3xl">
                    <h3 className="text-white font-bold text-xl mb-2 flex items-center">
                      <span className="w-2 h-2 rounded-full bg-[#3B82F6] mr-3 shrink-0"></span>
                      도메인 기반 Feature Engineering
                    </h3>
                    <p className="text-gray-400 leading-relaxed pl-5">
                      단순 원핫 인코딩에 그치지 않고, <span className="text-white font-semibold">IT/Data 전공 여부(is_major_it)</span> 파생 변수를 직접 설계했습니다. 또한 학교명(school1)처럼 카디널리티가 높은 범주형 컬럼에 <span className="text-white font-semibold">Frequency Encoding</span>을 적용하여 트리 모델이 효과적으로 학습할 수 있도록 처리했습니다.
                    </p>
                  </div>

                  <div className="bg-white/5 border border-white/10 p-8 rounded-3xl">
                    <h3 className="text-white font-bold text-xl mb-2 flex items-center">
                      <span className="w-2 h-2 rounded-full bg-[#3B82F6] mr-3 shrink-0"></span>
                      RandomForest Feature Importance 기반 피처 선별
                    </h3>
                    <p className="text-gray-400 leading-relaxed pl-5">
                      임시 RandomForest 모델을 학습시켜 <span className="text-white font-semibold">feature_importances_</span>를 산출하고 상위 40개 피처만 최종 모델에 투입했습니다. Top 5 피처는 <span className="text-white font-semibold">interested_company, incumbents_lecture_scale_reason, school1_freq, desired_job, school1</span> 순으로 확인되었습니다.
                    </p>
                  </div>
                </div>
              </motion.section>

              {/* 4. 성과 */}
              <motion.section
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <h2 className="text-3xl font-black text-white mb-8">📊 Results</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { label: "CV Average F1", value: "0.2833", sub: "5-Fold 평균 베이스라인", highlight: false },
                    { label: "Final F1 Score", value: "0.4615", sub: "Hybrid Threshold 적용 후", highlight: true },
                    { label: "Improvement", value: "+62.9%", sub: "임계값 전략으로 F1 향상", highlight: false },
                  ].map((stat, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className={`p-8 rounded-3xl text-center border ${
                        stat.highlight ? 'bg-[#3B82F6]/10 border-[#3B82F6]/40' : 'bg-white/5 border-white/10'
                      }`}
                    >
                      <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mb-3">{stat.label}</p>
                      <p className={`text-5xl font-black mb-2 ${stat.highlight ? 'text-[#3B82F6]' : 'text-white'}`}>
                        {stat.value}
                      </p>
                      <p className="text-gray-500 text-xs">{stat.sub}</p>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-10 bg-white/5 border border-white/10 p-8 rounded-3xl">
                  <h3 className="text-[10px] font-black text-[#3B82F6] uppercase tracking-[0.3em] mb-6">Hybrid Threshold 결정 과정</h3>
                  <div className="space-y-5">
                    {[
                      { label: "① CV Best Threshold", value: 0.31, display: "0.31", color: "bg-blue-400" },
                      { label: "② Ratio Best Threshold", value: 0.46, display: "0.46", color: "bg-purple-400" },
                      { label: "🚀 Final Threshold (평균)", value: 0.3854, display: "0.3854", color: "bg-[#3B82F6]" },
                    ].map((bar, idx) => (
                      <div key={idx}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-gray-300 text-sm font-medium">{bar.label}</span>
                          <span className="text-white font-black text-sm">{bar.display}</span>
                        </div>
                        <div className="w-full bg-white/10 rounded-full h-2">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${bar.value * 100}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: idx * 0.2 }}
                            className={`h-2 rounded-full ${bar.color}`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.section>

            </div>
          )}

          {/* =============================================
              Calculator 프로젝트 전용 상세 페이지
          ============================================= */}
          {project.id === 'calculator' && (
            <div className="mt-24 space-y-24">

              {/* 1. UI 스크린샷 */}
              <motion.section
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <h2 className="text-3xl font-black text-white mb-8">📱 UI</h2>
                <div className="flex justify-center">
                  <div className="w-170 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                    <img
                      src="https://velog.velcdn.com/images/sio2/post/1e9b6c0a-2823-4176-a1da-8992818848b6/image.png"
                      alt="Calculator UI"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </motion.section>

              {/* 2. 핵심 알고리즘 */}
              <motion.section
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <h2 className="text-3xl font-black text-white mb-8">⚙️ 핵심 알고리즘</h2>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  입력받은 수식을 계산하기 위해{' '}
                  <span className="text-white font-semibold">Infix → Postfix 변환</span> 알고리즘을 구현했습니다.
                  Stack 자료구조를 활용해 연산자 우선순위와 괄호를 올바르게 처리합니다.
                </p>

                <div className="relative">
                  <div className="hidden md:block absolute top-10 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#3B82F6]/30 to-transparent z-0" />
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative z-10">
                    {[
                      { step: "01", label: "tokenize()", sub: "문자열을 숫자·연산자 단위로 분리. Unary minus(-6 등) 처리 포함." },
                      { step: "02", label: "infixToPostfix()", sub: "Stack으로 연산자 우선순위 정렬. 괄호 처리 후 Postfix 리스트 반환." },
                      { step: "03", label: "evaluatePostfix()", sub: "Stack으로 Postfix 계산. 숫자는 push, 연산자는 pop 후 계산." },
                    ].map((item, idx) => (
                      <div key={idx} className="flex flex-col items-center text-center">
                        <div className="w-16 h-16 rounded-2xl bg-[#3B82F6]/10 border border-[#3B82F6]/30 flex items-center justify-center mb-4">
                          <span className="text-[#3B82F6] font-black text-lg">{item.step}</span>
                        </div>
                        <p className="text-white font-bold text-sm mb-2">{item.label}</p>
                        <p className="text-gray-500 text-xs leading-relaxed">{item.sub}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Infix → Postfix 예시 */}
                <div className="mt-10 bg-white/5 border border-white/10 p-8 rounded-3xl">
                  <h3 className="text-[10px] font-black text-[#3B82F6] uppercase tracking-[0.3em] mb-6">변환 예시</h3>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-3">Infix</p>
                      <p className="text-white font-bold font-mono">3×2+4×(5-1)</p>
                    </div>
                    <div className="flex items-center justify-center">
                      <span className="text-[#3B82F6] text-2xl">→</span>
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-3">Postfix</p>
                      <p className="text-white font-bold font-mono">32×451-×+</p>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-white/10 text-center">
                    <span className="text-[10px] text-gray-500 uppercase tracking-widest mr-3">Result</span>
                    <span className="text-[#3B82F6] font-black text-xl">22</span>
                  </div>
                </div>
              </motion.section>

              {/* 3. 기술 스택 */}
              <motion.section
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <h2 className="text-3xl font-black text-white mb-8">🛠 Tech Stack</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { label: "Language", value: "Kotlin" },
                    { label: "IDE", value: "Android Studio" },
                    { label: "UI", value: "XML Layout" },
                    { label: "Algorithm", value: "Stack / Postfix" },
                  ].map((tech, idx) => (
                    <div key={idx} className="bg-[#0F172A] border border-[#3B82F6]/30 p-4 rounded-xl text-center">
                      <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-1">{tech.label}</p>
                      <p className="text-white font-bold text-sm">{tech.value}</p>
                    </div>
                  ))}
                </div>
              </motion.section>

            </div>
          )}

        </motion.div>
      </div>
    </main>
  );
}