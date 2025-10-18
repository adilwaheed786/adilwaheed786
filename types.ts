
export interface NavLink {
  name: string;
  href: string;
}

export interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'Tools';
}

export interface Project {
  title: string;
  description: string;
  image: string;
  githubLink?: string;
  liveLink?: string;
}

export interface WorkExperienceItem {
  role: string;
  company: string;
  duration: string;
  description: string;
  isCurrent?: boolean;
}

export interface EducationItem {
  degree: string;
  institution: string;
  year: string;
}