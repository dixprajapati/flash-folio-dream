
import React from 'react';
import { Code2, Brain, Zap, Users, Cpu, Shield } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code2 size={28} />,
      title: "Neural Programming",
      description: "Advanced Java architecture with quantum-inspired algorithms and neural network integration",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Brain size={28} />,
      title: "AI Integration",
      description: "Pioneering artificial intelligence solutions with machine learning optimization protocols",
      color: "from-pink-500 to-cyan-500"
    },
    {
      icon: <Zap size={28} />,
      title: "Quantum Computing",
      description: "Exploring quantum algorithms and high-performance computing acceleration techniques",
      color: "from-cyan-500 to-purple-500"
    },
    {
      icon: <Users size={28} />,
      title: "Cyber Collaboration",
      description: "Leading digital teams through advanced development methodologies and virtual environments",
      color: "from-purple-500 to-cyan-500"
    }
  ];

  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-3 bg-purple-500/10 border border-purple-500/30 rounded-full px-8 py-4 mb-8">
            <Cpu className="text-purple-400" size={24} />
            <span className="text-purple-400 font-semibold tracking-wider uppercase">System Analysis</span>
          </div>
          <h2 className="text-6xl lg:text-7xl font-black text-white mb-8">
            DIGITAL{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">
              ARCHITECT
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Navigating the intersection of consciousness and code, building tomorrow's applications today
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="space-y-8">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-purple-500/30 rounded-full animate-spin-slow"></div>
              <h3 className="text-4xl font-bold text-white mb-8 relative z-10">Neural Pathways</h3>
              <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                <p className="relative pl-6">
                  <span className="absolute left-0 top-2 w-2 h-2 bg-purple-500 rounded-full animate-pulse"></span>
                  Currently interfacing with cutting-edge systems at Dr. V. R. Godhania College, 
                  developing quantum-enhanced cognitive algorithms and neural network architectures.
                </p>
                <p className="relative pl-6">
                  <span className="absolute left-0 top-2 w-2 h-2 bg-pink-500 rounded-full animate-pulse"></span>
                  My cybernetic enhancement at Rajlakshmi provided deep-system access to enterprise 
                  consciousness, database neural networks, and collaborative digital ecosystems.
                </p>
                <p className="relative pl-6">
                  <span className="absolute left-0 top-2 w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></span>
                  Fascinated by the convergence of biological and artificial intelligence, 
                  exploring quantum consciousness and machine learning symbiosis.
                </p>
              </div>
            </div>

            <div className="relative bg-gradient-to-r from-purple-900/20 via-black to-cyan-900/20 border border-purple-500/30 rounded-3xl p-8 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-cyan-500/5 animate-pulse"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <Shield className="text-purple-400" size={24} />
                  <h4 className="text-xl font-bold text-white">Neural Timeline</h4>
                </div>
                <div className="space-y-4">
                  {[
                    { title: "Bachelor's Enhancement Protocol", year: "2027", status: "Active" },
                    { title: "Diploma Neural Integration (8.60 GPA)", year: "2024", status: "Complete" },
                    { title: "Primary System Initialization (89%)", year: "2021", status: "Complete" }
                  ].map((item, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-black/30 rounded-lg border border-purple-500/20">
                      <span className="text-gray-300">{item.title}</span>
                      <div className="flex items-center gap-3">
                        <span className="text-purple-400 font-semibold">{item.year}</span>
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          item.status === 'Active' ? 'bg-green-500/20 text-green-400' : 'bg-purple-500/20 text-purple-400'
                        }`}>
                          {item.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="group relative bg-black/40 border border-gray-800 rounded-3xl p-8 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-cyan-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className={`relative w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                  <div className={`absolute inset-0 bg-gradient-to-r ${item.color} rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300`}></div>
                </div>
                <h4 className="text-xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors duration-300">
                  {item.title}
                </h4>
                <p className="text-gray-400 leading-relaxed relative z-10">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
