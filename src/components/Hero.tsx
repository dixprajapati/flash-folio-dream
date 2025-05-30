
import React from 'react';
import { Github, Linkedin, Mail, ArrowDown, Sparkles, Rocket } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Floating geometric shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-purple-500/30 rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border-2 border-cyan-500/30 rotate-12 animate-bounce"></div>
        <div className="absolute top-1/2 left-1/6 w-16 h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center">
          {/* Animated greeting */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <Sparkles className="text-purple-400 animate-pulse" size={24} />
            <span className="text-purple-400 font-semibold text-lg tracking-wider uppercase">
              Welcome to the Future
            </span>
            <Sparkles className="text-cyan-400 animate-pulse" size={24} />
          </div>
          
          {/* Main title with glitch effect */}
          <div className="relative mb-8">
            <h1 className="text-8xl lg:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 mb-4 animate-fade-in">
              TISHA
            </h1>
            <div className="absolute inset-0 text-8xl lg:text-9xl font-black text-purple-500/20 animate-pulse">
              TISHA
            </div>
          </div>
          
          {/* Subtitle with typewriter effect */}
          <h2 className="text-3xl lg:text-4xl text-gray-300 mb-6 font-light">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Java Developer
            </span>
            {' & '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
              Tech Visionary
            </span>
          </h2>
          
          {/* Description */}
          <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Crafting digital experiences with cutting-edge Java technologies, exploring AI frontiers, 
            and building applications that push the boundaries of what's possible.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <a
              href="#projects"
              className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-full font-semibold overflow-hidden transition-all duration-300 hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg"></div>
              <span className="relative flex items-center gap-2">
                <Rocket size={20} />
                Explore Universe
                <ArrowDown className="group-hover:translate-y-1 transition-transform duration-300" size={20} />
              </span>
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border-2 border-purple-500 text-purple-400 rounded-full font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300 hover:scale-105"
            >
              Contact Mission Control
            </a>
          </div>

          {/* Profile Image with hologram effect */}
          <div className="relative mx-auto w-64 h-64 lg:w-80 lg:h-80 mb-12">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-full animate-spin-slow opacity-20 blur-xl"></div>
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 p-1">
              <div className="w-full h-full rounded-full overflow-hidden bg-black">
                <img
                  src="/lovable-uploads/524908b8-891b-4dcc-9554-ee06647d9fe1.png"
                  alt="Tisha Solanki"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-4 py-2 rounded-full font-semibold shadow-xl animate-bounce">
              Java Developer
            </div>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 justify-center">
            {[
              { icon: Mail, href: "mailto:tishasolanki06@gmail.com", color: "from-purple-500 to-pink-500" },
              { icon: Github, href: "#", color: "from-pink-500 to-cyan-500" },
              { icon: Linkedin, href: "#", color: "from-cyan-500 to-purple-500" }
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="group relative w-16 h-16 rounded-full overflow-hidden transition-all duration-300 hover:scale-110"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${social.color} opacity-80 group-hover:opacity-100 transition-opacity duration-300`}></div>
                <div className={`absolute inset-0 bg-gradient-to-r ${social.color} blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300`}></div>
                <div className="relative w-full h-full flex items-center justify-center text-white">
                  <social.icon size={24} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
