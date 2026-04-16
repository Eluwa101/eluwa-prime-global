import { industries } from "@/data/site-content";

export function TrustBar() {
  const tickerItems = [...industries, ...industries];

  return (
    <section className="trust-bar" aria-label="Industries served">
      <div className="trust-bar__label">Industries Served</div>
      <div className="trust-bar__track">
        <div className="trust-bar__ticker">
          {tickerItems.map((industry, index) => (
            <span key={`${industry.label}-${index}`}>{industry.label}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

