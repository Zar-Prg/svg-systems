import React from 'react';
import { PROJECTS } from '../constants';
import { FolderGit2, ExternalLink, Lock, Server, TrendingUp, ShieldCheck } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-cyber-900 relative border-t border-cyber-800">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(2,6,23,0.7)_2px,transparent_2px),linear-gradient(90deg,rgba(2,6,23,0.7)_2px,transparent_2px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              <span className="text-cyber-500">./</span> Mission_Log
            </h2>
            <p className="text-slate-400 max-w-2xl text-lg">
              Selected operations demonstrating high-impact architectural solutions and enterprise-grade automation.
            </p>
          </div>
          <div className="hidden md:flex items-center gap-2 text-cyber-500 font-mono text-sm bg-cyber-950/50 px-3 py-1 rounded border border-cyber-500/30">
            <span className="w-2 h-2 rounded-full bg-cyber-500 animate-pulse"></span>
            CLEARANCE: UNCLASSIFIED
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <div 
              key={index} 
              className="group bg-cyber-950 border border-cyber-800 hover:border-cyber-500 rounded-lg p-6 flex flex-col transition-all duration-300 hover:shadow-[0_0_30px_rgba(14,165,233,0.15)] relative overflow-hidden"
            >
              {/* Card Header */}
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-cyber-900 rounded-lg border border-cyber-800 group-hover:border-cyber-500/50 transition-colors">
                  {project.confidential ? (
                    <ShieldCheck className="w-6 h-6 text-cyber-500" />
                  ) : (
                    <Server className="w-6 h-6 text-cyber-500" />
                  )}
                </div>
                {project.confidential ? (
                  <div className="flex items-center gap-1 text-xs font-bold text-amber-500 bg-amber-500/10 px-2 py-1 rounded border border-amber-500/20">
                    <Lock className="w-3 h-3" />
                    CONFIDENTIAL
                  </div>
                ) : (
                  <a href={project.link} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white transition-colors">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                )}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyber-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-sm font-mono text-cyber-500 mb-4 uppercase tracking-wider">
                Role: {project.role}
              </p>
              
              <p className="text-slate-400 text-sm mb-6 flex-grow leading-relaxed">
                {project.description}
              </p>

              {/* Impact Section */}
              <div className="mb-6 bg-cyber-900/50 p-3 rounded border-l-2 border-cyber-500">
                <div className="flex items-center gap-2 text-cyber-400 text-xs font-bold uppercase mb-1">
                  <TrendingUp className="w-3 h-3" />
                  Mission Impact
                </div>
                <div className="text-slate-200 text-sm font-medium">
                  {project.impact}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-cyber-800">
                {project.tech.map((tech, i) => (
                  <span key={i} className="text-xs font-mono text-slate-500 bg-cyber-900/80 px-2 py-1 rounded border border-cyber-800/50">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;