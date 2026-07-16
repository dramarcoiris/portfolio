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
    categories: ["fullstack", "design"],
    context: "bootcamp",
    institution: "Fundación Esplai",
    role: "Proyecto Bootcamp Fullstack",
    year: "2026",
    technologies: [
      "Java 21",
      "Spring Boot 3",
      "Spring Security",
      "JWT",
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
    github: "https://github.com/dramarcoiris/Entre-Recuerdos",
    images: [
      {
        src: "/projects/entre-recuerdos/cover.jpg",
        alt: "Vista principal de Entre Recuerdos",
        kind: "cover",
      },
      {
        src: "/projects/entre-recuerdos/gallery1.jpg",
        alt: "Home de Entre Recuerdos",
        kind: "gallery",
      },
      {
        src: "/projects/entre-recuerdos/gallery2.jpg",
        alt: "Resumen de los recuerdos creados",
        kind: "gallery",
      },
      {
        src: "/projects/entre-recuerdos/gallery3.jpg",
        alt: "Detalle de un recuerdo creado",
        kind: "gallery",
      },
      {
        src: "/projects/entre-recuerdos/gallery4.jpg",
        alt: "Información de la familia y sus miembros",
        kind: "gallery",
      },
    ],
    sections: [
      {
        id: "entre-recuerdos-development",
        type: "fullstack",
        title: "Desarrollo",
        content: [
          "Desarrollo del frontend con React y TypeScript, estructurando la interfaz para facilitar la navegación entre recuerdos, familias y perfiles de usuario.",
          "Implementación del backend con Spring Boot y Java 21, definiendo una arquitectura preparada para gestionar a los usuarios, sus historias, lasrelaciones familiares y el contenido compartido, tanto propio como de otro familiar.",
          "Diseño de la API REST y conexión con base de datos MySQL para centralizar la gestión de historias, grupos familiares y contenido de los recuerdos.",
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
        imageDetail: {
          src: "/projects/entre-recuerdos/brand-design.jpg",
          alt: "Identidad visual y conceptualización de la identidad.",
        },
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
    categories: ["fullstack"],
    context: "academic",
    institution: "Instituto de Formación Profesional",
    role: "Proyecto Desarrollo de Aplicaciones Web",
    year: "2025",
    technologies: [
      "PHP 8",
      "Laravel 12",
      "JavaScript",
      "ECharts",
      "Docker",
      "HTML",
      "CSS",
      "MySQL",
      "GitHub",
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
      {
        src: "/projects/bring-it-up/cover.jpg",
        alt: "Pantalla principal de Bring It Up!",
        kind: "cover",
      },
      {
        src: "/projects/bring-it-up/gallery1.jpg",
        alt: "Home de la aplicación con resumen de juegos, invitaciones y estadísticas",
        kind: "gallery",
      },
      {
        src: "/projects/bring-it-up/gallery2.jpg",
        alt: "Detalle de un juego con preguntas y opciones de respuesta",
        kind: "gallery",
      },
      {
        src: "/projects/bring-it-up/gallery3.jpg",
        alt: "Resultados generales de un juego con estadísticas y gráficos",
        kind: "gallery",
      },
      {
        src: "/projects/bring-it-up/gallery4.jpg",
        alt: "Resultados individuales de un jugador con estadísticas y gráficos",
        kind: "gallery",
      },
      {
        src: "/projects/bring-it-up/admin1.jpg",
        alt: "Panel de administración de la aplicación: Sección usuarios",
        kind: "gallery",
      },
      {
        src: "/projects/bring-it-up/admin2.jpg",
        alt: "Panel de administración de la aplicación: Sección grupos",
        kind: "gallery",
      },
      {
        src: "/projects/bring-it-up/admin3.jpg",
        alt: "Panel de administración de la aplicación: Sección preguntas",
        kind: "gallery",
      },
    ],
    sections: [
      {
        id: "bring-it-up-development",
        type: "fullstack",
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
