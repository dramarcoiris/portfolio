import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight, FiMaximize2 } from "react-icons/fi";
import { fadeUpVariants } from "../../data/animations";
import Lightbox from "./Lightbox";

interface GalleryImage {
  src: string;
  alt?: string;
  kind?: string;
}

interface ProjectGalleryProps {
  images?: GalleryImage[];
}

export default function ProjectGallery({ images = [] }: ProjectGalleryProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const galleryImages = images.filter((img) => img.kind === "gallery");

  if (galleryImages.length === 0) return null;

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1,
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1,
    );
  };

  return (
    <>
      <motion.div variants={fadeUpVariants} className="space-y-4 pt-4">
        <div className="flex justify-between items-end">
          <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-(--accent)">
            Capturas de la aplicación
          </h3>
          <span className="text-xs text-(--muted) font-mono">
            {currentImageIndex + 1} / {galleryImages.length}
          </span>
        </div>

        <div className="relative w-full rounded-2xl overflow-hidden group/carousel shadow-md">
          <img
            src={galleryImages[currentImageIndex].src}
            alt={galleryImages[currentImageIndex].alt}
            className="w-full h-auto object-cover cursor-zoom-in transition-transform duration-300 hover:scale-[1.005]"
            onClick={() => setIsLightboxOpen(true)}
          />

          <button
            onClick={() => setIsLightboxOpen(true)}
            className="absolute top-4 right-4 p-2.5 rounded-full hover:bg-white text-(--foreground) backdrop-blur-xs transition-colors cursor-pointer z-10 shadow-sm border border-(--border)/20"
            title="Ampliar imagen"
          >
            <FiMaximize2 className="text-sm" />
          </button>

          {galleryImages.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full hover:bg-white text-(--foreground) border border-(--border)/20 shadow-md transition-all md:opacity-0 md:group-hover/carousel:opacity-100 cursor-pointer z-10"
              >
                <FiChevronLeft className="text-xl" />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full hover:bg-white text-(--foreground) border border-(--border)/20 shadow-md transition-all md:opacity-0 md:group-hover/carousel:opacity-100 cursor-pointer z-10"
              >
                <FiChevronRight className="text-xl" />
              </button>
            </>
          )}
        </div>
      </motion.div>

      {/* Lightbox unificado */}
      <AnimatePresence>
        {isLightboxOpen && (
          <Lightbox
            isOpen={isLightboxOpen}
            src={galleryImages[currentImageIndex].src}
            alt={galleryImages[currentImageIndex].alt}
            onClose={() => setIsLightboxOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
