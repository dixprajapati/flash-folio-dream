
import React from 'react';
import { Code, Database, Cpu, Users, Globe, Star } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code size={24} />,
      title: "Programming Languages",
      color: "from-teal-500 to-cyan-500",
      skills: [
        { name: "Java", level: 90 },
        { name: "Python", level: 85 },
        { name: "C++", level: 80 },
        { name: "C", level: 85 }
      ]
    },
    {
      icon: <Database size={24} />,
      title: "Technologies & Frameworks",
      color: "from-cyan-500 to-blue-500",
      skills: [
        { name: "Hibernate", level: 75 },
        { name: "Database Management", level: 80 },
        { name: "Logic Gates & Multiplexers", level: 85 },
        { name: "Operating Systems", level: 75 }
      ]
    },
    {
      icon: <Cpu size={24} />,
      title: "Development Skills",
      color: "from-blue-500 to-indigo-500",
      skills: [
        { name: "Application Development", level: 85 },
        { name: "Performance Optimization", level: 80 },
        { name: "Unit Testing", level: 75 },
        { name: "Code Reviews", level: 80 }
      ]
    },
    {
      icon: <Users size={24} />,
      title: "Soft Skills",
      color: "from-indigo-500 to-purple-500",
      skills: [
        { name: "Team Collaboration", level: 90 },
        { name: "Problem Solving", level: 95 },
        { name: "Technical Documentation", level: 85 },
        { name: "Version Control", level: 80 }
      ]
    }
  ];

  const languages = [
    { name: "Gujarati", level: "Native", flag: "🇮🇳" },
    { name: "Hindi", level: "Fluent", flag: "🇮🇳" },
    { name: "English", level: "Professional", flag: "🇺🇸" }
  ];

  const interests = [
    { name: "AI & Machine Learning", icon: "🤖" },
    { name: "Hardware Optimization", icon: "⚡" },
    { name: "Open Source Contribution", icon: "🔧" },
    { name: "Library Management Systems", icon: "📚" }
  ];

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/20 rounded-full px-6 py-3 mb-6">
            <Star className="text-teal-400" size={20} />
            <span className="text-teal-400 font-semibold">Skills & Expertise</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-8">
            Technical{' '}
            <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Arsenal
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            A comprehensive overview of my technical capabilities and professional skills
          </p>
        </div>

        {/* Technical Skills */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="group bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 hover:border-teal-500/50 transition-all duration-500 hover:scale-[1.02]"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-14 h-14 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-teal-400 transition-colors duration-300">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group/skill">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-slate-300 font-medium group-hover/skill:text-white transition-colors duration-200">
                        {skill.name}
                      </span>
                      <span className="text-teal-400 font-bold text-lg">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="relative w-full bg-slate-700/50 rounded-full h-3 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out relative`}
                        style={{ width: `${skill.level}%` }}
                      >
                        <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Languages & Interests */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Languages */}
          <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center">
                <Globe className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white">Languages</h3>
            </div>
            <div className="space-y-6">
              {languages.map((language, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-slate-700/30 rounded-2xl hover:bg-slate-700/50 transition-colors duration-200">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{language.flag}</span>
                    <span className="text-slate-300 font-medium">{language.name}</span>
                  </div>
                  <span className="text-teal-400 font-semibold px-3 py-1 bg-teal-500/20 rounded-full text-sm">
                    {language.level}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Interests */}
          <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center">
                <Star className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white">Interests & Activities</h3>
            </div>
            <div className="space-y-4">
              {interests.map((interest, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-slate-700/30 rounded-2xl hover:bg-slate-700/50 transition-colors duration-200 group">
                  <span className="text-2xl group-hover:scale-110 transition-transform duration-200">
                    {interest.icon}
                  </span>
                  <span className="text-slate-300 group-hover:text-white transition-colors duration-200">
                    {interest.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
