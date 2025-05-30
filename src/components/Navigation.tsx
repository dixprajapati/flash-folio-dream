
import React, { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-black/80 backdrop-blur-xl border-b border-purple-500/30 shadow-2xl shadow-purple-500/10' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-full flex items-center justify-center animate-pulse">
                <Zap className="text-black" size={24} />
              </div>
              <div className="absolute inset-0 w-12 h-12 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-full blur-md opacity-50 animate-ping"></div>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Tisha Solanki
            </span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="relative px-6 py-3 text-gray-300 hover:text-white transition-all duration-300 group"
              >
                <span className="relative z-10">{item.name}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-pink-500/0 to-cyan-500/0 group-hover:from-purple-500/20 group-hover:via-pink-500/20 group-hover:to-cyan-500/20 rounded-lg transition-all duration-300"></div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 group-hover:w-full transition-all duration-300"></div>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-2 hover:bg-purple-500/20 rounded-lg transition-colors duration-200"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-black/90 backdrop-blur-xl rounded-2xl mt-2 p-6 border border-purple-500/30">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-gray-300 hover:text-purple-400 py-3 px-4 rounded-lg hover:bg-purple-500/10 transition-all duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
