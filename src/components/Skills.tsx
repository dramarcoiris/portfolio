import { motion } from "framer-motion";
import { skills } from "../data/skills";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export default function Skills() {
  return (
    <section id="skills" className="section section-anchor">
      <div className="page-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.p variants={fadeUp} className="section-label">
            Tecnologías
          </motion.p>

          <motion.h2 variants={fadeUp} className="section-title max-w-4xl">
            Herramientas que utilizo para dar vida a las ideas.
          </motion.h2>

          <motion.p variants={fadeUp} className="section-text mt-6 max-w-3xl">
            Trabajo con tecnologías de frontend y backend, herramientas cloud y
            software de diseño que me permiten moverme entre desarrollo,
            identidad visual y producto digital.
          </motion.p>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {skills.map((group) => (
            <article
              key={group.category}
              className="surface-card surface-card-hover p-8"
            >
              <h3 className="mb-6 text-xl font-bold text-(--foreground)">
                {group.category}
              </h3>

              <div className="grid grid-cols-2 gap-x-6 gap-y-5">
                {group.technologies.map((tech) => {
                  const Icon = tech.icon;

                  return (
                    <div key={tech.name} className="flex items-center gap-3">
                      <Icon className="text-2xl text-(--accent)" />
                      <span className="font-medium text-(--foreground)">
                        {tech.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
