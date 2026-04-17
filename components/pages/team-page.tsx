import Image from "next/image";
import Link from "next/link";
import { companyProfile, imagery, socialLinks, teamMembers, teamProfile } from "@/data/site-content";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

export function TeamPage() {
  return (
    <main className="page-shell">
      {/* ── Eluwa Monday hero ──────────────────────────────────────── */}
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
            <span className="section-heading__eyebrow">Founder</span>
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
              <Link
                className="button button-secondary"
                href={socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                <LinkedInIcon />
                LinkedIn
              </Link>
            </div>
            <div className="team-quote-card">
              <span>Personal Note</span>
              <strong>{teamProfile.quote}</strong>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Focus areas ────────────────────────────────────────────── */}
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

      {/* ── Team members grid ──────────────────────────────────────── */}
      <section className="section team-members-section">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="Our Team"
              title="The people who make great work possible."
              description="Eluwa Prime Global is built on a team of specialists who bring depth, creativity, and engineering rigour to every engagement."
            />
          </Reveal>

          <div className="team-members-grid">
            {teamMembers.slice(1).map((member, index) => (
              <Reveal key={member.name} delay={index * 120}>
                <article className="team-member-card">
                  <div className="team-member-card__image">
                    <Image
                      src={member.photo}
                      alt={`${member.name} — ${member.role}`}
                      fill
                      sizes="(max-width: 900px) 100vw, 38vw"
                    />
                  </div>
                  <div className="team-member-card__body">
                    <span className="section-heading__eyebrow">{member.role}</span>
                    <h3>{member.name}</h3>
                    <p className="team-member-card__title">{member.title}</p>
                    <p>{member.summary}</p>
                    <ul className="team-member-card__skills">
                      {member.skills.map((skill) => (
                        <li key={skill}>{skill}</li>
                      ))}
                    </ul>
                    {(member.linkedinUrl || member.githubUrl) && (
                      <div className="team-member-card__links">
                        {member.linkedinUrl && (
                          <Link
                            href={member.linkedinUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="button button-secondary"
                          >
                            <LinkedInIcon />
                            LinkedIn
                          </Link>
                        )}
                        {member.githubUrl && (
                          <Link
                            href={member.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="button button-secondary"
                          >
                            <GitHubIcon />
                            GitHub
                          </Link>
                        )}
                      </div>
                    )}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Company story ──────────────────────────────────────────── */}
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
