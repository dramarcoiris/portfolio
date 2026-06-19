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
    role: "Bootcamp Full Stack Java",
    technologies: [
      "Java 21",
      "Spring Boot 3",
      "React",
      "TypeScript",
      "MySQL",
      "GIT",
    ],
    features: [
      "REST API",
      "Gestión de usuarios",
      "Gestión de grupos",
      "Historias colaborativas",
    ],
    github: "https://github.com/DaarkinBlade/Entre-Recuerdos",
    image: "",
  },
  {
    id: 2,
    slug: "bring-it-up",
    title: "Bring It Up! ¿Conoces a tus amigos?",
    shortDescription:
      "Plataforma social para descubrir cuánto conoces a los amigos",
    description:
      "Juego web social desarrollado con Laravel que permite crear grupos de amigos, responder preguntas y descubrir cuánto os conocéis mediante votaciones, estadísticas interactivas y análisis de resultados.",
    role: "Proyecto Final DAW",
    technologies: [
      "PHP 8",
      "Laravel 12",
      "JavaScript",
      "Docker",
      "HTML",
      "CSS",
      "MySQL",
      "GIT",
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
  },
];
