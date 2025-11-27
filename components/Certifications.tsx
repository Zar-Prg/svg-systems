import React from 'react';
import { CERTIFICATIONS } from '../constants';
import { Award, CheckCircle2 } from 'lucide-react';

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 bg-cyber-900 relative border-t border-cyber-800">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-cyber-500/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              <span className="text-cyber-500">./</span> Authenticated_Credentials
            </h2>
            <p className="text-slate-400 max-w-2xl">
              Verified proficiency in multi-cloud architecture and secure infrastructure operations.
            </p>
          </div>
          <div className="flex items-center gap-2 text-cyber-500 font-mono border border-cyber-500/30 px-4 py-2 rounded bg-cyber-500/5">
            <CheckCircle2 className="w-5 h-5" />
            <span>TOTAL CERTS: {CERTIFICATIONS.length}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert, index) => (
            <div 
              key={index}
              className="group bg-cyber-950 border border-cyber-800 p-6 rounded-lg hover:border-cyber-500 transition-all duration-300 flex items-start gap-4"
            >
              <div className="p-3 bg-cyber-800/50 rounded-lg group-hover:bg-cyber-500/20 transition-colors">
                <Award className="w-6 h-6 text-slate-300 group-hover:text-cyber-500" />
              </div>
              <div>
                <h3 className="font-bold text-white leading-tight mb-1 group-hover:text-cyber-400 transition-colors">
                  {cert.name}
                </h3>
                <p className="text-sm text-slate-500 font-mono">
                  ISSUER: {cert.issuer.toUpperCase()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;