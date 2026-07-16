import { useState } from "react";
import { motion } from "framer-motion";
import { fadeUp } from "../../data/animations";
import { SectionHeader } from "./Trajectory";
import { trajectoryContent } from "../../data/trajectory";
import { FaChevronDown, FaFilePdf } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function ComplementaryTrainingSection() {
  const { complementaryTraining } = trajectoryContent;

  // Estado para controlar la expansión independiente de cada tarjeta
  const [expandedCards, setExpandedCards] = useState<
    Record<string | number, boolean>
  >({});

  const toggleCard = (id: string | number, hasHighlights: boolean) => {
    if (!hasHighlights) return;
    setExpandedCards((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <>
      <SectionHeader
        eyebrow="Formación complementaria"
        title="Especialización y aprendizaje continuo"
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-2 items-start">
        {complementaryTraining.map((item) => {
          const hasHighlights = !!(
            item.highlights && item.highlights.length > 0
          );
          const isExpanded = hasHighlights && !!expandedCards[item.id];

          return (
            <motion.article
              key={item.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              transition={{ duration: 0.6, ease: "easeOut" }}
              onClick={() => toggleCard(item.id, hasHighlights)}
              className={`surface-card p-8 border border-(--border)/40 bg-white/90 backdrop-blur-sm flex flex-col justify-between transition-colors duration-200 ${
                hasHighlights
                  ? "cursor-pointer hover:border-(--border)"
                  : "cursor-default"
              }`}
            >
              <div>
                {/* Cabecera unificada con flexbox */}
                <div className="flex flex-row items-start justify-between gap-4">
                  {/* Bloque de texto de la cabecera */}
                  <div className="min-w-0 flex-1">
                    <h3 className="text-2xl font-bold tracking-tight text-(--foreground) wrap-break-word">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-base font-medium text-(--accent-dark)">
                      {item.institution}
                    </p>

                    {/* Fecha y duración en móvil (debajo del título e institución) */}
                    {(item.year || item.duration) && (
                      <div className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-(--muted) sm:hidden">
                        {item.year && <span>{item.year}</span>}
                        {item.year && item.duration && (
                          <span className="text-(--border)">·</span>
                        )}
                        {item.duration && <span>{item.duration}</span>}
                      </div>
                    )}
                  </div>

                  {/* Bloque de metadatos (Año + Duración) y Flecha siempre alineados a la derecha */}
                  <div className="flex shrink-0 items-center gap-4 pt-1">
                    {(item.year || item.duration) && (
                      <div className="hidden text-right text-(--muted) sm:block">
                        {item.year && (
                          <p className="text-sm font-medium">{item.year}</p>
                        )}
                        {item.duration && (
                          <p className="text-xs opacity-70 mt-0.5">
                            {item.duration}
                          </p>
                        )}
                      </div>
                    )}

                    {/* Flecha de expansión */}
                    {hasHighlights && (
                      <FaChevronDown
                        className={`text-sm text-(--muted) shrink-0 transition-transform duration-200 ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </div>
                </div>

                {item.summary && (
                  <p className="section-text mt-5 font-[350] text-(--foreground)/90">
                    {item.summary.includes("{link:Entre Recuerdos}") ? (
                      <>
                        {item.summary.split("{link:Entre Recuerdos}")[0]}
                        <Link
                          to="/proyectos/entre-recuerdos"
                          onClick={(e) => {
                            e.stopPropagation();
                          }}
                          className="font-semibold text-(--accent) hover:text-(--accent-dark) underline decoration-1 underline-offset-4 transition-colors"
                        >
                          Entre Recuerdos
                        </Link>
                        {item.summary.split("{link:Entre Recuerdos}")[1]}
                      </>
                    ) : (
                      item.summary
                    )}
                  </p>
                )}

                {/* Lista de logros */}
                {isExpanded && hasHighlights && (
                  <ul className="mt-6 space-y-3">
                    {item.highlights?.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex gap-3 text-base leading-relaxed text-(--muted)"
                      >
                        <span className="mt-[0.6rem] h-1.5 w-1.5 shrink-0 rounded-full bg-(--accent)/50" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Tecnologías y PDF */}
              <div className="mt-6 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                {item.technologies && item.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((tech) => (
                      <span key={tech} className="chip text-(--muted)">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                {/* Icono de PDF */}
                {item.downloadUrl && (
                  <div className="flex justify-end ml-auto sm:self-end">
                    <a
                      href={item.downloadUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-2xl text-(--accent) hover:text-(--accent-dark) transition-colors focus:outline-none flex items-center justify-center"
                      title="Ver documento PDF"
                    >
                      <FaFilePdf />
                    </a>
                  </div>
                )}
              </div>
            </motion.article>
          );
        })}
      </div>
    </>
  );
}
