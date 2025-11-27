import { Experience, Certification, Skill, Project, Testimonial } from './types';

export const PROFILE = {
  name: "Andrei Zaharia",
  title: "Senior Cloud Architect & DevOps Consultant",
  tagline: "Mission-Critical Multi-Cloud Infrastructure.",
  summary: "I engineer production-ready, multi-cloud platforms that reduce operational overhead, optimize costs, and accelerate feature delivery. With specialized expertise in Terraform, Kubernetes, and high-security governance, I deliver measurable results for global enterprises including Google, Vodafone, and LSEG.",
  email: "andrei.on.cloud@gmail.com",
  phone: "+40 736 091 582",
  location: "Romania (EU) / Remote",
  github: "github.com/andreizaharia",
  linkedin: "linkedin.com/in/andreizaharia"
};

export const PROJECTS: Project[] = [
  {
    title: "Global FinOps Governance Platform",
    role: "Lead Architect",
    description: "Designed and implemented an automated cost-control and compliance framework for a Fortune 500 financial data provider. The system aggregates billing data from AWS, Azure, and GCP into a unified dashboard with automated anomaly detection.",
    impact: "Reduced annual multi-cloud spend by 22% ($1.2M+ savings) and automated 90% of compliance reporting.",
    tech: ["Python", "Cloudability", "AWS Lambda", "Azure Functions", "Terraform"],
    link: "#",
    confidential: true
  },
  {
    title: "Zero-Trust Multi-Cloud Landing Zone",
    role: "Cloud Security Engineer",
    description: "Architected a secure, self-service vending machine for cloud account provisioning across GCP and AWS. Implemented strict IAM boundaries, VPC Service Controls, and automated security guardrails using Sentinel and Open Policy Agent.",
    impact: "Cut account provisioning time from 5 days to 45 minutes while achieving ISO 27001 compliance readiness.",
    tech: ["GCP Org Policy", "AWS SCP", "Terraform Enterprise", "OPA", "GitHub Actions"],
    link: "https://github.com/andreizaharia"
  },
  {
    title: "AI-Driven Market Sentiment Engine",
    role: "Senior Developer",
    description: "Built a high-performance scraping and data intelligence pipeline for a stealth fintech startup. The system ingests TBs of unstructured web data, performs real-time NLP sentiment analysis, and correlates findings with market movements.",
    impact: "Enabled sub-second trading signals with 99.99% infrastructure uptime during peak market volatility.",
    tech: ["Python", "Kubernetes", "ArgoCD", "NLP", "AWS EKS"],
    link: "https://github.com/andreizaharia"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Engineering Director",
    role: "Director of Cloud Platform",
    company: "LSEG (London Stock Exchange Group)",
    content: "Andrei is a machine. He automated our entire cloud compliance workflow in weeks, something previous contractors struggled with for months. His focus on cost-optimization paid for his contract ten times over."
  },
  {
    name: "Senior Security Lead",
    role: "Head of SecOps",
    company: "Vodafone Intelligent Services",
    content: "The most security-conscious DevOps engineer I've worked with. Andrei doesn't just build infrastructure; he builds fortresses. His landing zone architecture became our global standard."
  },
  {
    name: "Product Manager",
    role: "Cloud Product Lead",
    company: "Google",
    content: "Andrei's mastery of Kubernetes and GCP is unparalleled. He jumped into a critical fire-fighting situation and not only fixed the immediate issues but architected a solution that prevented recurrence."
  }
];

