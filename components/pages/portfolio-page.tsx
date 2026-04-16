import { imagery, portfolioProjects } from "@/data/site-content";
import { PageHero } from "@/components/pages/page-hero";
import { ProjectCard } from "@/components/pages/project-card";
import { Reveal } from "@/components/ui/reveal";

export function PortfolioPage() {
  return (
    <main className="page-shell">
      <PageHero
        eyebrow="Portfolio"
        title="A growing body of coursework, product experiments, and real-world digital builds."
        description="This portfolio page pulls together the public project trail behind Eluwa Prime Global and Eluwa Monday's GitHub profile, from backend APIs to web experiences and student-focused tools."
        imageSrc={imagery.building}
        imageAlt="Eluwa Prime Global building"
        primaryHref="/work"
        primaryLabel="See How We Work"
        secondaryHref="/team"
        secondaryLabel="Meet the Team"
        note="Project inspiration notes combine public GitHub descriptions, README details, and careful inference when a repository does not document intent directly."
      />

      <section className="section portfolio-section">
        <div className="container">
          <div className="portfolio-section__intro">
            <span className="section-heading__eyebrow">12 Public Repositories</span>
            <h2>Selected projects organized into a cleaner showcase.</h2>
          </div>

          <div className="portfolio-grid">
            {portfolioProjects.map((project, index) => (
              <Reveal key={project.name} delay={index * 60}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

