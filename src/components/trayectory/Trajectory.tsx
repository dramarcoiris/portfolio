import { motion } from "framer-motion";
import ExperienceSection from "./ExperienceSection";
import { fadeUp, sectionContainer } from "../../data/animations";
import EducationSection from "./EducationSection";
import ComplementaryTrainingSection from "./ComplementaryTrainingSection";
import CertificationSection from "./CertificationSection";
import AdditionalInfosection from "./AdditionalInfoSection";

export function SectionHeader({
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
      variants={sectionContainer}
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
        <motion.p variants={fadeUp} className="section-text mt-6 max-w-3xl">
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}

export default function Trajectory() {
  return (
    <section id="trajectory" className="section section-anchor bg-transparent">
      {/* 2. CONTENIDO PRINCIPAL */}
      <div className="page-container">
        <ExperienceSection />

        {/* FORMACIÓN */}
        <section className="mt-20 lg:mt-28">
          <EducationSection />
        </section>

        {/* FORMACIÓN COMPLEMENTARIA */}
        <section className="mt-20 lg:mt-28">
          <ComplementaryTrainingSection />
        </section>

        {/* CERTIFICACIONES + INFO ADICIONAL */}
        <section className="mt-6 lg:mt-6">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <CertificationSection />
            <AdditionalInfosection />
          </div>
        </section>
      </div>
    </section>
  );
}
