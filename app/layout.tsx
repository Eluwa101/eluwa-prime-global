import type { Metadata } from "next";
import { bodyFont, headingFont } from "@/app/fonts";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { BallGame } from "@/components/ui/ball-game";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Eluwa Monday | Eluwa Prime Global — AI, Software & IT Consulting",
  description:
    "Eluwa Prime Global, founded by Eluwa Monday, delivers AI-powered software development, IT consulting, customer support automation, and digital strategy for businesses worldwide. Trusted by organisations in Nigeria, Africa, and beyond.",
  keywords: [
    // People & brand — Eluwa Monday
    "Eluwa Monday",
    "Monday Eluwa",
    "Eluwa101",
    "Eluwa Prime Global",
    "Prime Global Consulting",
    "Eluwa Monday software developer",
    "Eluwa Monday IT consultant",
    "Eluwa Monday Nigeria",
    "Eluwa Monday customer support",
    "Eluwa Monday customer service specialist",
    "Eluwa Monday customer experience",
    "Eluwa Monday digital strategy",
    "Eluwa Monday AI consultant",
    "Eluwa Monday full stack developer",
    "Eluwa Monday LinkedIn",
    "Monday Eluwa developer",
    "Monday Eluwa consultant",
    // AI keywords
    "AI consulting",
    "artificial intelligence solutions",
    "AI-powered software development",
    "machine learning integration",
    "intelligent automation",
    "generative AI",
    "LLM integration",
    "AI strategy",
    "AI-driven business insights",
    "chatbot development",
    "AI customer support",
    "AI for business",
    "AI software Nigeria",
    // Customer support specialist
    "customer support specialist",
    "customer support automation",
    "customer service specialist Nigeria",
    "24/7 customer support",
    "customer experience consultant",
    "customer success manager",
    "helpdesk software development",
    "customer success solutions",
    "support ticketing system",
    "automated customer service",
    "live chat integration",
    "CRM development",
    "omnichannel customer support",
    "customer support outsourcing",
    "virtual customer support",
    "remote customer support specialist",
    "customer retention solutions",
    "customer onboarding automation",
    "support workflow automation",
    "customer feedback systems",
    // Software & web development
    "custom software development",
    "web development Nigeria",
    "mobile app development",
    "full-stack developer",
    "React developer",
    "Next.js development",
    "Node.js backend",
    "TypeScript developer",
    "API development",
    "REST API",
    "cloud solutions",
    "SaaS development",
    "enterprise software",
    // IT & consulting
    "IT consulting",
    "management consulting",
    "digital transformation",
    "IT infrastructure support",
    "business process automation",
    "BPO services",
    "outsourcing Nigeria",
    "digital strategy consulting",
    "technology consulting Africa",
    // SEO & marketing
    "SEO services Nigeria",
    "digital marketing",
    "online presence management",
    "conversion optimisation",
    // Location
    "software company Nigeria",
    "Lagos tech company",
    "Nigerian software developer",
    "African technology consulting",
    "IT services Nigeria"
  ],
  authors: [{ name: "Eluwa Monday", url: "https://www.linkedin.com/in/monday-eluwa-ab2831256/" }],
  creator: "Eluwa Monday",
  publisher: "Eluwa Prime Global",
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://eluwaprimeglobal.com",
    siteName: "Eluwa Prime Global",
    title: "Eluwa Monday | Eluwa Prime Global — AI, Software & IT Consulting",
    description:
      "AI-powered software development, IT consulting, customer support automation, and digital strategy by Eluwa Monday and team. Serving clients globally from Nigeria.",
    images: [
      {
        url: "https://pdoqlgpnznvxatyklvfs.supabase.co/storage/v1/object/public/byu-pathway-career-chats/images/eluwa-prime-global-logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Eluwa Prime Global — AI, Software & IT Consulting"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "@Eluwa101",
    creator: "@Eluwa101",
    title: "Eluwa Monday | Eluwa Prime Global — AI, Software & IT Consulting",
    description:
      "AI-powered software, IT consulting, and customer support automation. Founded by Eluwa Monday.",
    images: [
      "https://pdoqlgpnznvxatyklvfs.supabase.co/storage/v1/object/public/byu-pathway-career-chats/images/eluwa-prime-global-logo.jpeg"
    ]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  alternates: {
    canonical: "https://eluwaprimeglobal.com"
  },
  icons: {
    icon: "https://pdoqlgpnznvxatyklvfs.supabase.co/storage/v1/object/public/byu-pathway-career-chats/images/eluwa-prime-global-logo.jpeg",
    shortcut: "https://pdoqlgpnznvxatyklvfs.supabase.co/storage/v1/object/public/byu-pathway-career-chats/images/eluwa-prime-global-logo.jpeg",
    apple: "https://pdoqlgpnznvxatyklvfs.supabase.co/storage/v1/object/public/byu-pathway-career-chats/images/eluwa-prime-global-logo.jpeg"
  },
  verification: {
    google: "sV8vnywKMvsQHBj00JhAhHUnDdKQFrlGQVQg_jNWE38"
  },
  other: {
    "linkedin:profile": "https://www.linkedin.com/in/monday-eluwa-ab2831256/"
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://eluwaprimeglobal.com/#organization",
      name: "Eluwa Prime Global",
      alternateName: ["Prime Global Consulting", "Eluwa Prime Global Ltd"],
      url: "https://eluwaprimeglobal.com",
      logo: "https://pdoqlgpnznvxatyklvfs.supabase.co/storage/v1/object/public/byu-pathway-career-chats/images/eluwa-prime-global-logo.jpeg",
      foundingDate: "2019",
      description:
        "Eluwa Prime Global is an AI-powered software development and IT consulting company founded by Eluwa Monday in 2019. We specialise in artificial intelligence integration, custom software development, customer support automation, digital strategy, and business process outsourcing.",
      email: "eluwamonday2017@gmail.com",
      founder: {
        "@type": "Person",
        name: "Eluwa Monday",
        alternateName: "Monday Eluwa",
        sameAs: [
          "https://www.linkedin.com/in/monday-eluwa-ab2831256/",
          "https://github.com/Eluwa101",
          "https://x.com/Eluwa101",
          "https://www.facebook.com/me/"
        ]
      },
      sameAs: [
        "https://www.linkedin.com/in/monday-eluwa-ab2831256/",
        "https://x.com/Eluwa101",
        "https://www.facebook.com/me/",
        "https://github.com/Eluwa101"
      ],
      areaServed: ["Nigeria", "Africa", "Worldwide"],
      knowsAbout: [
        "Artificial Intelligence",
        "Machine Learning",
        "Software Development",
        "IT Consulting",
        "Customer Support Automation",
        "Digital Transformation",
        "Business Process Outsourcing",
        "Web Development",
        "Mobile App Development",
        "Cloud Infrastructure",
        "SEO",
        "Digital Strategy"
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Technology & Consulting Services",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI-Powered Software Development" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "IT Consulting & Infrastructure Support" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Customer Support Automation" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Digital Strategy & SEO" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Business Process Outsourcing" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Web & Mobile App Development" } }
        ]
      }
    },
    {
      "@type": "Person",
      "@id": "https://eluwaprimeglobal.com/#eluwa-monday",
      name: "Eluwa Monday",
      alternateName: ["Monday Eluwa", "Eluwa101"],
      jobTitle: "Founder & Lead Consultant",
      worksFor: { "@id": "https://eluwaprimeglobal.com/#organization" },
      description:
        "Eluwa Monday is a software developer, AI consultant, customer support specialist, IT strategist, and founder of Eluwa Prime Global. He specialises in full-stack development, AI integration, customer experience design, customer service automation, management consulting, and digital strategy.",
      knowsAbout: [
        "Artificial Intelligence",
        "Software Engineering",
        "IT Consulting",
        "Digital Strategy",
        "Customer Support",
        "Customer Service Automation",
        "Customer Experience Design",
        "Customer Success Management",
        "Omnichannel Support Systems",
        "CRM Development",
        "Business Process Automation",
        "React",
        "Next.js",
        "Node.js",
        "TypeScript"
      ],
      sameAs: [
        "https://www.linkedin.com/in/monday-eluwa-ab2831256/",
        "https://github.com/Eluwa101",
        "https://x.com/Eluwa101",
        "https://www.facebook.com/me/"
      ]
    }
  ]
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${headingFont.variable} ${bodyFont.variable}`}>
        <Header />
        {children}
        <Footer />
        <BallGame />
      </body>
    </html>
  );
}
