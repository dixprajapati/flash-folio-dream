
import React from 'react';
import { Github, Linkedin, Mail, ArrowDown, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/6 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1 text-left">
            <div className="flex items-center gap-3 mb-6 animate-fade-in">
              <Sparkles className="text-teal-400" size={24} />
              <span className="text-teal-400 font-semibold text-lg">Welcome to my portfolio</span>
            </div>
            
            <h1 className="text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in delay-200">
              I'm{' '}
              <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Tisha
              </span>
            </h1>
            
            <h2 className="text-3xl lg:text-4xl text-slate-300 mb-8 animate-fade-in delay-300">
              Java Developer & 
              <br />
              <span className="text-teal-400">Tech Enthusiast</span>
            </h2>
            
            <p className="text-xl text-slate-400 mb-10 leading-relaxed animate-fade-in delay-400">
              Passionate about creating efficient solutions with Java, exploring AI technologies, 
              and building applications that make a difference. Currently pursuing my Bachelor's 
              in Engineering with hands-on industry experience.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 mb-10 animate-fade-in delay-500">
              <a
                href="#projects"
                className="group px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-2xl font-semibold hover:scale-105 transition-all duration-300 text-center shadow-lg shadow-teal-500/25"
              >
                Explore My Work
                <ArrowDown className="inline ml-2 group-hover:translate-y-1 transition-transform duration-300" size={20} />
              </a>
              <a
                href="#contact"
                className="px-8 py-4 border-2 border-teal-400 text-teal-400 rounded-2xl font-semibold hover:bg-teal-400 hover:text-slate-900 transition-all duration-300 text-center"
              >
                Let's Connect
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 animate-fade-in delay-600">
              <a
                href="mailto:tishasolanki06@gmail.com"
                className="w-14 h-14 bg-slate-800/50 backdrop-blur-sm border border-teal-500/30 rounded-xl flex items-center justify-center text-teal-400 hover:bg-teal-500 hover:text-white transition-all duration-300 hover:scale-110"
              >
                <Mail size={20} />
              </a>
              <a
                href="#"
                className="w-14 h-14 bg-slate-800/50 backdrop-blur-sm border border-teal-500/30 rounded-xl flex items-center justify-center text-teal-400 hover:bg-teal-500 hover:text-white transition-all duration-300 hover:scale-110"
              >
                <Github size={20} />
              </a>
              <a
                href="#"
                className="w-14 h-14 bg-slate-800/50 backdrop-blur-sm border border-teal-500/30 rounded-xl flex items-center justify-center text-teal-400 hover:bg-teal-500 hover:text-white transition-all duration-300 hover:scale-110"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="order-1 lg:order-2 relative group animate-fade-in delay-300">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full opacity-20 group-hover:scale-110 transition-transform duration-500"></div>
              <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full opacity-20 group-hover:scale-110 transition-transform duration-500 delay-200"></div>
              
              {/* Main image container */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 mx-auto">
                <div className="w-full h-full rounded-3xl overflow-hidden border-4 border-gradient-to-r from-teal-400 to-cyan-400 p-2 bg-gradient-to-r from-teal-400 to-cyan-400">
                  <div className="w-full h-full rounded-2xl overflow-hidden bg-slate-900">
                    <img
                      src="/lovable-uploads/524908b8-891b-4dcc-9554-ee06647d9fe1.png"
                      alt="Tisha Solanki"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                </div>
                
                {/* Floating badge */}
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-6 py-3 rounded-2xl font-semibold shadow-xl">
                  Java Developer
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
