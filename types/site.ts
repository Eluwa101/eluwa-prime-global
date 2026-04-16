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

