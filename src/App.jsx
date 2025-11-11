import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage.jsx';
import { ProjectsPage } from './pages/ProjectsPage.jsx';
import { ExperiencePage } from './pages/ExperiencePage.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/experience" element={<ExperiencePage />} />
    </Routes>
  );
}

export default App;
