import { motion } from "framer-motion";
import { trajectoryContent } from "../../data/trajectory";
import { fadeUp } from "../../data/animations";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa6";

export default function CertificationSection() {
  const { certifications } = trajectoryContent;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="surface-card border border-(--border)/40 bg-white/90 p-8 backdrop-blur-sm"
    >
      {/* Cabecera de la sección con el enlace global a Credly */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <p className="section-label font-medium tracking-[0.2em] text-(--accent)">
          Certificaciones
        </p>

        <a
          href="https://www.credly.com/users/victoria-cb"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-(--accent) hover:text-(--accent-dark) transition-colors border border-(--accent)/30 rounded-full px-4 py-1.5 self-start sm:self-auto hover:bg-(--accent)/5"
          title="Ver todas mis insignias en Credly"
        >
          <span>Ver Credly</span>
          <FaExternalLinkAlt className="text-[10px]" />
        </a>
      </div>

      <div className="space-y-8 divide-y divide-(--border)/30">
        {certifications.map((item, index) => (
          <div key={item.id} className={index !== 0 ? "pt-6" : ""}>
            {/* Cabecera flex que resuelve la alineación del título, fecha y PDF */}
            <div className="flex flex-row items-start justify-between gap-4">
              <div className="min-w-0 flex-1">
                <h3 className="text-xl font-bold tracking-tight text-(--foreground) wrap-break-word">
                  {item.title}
                </h3>

                <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-base text-(--muted)">
                  <span>{item.issuer}</span>

                  {item.year && (
                    <>
                      <span className="text-(--border) sm:hidden">·</span>
                      <span className="sm:hidden">{item.year}</span>
                    </>
                  )}
                </div>
              </div>

              {/* Contenedor de la derecha: Fecha (desktop) + PDF (siempre a la derecha) */}
              <div className="flex shrink-0 items-center gap-4 pt-1">
                {item.year && (
                  <span className="hidden text-right text-sm font-medium text-(--muted) sm:block">
                    {item.year}
                  </span>
                )}

                {item.downloadUrl && (
                  <a
                    href={item.downloadUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-2xl text-(--accent) hover:text-(--accent-dark) transition-colors focus:outline-none flex items-center justify-center"
                    title="Ver documento PDF"
                  >
                    <FaFilePdf />
                  </a>
                )}
              </div>
            </div>

            {item.summary && (
              <p className="section-text mt-4 font-[350] text-(--foreground)/90">
                {item.summary}
              </p>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
}
