import type Project from "../types/Project";
import { Link } from "react-router-dom";

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  const categoryLabel = project.categories
    .map((category) => (category === "development" ? "Desarrollo" : "Diseño"))
    .join(" · ");

  const hiddenTechnologies =
    project.technologies.length - project.featuredTechnologies.length;

  return (
    <article className="surface-card surface-card-hover group overflow-hidden">
      <Link to={`/projects/${project.slug}`} className="block h-full">
        <div
          className={`project-preview ${
            project.categories.includes("design")
              ? "project-preview--warm"
              : "project-preview--cool"
          }`}
        />

        <div className="p-8">
          <p className="text-base text-(--muted)">{categoryLabel}</p>

          <h3 className="mt-3 text-2xl font-bold text-(--foreground) transition-colors group-hover:text-(--accent)">
            {project.title}
          </h3>

          <p className="section-text mt-4">{project.shortDescription}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.featuredTechnologies.map((tech) => (
              <span key={tech} className="chip text-xs">
                {tech}
              </span>
            ))}

            {hiddenTechnologies > 0 && (
              <span className="chip text-xs text-(--muted)">
                +{hiddenTechnologies}
              </span>
            )}
          </div>

          <p className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-(--muted) transition-colors group-hover:text-(--accent)">
            Ver detalles
            <span aria-hidden="true">→</span>
          </p>
        </div>
      </Link>
    </article>
  );
}
