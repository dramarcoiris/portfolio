export default function Hero() {
  return (
    <section id="hero">
      <div className="page-container">
        <div className="mx-auto flex min-h-screen max-w-4xl flex-col justify-center items-center text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
            DESARROLLO WEB · DISEÑO · EXPERIENCIA DE USUARIO
          </p>

          <h1 className="mt-4 text-6xl font-bold md:text-8xl">
            ¡Hola! Soy Vicky
          </h1>

          <p className="mt-6 max-w-2xl text-xl text-zinc-600">
            Vengo del diseño gráfico y encontré en el desarrollo web la forma de
            construir las experiencias digitales que antes solo podía imaginar.
            Hoy combino desarrollo y diseño para crear
            <strong> experiencias digitales completas</strong>, funcionales y
            visualmente cuidadas.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {[
              "React",
              "TypeScript",
              "Laravel",
              "Spring Boot",
              "Docker",
              "Azure",
            ].map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-zinc-300 px-4 py-2 text-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-10 flex gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-zinc-900 px-6 py-3 text-white transition hover:bg-zinc-800"
            >
              Ver proyectos
            </a>

            <a
              href="#contact"
              className="rounded-lg border border-zinc-300 px-6 py-3 transition hover:bg-zinc-100"
            >
              Contacto
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
