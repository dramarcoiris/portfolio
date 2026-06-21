import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import ScrollManager from "./components/ScrollManager";

export function App() {
  return (
    <>
      <Header />
      <ScrollManager />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects/:slug" element={<ProjectDetailPage />} />
      </Routes>
    </>
  );
}
