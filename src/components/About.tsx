import profileImage from "../assets/images/profile.png";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="page-container grid gap-12 md:grid-cols-2 md:items-center">
        <div>
          <img
            src={profileImage}
            alt="Victoria Cejas"
            className="w-full max-w-md rounded-3xl object-cover"
          />
        </div>

        <div>
          <p className="mb-2 text-sm uppercase tracking-[0.3em] text-zinc-500">
            Sobre mí
          </p>

          <h2 className="text-4xl font-bold">
            Tecnología, diseño y curiosidad.
          </h2>

          <p className="mt-6 text-lg text-zinc-600">
            Mi interés por la tecnología comenzó desde el lado creativo,
            trabajando en diseño gráfico y comunicación visual. Con el tiempo
            descubrí que quería participar también en la construcción de los
            productos digitales, lo que me llevó a especializarme en desarrollo
            web.
          </p>

          <p className="mt-4 text-lg text-zinc-600">
            Actualmente disfruto creando aplicaciones que combinan
            funcionalidad, experiencia de usuario y una base técnica sólida. Me
            gusta entender cómo funcionan las cosas, aprender nuevas
            herramientas y enfrentarme a proyectos que me obliguen a seguir
            creciendo.
          </p>

          <p className="mt-4 text-lg text-zinc-600">
            Cuando no estoy programando, suelo dedicar tiempo a actividades
            creativas, videojuegos, lectura y proyectos personales.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <div className="flex items-center gap-2 py-2">
              <FaMapMarkerAlt />
              <span>Málaga, España</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
