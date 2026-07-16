import { motion } from "framer-motion";
import { fadeUpVariants, sectionContainer } from "../../data/animations";

interface ProjectHeaderProps {
  project: {
    title: string;
    shortDescription?: string;
    year?: string;
    categories?: string[];
    images?: { src: string; alt?: string; kind?: string }[];
  };
}

export default function ProjectHeader({ project }: ProjectHeaderProps) {
  const coverImage = project.images?.find((img) => img.kind === "cover");

  const categoryLabels: Record<string, string> = {
    fullstack: "Desarrollo",
    development: "Desarrollo",
    design: "Diseño Gráfico",
  };

  const formattedCategories = (project.categories || [])
    .map((cat) => categoryLabels[cat] || cat)
    .filter((value, index, self) => self.indexOf(value) === index)
    .join(" / ");

  return (
    <motion.div
      className="space-y-6 md:items-start lg:gap-16 mt-6 md:mt-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={sectionContainer}
    >
      <motion.div
        variants={fadeUpVariants}
        className="flex items-center gap-1 text-xs md:text-sm uppercase tracking-[0.2em] mb-3"
      >
        <span className="text-(--accent-warm) font-semibold">
          {formattedCategories}
        </span>
        {project.year && (
          <span className="text-(--muted) font-display flex items-center">
            <span className="mx-2 text-[10px] opacity-60">•</span>
            {project.year}
          </span>
        )}
      </motion.div>

      <motion.div variants={fadeUpVariants} className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight text-(--foreground) sm:text-5xl leading-[1.15]">
          {project.title}
        </h1>
        {project.shortDescription && (
          <p className="text-lg md:text-xl text-(--muted)">
            {project.shortDescription}
          </p>
        )}
      </motion.div>

      {coverImage && (
        <motion.div
          variants={fadeUpVariants}
          className="w-full rounded-2xl overflow-hidden shadow-md mb-10"
        >
          <img
            src={coverImage.src}
            alt={coverImage.alt || `Portada de ${project.title}`}
            className="w-full h-full object-cover"
          />
        </motion.div>
      )}
    </motion.div>
  );
}
