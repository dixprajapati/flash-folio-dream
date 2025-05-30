
import React from 'react';
import { ExternalLink, Github, Code2, Database, Cpu } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Enterprise Java Application",
      description: "A comprehensive Java application built with modern frameworks, featuring database connectivity, user management, and RESTful API endpoints with comprehensive testing suite.",
      tech: ["Java", "Hibernate", "MySQL", "Spring Framework", "JUnit"],
      icon: <Code2 size={28} />,
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop",
      category: "Web Application"
    },
    {
      title: "Database Management System",
      description: "Advanced database management system with optimized query processing, data integrity features, and real-time monitoring capabilities for enterprise-level applications.",
      tech: ["SQL", "Database Design", "Query Optimization", "Data Modeling"],
      icon: <Database size={28} />,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=300&fit=crop",
      category: "Database"
    },
    {
      title: "Digital Logic Design Project",
      description: "Complex digital system design featuring advanced flip-flop circuits, multiplexers, and logic gate implementations with performance optimization and testing protocols.",
      tech: ["C++", "Logic Design", "Algorithm Design", "Performance Testing"],
      icon: <Cpu size={28} />,
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=300&fit=crop",
      category: "System Design"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">Featured Projects</h2>
          <p className="text-lg text-slate-400">
            Showcasing technical expertise through practical implementations
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-800/80 rounded-xl overflow-hidden border border-slate-700 hover:border-purple-500/30 transition-all duration-300 group backdrop-blur-sm"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4 w-12 h-12 bg-slate-800/90 rounded-lg flex items-center justify-center text-purple-400 border border-purple-500/30">
                  {project.icon}
                </div>
              </div>

              <div className="p-6">
                {/* Project Title */}
                <h3 className="text-xl font-bold text-white mb-3">
                  {project.title}
                </h3>
                
                {/* Project Description */}
                <p className="text-slate-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3 uppercase tracking-wider">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium border border-purple-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-200">
                    <Github size={18} />
                    <span>Code</span>
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border-2 border-purple-500 text-purple-400 rounded-lg font-medium hover:bg-purple-500 hover:text-white transition-all duration-200">
                    <ExternalLink size={18} />
                    <span>Demo</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-slate-800/80 rounded-xl p-12 border border-slate-700 backdrop-blur-sm">
          <div className="w-16 h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-purple-500/30">
            <Github className="text-purple-400" size={28} />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">Explore More Projects</h3>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            Continuously working on new projects and contributing to open source. 
            Check out my GitHub profile for the latest updates and code repositories.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-3 px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-200 shadow-lg"
          >
            <Github size={20} />
            <span>View GitHub Profile</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
