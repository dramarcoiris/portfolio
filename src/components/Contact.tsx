export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="page-container">
        <p className="mb-2 text-sm uppercase tracking-[0.3em] text-zinc-500">
          Contacto
        </p>

        <h2 className="text-4xl font-bold">Gracias por llegar hasta aquí.</h2>

        <p className="mt-6 max-w-2xl text-lg text-zinc-600">
          Si te interesa mi trabajo o quieres hablar sobre desarrollo, diseño o
          cualquier proyecto, estaré encantada de escucharte.
        </p>

        <div className="mt-12 border-t border-zinc-200 pt-8">
          <div className="flex flex-wrap items-center gap-8">
            <a
              href="mailto:contact.soyvicky@gmail.com"
              className="block text-xl font-medium transition-opacity hover:opacity-60"
            >
              contact.soyvicky@gmail.com
            </a>

            <span className="text-zinc-300">/</span>
            <a
              href="https://www.linkedin.com/in/victoria-cb"
              target="_blank"
              rel="noreferrer"
              className="text-lg text-zinc-600 transition-colors hover:text-zinc-900"
            >
              LinkedIn ↗
            </a>
            <span className="text-zinc-300">/</span>
            <a
              href="https://github.com/dramarcoiris"
              target="_blank"
              rel="noreferrer"
              className="text-lg text-zinc-600 transition-colors hover:text-zinc-900"
            >
              GitHub ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
