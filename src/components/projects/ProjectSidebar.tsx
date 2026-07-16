import { FiGithub } from "react-icons/fi";
import type Project from "../../types/Project";

interface ProjectSidebarProps {
  project: Project;
}

export default function ProjectSidebar({ project }: ProjectSidebarProps) {
  const getProjectLabel = () => {
    if (!project.context) return "Ámbito";

    switch (project.context) {
      case "bootcamp":
        return "Bootcamp";
      case "academic":
        return "Formación Académica";
      case "personal":
        return "Proyecto Personal";
      case "internship":
        return "Prácticas";
      case "work":
        return "Proyecto Profesional";
      default:
        return "Ámbito";
    }
  };

  return (
    <div className="space-y-8 p-6 md:p-8 rounded-2xl border border-(--accent-warm)/10 bg-white/60 backdrop-blur-md shadow-xs">
      {/* Rol / Enfoque */}
      <div>
        <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-(--accent) mb-2">
          Enfoque del Proyecto
        </h3>
        <p className="leading-relaxed text-(--foreground) font-medium text-base">
          {project.role}
        </p>
      </div>

      {/* Institución */}
      {project.institution && (
        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-(--accent) mb-2">
            {getProjectLabel()}
          </h3>
          <p className="leading-relaxed text-(--muted) font-light">
            {project.institution}
          </p>
        </div>
      )}

      {/* GitHub */}
      {project.github && (
        <div>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full flex items-center justify-center gap-2 py-3 px-4 text-sm font-medium cursor-pointer transition-all hover:scale-[1.02]"
          >
            <span>Repositorio GitHub</span>
            <FiGithub className="text-base" />
          </a>
        </div>
      )}

      {/* Tecnologías */}
      <div>
        <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-(--accent) mb-3">
          Tecnologías & Herramientas
        </h3>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span key={tech} className="chip text-sm py-1 px-3">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
