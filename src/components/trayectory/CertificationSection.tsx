import { motion } from "framer-motion";
import { trajectoryContent } from "../../data/trajectory";
import { fadeUp } from "../../data/trajectoryAnimations";

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
      <p className="section-label mb-6 font-medium tracking-[0.2em] text-(--accent)">
        Certificaciones
      </p>

      <div className="space-y-6">
        {certifications.map((item) => (
          <div key={item.id}>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-xl font-bold tracking-tight text-(--foreground)">
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

              {item.year && (
                <span className="hidden text-right text-(--muted) sm:block">
                  {item.year}
                </span>
              )}
            </div>

            {item.summary && (
              <p className="section-text mt-4 font-[350]">{item.summary}</p>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
}
