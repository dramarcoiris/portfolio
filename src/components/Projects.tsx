import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { projects } from "../data/projects";
import type { ProjectCategory } from "../types/Project";
import ProjectCard from "./ProjectCard";

type Filter = "all" | ProjectCategory;

interface FilterButtonProps {
  children: React.ReactNode;
  active: boolean;
  onClick: () => void;
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const headerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const gridContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

function FilterButton({ children, active, onClick }: FilterButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
        active
          ? "border-(--accent) bg-(--accent) text-white"
          : "border-(--border) bg-(--surface) text-(--muted) hover:border-(--accent) hover:text-(--accent)"
      }`}
    >
      {children}
    </button>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState<Filter>("all");

  const filteredProjects = useMemo(() => {
    if (filter === "all") return projects;
    return projects.filter((project) => project.categories.includes(filter));
  }, [filter]);

  return (
    <section className="section section-anchor">
      <div className="page-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={headerContainer}
        >
          <motion.p variants={fadeUp} className="section-label">
            Proyectos
          </motion.p>

          <motion.h2 variants={fadeUp} className="section-title max-w-4xl">
            Trabajos recientes y con mucho amor
          </motion.h2>

          <motion.p variants={fadeUp} className="section-text mt-6 max-w-4xl">
            Aplicaciones desarrolladas utilizando tecnologías frontend, backend
            y cloud, combinando diseño, experiencia de usuario y arquitectura
            web.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-3">
            <FilterButton
              active={filter === "all"}
              onClick={() => setFilter("all")}
            >
              Todos
            </FilterButton>

            <FilterButton
              active={filter === "development"}
              onClick={() => setFilter("development")}
            >
              Desarrollo
            </FilterButton>

            <FilterButton
              active={filter === "design"}
              onClick={() => setFilter("design")}
            >
              Diseño
            </FilterButton>
          </motion.div>
        </motion.div>

        <motion.div
          key={filter}
          className="mt-12 grid gap-6 md:grid-cols-2"
          variants={gridContainer}
          initial="hidden"
          animate="visible"
        >
          {filteredProjects.map((project) => (
            <motion.div key={project.id} variants={fadeUp}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
