import type Project from "../types/Project";
import { Link } from "react-router-dom";

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  return (
    <article className="group cursor-pointer overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <Link to={`/projects/${project.slug}`}>
        <div className="aspect-video bg-zinc-100" />

        <div className="p-8">
          <p className="text-sm text-zinc-500">{project.role}</p>

          <h3 className="mt-2 text-2xl font-bold transition-colors group-hover:text-zinc-700">
            {project.title}
          </h3>
          <p className="mt-2 text-sm text-zinc-500">Ver detalles →</p>
          <p className="mt-4 text-zinc-600">{project.shortDescription}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="rounded-full border px-3 py-1 text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </Link>

      <div className="px-8 pb-8">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="text-sm text-zinc-500 transition-colors hover:text-zinc-900"
        >
          Repositorio GitHub
        </a>
      </div>
    </article>
  );
}
