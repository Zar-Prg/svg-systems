export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
  technologies: string[];
  logo?: string;
  highlight?: boolean; // For top secret/high impact roles
}

export interface Certification {
  name: string;
  issuer: string;
  year?: string;
  icon?: string;
}

export interface Skill {
  name: string;
  level: number; // 1-100
  category: 'Cloud Architecture' | 'DevOps & CI/CD' | 'Security & Compliance' | 'Development & Scripting';
  icon?: string;
}

export interface Project {
  title: string;
  role: string;
  description: string;
  impact: string; // Key metric for enterprise value
  tech: string[];
  link?: string;
  confidential?: boolean;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  linkedIn?: string;
}