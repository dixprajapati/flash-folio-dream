
import React from 'react';
import { Code2, GraduationCap, Award, Target } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code2 size={24} />,
      title: "Clean Code",
      description: "Writing maintainable and efficient Java applications with best practices"
    },
    {
      icon: <GraduationCap size={24} />,
      title: "Continuous Learning",
      description: "Always exploring new technologies and improving development skills"
    },
    {
      icon: <Award size={24} />,
      title: "Problem Solving",
      description: "Analytical approach to complex programming challenges"
    },
    {
      icon: <Target size={24} />,
      title: "Goal Oriented",
      description: "Focused on delivering high-quality software solutions"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A dedicated Java developer passionate about creating efficient and scalable software solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">My Journey</h3>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                Currently pursuing my Bachelor's degree in Computer Science at Dr. V. R. Godhania College, 
                I have developed a strong foundation in software development with a particular focus on Java programming.
              </p>
              <p>
                My academic journey has been complemented by practical experience gained during my internship 
                at Rajlakshmi, where I worked on enterprise Java applications, database management, and 
                collaborative development practices.
              </p>
              <p>
                I believe in writing clean, efficient code and continuously learning new technologies 
                to stay current with industry trends and best practices.
              </p>
            </div>

            {/* Education Timeline */}
            <div className="mt-10">
              <h4 className="text-xl font-semibold text-gray-900 mb-6">Education</h4>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-600 pl-6 pb-4">
                  <h5 className="font-semibold text-gray-900">Bachelor's in Computer Science</h5>
                  <p className="text-blue-600 font-medium">Dr. V. R. Godhania College</p>
                  <p className="text-gray-600">2024 - Present</p>
                </div>
                <div className="border-l-4 border-gray-300 pl-6 pb-4">
                  <h5 className="font-semibold text-gray-900">Diploma in Computer Engineering</h5>
                  <p className="text-gray-600">CGPA: 8.60 | 2021 - 2024</p>
                </div>
                <div className="border-l-4 border-gray-300 pl-6">
                  <h5 className="font-semibold text-gray-900">Higher Secondary School</h5>
                  <p className="text-gray-600">89% | 2021</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 hover:bg-blue-50 hover:border-blue-200 border border-transparent transition-all duration-300"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                  {item.icon}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
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
