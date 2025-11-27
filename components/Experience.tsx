import React from 'react';
import { EXPERIENCE } from '../constants';
import { Building2, Calendar, Server } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-cyber-950 relative">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            <span className="text-cyber-500">./</span> Experience_Log
          </h2>
          <div className="h-px bg-cyber-800 flex-grow max-w-xs"></div>
        </div>

        <div className="relative space-y-12">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-cyber-800 transform md:-translate-x-1/2"></div>

          {EXPERIENCE.map((job, index) => (
            <div key={index} className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-cyber-950 border-2 border-cyber-500 rounded-full transform -translate-x-[calc(50%+1px)] md:-translate-x-1/2 mt-6 z-10 shadow-[0_0_10px_rgba(14,165,233,0.5)]"></div>

              {/* Content Card */}
              <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-12 group">
                <div className={`
                  bg-cyber-900/50 backdrop-blur-sm border border-cyber-800 p-6 rounded-lg 
                  transition-all duration-300 hover:border-cyber-500/50 hover:shadow-[0_0_20px_rgba(14,165,233,0.1)]
                  relative overflow-hidden
                `}>
                  {/* Highlight Ribbon for specific roles */}
                  {job.highlight && (
                    <div className="absolute top-0 right-0">
                      <div className="bg-cyber-500 text-black text-xs font-bold px-3 py-1 rounded-bl-lg">
                        TOP SECRET
                      </div>
                    </div>
                  )}

                  <div className="flex flex-col gap-2 mb-4">
                    <div className="flex items-center gap-2 text-cyber-400 font-mono text-sm">
                      <Calendar className="w-4 h-4" />
                      {job.period}
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyber-400 transition-colors">
                      {job.role}
                    </h3>
                    <div className="flex items-center gap-2 text-slate-400 font-medium">
                      <Building2 className="w-4 h-4" />
                      {job.company}
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {job.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-slate-400 text-sm">
                        <span className="text-cyber-500 mt-1.5">›</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {job.technologies.map((tech, i) => (
                      <span key={i} className="px-2 py-1 bg-cyber-950 border border-cyber-800 rounded text-xs text-slate-300 font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Spacer for the other side */}
              <div className="hidden md:block w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;