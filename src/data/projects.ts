import type Project from "../types/Project";

export const projects: Project[] = [
  {
    id: "entre-recuerdos",
    slug: "entre-recuerdos",
    title: "Entre Recuerdos",
    shortDescription:
      "Plataforma colaborativa para preservar la memoria familiar mediante historias compartidas entre generaciones.",
    description:
      "Plataforma web colaborativa diseñada para preservar la memoria familiar a través de historias compartidas entre distintas generaciones. Permite crear, ampliar y conectar recuerdos mediante contenido multimedia, fomentando la construcción colectiva del legado familiar.",
    categories: ["development", "design"],
    context: "bootcamp",
    role: "Bootcamp Full Stack Java",
    year: "2026",
    technologies: [
      "Java 21",
      "Spring Boot 3",
      "React",
      "TypeScript",
      "MySQL",
      "Git",
      "Figma",
      "Illustrator",
    ],
    featuredTechnologies: [
      "Java 21",
      "Spring Boot 3",
      "React",
      "MySQL",
      "Figma",
    ],
    features: [
      "REST API",
      "Gestión de usuarios",
      "Gestión de grupos",
      "Historias colaborativas",
    ],
    github: "https://github.com/DaarkinBlade/Entre-Recuerdos",
    images: [
      // {
      //   src: entreRecuerdosCover,
      //   alt: "Vista principal de Entre Recuerdos",
      //   kind: "cover",
      // },
    ],
    sections: [
      {
        id: "entre-recuerdos-development",
        type: "development",
        title: "Desarrollo",
        content: [
          "Desarrollo del frontend con React y TypeScript, estructurando la interfaz para facilitar la navegación entre recuerdos, grupos y perfiles de usuario.",
          "Implementación del backend con Spring Boot y Java 21, definiendo una arquitectura preparada para gestionar usuarios, historias, relaciones familiares y contenido compartido.",
          "Diseño de la API REST y conexión con base de datos MySQL para centralizar la gestión de historias, grupos familiares y elementos multimedia.",
        ],
      },
      {
        id: "entre-recuerdos-design",
        type: "design",
        title: "Diseño e identidad visual",
        content: [
          "Desarrollo de la identidad visual del proyecto y planteamiento conceptual de una marca vinculada a la memoria, la cercanía y el legado familiar.",
          "Definición de la interfaz en Figma, trabajando jerarquía visual, legibilidad y accesibilidad para una experiencia clara en un contexto intergeneracional.",
          "Selección de tipografías, color y recursos gráficos con el objetivo de transmitir calidez, familiaridad y continuidad entre generaciones.",
        ],
      },
      {
        id: "entre-recuerdos-solution",
        type: "solution",
        title: "Enfoque del proyecto",
        content: [
          "El proyecto se concibe como un espacio donde distintas personas de una misma familia pueden construir recuerdos de forma colaborativa, aportando nuevas versiones, imágenes y contexto a una misma historia.",
          "Más allá del desarrollo técnico, se trabajó la experiencia de usuario desde una perspectiva emocional, buscando que la herramienta resultara cercana, comprensible y útil para perfiles con distintos niveles de alfabetización digital.",
        ],
      },
    ],
  },
  {
    id: "bring-it-up",
    slug: "bring-it-up",
    title: "Bring It Up! ¿Conoces a tus amigos?",
    shortDescription:
      "Juego web social para descubrir cuánto conoces a los amigos, mediante votaciones, estadísticas y análisis de resultados.",
    description:
      "Juego web social desarrollado con Laravel que permite crear grupos de amigos, responder preguntas y descubrir cuánto os conocéis mediante votaciones, estadísticas interactivas y análisis de resultados.",
    categories: ["development"],
    context: "academic",
    role: "Proyecto Final DAW",
    year: "2025",
    technologies: [
      "PHP 8",
      "Laravel 12",
      "JavaScript",
      "Docker",
      "HTML",
      "CSS",
      "MySQL",
      "Git",
    ],
    featuredTechnologies: [
      "PHP 8",
      "Laravel 12",
      "JavaScript",
      "Docker",
      "MySQL",
    ],
    features: [
      "Arquitectura MVC",
      "Autenticación Laravel",
      "Gestión de grupos y permisos",
      "Sistema de votación único",
      "Análisis de resultados",
      "Visualización de datos con ECharts",
    ],
    github: "https://github.com/dramarcoiris/bring-it-up",
    images: [
      // {
      //   src: bringItUpCover,
      //   alt: "Pantalla principal de Bring It Up!",
      //   kind: "cover",
      // },
    ],
    sections: [
      {
        id: "bring-it-up-development",
        type: "development",
        title: "Desarrollo de la aplicación",
        content: [
          "Aplicación web construida con Laravel siguiendo arquitectura MVC, estructurando la lógica de usuarios, grupos, preguntas, respuestas y votaciones.",
          "Implementación del sistema de autenticación, gestión de permisos y control de acceso a grupos privados.",
          "Desarrollo de la lógica necesaria para registrar respuestas, consolidar votaciones y generar resultados individuales y grupales.",
        ],
      },
      {
        id: "bring-it-up-results",
        type: "results",
        title: "Datos, estadísticas y visualización",
        content: [
          "Procesamiento de resultados para calcular afinidad, coincidencias y diferencias entre participantes a partir de las respuestas registradas.",
          "Generación de estadísticas globales e individuales por pregunta, permitiendo comparar respuestas y detectar patrones dentro del grupo.",
          "Visualización de datos mediante ECharts para transformar la información recogida en gráficos y resultados más claros e interpretables.",
        ],
      },
      {
        id: "bring-it-up-challenge",
        type: "challenge",
        title: "Objetivo del proyecto",
        content: [
          "El proyecto parte de una idea de juego social orientada a reforzar la interacción entre grupos de amigos a través de preguntas, votaciones y resultados compartidos.",
          "A nivel técnico, el reto principal fue traducir esa dinámica en una aplicación con una lógica sólida de relaciones, votos, cálculos y representación visual de resultados.",
        ],
      },
    ],
  },
];
