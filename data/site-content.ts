import type {
  BenefitItem,
  CompanyProfile,
  FaqItem,
  IndustryItem,
  NavItem,
  PortfolioProject,
  ServiceItem,
  SocialLinks,
  StatItem,
  TeamMember,
  TeamProfile,
  TestimonialItem,
  WorkHighlight,
  WorkPhase
} from "@/types/site";

export const companyProfile: CompanyProfile = {
  name: "Eluwa Prime Global",
  mission:
    "To be a leader in management consulting and technology that exceeds expectations through effectiveness and integrity.",
  about:
    "Founded in 2019, Eluwa Prime Global (Prime Global Consulting) is a pioneering private company providing quality solutions to private and public establishments. We translate client needs into technical specifications and engineering excellence.",
  hours: "Monday - Friday, 8 AM - 4 PM",
  email: "eluwamonday2017@gmail.com"
};

export const socialLinks: SocialLinks = {
  facebook: "https://www.facebook.com/me/",
  linkedin: "https://www.linkedin.com/in/monday-eluwa-ab2831256/",
  twitter: "https://x.com/Eluwa101",
  whatsapp: "https://wa.me/qr/HDO6IF35JHN7J1"
};

export const navigationItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Work", href: "/work" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Team", href: "/team" },
  { label: "Contact", href: "/#contact" }
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
  logo:
    "https://pdoqlgpnznvxatyklvfs.supabase.co/storage/v1/object/public/byu-pathway-career-chats/images/eluwa-prime-logo-new.png",
  hero:
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80&fm=webp",
  value:
    "https://pdoqlgpnznvxatyklvfs.supabase.co/storage/v1/object/public/byu-pathway-career-chats/images/eluwa-prime-global-building.jpeg",
  contact:
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80&fm=webp",
  building:
    "https://pdoqlgpnznvxatyklvfs.supabase.co/storage/v1/object/public/byu-pathway-career-chats/images/eluwa-prime-global-building.jpeg",
  portrait:
    "https://pdoqlgpnznvxatyklvfs.supabase.co/storage/v1/object/public/byu-pathway-career-chats/images/my_official_pics.jpg"
};

export const teamProfile: TeamProfile = {
  name: "Eluwa Monday",
  title: "Leadership Profile",
  summary:
    "Eluwa Monday is the public GitHub identity behind this growing portfolio of software, coursework, and consulting-focused builds. The official portrait on this page adds a more personal anchor to the Eluwa Prime Global story.",
  quote:
    "I'm Not Afraid of Failure or Challenges. It is part of the plan of Salvation, it makes me Stronger and Wiser!",
  githubUrl: "https://github.com/Eluwa101",
  photo: imagery.portrait,
  focusAreas: [
    "Software delivery and application development",
    "IT consulting and solution planning",
    "Digital presence and conversion-minded web experiences",
    "Operational support and continuous improvement"
  ]
};

