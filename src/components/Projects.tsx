"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { projects } from '@/data/projects';

const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-black text-center mb-24 text-white"
        >
          Projects
        </motion.h2>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass p-10 md:p-20 rounded-[3rem] border-white/5 relative group"
            >
              <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-10 transition-opacity duration-700">
                <span className="text-9xl font-black text-white italic">0{index + 1}</span>
              </div>

              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6 relative z-10">
                <h3 className="text-3xl md:text-5xl font-black text-white group-hover:text-matcha transition-colors duration-300 leading-tight">
                  {project.title}
                </h3>
                <div className="text-xs font-black bg-matcha/10 border border-matcha/20 text-matcha px-6 py-2 rounded-full tracking-widest uppercase">
                  {project.duration}
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
                <div>
                  <div className="flex flex-wrap gap-4 mb-10">
                    <span className="text-frost text-xs font-black uppercase tracking-widest bg-white/5 px-4 py-2 rounded-lg border border-white/5">{project.team}</span>
                    <span className="text-matcha text-xs font-black uppercase tracking-widest bg-matcha/10 px-4 py-2 rounded-lg border border-matcha/10">{project.position}</span>
                  </div>
                  
                  <p className="text-xl text-frost/90 leading-relaxed mb-12 font-medium">{project.description}</p>
                  
                  <div className="mb-12">
                    <h4 className="text-sm font-black text-matcha uppercase tracking-[0.25em] mb-6">
                      Tech Stack
                    </h4>
                    <p className="text-frost font-bold text-lg">{project.stack}</p>
                  </div>

                  <Link 
                    href={`/projects/${project.id}`}
                    className="inline-flex items-center space-x-3 text-matcha font-black uppercase tracking-widest text-sm group/link"
                  >
                    <span>View Details</span>
                    <svg 
                      className="w-5 h-5 transform group-hover/link:translate-x-2 transition-transform" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>

                <div className="space-y-12">
                  {project.features.length > 0 && 
                    <div>
                      <h4 className="text-sm font-black text-white uppercase tracking-[0.25em] mb-8">Key Features</h4>
                      <ul className="space-y-6">
                        {project.features.map((feature, i) => (
                          <li key={i} className="flex items-start text-frost/80 leading-relaxed text-sm group/item">
                            <span className="text-matcha mr-4 mt-2 w-2 h-2 bg-matcha/40 rounded-full shrink-0 group-hover/item:bg-matcha transition-colors" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  }
                  
                  {project.achievements.length > 0 &&
                    <div className="glass-dark p-8 rounded-3xl border border-matcha/20">
                      <h4 className="text-sm font-black text-matcha uppercase tracking-[0.25em] mb-6">Achievements</h4>
                      <ul className="space-y-4">
                         {project.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start text-white text-sm font-bold leading-relaxed">
                            <span className="text-matcha mr-4">✦</span>
                            {achievement}
                          </li>
                         ))}
                      </ul>
                    </div>
                  }
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
