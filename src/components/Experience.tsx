import AnimatedSection from './AnimatedSection';

const experiences = {
  "Tech & Development": [
    { name: "[TAVE] 16기", role: "대학생 IT 연합 동아리", duration: "2025.09 - 2026.01" },
    { name: "[BDAI] 11기", role: "AI 빅데이터분석학회", duration: "2025.09 - 2026.02" },
    { name: "[CNU]", role: "서강대학교 웹개발 학회", duration: "2024.09 - 2025.02" },
  ],
  "Planning & Communication": [
    { name: "[플래너즈]", role: "남양주시 대학생 기획단", duration: "2024.02 - 2025.02" },
    { name: "[이석영뉴미디어도서관]", role: "영크리에이터크루 기획운영 크루", duration: "2024.04 - 2024.12" },
    { name: "[SHOCK]", role: "서강대학교 댄스동아리 섭외부장", duration: "2023.03 - 2025.01" },
  ]
};

const Experience = () => {
  return (
    <AnimatedSection>
      <div id="experience" className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Experience & Leadership</h2>
        <div className="space-y-12">
          {Object.entries(experiences).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-2xl font-bold text-electric-blue mb-6 text-center md:text-left">{category}</h3>
              <div className="space-y-6">
                {items.map((exp, index) => (
                  <div key={index} className="flex flex-col md:flex-row justify-between items-start md:items-center bg-gray-800/50 p-4 rounded-lg">
                    <div>
                      <p className="font-bold text-lg">{exp.name}</p>
                      <p className="text-gray-400">{exp.role}</p>
                    </div>
                    <p className="text-gray-500 mt-2 md:mt-0">{exp.duration}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Experience;
