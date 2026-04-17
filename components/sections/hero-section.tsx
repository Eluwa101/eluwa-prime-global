import Image from "next/image";
import { imagery } from "@/data/site-content";
import { Reveal } from "@/components/ui/reveal";

export function HeroSection() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-section__backdrop" />
      <div className="container hero-section__grid">
        <Reveal className="hero-section__content">
          <span className="hero-section__eyebrow">AI · Software · IT Consulting · Customer Support</span>
          <h1>Your Global Partner in Software Excellence &amp; Digital Strategy.</h1>
          <p>
            Eluwa Prime Global builds AI-powered software, automates customer support, and delivers digital strategies that help ambitious organisations grow with confidence.
          </p>
          <div className="hero-section__actions">
            <a className="button button-primary" href="#contact">
              Consult Our Experts
            </a>
            <a className="button button-secondary" href="#services">
              Explore Services
            </a>
          </div>
        </Reveal>

        <Reveal className="hero-section__visual" delay={120}>
          <div className="hero-section__image-shell">
            <Image
              src={imagery.hero}
              alt="A diverse team collaborating in a modern digital workspace"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 46vw"
            />
          </div>
          <div className="hero-section__floating-card">
            <span>Founded 2019 · Nigeria &amp; Global</span>
            <strong>Engineering excellence built around client needs.</strong>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

