export type ProjectCategory = "fullstack" | "design";
export type ProjectContext =
  | "personal"
  | "academic"
  | "internship"
  | "work"
  | "bootcamp";

export type ProjectSectionType =
  | "fullstack"
  | "design"
  | "challenge"
  | "solution"
  | "results";

export interface ProjectImage {
  src: string;
  alt: string;
  kind?: "cover" | "gallery";
}

export interface ProjectSection {
  id: string;
  type: ProjectSectionType;
  title: string;
  content: string[];
  imageDetail?: ProjectImage;
}

export default interface Project {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;

  categories: ProjectCategory[];
  context?: ProjectContext;
  institution?: string;

  role: string;
  year?: string;

  technologies: string[];
  featuredTechnologies: string[];

  features: string[];
  github?: string;
  images?: ProjectImage[];

  sections?: ProjectSection[];
}
