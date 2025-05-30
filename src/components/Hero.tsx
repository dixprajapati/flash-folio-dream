
import React from 'react';
import { Github, Linkedin, Mail, Download, MapPin, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 pt-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="text-purple-400" size={20} />
                <span className="text-purple-400 font-semibold text-lg">Hello, I'm</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent mb-4">
                Tisha Solanki
              </h1>
              <h2 className="text-2xl lg:text-3xl text-slate-300 font-light">
                Java Developer & Software Engineer
              </h2>
            </div>
            
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              Passionate Java developer with expertise in building scalable applications 
              using modern frameworks. Currently pursuing Bachelor's in Computer Science 
              with a focus on innovative software solutions.
            </p>
            
            <div className="flex items-center gap-3 mb-8">
              <MapPin className="text-purple-400" size={20} />
              <span className="text-slate-400">Chitrakut, Porbandar, Gujarat</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="#projects"
                className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-200 text-center shadow-lg"
              >
                View My Work
              </a>
              <button className="px-8 py-3 border-2 border-purple-500 text-purple-400 rounded-lg font-semibold hover:bg-purple-500 hover:text-white transition-all duration-200 flex items-center justify-center gap-2">
                <Download size={20} />
                Download CV
              </button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {[
                { icon: Mail, href: "mailto:tishasolanki06@gmail.com", label: "Email" },
                { icon: Github, href: "#", label: "GitHub" },
                { icon: Linkedin, href: "#", label: "LinkedIn" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-12 h-12 bg-slate-800 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 text-slate-400 hover:text-white rounded-lg flex items-center justify-center transition-all duration-200 shadow-lg"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Profile Image */}
          <div className="lg:justify-self-end">
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl rotate-6 opacity-20"></div>
              <div className="absolute inset-2 bg-gradient-to-br from-purple-400 to-pink-400 rounded-3xl rotate-3 opacity-40"></div>
              <div className="relative w-full h-full rounded-3xl overflow-hidden bg-slate-800 p-2 shadow-2xl">
                <img
                  src="/lovable-uploads/524908b8-891b-4dcc-9554-ee06647d9fe1.png"
                  alt="Tisha Solanki"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-slate-800 shadow-xl px-4 py-2 rounded-lg border border-purple-500/30">
                <span className="text-purple-400 font-semibold">Available for hire</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
