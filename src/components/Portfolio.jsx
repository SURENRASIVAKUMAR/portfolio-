import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';

function Portfolio() {
  return (
    <section id="projects" className="portfolio-section" style={{ backgroundColor: 'var(--secondary-color)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
        <h3 className="section-title">02 PROJECTS</h3>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px', marginTop: '60px' }}>
          {projects.map((project, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              key={project.id}
            >
              <Link to={`/project/${project.id}`} style={{ display: 'block', overflow: 'hidden', group: 'true', color: 'inherit', textDecoration: 'none' }}>
                <div style={{ 
                  height: '300px', 
                  backgroundImage: `url(${project.image})`, 
                  backgroundSize: 'cover', 
                  backgroundPosition: 'center',
                  transition: 'transform 0.5s ease',
                  cursor: 'pointer'
                }} 
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.08)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
                <div style={{ padding: '25px 0' }}>
                  <h4 style={{ fontWeight: '800', fontSize: '1.3rem', marginBottom: '10px' }}>{project.title}</h4>
                  <p style={{ color: 'var(--text-light)', fontSize: '0.95rem', lineHeight: 1.6 }}>{project.desc}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
