import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "./Trajectory";
import { fadeUp } from "../../data/animations";
import { trajectoryContent } from "../../data/trajectory";
import { FaChevronDown } from "react-icons/fa6";

export default function ExperienceSection() {
  const { experience } = trajectoryContent;
  const [expandedCards, setExpandedCards] = useState<Record<number, boolean>>(
    {},
  );

  const toggleCard = (index: number) => {
    setExpandedCards((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <section>
      <SectionHeader
        eyebrow="Experiencia"
        title="Diseño y desarrollo como una misma conversación."
        description="He trabajado en proyectos donde la identidad visual, la experiencia de usuario y la implementación conviven desde el principio."
      />

      <div className="mt-16 space-y-12">
        {experience.map((item, index) => {
          const isExpanded = !!expandedCards[index];

          return (
            <motion.article
              key={item.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="grid gap-6 md:grid-cols-[165px_1fr]"
            >
              {/* Fecha solo en desktop */}
              <div className="hidden pt-1.5 md:block md:whitespace-nowrap">
                <p className="text-sm font-medium text-(--muted)/80">
                  {item.startDate} — {item.endDate}
                </p>
              </div>

              <div className="relative pl-8 md:pl-8">
                {/* Fecha dentro del contenido en mobile */}
                <div className="mb-4 md:hidden">
                  <p className="text-sm font-medium text-(--muted)/80">
                    {item.startDate} — {item.endDate}
                  </p>
                </div>

                {index !== experience.length - 1 && (
                  <div className="absolute left-1.25 top-5 h-[calc(100%+3rem)] w-px bg-(--border)" />
                )}

                <div className="absolute left-0 top-2.5 h-2.5 w-2.5 rounded-full bg-(--accent-warm) ring-5 ring-(--accent-warm-soft)" />

                {/* Tarjeta interactiva */}
                <div
                  onClick={() => toggleCard(index)}
                  className="surface-card flex flex-col justify-between border border-(--border)/40 bg-white/90 p-8 backdrop-blur-sm cursor-pointer hover:border-(--border) transition-colors duration-200"
                >
                  {/* Cabecera */}
                  <div className="flex flex-row items-start justify-between gap-4">
                    <div className="min-w-0 flex-1">
                      <p className="text-sm uppercase tracking-[0.16em] text-(--muted)">
                        {item.company}
                        {item.location ? ` · ${item.location}` : ""}
                      </p>

                      <h3 className="mt-2 text-2xl font-bold tracking-tight text-(--foreground) wrap-break-word">
                        {item.role}
                      </h3>
                    </div>

                    {/* Chip + Flecha */}
                    <div className="flex shrink-0 items-center gap-3 pt-1">
                      {item.employmentType && (
                        <span className="chip text-xs font-medium tracking-wide text-(--accent-dark)">
                          {item.employmentType}
                        </span>
                      )}
                      <FaChevronDown
                        className={`text-sm text-(--muted) shrink-0 transition-transform duration-200 ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                  </div>

                  <p className="section-text mt-5 font-[350] text-(--foreground)/90">
                    {item.summary}
                  </p>

                  {/* Renderizado condicional de detalles */}
                  {isExpanded && (
                    <>
                      {item.highlights && item.highlights.length > 0 && (
                        <ul className="mt-3 space-y-3 pt-3">
                          {item.highlights.map((highlight) => (
                            <li
                              key={highlight}
                              className="flex gap-3 font-[350] leading-relaxed text-(--muted)"
                            >
                              <span className="mt-[0.6rem] h-1.5 w-1.5 shrink-0 rounded-full bg-(--accent)/50" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {item.technologies && item.technologies.length > 0 && (
                        <div className="mt-6 flex flex-wrap gap-2">
                          {item.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="chip text-sm text-(--muted)"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
