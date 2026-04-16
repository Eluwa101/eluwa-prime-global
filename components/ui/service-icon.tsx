import type { ServiceIcon as ServiceIconName } from "@/types/site";

type ServiceIconProps = {
  name: ServiceIconName;
};

export function ServiceIcon({ name }: ServiceIconProps) {
  const commonProps = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const
  };

  const iconMap = {
    code: (
      <svg {...commonProps}>
        <path d="M8 8 4 12l4 4" />
        <path d="m16 8 4 4-4 4" />
        <path d="m14 4-4 16" />
      </svg>
    ),
    globe: (
      <svg {...commonProps}>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18" />
        <path d="M12 3a15 15 0 0 1 0 18" />
        <path d="M12 3a15 15 0 0 0 0 18" />
      </svg>
    ),
    server: (
      <svg {...commonProps}>
        <rect x="4" y="5" width="16" height="6" rx="2" />
        <rect x="4" y="13" width="16" height="6" rx="2" />
        <path d="M8 8h.01" />
        <path d="M8 16h.01" />
        <path d="M12 8h5" />
        <path d="M12 16h5" />
      </svg>
    ),
    support: (
      <svg {...commonProps}>
        <path d="M12 18v3" />
        <path d="M8 21h8" />
        <path d="M18 8a6 6 0 1 0-12 0v4a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2Z" />
        <path d="M18 10h2" />
        <path d="M4 10H2" />
      </svg>
    ),
    seo: (
      <svg {...commonProps}>
        <circle cx="11" cy="11" r="6" />
        <path d="m20 20-4.35-4.35" />
        <path d="M11 8v3l2 2" />
      </svg>
    ),
    process: (
      <svg {...commonProps}>
        <path d="M6 6h12" />
        <path d="M6 12h8" />
        <path d="M6 18h12" />
        <circle cx="18" cy="12" r="2" />
        <circle cx="6" cy="6" r="2" />
        <circle cx="18" cy="18" r="2" />
      </svg>
    )
  };

  return <div className="service-icon">{iconMap[name]}</div>;
}

