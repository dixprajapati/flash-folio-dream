
import React, { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';

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
        ? 'bg-slate-900/90 backdrop-blur-md shadow-2xl border-b border-teal-500/20' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-xl flex items-center justify-center">
              <Code2 className="text-slate-900" size={24} />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Tisha Solanki
            </span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1 bg-slate-800/50 backdrop-blur-sm rounded-full px-2 py-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-6 py-3 text-gray-300 hover:text-white hover:bg-teal-500/20 rounded-full transition-all duration-300 relative group"
              >
                {item.name}
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-400/0 to-cyan-400/0 group-hover:from-teal-400/10 group-hover:to-cyan-400/10 transition-all duration-300"></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-2 hover:bg-teal-500/20 rounded-lg transition-colors duration-200"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-slate-800/95 backdrop-blur-sm rounded-2xl mt-2 p-6 border border-teal-500/20">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-gray-300 hover:text-teal-400 py-3 px-4 rounded-lg hover:bg-teal-500/10 transition-all duration-200"
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
