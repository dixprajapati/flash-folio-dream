
import React from 'react';
import { Calendar, MapPin, Briefcase, CheckCircle, Terminal } from 'lucide-react';

const Experience = () => {
  const experience = {
    title: "Neural Java Developer",
    company: "Rajlakshmi Systems",
    duration: "July 2023 - August 2023",
    location: "Cyber Space",
    responsibilities: [
      "Quantum Java Programming & Neural Applications",
      "Framework Synthesis (Hibernate Protocols)",
      "Database Consciousness Integration",
      "Multidimensional Testing Protocols",
      "Collective Intelligence Collaboration",
      "Neural-Frontend Symbiosis",
      "Version Control Matrices",
      "Digital Knowledge Documentation"
    ]
  };

  return (
    <section id="experience" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-3 bg-cyan-500/10 border border-cyan-500/30 rounded-full px-8 py-4 mb-8">
            <Terminal className="text-cyan-400" size={24} />
            <span className="text-cyan-400 font-semibold tracking-wider uppercase">Mission Log</span>
          </div>
          <h2 className="text-6xl lg:text-7xl font-black text-white mb-8">
            CYBER{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              MISSIONS
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Digital expeditions through the realms of code and consciousness
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Futuristic timeline design */}
            <div className="absolute left-16 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500 rounded-full opacity-60"></div>
            <div className="absolute left-16 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500 rounded-full animate-pulse blur-sm"></div>
            
            {/* Experience card */}
            <div className="relative flex items-start">
              {/* Glowing timeline indicator */}
              <div className="absolute left-12 w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full border-4 border-black z-10 animate-pulse">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full blur-lg opacity-50 animate-ping"></div>
              </div>
              
              {/* Content */}
              <div className="ml-32 w-full">
                <div className="relative bg-gradient-to-br from-gray-900/80 via-black to-gray-900/80 border border-purple-500/30 rounded-3xl p-12 hover:border-cyan-500/50 transition-all duration-500 group overflow-hidden">
                  
                  {/* Animated background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 via-transparent to-cyan-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Header */}
                  <div className="relative z-10 flex flex-wrap items-center gap-6 mb-10">
                    <div className="flex items-center gap-4">
                      <div className="relative w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center">
                        <Briefcase className="text-white" size={24} />
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                          {experience.title}
                        </h3>
                        <p className="text-cyan-400 font-semibold text-xl">{experience.company}</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-4 ml-auto">
                      <div className="flex items-center gap-3 bg-gray-800/50 border border-cyan-500/30 rounded-full px-6 py-3">
                        <Calendar className="text-cyan-400" size={18} />
                        <span className="text-gray-300 font-medium">{experience.duration}</span>
                      </div>
                      <div className="flex items-center gap-3 bg-gray-800/50 border border-purple-500/30 rounded-full px-6 py-3">
                        <MapPin className="text-purple-400" size={18} />
                        <span className="text-gray-300 font-medium">{experience.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Responsibilities */}
                  <div className="relative z-10 mb-10">
                    <h4 className="text-2xl font-bold text-white mb-8">Mission Parameters & Achievements</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      {experience.responsibilities.map((responsibility, index) => (
                        <div key={index} className="flex items-start gap-4 group/item p-3 rounded-xl hover:bg-purple-500/10 transition-all duration-200">
                          <div className="relative">
                            <CheckCircle className="text-cyan-400 mt-1 group-hover/item:scale-110 transition-transform duration-200" size={20} />
                            <div className="absolute inset-0 bg-cyan-400 rounded-full blur-sm opacity-0 group-hover/item:opacity-30 transition-opacity duration-200"></div>
                          </div>
                          <span className="text-gray-300 group-hover/item:text-white transition-colors duration-200 flex-1">
                            {responsibility}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Impact statement */}
                  <div className="relative z-10 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 border border-cyan-500/30 rounded-2xl p-8">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-2xl animate-pulse"></div>
                    <blockquote className="relative text-gray-300 italic text-xl leading-relaxed">
                      "This neural expedition provided unprecedented access to enterprise consciousness matrices, 
                      quantum framework architectures, and collaborative digital ecosystems while interfacing 
                      with advanced AI-human hybrid development protocols."
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
