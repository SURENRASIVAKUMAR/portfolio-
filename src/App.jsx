import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectDetail from './pages/ProjectDetail';
import './App.css';

function HomePage() {
  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <Skills />
      <Portfolio />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/project/:id" element={<ProjectDetail />} />
    </Routes>
  );
}

export default App;
