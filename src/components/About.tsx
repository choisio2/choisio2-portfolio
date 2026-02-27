import AnimatedSection from './AnimatedSection';
import { FaGithub, FaBloggerB } from 'react-icons/fa';

const About = () => {
  return (
    <AnimatedSection>
      <div id="about" className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        <div className="bg-gray-800/50 p-8 rounded-lg shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="mb-4"><strong className="text-electric-blue mr-2">Name:</strong> 최수정</p>
              <p className="mb-4"><strong className="text-electric-blue mr-2">Birth:</strong> 2004.10.02</p>
              <p className="mb-4"><strong className="text-electric-blue mr-2">Education:</strong> 서강대학교 컴퓨터공학과</p>
              <p><strong className="text-electric-blue mr-2">Email:</strong> suho3938@gmail.com</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Archiving</h3>
              <div className="flex space-x-6">
                <a href="https://github.com/choisio2" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-electric-blue transition-colors">
                  <FaGithub size={32} />
                </a>
                <a href="https://sio2-dev.tistory.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-electric-blue transition-colors">
                  <FaBloggerB size={32} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default About;
