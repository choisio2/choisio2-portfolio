import AnimatedSection from './AnimatedSection';

const projects = [
  {
    title: "DIP (노래 추천 애플리케이션)",
    duration: "2025.11 ~ 2026.01",
    team: "8인 팀 프로젝트 (Front-End 2, Back-End 2, Data 1, Design 3)",
    position: "안드로이드 프론트엔드 개발 (Kotlin)",
    description: "사용자의 위치, 주변 소음, 목표를 종합적으로 분석해 상황(맥락)에 맞는 음악을 추천해 주는 맞춤형 안드로이드 애플리케이션",
    stack: "프론트(Kotlin, Android Studio), 백(Spring Boot, MySQL)",
    features: [
      "기기 마이크를 활용한 주변 소음(데시벨) 측정 기능 및 위치 기반 로직 구현",
      "Spotify SDK를 연동하여 사용자의 아티스트/장르 취향을 반영하고, 생성된 플레이리스트로 바로 이동할 수 있도록 딥링크(Deep Link) 구현",
      "플레이리스트 결과 화면에서 사용자 맞춤형 화면(리스트형 및 갤러리형) 및 마음에 드는 플레이리스트를 라이브러리에 저장하는 기능 구현",
    ],
    achievements: [
        "비공개 사전 테스트를 운영하며 수집된 사용자 피드백을 바탕으로 3차례의 기능 개선 및 업데이트 배포",
        "플레이스토어 데이터 정책 준수 이슈를 해결하여 구글 플레이스토어 정식 출시 완료",
    ]
  },
  {
    title: "[BDAI] 학습자 수료 예측 AI 경진대회",
    duration: "2026.01 ~ 2025.02",
    team: "개인",
    position: "AI 알고리즘 개발",
    description: "학습자의 수료 여부를 예측하는 AI 알고리즘 개발. 데이콘 x BDA 제 2회 학습자 수료 예측 AI 경진대회",
    stack: "Python, Pandas, Scikit-learn, Random Forest",
    features: [
        "수료에 유의미한 영향을 미치는 파생 변수 설계하여 모델 학습에 적용",
        "5-Fold Cross Validation을 통해 교차 검증을 수행하여 모델의 일반화 성능 확보",
        "모델의 트리를 제한하고 분할 및 리프 노드 수를 설정하여 과적합 방지",
    ],
    achievements: [
        "상위 10% 달성 (최종 74등 / 733팀)"
    ]
  },
  {
    title: "Calculator",
    duration: "2025.07",
    team: "개인 프로젝트",
    position: "C++ 개발",
    description: "중위 표기법(Infix)을 후위 표기법(Postfix)으로 변환하는 알고리즘을 활용한 계산기",
    stack: "C++",
    features: [
        "중위 표기법(Infix)을 후위 표기법(Postfix)으로 변환하는 알고리즘을 활용한 연산 로직 구현",
    ],
    achievements: []
  },
];

const Projects = () => {
  return (
    <AnimatedSection>
      <div id="projects" className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
        <div className="space-y-16">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800/50 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-electric-blue mb-2">{project.title}</h3>
              <div className="text-sm text-gray-400 mb-4">
                <span>{project.duration}</span> | <span>{project.team}</span> | <span>{project.position}</span>
              </div>
              <p className="mb-6">{project.description}</p>
              
              <div className="mb-4">
                <strong className="text-gray-300">Tech Stack:</strong>
                <p className="text-gray-400">{project.stack}</p>
              </div>

              {project.features.length > 0 && 
                <div className="mb-4">
                  <strong className="text-gray-300">Key Features:</strong>
                  <ul className="list-disc list-inside text-gray-400 mt-2 space-y-1">
                    {project.features.map((feature, i) => <li key={i}>{feature}</li>)}
                  </ul>
                </div>
              }
              
              {project.achievements.length > 0 &&
                <div>
                  <strong className="text-gray-300">Achievements:</strong>
                  <ul className="list-disc list-inside text-gray-400 mt-2 space-y-1">
                     {project.achievements.map((achievement, i) => <li key={i}>{achievement}</li>)}
                  </ul>
                </div>
              }
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Projects;
