import AnimatedSection from './AnimatedSection';

const Hero = () => {
  return (
    <AnimatedSection>
      <div id="hero" className="min-h-[calc(100vh-5rem)] flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          <span className="text-electric-blue">사용자의 일상과 맥락</span>을<br />
          이해하는 서비스를 고민합니다.
        </h1>
        <p className="text-lg md:text-xl text-gray-400">
          안녕하세요. 끊임없이 배우고 기록하며 성장하는 개발자 최수정입니다.
        </p>
      </div>
    </AnimatedSection>
  );
};

export default Hero;
