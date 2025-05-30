
import React from 'react';
import { ExternalLink, Github, Code2, Database, Cpu, Rocket } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Quantum Java Enterprise",
      description: "Next-generation Java application with neural Hibernate frameworks, featuring quantum database connectivity, consciousness management systems, and AI-enhanced RESTful endpoints with comprehensive testing matrices.",
      tech: ["Java Quantum", "Hibernate Neural", "MySQL Matrix", "Spring Fusion", "JUnit AI"],
      icon: <Code2 size={32} />,
      gradient: "from-blue-500 via-purple-500 to-cyan-500",
      bgGradient: "from-blue-500/10 via-purple-500/10 to-cyan-500/10"
    },
    {
      title: "Neural Database Matrix",
      description: "Advanced consciousness database management system with quantum-optimized query processing, data integrity algorithms, and real-time monitoring capabilities for enterprise-level neural networks.",
      tech: ["SQL Consciousness", "Database Neural Design", "Quantum Optimization", "AI Data Modeling"],
      icon: <Database size={32} />,
      gradient: "from-green-500 via-teal-500 to-cyan-500",
      bgGradient: "from-green-500/10 via-teal-500/10 to-cyan-500/10"
    },
    {
      title: "Quantum Logic Simulator",
      description: "Revolutionary digital consciousness simulator with quantum processing capabilities, featuring advanced flip-flop networks, neural multiplexers, and complex quantum logic gate operations.",
      tech: ["C++ Quantum", "Neural Logic Design", "Quantum Algorithms", "Performance AI"],
      icon: <Cpu size={32} />,
      gradient: "from-purple-500 via-pink-500 to-red-500",
      bgGradient: "from-purple-500/10 via-pink-500/10 to-red-500/10"
    }
  ];

  return (
    <section id="projects" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-3 bg-cyan-500/10 border border-cyan-500/30 rounded-full px-8 py-4 mb-8">
            <Rocket className="text-cyan-400" size={24} />
            <span className="text-cyan-400 font-semibold tracking-wider uppercase">Digital Artifacts</span>
          </div>
          <h2 className="text-6xl lg:text-7xl font-black text-white mb-8">
            QUANTUM{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              CREATIONS
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto">
            Breakthrough innovations forged in the digital realm of consciousness and code
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-black/40 border border-gray-800 rounded-3xl overflow-hidden hover:border-purple-500/50 transition-all duration-500 hover:scale-105"
            >
              {/* Animated header gradient */}
              <div className={`h-2 bg-gradient-to-r ${project.gradient} relative overflow-hidden`}>
                <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} animate-pulse opacity-50`}></div>
              </div>
              
              <div className="p-10 relative overflow-hidden">
                {/* Background animation */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-cyan-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Icon */}
                <div className={`relative w-24 h-24 bg-gradient-to-r ${project.gradient} rounded-3xl flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform duration-300`}>
                  {project.icon}
                  <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300`}></div>
                </div>

                {/* Content */}
                <h3 className="text-3xl font-bold text-white mb-6 group-hover:text-purple-400 transition-colors duration-300 relative z-10">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 mb-8 leading-relaxed text-lg relative z-10">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-10 relative z-10">
                  <h4 className="text-sm font-semibold text-purple-400 mb-4 uppercase tracking-wider">
                    Neural Architecture
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-4 py-2 bg-gray-800/50 text-gray-300 rounded-full text-sm border border-gray-700/50 hover:border-purple-500/50 hover:text-white transition-all duration-200 hover:scale-105"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 relative z-10">
                  <button className="flex-1 flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-2xl font-semibold hover:scale-105 transition-transform duration-300 shadow-lg shadow-purple-500/25 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 opacity-0 hover:opacity-100 transition-opacity duration-300 blur-lg"></div>
                    <Github size={20} className="relative z-10" />
                    <span className="relative z-10">Neural Code</span>
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-3 px-6 py-4 border-2 border-purple-500 text-purple-400 rounded-2xl font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300 hover:scale-105">
                    <ExternalLink size={20} />
                    <span>Launch</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="relative bg-gradient-to-r from-purple-500/10 via-cyan-500/10 to-pink-500/10 border border-purple-500/30 rounded-3xl p-16 max-w-4xl mx-auto overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-cyan-500/5 to-pink-500/5 animate-pulse"></div>
            <div className="relative z-10">
              <div className="relative w-20 h-20 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-3xl flex items-center justify-center mx-auto mb-8">
                <Github className="text-white" size={32} />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-3xl blur-xl opacity-50 animate-ping"></div>
              </div>
              <h3 className="text-4xl font-bold text-white mb-6">Explore the Neural Network</h3>
              <p className="text-gray-400 mb-10 text-xl leading-relaxed">
                Continuously evolving digital consciousness through quantum algorithms and neural architectures. 
                Interface with the collective intelligence for latest quantum innovations.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-4 px-10 py-5 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-2xl font-semibold hover:scale-105 transition-transform duration-300 shadow-lg shadow-purple-500/25 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 opacity-0 hover:opacity-100 transition-opacity duration-300 blur-lg"></div>
                <Github size={28} className="relative z-10" />
                <span className="relative z-10 text-xl">Access Neural Repository</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
