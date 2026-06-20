export type ProjectCategory = "development" | "design";
export type ProjectContext =
  | "personal"
  | "academic"
  | "internship"
  | "work"
  | "bootcamp";

export type ProjectSectionType =
  | "development"
  | "design"
  | "challenge"
  | "solution"
  | "results";

export interface ProjectSection {
  id: string;
  type: ProjectSectionType;
  title: string;
  content: string[];
}

export interface ProjectImage {
  src: string;
  alt: string;
  kind?: "cover" | "gallery" | "mobile" | "desktop";
}

export default interface Project {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;

  categories: ProjectCategory[];
  context?: ProjectContext;

  role: string;
  year?: string;

  technologies: string[];
  featuredTechnologies: string[];

  features: string[];
  github?: string;
  images?: ProjectImage[];

  sections?: ProjectSection[];
}
