import Link from "next/link";
import type { PortfolioProject } from "@/types/site";

type ProjectCardProps = {
  project: PortfolioProject;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className={`project-card ${project.featured ? "is-featured" : ""}`}>
      <div className="project-card__meta">
        <span>{project.language}</span>
        <span>{project.updatedAt}</span>
      </div>
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <div className="project-card__inspiration">
        <strong>Inspiration</strong>
        <p>{project.inspiration}</p>
      </div>
      <div className="project-card__footer">
        <span className={`project-card__source project-card__source--${project.source}`}>
          {project.source === "inferred" ? "Inspiration partly inferred" : "Based on GitHub details"}
        </span>
        <Link href={project.href} target="_blank" rel="noreferrer">
          View Repository
        </Link>
      </div>
    </article>
  );
}
