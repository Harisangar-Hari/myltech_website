export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  nav: {
    label: string;
    href: string;
  }[];
  contact: {
    email: string;
    phone: string;
    address: string;
    responseTime: string;
    socials: {
      platform: string;
      url: string;
      icon: string;
    }[];
  };
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  github?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatar: string;
  social: {
    twitter?: string;
    github?: string;
    linkedin?: string;
  };
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author: string;
  description: string;
  content?: string;
  coverImage?: string;
  tags: string[];
}

export interface JobPosition {
  id: string;
  title: string;
  type: string;
  location: string;
  department: string;
  experience: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  tags: string[];
}

export interface Perk {
  icon: string;
  title: string;
  description: string;
}

export interface CareersData {
  openPositions: JobPosition[];
  perks: Perk[];
}
