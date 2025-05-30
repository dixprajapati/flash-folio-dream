
import React from 'react';
import { ExternalLink, Github, Code2, Database, Cpu, Lightbulb } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Java Enterprise Application",
      description: "Full-stack Java application with Hibernate framework, featuring comprehensive database connectivity, user management system, and RESTful API endpoints with extensive testing coverage.",
      tech: ["Java", "Hibernate", "MySQL", "Spring Boot", "JUnit"],
      icon: <Code2 size={28} />,
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-500/10 to-cyan-500/10"
    },
    {
      title: "Database Management System",
      description: "Engineered a robust database management system with optimized query performance, data integrity constraints, and real-time monitoring capabilities for enterprise-level applications.",
      tech: ["SQL", "Database Design", "Performance Optimization", "Data Modeling"],
      icon: <Database size={28} />,
      gradient: "from-green-500 to-teal-500",
      bgGradient: "from-green-500/10 to-teal-500/10"
    },
    {
      title: "Digital Logic Simulator",
      description: "Developed an advanced digital logic design simulator with real-time processing capabilities, focusing on flip-flops, multiplexers, and complex logic gate operations.",
      tech: ["C++", "Logic Design", "Algorithm Optimization", "Performance Analysis"],
      icon: <Cpu size={28} />,
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-500/10 to-pink-500/10"
    }
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/20 rounded-full px-6 py-3 mb-6">
            <Lightbulb className="text-teal-400" size={20} />
            <span className="text-teal-400 font-semibold">Featured Work</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-8">
            Featured{' '}
            <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            A showcase of my technical projects demonstrating practical application of skills and innovative problem-solving
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-3xl overflow-hidden hover:border-teal-500/50 transition-all duration-500 hover:scale-105"
            >
              {/* Project Header */}
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
              
              <div className="p-8">
                {/* Icon */}
                <div className={`w-20 h-20 bg-gradient-to-r ${project.gradient} rounded-3xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {project.icon}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-teal-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-slate-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-teal-400 mb-3 uppercase tracking-wider">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full text-sm border border-slate-600/50 hover:border-teal-500/50 hover:text-white transition-all duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-2xl font-semibold hover:scale-105 transition-transform duration-300 shadow-lg shadow-teal-500/25">
                    <Github size={18} />
                    <span>Code</span>
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 border-2 border-teal-500 text-teal-400 rounded-2xl font-semibold hover:bg-teal-500 hover:text-white transition-all duration-300">
                    <ExternalLink size={18} />
                    <span>Demo</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className={`bg-gradient-to-r from-teal-500/10 to-cyan-500/10 border border-teal-500/20 rounded-3xl p-12 max-w-3xl mx-auto`}>
            <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Github className="text-white" size={28} />
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">Explore More Projects</h3>
            <p className="text-slate-400 mb-8 text-lg">
              I'm constantly working on new projects and exploring emerging technologies. 
              Check out my GitHub for the latest updates and contributions.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-2xl font-semibold hover:scale-105 transition-transform duration-300 shadow-lg shadow-teal-500/25"
            >
              <Github size={24} />
              <span>View All Projects</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
