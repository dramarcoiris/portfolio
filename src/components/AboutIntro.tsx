import { motion, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export default function AboutIntro() {
  return (
    <section className="relative pt-24 md:pt-28 max-w-vh overflow-hidden bg-transparent">
      <div className="page-container relative z-10 ">
        <motion.div
          className="grid gap-12 md:grid-cols-[1.25fr_0.75fr] md:items-start lg:gap-16 mt-6 md:mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainer}
        >
          {/* Columna Izquierda */}
          <div className="space-y-8">
            <motion.div variants={fadeUp}>
              <span className="text-sm uppercase tracking-[0.2em] text-(--accent-warm) font-medium block mb-3">
                Hola, ¿qué tal? Soy Vicky.
              </span>
              <h1 className="text-4xl font-bold tracking-tight text-(--foreground) sm:text-5xl leading-[1.15]">
                Me encanta juntar la{" "}
                <span className="text-(--accent-warm)">
                  sensibilidad del diseño
                </span>{" "}
                con la{" "}
                <span className="text-(--accent-dark)">lógica del código</span>.
              </h1>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="space-y-5 text-base md:text-lg text-(--foreground)/85 font-[350] leading-relaxed max-w-3xl"
            >
              <p>
                Tengo un ordenador entre las manos desde que tengo memoria. Mi
                camino en el mundo digital empezó trasteando de niña con el
                Paint y de forma natural, esa pantalla se convirtió en mi
                profesión. Durante años me dediqué al diseño gráfico, analizando
                formas, tipografías y colores hasta la obsesión.
              </p>
              <p>
                Sin embargo, el lienzo estático se me quedaba corto, mi
                inquietud por el diseño web empezó a gestarse desde mis años en
                la carrera. De ahí a querer saber qué pasaba "detrás" de la
                pantalla hubo solo un paso. Me picó la curiosidad por entender
                cómo se sostenían los datos, cómo funcionaba la tecnología por
                dentro y cómo hacer que una idea funcionara de verdad a nivel
                técnico.
              </p>
              <p>
                No he cambiado de bando, aunque sé que es extraño este enfoque.
                Disfruto mucho uniendo ambos mundos: mimando el frontend y
                construyendo un backend limpio y funcional. Ahora más que nunca,
                tengo dos lobos dentro de mí.
              </p>
            </motion.div>
          </div>

          {/* Columna Derecha */}
          <motion.div
            variants={fadeUp}
            className="p-6 md:p-8 space-y-8 rounded-2xl border border-(--accent-warm)/10 bg-white/60 backdrop-blur-md shadow-xs md:mt-8"
          >
            <div className="space-y-2">
              <h3 className="text-xs uppercase tracking-[0.16em] text-(--accent)">
                Mi Enfoque
              </h3>
              <p className="leading-relaxed text-(--muted) font-[350]">
                Hacer que las cosas funcionen impecables por dentro y se sientan
                naturales por fuera. Busco el equilibrio perfecto entre un
                backend sólido y ordenado u una interfaz intuitiva, accesible y
                mimada.
              </p>
            </div>

            <hr className="border-(--border)/40" />

            {/* Cita */}
            <div className="text-sm leading-relaxed text-(--muted) italic font-[350]">
              "Al final, detrás de cada pantalla siempre hay una persona. Mi
              meta es que la tecnología no solo resuelva problemas lógicos, sino
              que se sienta cercana y un poquito más humana."
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
