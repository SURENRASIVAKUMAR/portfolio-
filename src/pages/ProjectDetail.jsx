import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';

function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id));

  // Scroll to top when loading the detail page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div style={{ padding: '150px 20px', textAlign: 'center', backgroundColor: '#0f172a', color: '#fff', minHeight: '100vh' }}>
        <h2>Project Not Found</h2>
        <Link to="/" style={{ color: '#3b82f6', textDecoration: 'underline' }}>Return to Home</Link>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: '#0f172a', color: '#fff', minHeight: '100vh', paddingBottom: '100px' }}>
      {/* Detail Header / Navigation */}
      <nav style={{ padding: '30px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.05)', backgroundColor: 'rgba(5, 8, 20, 0.95)' }}>
        <Link to="/" style={{ color: '#94a3b8', textDecoration: 'none', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          BACK TO PORTFOLIO
        </Link>
        <div style={{ fontWeight: 900, fontSize: '1.2rem', letterSpacing: '2px', color: '#fff' }}>SURENRA</div>
      </nav>

      {/* Main Content */}
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '60px 20px' }}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 900, marginBottom: '20px', letterSpacing: '-1px' }}>
            {project.title}
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#cbd5e1', lineHeight: 1.8, marginBottom: '40px', maxWidth: '800px' }}>
            {project.desc}
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ width: '100%', height: '500px', borderRadius: '16px', overflow: 'hidden', marginBottom: '60px', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)' }}
        >
          <div style={{ width: '100%', height: '100%', backgroundImage: `url(${project.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px' }}>
          
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.4 }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '20px', color: '#f8fafc', borderBottom: '2px solid rgba(255,255,255,0.1)', paddingBottom: '10px' }}>Key Features</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {project.features.map((feature, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#94a3b8', marginBottom: '15px', fontSize: '1.1rem' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg> 
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.5 }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '20px', color: '#f8fafc', borderBottom: '2px solid rgba(255,255,255,0.1)', paddingBottom: '10px' }}>Technologies Used</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '40px' }}>
              {project.technologies.map((tech, i) => (
                <span key={i} style={{ padding: '8px 16px', backgroundColor: 'rgba(59, 130, 246, 0.1)', color: '#60a5fa', borderRadius: '20px', fontSize: '0.95rem', fontWeight: 600, border: '1px solid rgba(59, 130, 246, 0.2)' }}>
                  {tech}
                </span>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
              <a href={project.github} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '14px 28px', backgroundColor: '#ffffff', color: '#0f172a', borderRadius: '8px', fontWeight: 700, textDecoration: 'none', transition: 'all 0.3s ease' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg> 
                Source Code
              </a>
              <a href={project.demo} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '14px 28px', backgroundColor: 'transparent', color: '#ffffff', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '8px', fontWeight: 600, textDecoration: 'none', transition: 'all 0.3s ease' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg> 
                Live Demo
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;
