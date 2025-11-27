import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'PROJECTS', href: '#projects' },
    { name: 'EXPERIENCE', href: '#experience' },
    { name: 'CREDENTIALS', href: '#certifications' },
    { name: 'TESTIMONIALS', href: '#testimonials' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-cyber-950/90 backdrop-blur-md border-b border-cyber-800 py-4' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-xl font-bold tracking-widest text-white font-mono group flex items-center gap-2">
          <span className="text-cyber-500 group-hover:animate-pulse">&gt;_</span> 
          <span>AZ.CLOUD</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-xs font-mono text-slate-400 hover:text-cyber-400 tracking-widest transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" className="ml-4 px-5 py-2 border border-cyber-500/30 bg-cyber-500/10 text-cyber-500 text-xs font-mono font-bold rounded hover:bg-cyber-500 hover:text-black transition-all shadow-[0_0_10px_rgba(14,165,233,0.1)] hover:shadow-[0_0_20px_rgba(14,165,233,0.4)]">
            HIRE_ENGINEER
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-slate-300 hover:text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-cyber-900 border-b border-cyber-800 p-6 flex flex-col gap-4 shadow-2xl">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-mono text-slate-300 hover:text-cyber-400 py-2 border-b border-cyber-800/50"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;