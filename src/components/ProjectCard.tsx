import type Project from "../types/Project";

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  const isDesign = project.categories.includes("design");
  const isDevelopment = project.categories.includes("development");

  const labelColorClass =
    isDesign && !isDevelopment ? "text-(--accent-warm)" : "text-(--muted)";

  const categoryLabel = project.categories
    .map((category) => (category === "development" ? "Desarrollo" : "Diseño"))
    .join(" · ");

  const hiddenTechnologies =
    project.technologies.length - project.featuredTechnologies.length;

  const coverImage =
    project.images?.find((image) => image.kind === "cover") ??
    project.images?.[0];

  return (
    <article className="surface-card overflow-hidden">
      <div className="block h-full">
        {coverImage && (
          <div className="project-preview overflow-hidden">
            <img
              src={coverImage.src}
              alt={coverImage.alt}
              className="h-full w-full object-cover"
            />
          </div>
        )}

        <div className="p-8">
          {/* Párrafo */}
          <p className={`text-base ${labelColorClass}`}>{categoryLabel}</p>

          {/* Título */}
          <h3 className="mt-3 text-2xl font-bold text-(--foreground)">
            {project.title}
          </h3>

          {/* Descripción */}
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
        </div>
      </div>
    </article>
  );
}
