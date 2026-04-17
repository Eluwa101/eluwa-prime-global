export type NavItem = {
  label: string;
  href: string;
};

export type IndustryItem = {
  label: string;
};

export type BenefitItem = {
  title: string;
  description: string;
};

export type ServiceIcon =
  | "code"
  | "globe"
  | "server"
  | "support"
  | "seo"
  | "process";

export type ServiceItem = {
  icon: ServiceIcon;
  title: string;
  description: string;
};

export type StatItem = {
  value: number;
  suffix?: string;
  label: string;
};

export type TestimonialItem = {
  quote: string;
  author: string;
  role: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type CompanyProfile = {
  name: string;
  mission: string;
  about: string;
  hours: string;
  email: string;
};

export type TeamProfile = {
  name: string;
  title: string;
  summary: string;
  quote: string;
  githubUrl: string;
  photo: string;
  focusAreas: string[];
};

export type PortfolioProject = {
  name: string;
  href: string;
  description: string;
  inspiration: string;
  language: string;
  updatedAt: string;
  featured?: boolean;
  source: "github" | "readme" | "inferred";
};

export type WorkPhase = {
  title: string;
  description: string;
  outcome: string;
};

export type WorkHighlight = {
  title: string;
  description: string;
};

export type TeamMember = {
  name: string;
  title: string;
  role: string;
  summary: string;
  photo: string;
  linkedinUrl?: string;
  githubUrl?: string;
  skills: string[];
};

export type SocialLinks = {
  facebook: string;
  linkedin: string;
  twitter: string;
  whatsapp: string;
};
