
import React from 'react';
import { Code, Database, Cpu, Users, Globe, Star } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code size={24} />,
      title: "Programming Languages",
      skills: [
        { name: "Java", level: 90 },
        { name: "Python", level: 75 },
        { name: "C++", level: 80 },
        { name: "C", level: 85 }
      ]
    },
    {
      icon: <Database size={24} />,
      title: "Frameworks & Technologies",
      skills: [
        { name: "Hibernate", level: 80 },
        { name: "Database Management", level: 85 },
        { name: "Digital Logic Design", level: 90 },
        { name: "Operating Systems", level: 75 }
      ]
    },
    {
      icon: <Cpu size={24} />,
      title: "Development Skills",
      skills: [
        { name: "Application Development", level: 85 },
        { name: "Performance Optimization", level: 80 },
        { name: "Unit Testing", level: 75 },
        { name: "Code Review", level: 80 }
      ]
    },
    {
      icon: <Users size={24} />,
      title: "Professional Skills",
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
    { name: "Artificial Intelligence", icon: "🤖" },
    { name: "Software Architecture", icon: "🏗️" },
    { name: "Open Source Projects", icon: "🔗" },
    { name: "Technical Reading", icon: "📚" }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <p className="text-lg text-gray-600">
            Technical proficiencies and professional capabilities
          </p>
        </div>

        {/* Technical Skills */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-gray-700 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-blue-600 font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
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
          <div className="bg-gray-50 rounded-xl p-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Globe className="text-green-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Languages</h3>
            </div>
            <div className="space-y-4">
              {languages.map((language, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-white rounded-lg">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{language.flag}</span>
                    <span className="text-gray-700 font-medium">{language.name}</span>
                  </div>
                  <span className="text-green-600 font-semibold px-3 py-1 bg-green-100 rounded-full text-sm">
                    {language.level}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Interests */}
          <div className="bg-gray-50 rounded-xl p-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <Star className="text-purple-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Interests</h3>
            </div>
            <div className="space-y-3">
              {interests.map((interest, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-white rounded-lg hover:bg-purple-50 transition-colors duration-200">
                  <span className="text-2xl">{interest.icon}</span>
                  <span className="text-gray-700">
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
