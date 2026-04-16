export interface Project {
  id: number;
  title: string;
  description: string;
  stack: string[];
  githubUrl?: string;
  demoUrl?: string;
  featured?: boolean;
  badge?: string;
}

export interface Experience {
  period: string;
  title: string;
  company: string;
  stack: string[];
}

export interface SkillCategory {
  title: string;
  tags: string[];
  span?: number;
}

export interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  badgeUrl?: string;
  credentialUrl?: string;
  logo?: string;
}

