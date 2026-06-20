import { useEffect, useState } from "react";
import { FaArrowDownLong } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function Hero() {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollIndicator(window.scrollY < 90);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-[linear-gradient(180deg,var(--hero-bg)_0%,var(--hero-bg)_58%,var(--background)_100%)]"
    >
      <div className="page-container relative z-10">
        <div className="mx-auto flex min-h-[100svh] max-w-4xl flex-col items-center text-center pt-28 pb-10 md:pt-32 md:pb-12">
          <div className="flex-1 min-h-10 md:min-h-16" />

          <motion.div
            className="flex flex-col items-center"
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.14 }}
          >
            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="text-5xl font-bold leading-none sm:text-6xl md:text-7xl lg:text-8xl"
            >
              ¡Hola! Soy Vicky
            </motion.h1>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="mt-6 max-w-2xl text-lg leading-relaxed text-(--muted) sm:text-xl"
            >
              Vengo del diseño gráfico y encontré en el desarrollo web la forma
              de construir las experiencias digitales que antes solo podía
              imaginar. Hoy combino desarrollo y diseño para crear
              <strong className="text-(--foreground)">
                {" "}
                experiencias digitales completas
              </strong>
              , funcionales y visualmente cuidadas.
            </motion.p>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="mt-10 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4"
            >
              <a href="#projects" className="btn-primary w-full sm:w-auto">
                Ver proyectos
              </a>

              <a href="#contact" className="btn-secondary w-full sm:w-auto">
                Contacto
              </a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="mt-10 flex max-w-xl flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[0.72rem] uppercase tracking-[0.2em] text-(--muted) sm:text-[0.78rem]"
            >
              <span>Full Stack</span>
              <span className="h-1 w-1 rounded-full bg-(--accent)" />
              <span>Diseño gráfico</span>
              <span className="h-1 w-1 rounded-full bg-(--accent)" />
              <span>Producto digital</span>
            </motion.div>
          </motion.div>

          <div className="mt-10 flex flex-1 items-end justify-center pb-2">
            <AnimatePresence>
              {showScrollIndicator && (
                <motion.a
                  href="#about"
                  className="hero-scroll-indicator hidden md:flex"
                  aria-label="Ir a la sección Sobre mí"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                >
                  <span className="hero-scroll-text">Conóceme</span>

                  <motion.span
                    className="hero-scroll-arrow"
                    animate={{ y: [0, 8, 0] }}
                    transition={{
                      duration: 1.8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <FaArrowDownLong />
                  </motion.span>
                </motion.a>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
