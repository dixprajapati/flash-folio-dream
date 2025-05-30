
import React from 'react';
import { Code, Database, Cpu, Users, Globe, Star, Zap } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code size={28} />,
      title: "Neural Languages",
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "Java Quantum", level: 95 },
        { name: "Python AI", level: 90 },
        { name: "C++ Neural", level: 85 },
        { name: "C Systems", level: 88 }
      ]
    },
    {
      icon: <Database size={28} />,
      title: "Cyber Frameworks",
      color: "from-pink-500 to-cyan-500",
      skills: [
        { name: "Hibernate Matrix", level: 82 },
        { name: "Database Consciousness", level: 85 },
        { name: "Logic Gate Networks", level: 90 },
        { name: "OS Integration", level: 80 }
      ]
    },
    {
      icon: <Cpu size={28} />,
      title: "Digital Synthesis",
      color: "from-cyan-500 to-purple-500",
      skills: [
        { name: "Application Genesis", level: 88 },
        { name: "Performance Optimization", level: 85 },
        { name: "Unit Testing Protocols", level: 80 },
        { name: "Code Review Systems", level: 85 }
      ]
    },
    {
      icon: <Users size={28} />,
      title: "Collective Intelligence",
      color: "from-purple-500 to-cyan-500",
      skills: [
        { name: "Team Neural Networks", level: 95 },
        { name: "Problem Solving AI", level: 98 },
        { name: "Documentation Synthesis", level: 88 },
        { name: "Version Control Matrix", level: 85 }
      ]
    }
  ];

  const languages = [
    { name: "Gujarati", level: "Native Core", flag: "🌟" },
    { name: "Hindi", level: "Fluent Interface", flag: "⚡" },
    { name: "English", level: "Professional Protocol", flag: "🚀" }
  ];

  const interests = [
    { name: "AI Consciousness Evolution", icon: "🤖" },
    { name: "Quantum Hardware Optimization", icon: "⚡" },
    { name: "Open Source Neural Networks", icon: "🔗" },
    { name: "Digital Library Architectures", icon: "📚" }
  ];

  return (
    <section id="skills" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-3 bg-pink-500/10 border border-pink-500/30 rounded-full px-8 py-4 mb-8">
            <Zap className="text-pink-400" size={24} />
            <span className="text-pink-400 font-semibold tracking-wider uppercase">Neural Matrix</span>
          </div>
          <h2 className="text-6xl lg:text-7xl font-black text-white mb-8">
            DIGITAL{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400">
              POWERS
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto">
            Advanced capabilities and quantum-enhanced skill matrices
          </p>
        </div>

        {/* Technical Skills */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="group relative bg-black/40 border border-gray-800 rounded-3xl p-10 hover:border-purple-500/50 transition-all duration-500 hover:scale-[1.02] overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-cyan-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-10">
                  <div className={`relative w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                    {category.icon}
                    <div className={`absolute inset-0 bg-gradient-to-r ${category.color} rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300`}></div>
                  </div>
                  <h3 className="text-3xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-8">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="group/skill">
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-gray-300 font-medium text-lg group-hover/skill:text-white transition-colors duration-200">
                          {skill.name}
                        </span>
                        <span className="text-purple-400 font-bold text-xl">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="relative w-full bg-gray-800/50 rounded-full h-4 overflow-hidden border border-gray-700">
                        <div
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out relative`}
                          style={{ width: `${skill.level}%` }}
                        >
                          <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse"></div>
                          <div className={`absolute inset-0 bg-gradient-to-r ${category.color} rounded-full blur-sm opacity-50 animate-pulse`}></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Languages & Interests */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Languages */}
          <div className="relative bg-black/40 border border-gray-800 rounded-3xl p-10 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-cyan-900/10 opacity-50"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-10">
                <div className="relative w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl flex items-center justify-center">
                  <Globe className="text-white" size={28} />
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl blur-lg opacity-50 animate-pulse"></div>
                </div>
                <h3 className="text-3xl font-bold text-white">Communication Protocols</h3>
              </div>
              <div className="space-y-6">
                {languages.map((language, index) => (
                  <div key={index} className="flex items-center justify-between p-6 bg-gray-900/30 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-colors duration-200">
                    <div className="flex items-center gap-4">
                      <span className="text-3xl">{language.flag}</span>
                      <span className="text-gray-300 font-medium text-lg">{language.name}</span>
                    </div>
                    <span className="text-purple-400 font-semibold px-4 py-2 bg-purple-500/20 rounded-full border border-purple-500/30">
                      {language.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Interests */}
          <div className="relative bg-black/40 border border-gray-800 rounded-3xl p-10 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/10 to-pink-900/10 opacity-50"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-10">
                <div className="relative w-16 h-16 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-2xl flex items-center justify-center">
                  <Star className="text-white" size={28} />
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-2xl blur-lg opacity-50 animate-pulse"></div>
                </div>
                <h3 className="text-3xl font-bold text-white">Neural Interests</h3>
              </div>
              <div className="space-y-4">
                {interests.map((interest, index) => (
                  <div key={index} className="flex items-center gap-4 p-6 bg-gray-900/30 rounded-2xl border border-cyan-500/20 hover:border-cyan-500/40 transition-colors duration-200 group">
                    <span className="text-3xl group-hover:scale-110 transition-transform duration-200">
                      {interest.icon}
                    </span>
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-200 text-lg">
                      {interest.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
