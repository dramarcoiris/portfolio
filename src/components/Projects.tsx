import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="page-container">
        <p className="mb-2 text-sm uppercase tracking-[0.3em] text-zinc-500">
          Proyectos
        </p>

        <h2 className="max-w-4xl text-4xl font-bold">
          Trabajos recientes y con mucho amor.
        </h2>

        <p className="mt-4 max-w-2xl text-zinc-600">
          Aplicaciones desarrolladas utilizando tecnologías frontend, backend y
          cloud, combinando diseño, experiencia de usuario y arquitectura web.
        </p>

        <div className="mt-12 grid gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
