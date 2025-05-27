
import React from 'react';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          {/* Profile Image */}
          <div className="relative group">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-gradient-to-r from-purple-400 to-pink-400 p-1 bg-gradient-to-r from-purple-400 to-pink-400 animate-fade-in">
              <div className="w-full h-full rounded-full overflow-hidden bg-slate-900">
                <img
                  src="/lovable-uploads/524908b8-891b-4dcc-9554-ee06647d9fe1.png"
                  alt="Tisha Solanki"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400/20 to-pink-400/20 group-hover:scale-110 transition-transform duration-500"></div>
          </div>

          {/* Text Content */}
          <div className="text-left max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
                Tisha
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-300 mb-6 animate-fade-in delay-200">
              Java Developer & Computer Science Enthusiast
            </h2>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed animate-fade-in delay-300">
              Motivated and detail-oriented computer science enthusiast with a strong foundation in C, C++, Python, and Java. 
              Skilled in digital logic design, operating system concepts, and low-level programming for performance optimization.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-6 mb-8 animate-fade-in delay-500">
              <a
                href="mailto:tishasolanki06@gmail.com"
                className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
              >
                <Mail size={20} />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
              >
                <Github size={20} />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
              >
                <Linkedin size={20} />
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in delay-700">
              <a
                href="#projects"
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold hover:scale-105 transition-transform duration-300 text-center"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-8 py-4 border border-purple-400 text-purple-400 rounded-full font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300 text-center"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-white/60" size={32} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
