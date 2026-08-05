import React from 'react';
import { motion } from 'framer-motion';

function Skills() {
  const skills = [
    { name: 'React.js & Frontend', percentage: 90 },
    { name: 'Node.js & Express', percentage: 85 },
    { name: 'Java & Cloud Architecture', percentage: 80 },
    { name: 'Python & Generative AI', percentage: 75 },
    { name: 'PostgreSQL & Database Design', percentage: 85 },
    { name: 'Git, GitHub & Version Control', percentage: 90 },
  ];

  return (
    <section id="skills" className="skills-section" style={{ 
      backgroundColor: 'var(--bg-color)',
      backgroundImage: 'url("https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")',
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed',
      backgroundPosition: 'center',
      position: 'relative'
    }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(248, 250, 252, 0.95)' }}></div>
      <div style={{ maxWidth: '900px', margin: '0 auto', width: '100%', position: 'relative', zIndex: 1 }}>
        <h3 className="section-title">01 PROFESSIONAL SKILLS</h3>
        <h2 className="section-subtitle">MY TECHNICAL EXPERTISE & PROFICIENCY</h2>
        
        <div className="skills-list" style={{ display: 'flex', flexDirection: 'column', gap: '35px', marginTop: '50px' }}>
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px', fontWeight: 'bold', fontSize: '1.1rem' }}>
                <span>{skill.name}</span>
                <span>{skill.percentage}%</span>
              </div>
              <div style={{ width: '100%', height: '6px', backgroundColor: '#e0e0e0', borderRadius: '3px', overflow: 'hidden' }}>
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.percentage}%` }}
                  transition={{ duration: 1.2, delay: 0.1 * index, ease: "easeOut" }}
                  viewport={{ once: true }}
                  style={{ height: '100%', backgroundColor: 'var(--primary-color)' }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
