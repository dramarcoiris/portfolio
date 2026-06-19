import { skills } from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="page-container">
        <p className="mb-2 text-sm uppercase tracking-[0.3em] text-zinc-500">
          Tech Stack
        </p>

        <h2 className="max-w-4xl text-4xl font-bold">
          Herramientas que utilizo para dar vida a las ideas.
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {skills.map((group) => (
            <article
              key={group.category}
              className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <h3 className="mb-6 text-xl font-bold">{group.category}</h3>

              <div className="grid grid-cols-2 gap-4">
                {group.technologies.map((tech) => {
                  const Icon = tech.icon;

                  return (
                    <div key={tech.name} className="flex items-center gap-3">
                      <Icon className="text-2xl text-zinc-700" />

                      <span className="font-medium">{tech.name}</span>
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
