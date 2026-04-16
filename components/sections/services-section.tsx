import { services } from "@/data/site-content";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { ServiceIcon } from "@/components/ui/service-icon";

export function ServicesSection() {
  return (
    <section className="section services-section" id="services">
      <div className="container">
        <SectionHeading
          eyebrow="Core Services"
          title="A full spectrum of software, infrastructure, and digital growth support."
          description="Each engagement is designed to improve performance, reduce friction, and help your business move with confidence."
          align="center"
        />

        <div className="services-grid">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 90}>
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
  );
}

