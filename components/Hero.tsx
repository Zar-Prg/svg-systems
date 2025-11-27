import React from 'react';
import { PROFILE } from '../constants';
import { Terminal, Shield, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 pb-10 overflow-hidden">
      {/* Background Grid Effect */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>

      <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div className="order-2 md:order-1 space-y-6">
          <div className="inline-flex items-center space-x-2 bg-cyber-900/50 border border-cyber-800 rounded-full px-4 py-1.5 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyber-500"></span>
            </span>
            <span className="text-sm font-mono text-cyber-400">Clearance Level: ARCHITECT</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight">
            <span className="text-cyber-500">De</span>vOps <br />
            <span className="text-slate-500">Elite</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-mono text-slate-400">
            {PROFILE.name}
          </h2>

          <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
            {PROFILE.summary}
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a 
              href="#contact" 
              className="px-8 py-3 bg-cyber-500 hover:bg-cyber-400 text-black font-bold rounded-sm transition-all shadow-[0_0_15px_rgba(14,165,233,0.3)] hover:shadow-[0_0_25px_rgba(14,165,233,0.5)] flex items-center gap-2"
            >
              <Terminal className="w-5 h-5" />
              INITIATE CONTACT
            </a>
            <a 
              href="#experience" 
              className="px-8 py-3 border border-slate-700 hover:border-cyber-500 text-slate-300 hover:text-white font-medium rounded-sm transition-all flex items-center gap-2 bg-cyber-900/50 backdrop-blur-sm"
            >
              <Shield className="w-5 h-5" />
              VIEW PROTOCOLS
            </a>
          </div>
        </div>

        {/* Image / Visual */}
        <div className="order-1 md:order-2 flex justify-center md:justify-end relative">
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            {/* Rotating Rings */}
            <div className="absolute inset-0 rounded-full border border-cyber-500/20 border-t-cyber-500 animate-[spin_10s_linear_infinite]"></div>
            <div className="absolute inset-4 rounded-full border border-slate-700/40 border-b-slate-500 animate-[spin_15s_linear_infinite_reverse]"></div>
            
            {/* Profile Image Container */}
            <div className="absolute inset-4 rounded-full overflow-hidden border-2 border-cyber-900 shadow-2xl bg-cyber-900">
               {/* 
                  NOTE FOR USER: 
                  Replace the src below with your actual photo path (e.g., ./assets/profile.jpg) 
                  The layout is optimized for a square headshot.
               */}
              <img 
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800" 
                alt="Andrei Zaharia" 
                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-cyber-500/10 mix-blend-overlay"></div>
            </div>

            {/* Floating Badges */}
            <div className="absolute -bottom-4 -left-4 bg-cyber-950 border border-cyber-800 p-3 rounded-lg shadow-xl flex items-center gap-3">
              <div className="bg-cyber-500/20 p-2 rounded text-cyber-400">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs text-slate-500 font-mono">CERTIFICATIONS</div>
                <div className="text-lg font-bold text-white">10+ PRO</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-slate-600">
        <ChevronDown className="w-6 h-6" />
      </div>
    </section>
  );
};

export default Hero;