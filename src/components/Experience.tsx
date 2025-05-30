
import React from 'react';
import { Calendar, MapPin, Briefcase, CheckCircle } from 'lucide-react';

const Experience = () => {
  const experience = {
    title: "Java Developer Intern",
    company: "Rajlakshmi",
    duration: "July 2023 - August 2023",
    location: "Remote",
    responsibilities: [
      "Developed Java applications using core programming concepts",
      "Worked with Hibernate framework for database operations",
      "Implemented database connectivity and data management",
      "Participated in unit testing and code reviews",
      "Collaborated with team members on project development",
      "Gained experience in frontend technologies integration",
      "Used version control systems for code management",
      "Documented code and project specifications"
    ]
  };

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Experience</h2>
          <p className="text-lg text-gray-600">
            Building expertise through hands-on development experience
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200"></div>
            
            {/* Experience card */}
            <div className="relative flex items-start">
              {/* Timeline indicator */}
              <div className="absolute left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>
              
              {/* Content */}
              <div className="ml-20 w-full">
                <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  
                  {/* Header */}
                  <div className="flex flex-wrap items-center gap-4 mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Briefcase className="text-blue-600" size={24} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">
                          {experience.title}
                        </h3>
                        <p className="text-blue-600 font-semibold text-lg">{experience.company}</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-3 ml-auto">
                      <div className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2">
                        <Calendar className="text-gray-600" size={16} />
                        <span className="text-gray-700 text-sm font-medium">{experience.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2">
                        <MapPin className="text-gray-600" size={16} />
                        <span className="text-gray-700 text-sm font-medium">{experience.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Responsibilities */}
                  <div className="mb-6">
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">Key Responsibilities & Achievements</h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {experience.responsibilities.map((responsibility, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={16} />
                          <span className="text-gray-600">
                            {responsibility}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Impact statement */}
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <blockquote className="text-gray-700 italic">
                      "This internship provided valuable hands-on experience with enterprise Java development, 
                      database technologies, and collaborative software development practices. It significantly 
                      enhanced my technical skills and understanding of professional development workflows."
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
