import { motion } from "framer-motion";
import { FiX } from "react-icons/fi";

interface LightboxProps {
  isOpen: boolean;
  src: string;
  alt?: string;
  onClose: () => void;
}

export default function Lightbox({ isOpen, src, alt, onClose }: LightboxProps) {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 md:p-10 backdrop-blur-md cursor-zoom-out"
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer z-50"
      >
        <FiX className="text-xl" />
      </button>

      <motion.div
        initial={{ scale: 0.97 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.97 }}
        className="relative max-w-full max-h-full flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={src}
          alt={alt}
          className="max-w-[95vw] max-h-[85vh] object-contain rounded-lg select-none"
        />
      </motion.div>
    </motion.div>
  );
}
