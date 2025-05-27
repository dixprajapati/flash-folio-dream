
import React from 'react';
import { Code, Brain, Zap, Users } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code size={24} />,
      title: "Full-Stack Development",
      description: "Experienced in Java programming, application development, and system optimization"
    },
    {
      icon: <Brain size={24} />,
      title: "Problem Solving",
      description: "Strong foundation in algorithms, data structures, and performance optimization"
    },
    {
      icon: <Zap size={24} />,
      title: "AI & ML Interest",
      description: "Passionate about AI acceleration and machine learning hardware optimization"
    },
    {
      icon: <Users size={24} />,
      title: "Team Collaboration",
      description: "Proven experience in team collaboration and code reviews"
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A passionate developer from Chitrakut, seeking opportunities to contribute to innovative tech projects 
            while continuing to grow as a versatile and reliable developer.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">My Journey</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Currently pursuing my Bachelor's in Engineering at Dr. V. R. Godhania College, Porbandar, 
              I've built a strong foundation in computer science fundamentals. My experience as an intern 
              Java developer has given me practical insights into application development and system optimization.
            </p>
            <p className="text-gray-400 mb-6 leading-relaxed">
              I'm particularly drawn to the intersection of software and hardware, with interests in 
              AI acceleration and machine learning optimization. My goal is to contribute to projects 
              that push the boundaries of what's possible in technology.
            </p>
            <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-white mb-2">Education Highlights</h4>
              <ul className="text-gray-400 space-y-2">
                <li>• Bachelor's in Engineering (Continuing) - Dr. V. R. Godhania College, 2027</li>
                <li>• Diploma in Engineering (8.60 GPA) - Government Polytechnic, 2024</li>
                <li>• Secondary Education (89%) - Yagnyavalkya Vidhya Mandir, 2021</li>
              </ul>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white mb-4">
                  {item.icon}
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
