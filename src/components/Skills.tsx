import AnimatedSection from './AnimatedSection';
import { FaPython, FaJava, FaGitAlt, FaGithub } from 'react-icons/fa6';
import { SiC, SiCplusplus, SiKotlin, SiCloudflare, SiFirebase } from "react-icons/si";

const skills = {
  Languages: [
    { name: 'Kotlin', icon: <SiKotlin size={40} /> },
    { name: 'Python', icon: <FaPython size={40} /> },
    { name: 'Java', icon: <FaJava size={40} /> },
    { name: 'C', icon: <SiC size={40} /> },
    { name: 'C++', icon: <SiCplusplus size={40} /> },
  ],
  "Tools & Version Control": [
    { name: 'Git', icon: <FaGitAlt size={40} /> },
    { name: 'GitHub', icon: <FaGithub size={40} /> },
  ],
  "Deployment & BaaS": [
    { name: 'Cloudflare', icon: <SiCloudflare size={40} /> },
    { name: 'Firebase (Auth)', icon: <SiFirebase size={40} /> },
  ],
};

const Skills = () => {
  return (
    <AnimatedSection>
      <div id="skills" className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
        <div className="space-y-12">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-xl font-bold text-electric-blue mb-6">{category}</h3>
              <div className="flex flex-wrap gap-8">
                {items.map((skill) => (
                  <div key={skill.name} className="flex flex-col items-center gap-2 p-4 bg-gray-800/50 rounded-lg w-32">
                    <div className="text-gray-300">{skill.icon}</div>
                    <p className="font-semibold">{skill.name}</p>
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

export default Skills;
