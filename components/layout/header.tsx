"use client";

import { useEffect, useState } from "react";
import { navigationItems } from "@/data/site-content";
import { MobileNav } from "@/components/layout/mobile-nav";
import { BrandMark } from "@/components/ui/brand-mark";

export function Header() {
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

  return (
    <>
      <header className={`site-header ${scrolled ? "is-solid" : ""}`}>
        <div className="container site-header__inner">
          <a className="site-header__brand" href="#home" aria-label="Eluwa Prime Global home">
            <BrandMark compact />
          </a>

          <nav className="site-header__nav" aria-label="Primary navigation">
            {navigationItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="site-header__actions">
            <a className="button button-primary" href="#contact">
              Get Started
            </a>
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

