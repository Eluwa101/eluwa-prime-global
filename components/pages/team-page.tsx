import Image from "next/image";
import Link from "next/link";
import { companyProfile, imagery, teamProfile } from "@/data/site-content";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function TeamPage() {
  return (
    <main className="page-shell">
      <section className="page-hero page-hero--team">
        <div className="container team-page__grid">
          <Reveal className="team-page__portrait-wrap">
            <div className="team-page__portrait">
              <Image
                src={teamProfile.photo}
                alt={`${teamProfile.name} official portrait`}
                fill
                sizes="(max-width: 900px) 100vw, 34vw"
              />
            </div>
          </Reveal>

          <Reveal className="team-page__content" delay={120}>
            <span className="section-heading__eyebrow">Team</span>
            <h1>{teamProfile.name}</h1>
            <p className="team-page__title">{teamProfile.title}</p>
            <p>{teamProfile.summary}</p>
            <div className="page-hero__actions">
              <Link className="button button-primary" href="/portfolio">
                View Portfolio
              </Link>
              <Link
                className="button button-secondary"
                href={teamProfile.githubUrl}
                target="_blank"
                rel="noreferrer"
              >
                GitHub Profile
              </Link>
            </div>
            <div className="team-quote-card">
              <span>Personal Note</span>
              <strong>{teamProfile.quote}</strong>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container team-details__grid">
          <Reveal>
            <SectionHeading
              eyebrow="Focus Areas"
              title="A practical blend of consulting, delivery, and digital growth work."
              description={companyProfile.mission}
            />
          </Reveal>

          <div className="team-focus-grid">
            {teamProfile.focusAreas.map((focus, index) => (
              <Reveal key={focus} delay={index * 90}>
                <article className="focus-card">
                  <h3>{focus}</h3>
                  <p>
                    This area reflects the kind of work Eluwa Prime Global is positioned to
                    support across technology strategy, execution, and digital presence.
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section team-building-section">
        <div className="container team-building-section__grid">
          <Reveal className="team-building-section__content">
            <SectionHeading
              eyebrow="Company Story"
              title="Built around integrity, effectiveness, and the confidence to keep growing."
              description={companyProfile.about}
            />
          </Reveal>

          <Reveal delay={120}>
            <div className="team-building-section__image">
              <Image
                src={imagery.building}
                alt="Eluwa Prime Global building"
                fill
                sizes="(max-width: 900px) 100vw, 42vw"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

