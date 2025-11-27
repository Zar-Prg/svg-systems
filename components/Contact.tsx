import React from 'react';
import { PROFILE } from '../constants';
import { Mail, Github, Linkedin, Smartphone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="bg-cyber-900 border-t border-cyber-800 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Secure Your Infrastructure?
            </h2>
            <p className="text-slate-400 mb-8 max-w-md">
              Available for high-stakes contracts, enterprise architecture consulting, and government-grade security implementations.
            </p>
            <a 
              href={`mailto:${PROFILE.email}`}
              className="inline-flex items-center gap-2 px-6 py-3 bg-cyber-500 hover:bg-cyber-400 text-black font-bold rounded-sm transition-colors"
            >
              <Mail className="w-5 h-5" />
              TRANSMIT MESSAGE
            </a>
          </div>

          <div className="grid gap-6">
             <div className="flex items-start gap-4 p-4 border border-cyber-800 rounded bg-cyber-950/50">
               <MapPin className="w-6 h-6 text-cyber-500 shrink-0" />
               <div>
                 <div className="text-sm text-slate-500 font-mono mb-1">BASE OF OPERATIONS</div>
                 <div className="text-white">{PROFILE.location}</div>
               </div>
             </div>
             
             <div className="flex items-start gap-4 p-4 border border-cyber-800 rounded bg-cyber-950/50">
               <Smartphone className="w-6 h-6 text-cyber-500 shrink-0" />
               <div>
                 <div className="text-sm text-slate-500 font-mono mb-1">SECURE LINE</div>
                 <div className="text-white">{PROFILE.phone}</div>
               </div>
             </div>

             <div className="flex gap-4 mt-4">
               <a href={`https://${PROFILE.github}`} target="_blank" rel="noreferrer" className="p-3 bg-cyber-800 rounded hover:bg-cyber-700 hover:text-cyber-400 transition-colors text-slate-300">
                 <Github className="w-6 h-6" />
               </a>
               <a href={`https://${PROFILE.linkedin}`} target="_blank" rel="noreferrer" className="p-3 bg-cyber-800 rounded hover:bg-cyber-700 hover:text-cyber-400 transition-colors text-slate-300">
                 <Linkedin className="w-6 h-6" />
               </a>
             </div>
          </div>
        </div>

        <div className="border-t border-cyber-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-600 font-mono">
          <div>
            &copy; {new Date().getFullYear()} {PROFILE.name.toUpperCase()}. ALL RIGHTS RESERVED.
          </div>
          <div className="mt-2 md:mt-0 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            SYSTEM STATUS: OPERATIONAL
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;