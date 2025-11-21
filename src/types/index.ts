// Type Definitions for Portfolio Data

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface Skill {
  name: string;
  category: 'Languages' | 'Frameworks' | 'Tools' | 'AI/ML';
  icon?: string;
}

export interface ExperienceBullet {
  text: string;
  impact?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  bullets: ExperienceBullet[];
  technologies: string[];
}

export interface TechnicalChallenge {
  situation: string;
  task: string;
  action: string;
  result: string;
}

export interface SystemDesignDiagram {
  description: string;
  components: string[];
  imageUrl?: string;
}

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  thumbnail: string;
  techStack: string[];
  category: string;
  featured: boolean;
  liveUrl?: string;
  repoUrl?: string;
  date: string;
  systemDesign?: SystemDesignDiagram;
  technicalChallenges?: TechnicalChallenge;
  keyFeatures: string[];
}

export interface PersonalInfo {
  name: string;
  title: string;
  headline: string;
  subheadline: string;
  email: string;
  location: string;
  profileImage: string;
  resumeUrl: string;
  bio: string;
  socialLinks: SocialLink[];
}

export interface PortfolioData {
  personalInfo: PersonalInfo;
  skills: Skill[];
  experiences: Experience[];
  projects: Project[];
}
