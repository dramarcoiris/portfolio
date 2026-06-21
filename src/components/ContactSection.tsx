import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const sectionContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export default function Contact() {
  return (
    <section id="contact" className="section section-anchor">
      <div className="page-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionContainer}
        >
          <motion.p variants={fadeUp} className="section-label">
            Hablemos
          </motion.p>

          <motion.h2 variants={fadeUp} className="section-title">
            Gracias por llegar hasta aquí
          </motion.h2>

          <motion.p variants={fadeUp} className="section-text mt-6 max-w-4xl">
            Si te interesa mi perfil o quieres saber más sobre mi trabajo,
            estaré encantada de hablar contigo.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-12 border-t border-(--border) pt-8"
          >
            <a
              href="mailto:contact.soyvicky@gmail.com"
              className="inline-block text-xl font-medium text-(--foreground) transition-colors hover:text-(--accent-warm) md:text-3xl"
            >
              contact.soyvicky@gmail.com
            </a>

            <div className="mt-6 flex flex-wrap items-center gap-6">
              <a
                href="https://www.linkedin.com/in/victoria-cb"
                target="_blank"
                rel="noreferrer"
                className="text-(--muted) transition-colors hover:text-(--accent)"
              >
                LinkedIn ↗
              </a>

              <span className="text-(--border)">/</span>

              <a
                href="https://github.com/dramarcoiris"
                target="_blank"
                rel="noreferrer"
                className="text-(--muted) transition-colors hover:text-(--accent)"
              >
                GitHub ↗
              </a>

              <span className="text-(--border)">/</span>

              <a
                href="https://drive.google.com/file/d/19dp5Ta3qZX6JdjpHq8BOUZB5fw992-n7/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="text-(--muted) transition-colors hover:text-(--accent)"
              >
                Curriculum ↗
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
