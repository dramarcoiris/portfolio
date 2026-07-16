import { motion } from "framer-motion";
import { trajectoryContent } from "../../data/trajectory";
import { fadeUp } from "../../data/animations";
import { SectionHeader } from "./Trajectory";
import { FaFilePdf } from "react-icons/fa6";

export default function EducationSection() {
  const { education } = trajectoryContent;

  return (
    <>
      <SectionHeader eyebrow="Formación" title="Base académica" />

      <div className="mt-12 grid gap-6 lg:grid-cols-2 items-start">
        {education.map((item) => {
          return (
            <motion.article
              key={item.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="surface-card p-8 border border-(--border)/40 bg-white/90 backdrop-blur-sm transition-colors duration-200 flex flex-col justify-between min-h-70"
            >
              <div>
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
              </div>

              {/* Pie de la tarjeta */}
              <div className="mt-6 flex items-center justify-end">
                {item.downloadUrl && (
                  <a
                    href={item.downloadUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl text-(--accent) hover:text-(--accent-dark) transition-colors focus:outline-none flex items-center justify-center"
                    title="Ver documento PDF"
                  >
                    <FaFilePdf />
                  </a>
                )}
              </div>
            </motion.article>
          );
        })}
      </div>
    </>
  );
}
