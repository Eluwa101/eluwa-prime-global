import { stats } from "@/data/site-content";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { Reveal } from "@/components/ui/reveal";

export function StatsSection() {
  return (
    <section className="section stats-section" id="impact">
      <div className="container stats-section__inner">
        <Reveal className="stats-section__intro">
          <span className="section-heading__eyebrow">Impact</span>
          <h2>Measured outcomes for organizations that need dependable delivery.</h2>
        </Reveal>

        <div className="stats-grid">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 110}>
              <article className="stat-card">
                <strong>
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </strong>
                <span>{stat.label}</span>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

