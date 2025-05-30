
import React from 'react';
import { Github, Linkedin, Mail, Download, MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 pt-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="mb-6">
              <span className="text-blue-600 font-semibold text-lg">Hello, I'm</span>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mt-2 mb-4">
                Tisha Solanki
              </h1>
              <h2 className="text-2xl lg:text-3xl text-gray-600 font-light">
                Java Developer & Software Engineer
              </h2>
            </div>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Passionate Java developer with expertise in building scalable applications 
              using modern frameworks. Currently pursuing Bachelor's in Computer Science 
              with a focus on innovative software solutions.
            </p>
            
            <div className="flex items-center gap-3 mb-8">
              <MapPin className="text-blue-600" size={20} />
              <span className="text-gray-600">Chitrakut, Porbandar, Gujarat</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="#projects"
                className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 text-center"
              >
                View My Work
              </a>
              <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-200 flex items-center justify-center gap-2">
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
                  className="w-12 h-12 bg-gray-200 hover:bg-blue-600 text-gray-600 hover:text-white rounded-lg flex items-center justify-center transition-colors duration-200"
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
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-3xl rotate-6"></div>
              <div className="relative w-full h-full rounded-3xl overflow-hidden bg-white p-2">
                <img
                  src="/lovable-uploads/524908b8-891b-4dcc-9554-ee06647d9fe1.png"
                  alt="Tisha Solanki"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white shadow-lg px-4 py-2 rounded-lg border border-gray-200">
                <span className="text-blue-600 font-semibold">Available for hire</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
