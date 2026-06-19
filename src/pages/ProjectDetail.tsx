import { Route, Routes } from "react-router-dom";
import { Home } from "../App";

export default function ProjectDetail() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/projects/:slug" element={<ProjectDetail />} />
    </Routes>
  );
}
