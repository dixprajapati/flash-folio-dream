
import React from 'react';
import { Code2, Brain, Zap, Users, GraduationCap, Award } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code2 size={28} />,
      title: "Full-Stack Development",
      description: "Experienced in Java programming, application development, and system optimization with modern frameworks"
    },
    {
      icon: <Brain size={28} />,
      title: "Problem Solving",
      description: "Strong analytical skills with expertise in algorithms, data structures, and performance optimization"
    },
    {
      icon: <Zap size={28} />,
      title: "AI & ML Interest",
      description: "Passionate about AI acceleration, machine learning, and cutting-edge technology innovations"
    },
    {
      icon: <Users size={28} />,
      title: "Team Collaboration",
      description: "Proven experience in agile development, code reviews, and cross-functional team collaboration"
    }
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/20 rounded-full px-6 py-3 mb-6">
            <GraduationCap className="text-teal-400" size={20} />
            <span className="text-teal-400 font-semibold">About Me</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-8">
            Passionate About{' '}
            <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Innovation
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            A dedicated developer from Chitrakut, constantly learning and growing while seeking 
            opportunities to contribute to cutting-edge technology projects.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">My Journey</h3>
              <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
                <p>
                  Currently pursuing my Bachelor's in Engineering at Dr. V. R. Godhania College, Porbandar, 
                  I've developed a strong foundation in computer science fundamentals and practical application development.
                </p>
                <p>
                  My internship experience as a Java developer at Rajlakshmi provided invaluable hands-on 
                  experience with enterprise-level applications, database management, and collaborative development practices.
                </p>
                <p>
                  I'm particularly fascinated by the intersection of software and hardware, with keen interests 
                  in AI acceleration and machine learning optimization technologies.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-teal-500/10 to-cyan-500/10 border border-teal-500/20 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Award className="text-teal-400" size={24} />
                <h4 className="text-xl font-bold text-white">Education Timeline</h4>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">Bachelor's in Engineering</span>
                  <span className="text-teal-400 font-semibold">2027</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">Diploma in Engineering (8.60 GPA)</span>
                  <span className="text-teal-400 font-semibold">2024</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">Secondary Education (89%)</span>
                  <span className="text-teal-400 font-semibold">2021</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="group bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-teal-500/50 transition-all duration-500 hover:scale-105 hover:bg-slate-800/50"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-4 group-hover:text-teal-400 transition-colors duration-300">
                  {item.title}
                </h4>
                <p className="text-slate-400 leading-relaxed">
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
