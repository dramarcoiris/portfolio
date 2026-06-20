import { motion } from "framer-motion";
import { trajectoryContent } from "../data/trajectory";

// Tus variants nativas e intactas
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.p
        variants={fadeUp}
        className="section-label tracking-[0.2em] text-(--accent-warm)"
      >
        {eyebrow}
      </motion.p>

      <motion.h2 variants={fadeUp} className="section-title max-w-4xl">
        {title}
      </motion.h2>

      {description && (
        <motion.p
          variants={fadeUp}
          className="section-text mt-6 max-w-3xl font-[350]"
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}

export default function Trajectory() {
  const {
    experience,
    education,
    complementaryTraining,
    certifications,
    additionalInfo,
  } = trajectoryContent;

  return (
    <section id="trajectory" className="section section-anchor bg-transparent">
      {/* EXPERIENCIA */}
      <div className="relative pt-15 pb-5 overflow-hidden bg-transparent">
        <div className="page-container relative z-10">
          <div className="max-w-4xl">
            <SectionHeader
              eyebrow="Experiencia"
              title="Recorrido profesional"
              description="Comencé como diseñadora y he ido evolucionando hacia el desarrollo web, manteniendo siempre una mirada visual y orientada a producto."
            />
          </div>
        </div>
      </div>

      {/* 2. CONTENIDO PRINCIPAL */}
      <div className="page-container pb-24">
        {/* LISTADO DE EXPERIENCIA */}
        <div className="mt-16 space-y-12">
          {experience.map((item, index) => (
            <motion.article
              key={item.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="grid gap-6 md:grid-cols-[165px_1fr]"
            >
              <div className="pt-1.5 whitespace-nowrap">
                <p className="text-sm font-medium text-(--muted)/80">
                  {item.startDate} — {item.endDate}
                </p>
              </div>

              <div className="relative pl-8">
                {index !== experience.length - 1 && (
                  <div className="absolute left-1.25 top-5 h-[calc(100%+3rem)] w-px bg-(--border)/60" />
                )}

                <div className="absolute left-0 top-2.5 h-2.5 w-2.5 rounded-full bg-(--accent-warm) ring-4 ring-(--accent-warm-soft)" />

                <div className="surface-card p-8 border border-(--border)/40 bg-white/90 backdrop-blur-sm flex flex-col justify-between">
                  <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                    <div>
                      <p className="text-sm uppercase tracking-[0.16em] text-(--muted)">
                        {item.company}
                        {item.location ? ` · ${item.location}` : ""}
                      </p>

                      <h3 className="mt-2 text-2xl font-bold text-(--foreground) tracking-tight">
                        {item.role}
                      </h3>
                    </div>

                    {item.employmentType && (
                      <span className="chip self-start text-xs font-medium tracking-wide text-(--accent-dark)">
                        {item.employmentType}
                      </span>
                    )}
                  </div>

                  <p className="section-text mt-5 font-[350] text-(--foreground)/90">
                    {item.summary}
                  </p>

                  {item.highlights && item.highlights.length > 0 && (
                    <ul className="mt-6 space-y-3">
                      {item.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex gap-3 leading-relaxed text-(--muted) font-[350]"
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
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* FORMACIÓN */}
        <div className="mt-28">
          <SectionHeader
            eyebrow="Formación"
            title="Base académica"
            description="Una formación construida desde dos disciplinas complementarias."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {education.map((item) => (
              <motion.article
                key={item.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="surface-card p-8 border border-(--border)/40 bg-white/90 backdrop-blur-sm"
              >
                <p className="text-sm uppercase tracking-[0.16em] text-(--muted)">
                  {item.startDate} — {item.endDate}
                </p>

                <h3 className="mt-3 text-2xl font-bold text-(--foreground) tracking-tight">
                  {item.title}
                </h3>

                <p className="mt-2 text-base font-medium text-(--accent-dark)">
                  {item.institution}
                </p>

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
              </motion.article>
            ))}
          </div>
        </div>

        {/* FORMACIÓN COMPLEMENTARIA */}
        <div className="mt-28">
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
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="text-2xl font-bold text-(--foreground) tracking-tight">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-base font-medium text-(--accent-dark)">
                        {item.institution}
                      </p>
                    </div>

                    <div className="text-right text-(--muted) px-2 py-0.5 rounded-sm">
                      {item.year && <p>{item.year}</p>}
                      {item.duration && (
                        <p className="text-xs opacity-70">{item.duration}</p>
                      )}
                    </div>
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
        </div>

        {/* CERTIFICACIONES + INFO ADICIONAL */}
        <div className="mt-28 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="surface-card p-8 border border-(--border)/40 bg-white/90 backdrop-blur-sm"
          >
            <p className="section-label tracking-[0.2em] text-(--accent) font-medium mb-6">
              Certificaciones
            </p>

            <div className="mt-6 space-y-6">
              {certifications.map((item) => (
                <div key={item.id}>
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="text-xl font-bold text-(--foreground) tracking-tight">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-base text-(--muted)">
                        {item.issuer}
                      </p>
                    </div>

                    {item.year && (
                      <span className="text-right text-(--muted) px-2 py-0.5 rounded-sm">
                        {item.year}
                      </span>
                    )}
                  </div>

                  {item.summary && (
                    <p className="section-text mt-4 font-[350]">
                      {item.summary}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.08 }}
            className="surface-card p-8 border border-(--border)/40 bg-white/90 backdrop-blur-sm"
          >
            <p className="section-label tracking-[0.2em] text-(--accent) font-medium mb-6">
              Información adicional
            </p>

            <div className="mt-6 space-y-5">
              {additionalInfo.map((item) => (
                <div
                  key={item.id}
                  className="border-b border-(--border)/30 last:border-0 pb-4 last:pb-0"
                >
                  <p className="text-sm uppercase tracking-[0.16em] text-(--muted)">
                    {item.label}
                  </p>
                  <p className="mt-2 text-lg font-medium text-(--foreground)">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
