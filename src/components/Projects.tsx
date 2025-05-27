
import React from 'react';
import { ExternalLink, Github, Code, Database, Cpu } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Java Enterprise Application",
      description: "Full-stack Java application with Hibernate framework, featuring database connectivity, user management, and RESTful APIs. Implemented comprehensive testing and version control practices.",
      tech: ["Java", "Hibernate", "MySQL", "Spring Boot", "JUnit"],
      icon: <Code size={24} />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Database Management System",
      description: "Designed and implemented a robust database management system with optimized queries, data integrity constraints, and performance monitoring capabilities.",
      tech: ["SQL", "Database Design", "Performance Optimization", "Data Modeling"],
      icon: <Database size={24} />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Digital Logic Simulator",
      description: "Created a digital logic design simulator focusing on flip-flops, multiplexers, and logic gates. Implemented performance optimization techniques for real-time processing.",
      tech: ["C++", "Logic Design", "Algorithm Optimization", "Performance Analysis"],
      icon: <Cpu size={24} />,
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A showcase of my technical projects demonstrating practical application of my skills
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 hover:scale-105"
            >
              {/* Project Header */}
              <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>
              
              <div className="p-8">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-r ${project.color} rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {project.icon}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-purple-400 mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-slate-700 text-gray-300 rounded-full text-sm border border-slate-600 hover:border-purple-500/50 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:scale-105 transition-transform duration-300">
                    <Github size={16} />
                    Code
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 border border-purple-500 text-purple-400 rounded-lg font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300">
                    <ExternalLink size={16} />
                    Demo
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Want to see more?</h3>
            <p className="text-gray-400 mb-6">
              I'm constantly working on new projects and exploring emerging technologies. 
              Check out my GitHub for the latest updates and contributions.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:scale-105 transition-transform duration-300"
            >
              <Github size={20} />
              View All Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
