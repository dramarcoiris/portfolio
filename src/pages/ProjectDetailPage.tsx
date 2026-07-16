import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { projects } from "../data/projects";
import { fadeUpVariants, sectionContainer } from "../data/animations";
import ContactSection from "../components/ContactSection";
import Projects from "../components/Projects";
import ProjectSidebar from "../components/projects/ProjectSidebar";
import ProjectHeader from "../components/projects/ProjectHeader";
import ProjectContent from "../components/projects/ProjectContent";
import ProjectGallery from "../components/projects/ProjectGallery";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-(--background) px-6">
        <h2 className="text-2xl font-bold text-(--foreground) font-display mb-4">
          Proyecto no encontrado
        </h2>
        <Link to="/" className="btn-primary">
          Volver al inicio
        </Link>
      </div>
    );
  }

  return (
    <>
      {/* prop para obligar a React y Framer Motion a renderizar el componente desde cero */}
      <section
        key={slug}
        className="relative pt-24 md:pt-28 pb-10 max-w-vh bg-transparent"
      >
        <div className="page-container relative z-10">
          <ProjectHeader project={project} />

          <motion.div
            className="grid gap-12 md:grid-cols-[1.25fr_0.75fr] items-start lg:gap-16 mt-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={sectionContainer}
          >
            {/* Columna Izquierda */}
            <div className="space-y-12">
              <ProjectContent
                description={project.description}
                sections={project.sections}
              />
              <ProjectGallery images={project.images} />
            </div>

            {/* Columna Derecha */}
            <motion.aside
              variants={fadeUpVariants}
              className="sticky md:top-28"
            >
              <ProjectSidebar project={project} />
            </motion.aside>
          </motion.div>
        </div>
      </section>

      <Projects />
      <ContactSection />
    </>
  );
}
