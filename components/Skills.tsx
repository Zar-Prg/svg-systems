import React from 'react';
import { SKILLS } from '../constants';
import { Cloud, Shield, Code, Server, Database, Terminal } from 'lucide-react';

const Skills: React.FC = () => {
  // Group skills by category
  const categories = Array.from(new Set(SKILLS.map(s => s.category)));

  const getCategoryIcon = (category: string) => {
    if (category.includes('Cloud')) return <Cloud className="w-5 h-5" />;
    if (category.includes('Security')) return <Shield className="w-5 h-5" />;
    if (category.includes('DevOps')) return <Server className="w-5 h-5" />;
    return <Code className="w-5 h-5" />;
  };

  return (
    <section id="skills" className="py-20 bg-cyber-950 border-t border-cyber-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            <span className="text-cyber-500">./</span> Tech_Stack_Matrix
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Comprehensive proficiency in enterprise-grade technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {categories.map((category) => (
            <div key={category} className="bg-cyber-900/20 rounded-xl p-6 border border-cyber-800/50 hover:border-cyber-500/30 transition-colors">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-cyber-800">
                <div className="p-2 bg-cyber-500/10 rounded text-cyber-500">
                  {getCategoryIcon(category)}
                </div>
                <h3 className="text-xl font-bold text-white">{category}</h3>
              </div>
              
              <div className="space-y-5">
                {SKILLS.filter(s => s.category === category).map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between items-end mb-1">
                      <span className="text-slate-300 font-medium">{skill.name}</span>
                      <span className="text-xs font-mono text-cyber-500">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-cyber-950 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-cyber-800 to-cyber-500 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Floating Tags for Keywords */}
        <div className="mt-16 flex flex-wrap justify-center gap-3 opacity-70 hover:opacity-100 transition-opacity">
          {['FinOps', 'SRE', 'Disaster Recovery', 'Zero Trust', 'GDPR', 'ISO 27001', 'Prometheus', 'Grafana', 'Ansible', 'Jenkins', 'GitLab CI'].map((tag) => (
            <span key={tag} className="px-3 py-1 bg-cyber-950 border border-cyber-800 rounded-full text-xs text-slate-500 font-mono">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;