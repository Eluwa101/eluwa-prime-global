import type { NavItem } from "@/types/site";

type MobileNavProps = {
  items: NavItem[];
  open: boolean;
  onNavigate: () => void;
};

export function MobileNav({ items, open, onNavigate }: MobileNavProps) {
  return (
    <div className={`mobile-nav ${open ? "is-open" : ""}`}>
      <nav aria-label="Mobile navigation">
        {items.map((item) => (
          <a key={item.href} href={item.href} onClick={onNavigate}>
            {item.label}
          </a>
        ))}
        <a className="button button-primary" href="#contact" onClick={onNavigate}>
          Get Started
        </a>
      </nav>
    </div>
  );
}

