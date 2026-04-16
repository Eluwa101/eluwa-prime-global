import type {
  BenefitItem,
  CompanyProfile,
  FaqItem,
  IndustryItem,
  NavItem,
  ServiceItem,
  StatItem,
  TestimonialItem
} from "@/types/site";

export const companyProfile: CompanyProfile = {
  name: "Eluwa Prime Global",
  mission:
    "To be a leader in management consulting and technology that exceeds expectations through effectiveness and integrity.",
  about:
    "Founded in 2019, Eluwa Prime Global (Prime Global Consulting) is a pioneering private company providing quality solutions to private and public establishments. We translate client needs into technical specifications and engineering excellence.",
  hours: "Monday - Friday, 8 AM - 4 PM",
  email: "hello@eluwaprimeglobal.com"
};

export const navigationItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Impact", href: "#impact" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" }
];

export const industries: IndustryItem[] = [
  { label: "Logistics" },
  { label: "Healthcare" },
  { label: "E-Commerce" },
  { label: "Oil & Gas" },
  { label: "Public Sector" },
  { label: "Professional Services" }
];

export const valueBenefits: BenefitItem[] = [
  {
    title: "Boost Efficiency",
    description:
      "Replace fragmented workflows with reliable systems that save time and reduce operational drag."
  },
  {
    title: "Secure Infrastructure",
    description:
      "Strengthen uptime, compliance, and business continuity with support designed for growth-minded teams."
  },
  {
    title: "Scalable Code",
    description:
      "Launch modern digital products with architecture that can expand across markets, users, and business models."
  }
];

export const services: ServiceItem[] = [
  {
    icon: "code",
    title: "Software & App Development",
    description:
      "Build bespoke platforms, mobile applications, dashboards, and internal tools engineered around your business goals."
  },
  {
    icon: "globe",
    title: "Web Presence Consulting",
    description:
      "Shape a stronger digital footprint with guidance on websites, customer journeys, conversion flows, and messaging."
  },
  {
    icon: "server",
    title: "IT Infrastructure & Support",
    description:
      "Modernize operations with dependable infrastructure planning, systems support, and proactive technology oversight."
  },
  {
    icon: "support",
    title: "General Online Presence Support",
    description:
      "Keep your brand consistent across platforms with hands-on help for listings, updates, visibility, and digital maintenance."
  },
  {
    icon: "seo",
    title: "Strategic Marketing & SEO",
    description:
      "Combine search strategy, campaign thinking, and performance-focused execution to attract and convert qualified demand."
  },
  {
    icon: "process",
    title: "Business Process Outsourcing (BPO)",
    description:
      "Extend your team with structured support that improves service delivery, streamlines workflows, and lowers overhead."
  }
];

export const stats: StatItem[] = [
  { value: 100, suffix: "+", label: "Completed Projects" },
  { value: 24, suffix: "/7", label: "Global Support" },
  { value: 30, suffix: "%", label: "Average Cost Reduction" },
  { value: 98, suffix: "%", label: "Client Satisfaction" }
];

export const testimonials: TestimonialItem[] = [
  {
    quote:
      "Eluwa Prime Global brought rare effectiveness to our software rollout. Their team combined strong delivery with the integrity and honesty we needed from a long-term technology partner.",
    author: "Ngozi A.",
    role: "Operations Director, Logistics Group"
  },
  {
    quote:
      "From infrastructure planning to digital strategy, they were transparent, steady, and deeply solutions-oriented. Their honesty throughout the project made decision-making much easier for our leadership team.",
    author: "David K.",
    role: "Managing Partner, Healthcare Advisory Firm"
  },
  {
    quote:
      "We engaged Eluwa Prime Global to improve our online presence and internal workflows. The result was a more efficient business and a partner we trust for both effectiveness and integrity.",
    author: "Amina S.",
    role: "Founder, E-Commerce Brand"
  }
];

export const faqItems: FaqItem[] = [
  {
    question: "How long does custom software development usually take?",
    answer:
      "Most projects begin with discovery and technical scoping, then move into phased delivery. Smaller builds can launch within a few weeks, while more complex platforms typically run across multiple milestones to ensure quality and scalability."
  },
  {
    question: "Do you work on hourly rates or project-based pricing?",
    answer:
      "We support both models. Clients can engage us on an hourly basis for flexible advisory and support work, or choose a project-based engagement for clearly defined deliverables and timelines."
  },
  {
    question: "What kind of support is available after launch?",
    answer:
      "We provide ongoing support for maintenance, infrastructure monitoring, iterative improvements, and strategic consulting. Support can be structured around business hours or tailored to broader operational coverage."
  }
];

export const serviceInterestOptions = [
  "Software & App Development",
  "Web Presence Consulting",
  "IT Infrastructure & Support",
  "General Online Presence Support",
  "Strategic Marketing & SEO",
  "Business Process Outsourcing (BPO)"
] as const;

export const imagery = {
  hero:
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80&fm=webp",
  value:
    "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80&fm=webp",
  contact:
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80&fm=webp"
};
