export type ProjectCategory = "development" | "design";

export interface ProjectSection {
  title: string;
  content: string[];
}

export default interface Project {
  id: number;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;

  categories: ProjectCategory[];

  role: string;
  year?: string;

  technologies: string[];
  featuredTechnologies: string[];

  features: string[];
  github?: string;
  image: string;

  development?: ProjectSection[];
  design?: ProjectSection[];
}
