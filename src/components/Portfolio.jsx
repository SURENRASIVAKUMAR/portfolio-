import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';

function Portfolio() {
  return (
    <section id="projects" className="portfolio-section" style={{ position: 'relative', backgroundColor: '#f1f5f9', padding: '100px 5%', overflow: 'hidden' }}>
      
      {/* Animated Professional Background Elements */}
      <motion.div 
        animate={{ 
          rotate: [0, 360],
        }}
        transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
        style={{
          position: 'absolute',
          top: '-20%', right: '-10%',
          width: '70vw', height: '70vw',
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, rgba(59, 130, 246, 0.1) 40%, rgba(241, 245, 249, 0) 70%)', // More visible, beautiful light gradient
          zIndex: 0,
          borderRadius: '50%'
        }}
      />

      <div style={{ position: 'relative', zIndex: 2, maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ fontSize: '2.5rem', fontWeight: 900, color: '#0f172a', marginBottom: '60px', borderBottom: '2px solid rgba(0,0,0,0.1)', paddingBottom: '15px' }}
        >
          02 <span style={{ color: '#10b981' }}>PROJECTS</span>
        </motion.h3>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px' }}>
          {projects.map((project, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -10 }} // Smooth floating animation on hover
              key={project.id}
            >
              <div style={{ 
                display: 'block', 
                overflow: 'hidden', 
                color: 'inherit', 
                textDecoration: 'none', 
                background: '#ffffff', // Clean white background for cards
                borderRadius: '20px', 
                border: '1px solid rgba(0, 0, 0, 0.05)',
                boxShadow: '0 10px 30px -10px rgba(0,0,0,0.1)', 
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column',
                transition: 'border-color 0.4s ease, box-shadow 0.4s ease, transform 0.4s ease',
                position: 'relative',
                zIndex: 1
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(16, 185, 129, 0.3)'; // Emerald hover border
                e.currentTarget.style.boxShadow = '0 25px 50px -15px rgba(16, 185, 129, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.05)';
                e.currentTarget.style.boxShadow = '0 10px 30px -10px rgba(0,0,0,0.1)';
              }}
              >
                <Link to={`/project/${project.id}`} style={{ display: 'block', overflow: 'hidden' }}>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    style={{ 
                      width: '100%',
                      height: 'auto',
                      aspectRatio: '4/3',
                      objectFit: 'cover',
                      display: 'block',
                      transition: 'transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
                      cursor: 'pointer'
                    }} 
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.08)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  />
                </Link>
                
                <div style={{ padding: '30px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <Link to={`/project/${project.id}`} style={{ color: 'inherit', textDecoration: 'none', display: 'block' }}>
                    <h4 style={{ fontWeight: '800', fontSize: '1.4rem', color: '#0f172a', marginBottom: '12px' }}>{project.title}</h4>
                    <p style={{ color: '#475569', fontSize: '1rem', lineHeight: 1.7, marginBottom: '25px' }}>{project.desc}</p>
                  </Link>
                  
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '30px', marginTop: 'auto' }}>
                    {project.technologies?.map(tech => (
                      <span key={tech} style={{ 
                        padding: '6px 14px', 
                        background: 'rgba(0, 0, 0, 0.03)', 
                        border: '1px solid rgba(0, 0, 0, 0.1)',
                        color: '#475569', 
                        borderRadius: '30px', 
                        fontSize: '0.85rem', 
                        fontWeight: '500',
                        letterSpacing: '0.5px'
                      }}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px',
                        padding: '12px 24px',
                        backgroundColor: 'rgba(0, 0, 0, 0.05)',
                        color: '#0f172a',
                        textDecoration: 'none',
                        borderRadius: '10px',
                        fontWeight: '600',
                        fontSize: '0.95rem',
                        transition: 'all 0.3s ease',
                        border: '1px solid rgba(0, 0, 0, 0.1)'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
                        e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.2)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.05)';
                        e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.1)';
                      }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                      Source Code
                    </a>
                    
                    {project.demo && project.demo !== '#' && (
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '8px',
                          padding: '12px 24px',
                          background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)', // Emerald green instead of blue
                          color: '#fff',
                          textDecoration: 'none',
                          borderRadius: '10px',
                          fontWeight: '600',
                          fontSize: '0.95rem',
                          transition: 'all 0.3s ease',
                          boxShadow: '0 4px 15px rgba(16, 185, 129, 0.3)'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'translateY(-2px)';
                          e.currentTarget.style.boxShadow = '0 8px 20px rgba(16, 185, 129, 0.4)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'translateY(0)';
                          e.currentTarget.style.boxShadow = '0 4px 15px rgba(16, 185, 129, 0.3)';
                        }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
