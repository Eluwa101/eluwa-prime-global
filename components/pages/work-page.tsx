import { imagery, services, workHighlights, workPhases } from "@/data/site-content";
import { PageHero } from "@/components/pages/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { ServiceIcon } from "@/components/ui/service-icon";

export function WorkPage() {
  return (
    <main className="page-shell">
      <PageHero
        eyebrow="Our Work"
        title="From business discovery to dependable delivery, this is how we support clients."
        description="The work page turns Eluwa Prime Global's service offer into a clearer operating model: how we diagnose problems, build solutions, and stay involved after launch."
        imageSrc={imagery.building}
        imageAlt="Eluwa Prime Global building exterior"
        primaryHref="/#contact"
        primaryLabel="Start a Conversation"
        secondaryHref="/portfolio"
        secondaryLabel="Browse Projects"
      />

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Delivery Model"
            title="A simple process built for clarity, speed, and support."
            description="We keep the work structured enough to create momentum while staying flexible enough to fit real business conditions."
            align="center"
          />

          <div className="work-phases">
            {workPhases.map((phase, index) => (
              <Reveal key={phase.title} delay={index * 90}>
                <article className="work-phase-card">
                  <span>{phase.title}</span>
                  <h3>{phase.description}</h3>
                  <p>{phase.outcome}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section work-highlights-section">
        <div className="container">
          <SectionHeading
            eyebrow="How We Help"
            title="Work that connects consulting, execution, and long-term business support."
            align="center"
          />

          <div className="work-highlights">
            {workHighlights.map((highlight, index) => (
              <Reveal key={highlight.title} delay={index * 90}>
                <article className="highlight-card">
                  <h3>{highlight.title}</h3>
                  <p>{highlight.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Capabilities"
            title="The same core services, now framed around how clients experience them."
            align="center"
          />

          <div className="services-grid">
            {services.map((service, index) => (
              <Reveal key={service.title} delay={index * 70}>
                <article className="service-card">
                  <ServiceIcon name={service.icon} />
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
