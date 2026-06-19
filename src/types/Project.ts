export default interface Project {
  id: number;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  role: string;
  technologies: string[];
  features: string[];
  github: string;
  image: string;
}
