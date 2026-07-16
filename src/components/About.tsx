import profileImage from "../assets/images/profile.jpg";
import { FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { fadeLeft, fadeRight, sectionContainer } from "../data/animations";

export default function About() {
  return (
    <section id="presentacion" className="section section-anchor">
      <motion.div
        className="page-container grid gap-12 md:grid-cols-2 md:items-center lg:gap-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={sectionContainer}
      >
        <motion.div
          variants={fadeLeft}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-[320px] sm:max-w-95 md:max-w-md"
        >
          <div className="absolute -left-6 top-10 h-[84%] w-[84%] rounded-[58%_42%_55%_45%/44%_53%_47%_56%] bg-(--accent-warm-soft) sm:-left-8" />

          <div className="about-image-frame relative overflow-hidden rounded-[42%_58%_38%_62%/36%_30%_70%_64%] border border-(--border) bg-(--surface)">
            <img
              src={profileImage}
              alt="Victoria Cejas"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6">
            <span className="chip inline-flex items-center gap-2 shadow-sm">
              <FaMapMarkerAlt className="text-sm text-(--accent)" />
              Málaga, España
            </span>
          </div>
        </motion.div>

        <motion.div
          variants={fadeRight}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="section-label">Me presento</p>

          <h2 className="section-title max-w-xl">
            Del diseño al desarrollo, sin perder la curiosidad
          </h2>

          <div className="mt-6 space-y-4">
            <p className="section-text">
              Mi interés por la tecnología comenzó desde el lado creativo,
              trabajando en diseño gráfico y comunicación visual. Con el tiempo
              descubrí que quería participar también en la construcción de los
              productos digitales, lo que me llevó a especializarme en
              desarrollo web.
            </p>

            <p className="section-text">
              Actualmente disfruto creando aplicaciones que combinan
              funcionalidad, experiencia de usuario y una base técnica sólida.
              Me gusta entender cómo funcionan las cosas, aprender nuevas
              herramientas y enfrentarme a proyectos que me obliguen a seguir
              creciendo.
            </p>

            <p className="section-text">
              Cuando no estoy programando, suelo dedicar tiempo a actividades
              creativas, videojuegos, lectura y proyectos personales.
            </p>
          </div>

          <div className="mt-8">
            <Link to="/trayectoria" className="btn-primary">
              Conoce mi trayectoria
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
