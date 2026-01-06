export interface NavLink {
  label: string;
  href: string;
}

export interface Venture {
  id: string;
  name: string;
  tag: string;
  description: string;
  status: 'Bazarda' | 'Hazırlanır' | 'Konsept';
  themeColor: string;
  size: 'large' | 'medium' | 'small';
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface TechItem {
  name: string;
  icon: string; // Using string identifier for icon mapping
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image?: string;
  socials?: {
    linkedin?: string;
    twitter?: string;
  }
}