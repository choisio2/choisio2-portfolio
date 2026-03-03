"use client";

import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { projects } from '@/data/projects';
import Link from 'next/link';
import Image from 'next/image';

export default function ProjectDetailPage() {
  const params = useParams();
  const router = useRouter();
  
  // URL 파라미터로 전달된 id를 통해 프로젝트 데이터를 가져옵니다.
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#0F172A] text-white">
        <h1 className="text-4xl font-black mb-8">Project Not Found</h1>
        <Link href="/#projects" className="text-[#3B82F6] font-bold border-b-2 border-[#3B82F6]">
          Go Back Home
        </Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#0F172A] text-gray-300 py-24 px-6 md:px-12">
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

          {/* DIP 프로젝트 전용 상세 페이지 (id가 'dip'일 경우에만 렌더링) */}
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

              {/* 3. 나의 역할 및 기술적 문제 해결 (면접관 어필 포인트) */}
              <section>
                <h2 className="text-3xl font-black text-white mb-8">💡 My Contributions & Engineering</h2>
                <div className="space-y-6">
                  <div className="bg-white/5 border border-white/10 p-8 rounded-3xl">
                    <h3 className="text-white font-bold text-xl mb-2 flex items-center">
                      <span className="w-2 h-2 rounded-full bg-[#3B82F6] mr-3"></span>
                      맥락 데이터 수집 및 처리 로직 구현
                    </h3>
                    <p className="text-gray-400 leading-relaxed pl-5">
                      안드로이드 기기의 마이크 센서를 제어하여 실시간으로 주변 소음(데시벨)을 측정하고, 위치 기반 로직을 결합해 사용자의 현재 상황을 데이터화하는 핵심 모듈을 개발했습니다.
                    </p>
                  </div>
                  
                  <div className="bg-white/5 border border-white/10 p-8 rounded-3xl">
                    <h3 className="text-white font-bold text-xl mb-2 flex items-center">
                      <span className="w-2 h-2 rounded-full bg-[#3B82F6] mr-3"></span>
                      Spotify SDK 연동 및 딥링크(Deep Link) 구현
                    </h3>
                    <p className="text-gray-400 leading-relaxed pl-5">
                      외부 API인 Spotify SDK를 성공적으로 연동하여 사용자의 아티스트 및 장르 취향 데이터를 매핑했습니다. 생성된 맞춤형 플레이리스트 결과를 터치하면 Spotify 앱의 해당 플레이리스트로 즉시 이동하도록 딥링크를 구현하여 사용자 경험(UX)을 대폭 개선했습니다.
                    </p>
                  </div>

                  <div className="bg-white/5 border border-white/10 p-8 rounded-3xl">
                    <h3 className="text-white font-bold text-xl mb-2 flex items-center">
                      <span className="w-2 h-2 rounded-full bg-[#3B82F6] mr-3"></span>
                      스토어 배포 및 데이터 보호 정책(Policy) 대응
                    </h3>
                    <p className="text-gray-400 leading-relaxed pl-5">
                      단순 개발에 그치지 않고 구글 플레이스토어 런칭을 주도했습니다. 비공개 사전 테스트(Closed Beta) 단계에서 수집된 유저 피드백을 바탕으로 3번의 스프린트 업데이트를 진행했으며, 특히 구글 마켓 심사 과정에서 요구하는 까다로운 '계정 삭제 및 데이터 취급 정책' 이슈를 해결하여 성공적으로 앱을 배포했습니다.
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
                        {/* Next.js Image 태그 대신 외부 링크이므로 img 태그 사용 (혹은 next.config.js 설정 후 Image 사용) */}
                        <img src={img.src} alt={img.title} className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500" />
                      </div>
                      <p className="text-gray-400 text-sm font-medium">{img.title}</p>
                    </div>
                  ))}
                </div>
              </section>

            </div>
          )}
        </motion.div>
      </div>
    </main>
  );
}