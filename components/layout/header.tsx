"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navigationItems } from "@/data/site-content";
import { MobileNav } from "@/components/layout/mobile-nav";
import { BrandMark } from "@/components/ui/brand-mark";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const solidHeader = pathname !== "/" || scrolled;

  return (
    <>
      <header className={`site-header ${solidHeader ? "is-solid" : ""}`}>
        <div className="container site-header__inner">
          <Link className="site-header__brand" href="/" aria-label="Eluwa Prime Global home">
            <BrandMark compact />
          </Link>

          <nav className="site-header__nav" aria-label="Primary navigation">
            {navigationItems.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="site-header__actions">
            <Link className="button button-primary" href="/#contact">
              Get Started
            </Link>
            <button
              type="button"
              className={`menu-toggle ${menuOpen ? "is-open" : ""}`}
              aria-expanded={menuOpen}
              aria-label="Toggle navigation menu"
              onClick={() => setMenuOpen((current) => !current)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <MobileNav
        items={navigationItems}
        open={menuOpen}
        onNavigate={() => setMenuOpen(false)}
      />
    </>
  );
}
