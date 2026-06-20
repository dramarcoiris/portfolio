import { BiLogoSpringBoot } from "react-icons/bi";
import { FaDocker, FaGitAlt, FaJava, FaWordpress } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";
import {
  SiCss,
  SiFigma,
  SiHtml5,
  SiJavascript,
  SiLaravel,
  SiMysql,
  SiPhp,
  SiPrestashop,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import {
  TbBrandAdobeIllustrator,
  TbBrandAdobePhotoshop,
  TbBrandAdobeXd,
} from "react-icons/tb";

export const skills = [
  {
    category: "Frontend",
    technologies: [
      { name: "React", icon: SiReact },
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss },
    ],
  },
  {
    category: "Backend & CMS",
    technologies: [
      { name: "PHP", icon: SiPhp },
      { name: "Laravel", icon: SiLaravel },
      { name: "Java", icon: FaJava },
      { name: "Spring Boot", icon: BiLogoSpringBoot },
      { name: "Wordpress", icon: FaWordpress },
      { name: "PrestaShop", icon: SiPrestashop },
    ],
  },
  {
    category: "Cloud & DevOps",
    technologies: [
      { name: "MySQL", icon: SiMysql },
      { name: "Docker", icon: FaDocker },
      { name: "Azure", icon: VscAzure },
      { name: "Git", icon: FaGitAlt },
    ],
  },
  {
    category: "Design",
    technologies: [
      { name: "Figma", icon: SiFigma },
      { name: "Adobe Xd", icon: TbBrandAdobeXd },
      { name: "Photoshop", icon: TbBrandAdobePhotoshop },
      { name: "Illustrator", icon: TbBrandAdobeIllustrator },
    ],
  },
];
