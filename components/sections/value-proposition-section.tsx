import Image from "next/image";
import { companyProfile, imagery, valueBenefits } from "@/data/site-content";
import { ParallaxPanel } from "@/components/ui/parallax-panel";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function ValuePropositionSection() {
  return (
    <section className="section value-section" id="about">
      <div className="container value-section__grid">
        <Reveal>
          <ParallaxPanel className="value-section__image-wrap">
            <Image
              src={imagery.value}
              alt="Consultants working through digital strategy and delivery planning"
              fill
              sizes="(max-width: 900px) 100vw, 48vw"
            />
          </ParallaxPanel>
        </Reveal>

        <Reveal className="value-section__content" delay={120}>
          <SectionHeading
            eyebrow="The Missing Piece"
            title="Technology strategy that fills the gap between vision and execution."
            description={companyProfile.about}
          />

          <div className="value-section__benefits">
            {valueBenefits.map((benefit) => (
              <article key={benefit.title} className="benefit-card">
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

