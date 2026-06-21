import { motion } from "framer-motion";
import { trajectoryContent } from "../../data/trajectory";
import { fadeUp } from "../../data/trajectoryAnimations";
import { SectionHeader } from "./Trajectory";

export default function EducationSection() {
  const { education } = trajectoryContent;
  return (
    <>
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
    </>
  );
}
