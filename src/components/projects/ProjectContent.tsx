import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUpVariants } from "../../data/animations";
import { FiMaximize2 } from "react-icons/fi";
import Lightbox from "./Lightbox";

interface Section {
  id: string;
  title: string;
  content: string[];
  imageDetail?: { src: string; alt?: string };
}

interface ProjectContentProps {
  description: string;
  sections?: Section[];
}

export default function ProjectContent({
  description,
  sections = [],
}: ProjectContentProps) {
  const [activeImage, setActiveImage] = useState<{
    src: string;
    alt?: string;
  } | null>(null);

  return (
    <div className="space-y-12">
      <motion.section variants={fadeUpVariants} className="space-y-4">
        <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-(--accent)">
          El Proyecto
        </h3>
        <p className="text-(--foreground) leading-relaxed">{description}</p>
      </motion.section>

      {sections.map((section) => (
        <motion.section
          key={section.id}
          variants={fadeUpVariants}
          className="space-y-4 pt-2"
        >
          <h2 className="text-lg font-bold font-display text-(--foreground) border-l-2 border-(--accent-warm) pl-3">
            {section.title}
          </h2>
          <div className="space-y-3">
            {section.content.map((paragraph, idx) => (
              <p
                key={idx}
                className="text-(--foreground) leading-relaxed text-base font-light"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {section.imageDetail && (
            <div className="pt-2">
              <div className="relative w-full overflow-hidden rounded-2xl bg-neutral-100 shadow-md group cursor-zoom-in">
                <img
                  src={section.imageDetail.src}
                  alt={section.imageDetail.alt}
                  className="w-full h-auto object-cover max-h-100 transition-transform duration-300 hover:scale-[1.005]"
                  loading="lazy"
                  onClick={() => setActiveImage(section.imageDetail || null)}
                />
                <button
                  onClick={() => setActiveImage(section.imageDetail || null)}
                  className="absolute top-4 right-4 p-2.5 rounded-full bg-black/40 hover:bg-white text-white hover:text-(--foreground) backdrop-blur-xs transition-all cursor-pointer opacity-0 group-hover:opacity-100 shadow-sm border border-white/10"
                  title="Ampliar imagen"
                >
                  <FiMaximize2 className="text-sm" />
                </button>
              </div>
              {section.imageDetail.alt && (
                <p className="mt-2 text-xs text-(--muted) font-light italic pl-1">
                  {section.imageDetail.alt}
                </p>
              )}
            </div>
          )}
        </motion.section>
      ))}

      {/* Renderizado del Lightbox controlado por el estado de las secciones */}
      <AnimatePresence>
        {activeImage && (
          <Lightbox
            isOpen={!!activeImage}
            src={activeImage.src}
            alt={activeImage.alt}
            onClose={() => setActiveImage(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