export const EXPERIENCE: Experience[] = [
  {
    company: "LSEG (London Stock Exchange Group)",
    role: "Senior DevOps Engineer",
    period: "Jul 2024 - Present",
    description: [
      "Architected enterprise-wide Cloudability governance across AWS, Azure, and GCP.",
      "Engineered Python frameworks for real-time compliance monitoring and cost anomaly detection.",
      "Automated 90% of manual maintenance tasks, significantly reducing operational toil.",
      "Optimized cloud spend through algorithmic reporting and automated remediation."
    ],
    technologies: ["AWS", "Azure", "GCP", "Python", "Cloudability", "FinOps"],
    highlight: true
  },
  {
    company: "Stealth Mode Contract",
    role: "Senior Python Developer",
    period: "Jun 2024 - May 2025",
    description: [
      "Built a data intelligence system for cost analysis and AI-driven sentiment analysis.",
      "Designed autoscaling infrastructure using Terraform, ArgoCD, and GitHub Actions on AWS.",
      "Implemented resilient scraping pipelines handling massive datasets with zero downtime."
    ],
    technologies: ["Python", "AI/ML", "Terraform", "ArgoCD", "AWS"]
  },
  {
    company: "_VOIS (Vodafone)",
    role: "Cloud DevOps Lead",
    period: "Oct 2023 - Dec 2024",
    description: [
      "Automated Landing Zone creation, reducing infrastructure workload by 50%.",
      "Developed a custom API for IPAM application data collection across multi-cloud environments.",
      "Created standardized Terraform modules for high-frequency AWS and GCP services.",
      "Mentored 15 engineers for CKA (Certified Kubernetes Administrator) certification."
    ],
    technologies: ["Multi-Cloud", "Terraform", "API Design", "Mentorship"]
  },
  {
    company: "Regnology",
    role: "Cloud Engineer",
    period: "Oct 2022 - Oct 2023",
    description: [
      "Executed migration of on-premise legacy resources to GCP, Azure, and AWS.",
      "Designed secure Landing Zones for multi-cloud operations.",
      "Automated infrastructure deployment triggered by Jira workflows."
    ],
    technologies: ["Migration", "Jira Automation", "Hybrid Cloud"]
  },
  {
    company: "Google",
    role: "Cloud Engineer",
    period: "Apr 2021 - Oct 2022",
    description: [
      "Architected secure environments for high-profile Google Cloud customers.",
      "Investigated and mitigated major high-visibility security incidents.",
      "Provided expert-level training on GCP services to enterprise clients."
    ],
    technologies: ["GCP", "Security Forensics", "Incident Response"],
    highlight: true
  },
  {
    company: "Ericsson",
    role: "Automated Service Engineer",
    period: "Sep 2019 - Aug 2021",
    description: [
      "Leveraged Kubernetes to operate multiple SDNs and critical applications.",
      "Implemented ETL & Data Warehouse flows for telecommunication providers.",
      "Automated daily operational fixes ensuring 99.99% availability."
    ],
    technologies: ["Kubernetes", "SDN", "ETL", "Telecom"]
  }
];

export const CERTIFICATIONS: Certification[] = [
  { name: "Kubestronaut", issuer: "CNCF" },
  { name: "Google Cloud Architect", issuer: "Google" },
  { name: "Azure Administrator (AZ-104)", issuer: "Microsoft" },
  { name: "Pro Cloud DevOps Engineer", issuer: "Google" },
  { name: "Pro Cloud Database Engineer", issuer: "Google" },
  { name: "Terraform Associate", issuer: "HashiCorp" },
  { name: "Pro Cloud Network Engineer", issuer: "Google" },
  { name: "Pro Cloud Security Engineer", issuer: "Google" },
  { name: "Pro Cloud Data Engineer", issuer: "Google" },
  { name: "Pro Cloud AI & ML Engineer", issuer: "Google" },
  { name: "Security Ops Analyst (SC-200)", issuer: "Microsoft" }
];

export const SKILLS: Skill[] = [
  // Cloud Architecture
  { name: "Google Cloud Platform (GCP)", level: 98, category: "Cloud Architecture" },
  { name: "AWS (Amazon Web Services)", level: 95, category: "Cloud Architecture" },
  { name: "Microsoft Azure", level: 90, category: "Cloud Architecture" },
  { name: "Multi-Cloud Strategy", level: 95, category: "Cloud Architecture" },
  
  // DevOps & IaC
  { name: "Terraform / IaC", level: 98, category: "DevOps & CI/CD" },
  { name: "Kubernetes / GKE / EKS", level: 98, category: "DevOps & CI/CD" },
  { name: "ArgoCD / GitOps", level: 92, category: "DevOps & CI/CD" },
  { name: "GitHub Actions / CI Pipelines", level: 95, category: "DevOps & CI/CD" },
  
  // Development
  { name: "Python Automation", level: 95, category: "Development & Scripting" },
  { name: "API Development", level: 85, category: "Development & Scripting" },
  { name: "Bash / Shell Scripting", level: 90, category: "Development & Scripting" },
  
  // Security
  { name: "Cloud Security / IAM", level: 95, category: "Security & Compliance" },
  { name: "Compliance (FinOps/GDPR)", level: 88, category: "Security & Compliance" },
  { name: "Security Forensics", level: 85, category: "Security & Compliance" }
];