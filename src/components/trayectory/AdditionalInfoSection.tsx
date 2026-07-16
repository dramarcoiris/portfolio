import { motion } from "framer-motion";
import { trajectoryContent } from "../../data/trajectory";
import { fadeUp } from "../../data/animations";
import { FaFilePdf } from "react-icons/fa6";

export default function AdditionalInfoSection() {
  const { additionalInfo } = trajectoryContent;

  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.08 }}
        className="surface-card p-8 border border-(--border)/40 bg-white/90 backdrop-blur-sm"
      >
        <p className="section-label tracking-[0.2em] text-(--accent) font-medium mb-6">
          Información adicional
        </p>

        <div className="mt-6 space-y-5">
          {additionalInfo.map((item) => (
            <div
              key={item.id}
              className="border-b border-(--border)/30 last:border-0 pb-4 last:pb-0"
            >
              <p className="text-sm uppercase tracking-[0.16em] text-(--muted)">
                {item.label}
              </p>

              {/* Contenedor flexbox para alinear el valor y el PDF opcional */}
              <div className="mt-2 flex flex-row items-center justify-between gap-4">
                <p className="text-lg font-medium text-(--foreground) min-w-0 flex-1 wrap-break-word">
                  {item.value}
                </p>

                {/* PDF del certificado (por ejemplo, para el inglés) */}
                {item.downloadUrl && (
                  <div className="flex shrink-0 items-center">
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
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </>
  );
}
