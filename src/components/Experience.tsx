
import React from 'react';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const Experience = () => {
  const experience = {
    title: "Intern as Java Developer",
    company: "Rajlakshmi",
    duration: "7-2023 - 8-2023",
    location: "Remote",
    responsibilities: [
      "Java Programming and Application Development",
      "Frameworks and Tools (Hibernate etc.)",
      "Database Connectivity and Management",
      "Unit and Integration Testing",
      "Team Collaboration and Code Reviews",
      "Front end Integration",
      "Version Controls",
      "Technical Documentation"
    ]
  };

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Work <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            My professional journey in software development
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500"></div>
            
            {/* Experience card */}
            <div className="relative flex items-start">
              {/* Timeline dot */}
              <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-4 border-slate-900"></div>
              
              {/* Content */}
              <div className="ml-20 w-full">
                <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-slate-700 rounded-xl p-8 hover:border-purple-500/50 transition-all duration-300">
                  <div className="flex flex-wrap items-center gap-4 mb-6">
                    <div className="flex items-center gap-2 text-purple-400">
                      <Briefcase size={20} />
                      <span className="font-semibold">{experience.title}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                      <Calendar size={16} />
                      <span>{experience.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                      <MapPin size={16} />
                      <span>{experience.location}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2">{experience.company}</h3>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-purple-400 mb-4">Key Responsibilities & Achievements:</h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {experience.responsibilities.map((responsibility, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-300">{responsibility}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-lg p-4">
                    <p className="text-gray-400 italic">
                      "Gained valuable hands-on experience in Java development, working with modern frameworks 
                      and tools while contributing to real-world applications in a collaborative team environment."
                    </p>
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