export const portfolioProjects: PortfolioProject[] = [
  {
    name: "pathway-news",
    href: "https://pathway-news.onrender.com/",
    description:
      "A full-stack news platform delivering aggregated articles and updates for the BYU Pathway community. Features a clean reading experience, category filtering, and a responsive layout optimised for both desktop and mobile users.",
    inspiration:
      "Inspired by the need to give Pathway students a single, well-designed destination for relevant news and programme updates — replacing scattered sources with one reliable feed.",
    language: "JavaScript",
    updatedAt: "2026-04-17",
    featured: true,
    source: "github"
  },
  {
    name: "eluwa-prime-global",
    href: "https://github.com/Eluwa101/eluwa-prime-global",
    description:
      "A Next.js landing experience for Eluwa Prime Global with modular sections, modern styling, and conversion-focused structure.",
    inspiration:
      "Inspired by the need to give Eluwa Prime Global a premium digital front door that presents the company with more credibility and clarity.",
    language: "TypeScript",
    updatedAt: "2026-04-16",
    featured: true,
    source: "readme"
  },
  {
    name: "cse341-finalproject",
    href: "https://github.com/Eluwa101/cse341-finalproject",
    description:
      "A backend API project built with Node.js, Express, MongoDB, Swagger, and OAuth authentication, including four collections and full CRUD flows.",
    inspiration:
      "Inspired by the challenge of building a more production-style team API where collaboration, authentication, and deployment all mattered at once.",
    language: "JavaScript",
    updatedAt: "2026-04-14",
    featured: true,
    source: "readme"
  },
  {
    name: "wdd230",
    href: "https://github.com/Eluwa101/wdd230",
    description:
      "A web development coursework repository centered on responsive layouts, content structure, and practical browser-based experiences.",
    inspiration:
      "This inspiration note is inferred from the course repository name and likely reflects a desire to strengthen front-end web fundamentals through repeated practice.",
    language: "HTML",
    updatedAt: "2026-04-12",
    source: "inferred"
  },
  {
    name: "cse341-api-project-personal",
    href: "https://github.com/Eluwa101/cse341-api-project-personal",
    description:
      "A personal API project created during CSE 341 coursework to explore backend structure, endpoints, and data modeling more independently.",
    inspiration:
      "Likely inspired by the need to apply REST API concepts to an individual problem space and gain confidence building backend systems from scratch.",
    language: "JavaScript",
    updatedAt: "2026-04-05",
    source: "inferred"
  },
  {
    name: "cse341-api-project",
    href: "https://github.com/Eluwa101/cse341-api-project",
    description:
      "A term-based CSE 341 JavaScript API project focused on backend patterns, structured endpoints, and course delivery requirements.",
    inspiration:
      "Inspired by mastering the core ideas of modern API development through a clearly scoped academic build.",
    language: "JavaScript",
    updatedAt: "2026-03-20",
    source: "github"
  },
  {
    name: "cse_340",
    href: "https://github.com/Eluwa101/cse_340",
    description:
      "A backend-driven Node.js application with server-rendered pages and PostgreSQL-backed data management.",
    inspiration:
      "Inspired by the need to connect content, business logic, and structured data in a more complete full-stack workflow.",
    language: "JavaScript",
    updatedAt: "2026-02-17",
    featured: true,
    source: "readme"
  },
  {
    name: "what-weather-app",
    href: "https://github.com/Eluwa101/what-weather-app",
    description:
      "A weather web application built to provide real-time weather information and forecasts in a visually engaging interface.",
    inspiration:
      "Inspired by the everyday need for fast, reliable, and easy-to-read weather updates tailored to a user's location.",
    language: "JavaScript",
    updatedAt: "2024-10-30",
    featured: true,
    source: "github"
  },
  {
    name: "team11",
    href: "https://github.com/Eluwa101/team11",
    description:
      "A team school project based on the SleepOutside application starter, likely focused on collaborative front-end and shopping-flow patterns.",
    inspiration:
      "This entry is partly inferred and appears to be inspired by learning how to deliver a shared web experience in a team environment.",
    language: "HTML",
    updatedAt: "2024-10-06",
    source: "readme"
  },
  {
    name: "myProject",
    href: "https://github.com/Eluwa101/myProject",
    description:
      "A project intended to help fellow BYU Pathway students outline a clearer career map and plan next steps with more confidence.",
    inspiration:
      "Inspired by a real community need: making career planning easier and more practical for students navigating growth and opportunity.",
    language: "Project Notes",
    updatedAt: "2024-06-20",
    featured: true,
    source: "github"
  },
  {
    name: "cse121b",
    href: "https://github.com/Eluwa101/cse121b",
    description:
      "A JavaScript coursework repository likely containing exercises, DOM work, and data-driven programming tasks.",
    inspiration:
      "This note is inferred from the repository name and points to a strong focus on building fluency with core JavaScript concepts.",
    language: "JavaScript",
    updatedAt: "2024-02-11",
    source: "inferred"
  },
  {
    name: "cse210-projects",
    href: "https://github.com/Eluwa101/cse210-projects",
    description:
      "A C# project collection containing multiple starter and assignment paths for learning object-oriented development.",
    inspiration:
      "Inspired by the need to practice structured problem solving in C# across several small-to-medium programming exercises.",
    language: "C#",
    updatedAt: "2024-01-10",
    source: "readme"
  },
  {
    name: "wdd130",
    href: "https://github.com/Eluwa101/wdd130",
    description:
      "An introductory web development repository centered on foundational HTML, layout, and website-building practice.",
    inspiration:
      "This entry is inferred from the course repository name and reflects an early-stage focus on building the basics of web creation well.",
    language: "HTML",
    updatedAt: "2023-09-20",
    source: "inferred"
  }
];

