import Link from "next/link";
import { companyProfile, navigationItems, services } from "@/data/site-content";
import { BrandMark } from "@/components/ui/brand-mark";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div className="site-footer__about">
          <BrandMark />
          <p>{companyProfile.about}</p>
        </div>

        <div>
          <h3>Quick Links</h3>
          <div className="site-footer__links">
            {navigationItems.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3>Core Services</h3>
          <div className="site-footer__links">
            {services.map((service) => (
              <span key={service.title}>{service.title}</span>
            ))}
          </div>
        </div>

        <div>
          <h3>Hours of Operation</h3>
          <p>{companyProfile.hours}</p>
          <h3>Mission</h3>
          <p>{companyProfile.mission}</p>
        </div>
      </div>
    </footer>
  );
}
