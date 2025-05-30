
import React from 'react';
import { Calendar, MapPin, Briefcase, CheckCircle } from 'lucide-react';

const Experience = () => {
  const experience = {
    title: "Intern Java Developer",
    company: "Rajlakshmi",
    duration: "July 2023 - August 2023",
    location: "Remote",
    responsibilities: [
      "Java Programming and Application Development",
      "Frameworks and Tools (Hibernate etc.)",
      "Database Connectivity and Management",
      "Unit and Integration Testing",
      "Team Collaboration and Code Reviews",
      "Front-end Integration",
      "Version Control Systems",
      "Technical Documentation"
    ]
  };

  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/20 rounded-full px-6 py-3 mb-6">
            <Briefcase className="text-teal-400" size={20} />
            <span className="text-teal-400 font-semibold">Experience</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-8">
            Professional{' '}
            <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Journey
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            My hands-on experience in software development and collaborative programming
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Modern timeline design */}
            <div className="absolute left-12 top-0 bottom-0 w-1 bg-gradient-to-b from-teal-500 to-cyan-500 rounded-full"></div>
            
            {/* Experience card */}
            <div className="relative flex items-start">
              {/* Timeline indicator */}
              <div className="absolute left-8 w-8 h-8 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full border-4 border-slate-900 z-10"></div>
              
              {/* Content */}
              <div className="ml-24 w-full">
                <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-10 hover:border-teal-500/50 transition-all duration-500 group">
                  
                  {/* Header */}
                  <div className="flex flex-wrap items-center gap-6 mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center">
                        <Briefcase className="text-white" size={20} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white group-hover:text-teal-400 transition-colors duration-300">
                          {experience.title}
                        </h3>
                        <p className="text-teal-400 font-semibold text-lg">{experience.company}</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-4 ml-auto">
                      <div className="flex items-center gap-2 bg-slate-700/50 rounded-full px-4 py-2">
                        <Calendar className="text-teal-400" size={16} />
                        <span className="text-slate-300 text-sm">{experience.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 bg-slate-700/50 rounded-full px-4 py-2">
                        <MapPin className="text-teal-400" size={16} />
                        <span className="text-slate-300 text-sm">{experience.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Responsibilities */}
                  <div className="mb-8">
                    <h4 className="text-xl font-bold text-white mb-6">Key Responsibilities & Achievements</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      {experience.responsibilities.map((responsibility, index) => (
                        <div key={index} className="flex items-start gap-3 group/item">
                          <CheckCircle className="text-teal-400 mt-1 group-hover/item:scale-110 transition-transform duration-200" size={18} />
                          <span className="text-slate-300 group-hover/item:text-white transition-colors duration-200">
                            {responsibility}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Impact statement */}
                  <div className="bg-gradient-to-r from-teal-500/10 to-cyan-500/10 border border-teal-500/20 rounded-2xl p-6">
                    <blockquote className="text-slate-300 italic text-lg leading-relaxed">
                      "This internship provided invaluable hands-on experience in enterprise Java development, 
                      working with modern frameworks and contributing to real-world applications while 
                      collaborating effectively in a professional development environment."
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