export const workPhases: WorkPhase[] = [
  {
    title: "Discover",
    description:
      "We begin with business goals, operational pain points, and the digital gaps standing between vision and execution.",
    outcome:
      "A clearer brief, tighter priorities, and technical direction grounded in real business needs."
  },
  {
    title: "Design & Build",
    description:
      "From architecture and interfaces to backend logic and support systems, we shape solutions with usability and scale in mind.",
    outcome:
      "Purpose-built software, better workflows, and digital assets that feel intentional instead of improvised."
  },
  {
    title: "Launch & Support",
    description:
      "After delivery, we stay close to performance, maintenance, refinement, and the support layers your team needs to keep moving.",
    outcome:
      "A more durable digital presence with guidance that continues beyond launch day."
  }
];

export const workHighlights: WorkHighlight[] = [
  {
    title: "Consulting That Turns Into Action",
    description:
      "We translate business conversations into technical steps your team can actually execute."
  },
  {
    title: "Delivery Across Software and Visibility",
    description:
      "Our work spans software builds, infrastructure support, web presence, and marketing alignment."
  },
  {
    title: "Support Designed for Ongoing Growth",
    description:
      "We help organizations stabilize what exists now while making room for what comes next."
  }
];

export const teamMembers: TeamMember[] = [
  {
    name: "Eluwa Monday",
    title: "Founder & Lead Consultant",
    role: "Software Development & IT Strategy",
    summary:
      "Eluwa Monday is a software developer, IT consultant, and the founding mind behind Eluwa Prime Global. With expertise spanning full-stack development, AI integration, digital strategy, and management consulting, he leads the team in turning client visions into scalable, production-ready technology.",
    photo: "https://pdoqlgpnznvxatyklvfs.supabase.co/storage/v1/object/public/byu-pathway-career-chats/images/my_official_pics.jpg",
    linkedinUrl: "https://www.linkedin.com/in/monday-eluwa-ab2831256/",
    githubUrl: "https://github.com/Eluwa101",
    skills: [
      "AI & Machine Learning Integration",
      "Full-Stack Software Development",
      "IT Consulting & Digital Strategy",
      "Business Process Automation",
      "Customer Support Systems"
    ]
  },
  {
    name: "Ngozi Daryl",
    title: "UI/UX Designer",
    role: "User Experience & Interface Design",
    summary:
      "Ngozi Daryl is a creative UI/UX professional who transforms complex business requirements into elegant, user-centred digital experiences. Her expertise in design systems, wireframing, and prototyping ensures every product we ship is both beautiful and intuitive.",
    photo:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80&fm=webp",
    skills: [
      "UI/UX Design & Prototyping",
      "Design Systems & Brand Identity",
      "User Research & Usability Testing",
      "Figma, Adobe XD & Interactive Wireframing",
      "Mobile-First & Responsive Design"
    ]
  },
  {
    name: "Ike Ezeruo",
    title: "Senior Software Engineer",
    role: "Full-Stack Development & Code Architecture",
    summary:
      "Known as Code Guru, Ike Ezeruo is the engineering backbone of Eluwa Prime Global. He architects robust, high-performance backend systems, leads API development, and ensures every line of code meets enterprise-grade standards. His deep command of modern frameworks keeps the team's delivery sharp.",
    photo:
      "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=800&q=80&fm=webp",
    skills: [
      "Backend Architecture & API Engineering",
      "Node.js, TypeScript & Cloud Infrastructure",
      "Database Design (PostgreSQL, MongoDB)",
      "AI-Powered Application Development",
      "DevOps, CI/CD & System Reliability"
    ]
  }
];
