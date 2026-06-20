import type { TrajectoryContent } from "../types/Trajectory";

export const trajectoryContent: TrajectoryContent = {
  intro: {
    eyebrow: "Trayectoria",
    title: "Un perfil que une desarrollo, diseño y aprendizaje continuo.",
    description:
      "Mi recorrido profesional comenzó en el diseño gráfico, especialmente en identidad visual, comunicación de marca y desarrollo de piezas digitales. Con el tiempo, ese camino evolucionó hacia el desarrollo web y el diseño de interfaces, integrando también una mirada UX/UI. Hoy entiendo ambos mundos como parte de un mismo proceso: pensar productos digitales, construirlos con una base técnica sólida y cuidar cómo se presentan, se usan y se perciben.",
  },

  experience: [
    {
      id: "veiko",
      role: "Desarrolladora de aplicaciones web",
      company: "Veiko",
      location: "Granada",
      employmentType: "Prácticas",
      startDate: "Abr 2025",
      endDate: "Jun 2025",
      summary:
        "Participación en tareas de desarrollo backend, mantenimiento de base de datos y mejora de flujos de usuario dentro del producto.",
      highlights: [
        "Rediseño completo del flujo de registro de usuarios.",
        "Desarrollo y mantenimiento de funcionalidades backend en PHP.",
        "Optimización y refactorización de código legacy aplicando principios SOLID.",
        "Diseño y mantenimiento de bases de datos MySQL.",
        "Gestión de despliegues y configuración de servidores mediante SFTP.",
        "Trabajo colaborativo con Git y WordPress como parte del entorno del proyecto.",
      ],
      technologies: ["PHP 8", "MySQL", "JavaScript", "WordPress", "Git"],
      categories: ["development", "hybrid"],
    },
    {
      id: "abantera",
      role: "Diseñadora gráfica",
      company: "Abantera, Design and Future",
      location: "Yeles (Toledo)",
      employmentType: "Contrato indefinido",
      startDate: "Mar 2023",
      endDate: "Abr 2024",
      summary:
        "Desarrollo de piezas gráficas corporativas y comerciales, apoyo a la comunicación de marca y trabajo sobre identidad visual aplicada a distintos soportes.",
      highlights: [
        "Creación de material gráfico interno alineado con la identidad visual de la empresa.",
        "Diseño de catálogos, presentaciones corporativas y material promocional.",
        "Producción y edición de fotografías profesionales para uso comercial.",
        "Trabajo en equipo multidisciplinar, adaptando piezas a distintos formatos y necesidades de comunicación.",
      ],
      technologies: ["Photoshop", "Illustrator", "InDesign"],
      categories: ["design"],
    },
    {
      id: "neobrand",
      role: "Diseñadora gráfica",
      company: "Neobrand",
      location: "Granada",
      employmentType: "Contrato en prácticas",
      startDate: "Sep 2021",
      endDate: "Ago 2022",
      summary:
        "Desarrollo de identidades visuales, diseño de material corporativo y participación en proyectos web, trabajando tanto la parte gráfica como la definición visual de interfaces.",
      highlights: [
        "Diseño de identidad visual y elementos corporativos para diferentes clientes.",
        "Creación de material gráfico y piezas de comunicación digital con Photoshop, Illustrator, InDesign y Adobe XD.",
        "Diseño y seguimiento de páginas web corporativas, participando en la definición visual de interfaces.",
        "Planificación y creación de contenido para redes sociales de distintas marcas.",
        "Montaje y edición de vídeo para campañas digitales publicitarias.",
      ],
      technologies: [
        "Photoshop",
        "Illustrator",
        "InDesign",
        "Adobe XD",
        "Premiere Pro",
        "WordPress",
      ],
      categories: ["design", "hybrid"],
    },
    {
      id: "neobrand-practicas",
      role: "Diseñadora gráfica",
      company: "Neobrand",
      location: "Granada",
      employmentType: "Prácticas",
      startDate: "Feb 2020",
      endDate: "May 2020",
      summary:
        "Apoyo al equipo de diseño en la producción de piezas corporativas y material gráfico para clientes.",
      highlights: [
        "Apoyo en diseño gráfico y producción de piezas corporativas usando el paquete Adobe.",
      ],
      technologies: ["Photoshop", "Illustrator", "InDesign", "WordPress"],
      categories: ["design"],
    },
  ],

  education: [
    {
      id: "daw",
      title: "Grado Superior en Desarrollo de Aplicaciones Web",
      institution: "Ilerna Online",
      startDate: "2024",
      endDate: "2026",
      summary:
        "Formación orientada al desarrollo full stack, bases de datos, arquitectura web y construcción de aplicaciones completas.",
      highlights: [
        "Desarrollo frontend y backend.",
        "Bases de datos relacionales y modelado.",
        "Arquitectura web, despliegue y buenas prácticas de desarrollo.",
      ],
    },
    {
      id: "design-degree",
      title:
        "Formación artística superior equivalente a Grado en Diseño Gráfico",
      institution: "Escuela Superior de Diseño · Estación Diseño",
      startDate: "2016",
      endDate: "2021",
      summary:
        "Formación en identidad visual, diseño editorial, comunicación gráfica y desarrollo de proyectos creativos.",
      highlights: [
        "Identidad visual y branding.",
        "Diseño editorial, composición y jerarquía visual.",
        "Desarrollo de proyectos gráficos y comunicación de marca.",
      ],
    },
  ],

  complementaryTraining: [
    {
      id: "bootcamp-java",
      title: "Bootcamp Full Stack Java",
      institution: "Fundación Esplai",
      year: "2026",
      duration: "336 horas",
      summary:
        "Formación teórico-práctica orientada al desarrollo full stack con Java, centrado en el trabajo sobre aplicaciones completas y en la colaboración en equipo. Durante el bootcamp participé en el desarrollo de Entre Recuerdos.",
      highlights: [
        "Participación en un proyecto colaborativo real, trabajando en equipo sobre la planificación, construcción y evolución del producto.",
        "Trabajo FullStack: estructura de la interfaz, componentes, lógica de aplicación, API REST y conexión con base de datos MySQL.",
        "Aplicación de conocimientos durante el desarrollo del proyecto Entre Recuerdos.",
      ],
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "TypeScript",
        "Java 21",
        "Spring Boot 3",
        "MySQL",
        "Git",
      ],
    },
    {
      id: "soft-skills",
      title: "Soft Skills y Empleabilidad",
      institution: "Fundación Esplai",
      year: "2026",
      duration: "55 horas",
      summary:
        "Formación centrada en el desarrollo de habilidades transversales aplicadas al entorno profesional, trabajando aspectos como comunicación, creatividad, inteligencia emocional, organización del tiempo y dinámicas de trabajo colaborativo.",
      highlights: [
        "Trabajo sobre creatividad, comunicación y principios del comportamiento humano aplicados al ámbito laboral.",
        "Desarrollo de herramientas de organización personal, gestión del tiempo y adaptación a entornos de trabajo cambiantes.",
        "Refuerzo de competencias clave para el trabajo en equipo, la colaboración y la empleabilidad dentro del sector tecnológico.",
      ],
      technologies: [
        "Creatividad",
        "Comunicación",
        "Inteligencia emocional",
        "Gestión del tiempo",
        "Trabajo en equipo",
      ],
    },
  ],

  certifications: [
    {
      id: "az900",
      title: "Microsoft Certified: Azure Fundamentals (AZ-900)",
      issuer: "Microsoft",
      year: "2026",
      summary:
        "Certificación orientada a fundamentos de cloud computing, servicios de Azure, seguridad, gobernanza y modelos de coste.",
    },
  ],

  additionalInfo: [
    {
      id: "english",
      label: "Inglés",
      value: "B2 · Cambridge English: First Certificate",
    },
    {
      id: "driving",
      label: "Movilidad",
      value: "Carnet de conducir y vehículo propio",
    },
  ],
};
