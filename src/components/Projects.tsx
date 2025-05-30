
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
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-600">
            Showcasing technical expertise through practical implementations
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 rounded-lg flex items-center justify-center text-blue-600">
                  {project.icon}
                </div>
              </div>

              <div className="p-6">
                {/* Project Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>
                
                {/* Project Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wider">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200">
                    <Github size={18} />
                    <span>Code</span>
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border-2 border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition-colors duration-200">
                    <ExternalLink size={18} />
                    <span>Demo</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white rounded-xl p-12 shadow-lg">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Github className="text-blue-600" size={28} />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Explore More Projects</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Continuously working on new projects and contributing to open source. 
            Check out my GitHub profile for the latest updates and code repositories.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-3 px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
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
