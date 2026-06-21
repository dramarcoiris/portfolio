import { motion } from "framer-motion";
import { fadeUp } from "../../data/trajectoryAnimations";
import { SectionHeader } from "./Trajectory";
import { trajectoryContent } from "../../data/trajectory";

export default function ComplementaryTrainingSection() {
  const { complementaryTraining } = trajectoryContent;
  return (
    <>
      <SectionHeader
        eyebrow="Formación complementaria"
        title="Especialización y aprendizaje continuo"
        description="Cursos y programas orientados a reforzar la parte técnica, actualizar herramientas y seguir ampliando el perfil profesional."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {complementaryTraining.map((item) => (
          <motion.article
            key={item.id}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="surface-card p-8 border border-(--border)/40 bg-white/90 backdrop-blur-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-2xl font-bold tracking-tight text-(--foreground)">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-base font-medium text-(--accent-dark)">
                    {item.institution}
                  </p>

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

                {(item.year || item.duration) && (
                  <div className="hidden text-right text-(--muted) sm:block">
                    {item.year && <p>{item.year}</p>}
                    {item.duration && (
                      <p className="text-xs opacity-70">{item.duration}</p>
                    )}
                  </div>
                )}
              </div>

              {item.summary && (
                <p className="section-text mt-5 font-[350] text-(--foreground)/90">
                  {item.summary}
                </p>
              )}

              {item.highlights && item.highlights.length > 0 && (
                <ul className="mt-6 space-y-3">
                  {item.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex gap-3 text-base leading-relaxed text-(--muted) font-[350]"
                    >
                      <span className="mt-[0.6rem] h-1.5 w-1.5 shrink-0 rounded-full bg-(--accent)/50" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {item.technologies && item.technologies.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-2">
                {item.technologies.map((tech) => (
                  <span key={tech} className="chip text-(--muted)">
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </motion.article>
        ))}
      </div>
    </>
  );
}
