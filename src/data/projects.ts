import type Project from "../types/Project";

export const projects: Project[] = [
  {
    id: 1,
    slug: "entre-recuerdos",
    title: "Entre Recuerdos",
    shortDescription:
      "Plataforma colaborativa para preservar la memoria familiar mediante historias compartidas entre generaciones.",
    description:
      "Plataforma web colaborativa diseñada para preservar la memoria familiar a través de historias compartidas entre distintas generaciones. Permite crear, ampliar y conectar recuerdos mediante contenido multimedia, fomentando la construcción colectiva del legado familiar.",
    categories: ["development", "design"],
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
    image: "",
    development: [
      {
        title: "Arquitectura y desarrollo",
        content: [
          "Desarrollo del frontend en React y TypeScript.",
          "Implementación del backend con Spring Boot y Java 21.",
          "Diseño de la API REST y conexión con base de datos MySQL.",
        ],
      },
      {
        title: "Funcionalidades",
        content: [
          "Sistema de usuarios y grupos familiares.",
          "Creación de historias colaborativas con contenido multimedia.",
          "Estructura preparada para conectar distintas versiones de un mismo recuerdo.",
        ],
      },
    ],

    design: [
      {
        title: "Identidad visual",
        content: [
          "Diseño y adaptabilidad de la identidad visual y planteamiento conceptual del proyecto.",
          "Definición de tipografías y paleta de colores.",
        ],
      },
      {
        title: "Interfaz",
        content: [
          "Definición trabajada en Figma de una interfaz clara y accesible para perfiles intergeneracionales.",
          "Trabajo de jerarquía visual, legibilidad y experiencia de usuario.",
        ],
      },
    ],
  },
  {
    id: 2,
    slug: "bring-it-up",
    title: "Bring It Up! ¿Conoces a tus amigos?",
    shortDescription:
      "Plataforma social para descubrir cuánto conoces a los amigos, mediante votaciones, estadísticas y análisis de resultados.",
    description:
      "Juego web social desarrollado con Laravel que permite crear grupos de amigos, responder preguntas y descubrir cuánto os conocéis mediante votaciones, estadísticas interactivas y análisis de resultados.",
    categories: ["development"],
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
    image: "",
    development: [
      {
        title: "Desarrollo de la aplicación",
        content: [
          "Aplicación web construida con Laravel siguiendo arquitectura MVC.",
          "Sistema de autenticación, gestión de grupos, preguntas y votaciones.",
          "Desarrollo de estadísticas globales e individuales por pregunta.",
        ],
      },
      {
        title: "Lógica y visualización de datos",
        content: [
          "Procesamiento de resultados para calcular afinidad y respuestas compartidas.",
          "Visualización de datos mediante ECharts.",
        ],
      },
    ],
  },
];
