export type TrajectoryCategory = "development" | "design" | "hybrid";

export interface TrajectoryIntro {
  eyebrow: string;
  title: string;
  description: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location?: string;
  employmentType?: string;
  startDate: string;
  endDate?: string;
  summary: string;
  highlights?: string[];
  technologies?: string[];
  categories?: TrajectoryCategory[];
}

export interface EducationItem {
  id: string;
  title: string;
  institution: string;
  startDate?: string;
  endDate?: string;
  summary?: string;
  downloadUrl?: string;
}

export interface TrainingItem {
  id: string;
  title: string;
  institution: string;
  year?: string;
  duration?: string;
  summary?: string;
  highlights?: string[];
  technologies?: string[];
  downloadUrl?: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  year?: string;
  summary?: string;
  downloadUrl?: string;
}

export interface AdditionalInfoItem {
  id: string;
  label: string;
  value: string;
  downloadUrl?: string;
}

export interface TrajectoryContent {
  intro: TrajectoryIntro;
  experience: ExperienceItem[];
  education: EducationItem[];
  complementaryTraining: TrainingItem[];
  certifications: CertificationItem[];
  additionalInfo: AdditionalInfoItem[];
}
