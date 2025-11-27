import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote, Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-cyber-950 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyber-800 to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">
          <span className="text-cyber-500">./</span> Debrief_Reports
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, index) => (
            <div key={index} className="bg-cyber-900/30 border border-cyber-800 p-8 rounded-lg relative hover:bg-cyber-900/50 transition-colors">
              <Quote className="absolute top-6 left-6 w-8 h-8 text-cyber-500/20" />
              
              <div className="flex gap-1 mb-4 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>

              <p className="text-slate-300 italic mb-6 relative z-10 leading-relaxed">
                "{t.content}"
              </p>

              <div className="flex items-center gap-3 pt-6 border-t border-cyber-800/50">
                <div className="w-10 h-10 rounded-full bg-cyber-800 flex items-center justify-center text-cyber-500 font-bold">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="text-white font-bold text-sm">{t.name}</div>
                  <div className="text-cyber-500 text-xs font-mono">{t.role}</div>
                  <div className="text-slate-500 text-xs">{t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;