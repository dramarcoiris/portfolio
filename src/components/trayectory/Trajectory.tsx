import { motion } from "framer-motion";
import ExperienceSection from "./ExperienceSection";
import { fadeUp, stagger } from "../../data/trajectoryAnimations";
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
        <div className="mt-28">
          <EducationSection />
        </div>

        {/* FORMACIÓN COMPLEMENTARIA */}
        <div className="mt-28">
          <ComplementaryTrainingSection />
        </div>

        {/* CERTIFICACIONES + INFO ADICIONAL */}
        <div className="mt-28 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <CertificationSection />
          <AdditionalInfosection />
        </div>
      </div>
    </section>
  );
}
