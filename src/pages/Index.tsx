
import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Navigation from '../components/Navigation';

const Index = () => {
  return (
    <div className="min-h-screen bg-black overflow-x-hidden relative">
      {/* Animated star field background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-black to-blue-900/20"></div>
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          ></div>
        ))}
      </div>
      
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default Index;
