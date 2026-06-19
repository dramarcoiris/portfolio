import { Route, Routes } from "react-router-dom";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Contact from "./components/Contact";

export function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/projects/:slug" element={<ProjectDetail />} />
    </Routes>
  );
}
