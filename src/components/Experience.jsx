import React from 'react';
import { motion } from 'framer-motion';

function Experience() {
  const experiences = [
    { 
      id: 1, 
      company: 'Gateway Software Solutions', 
      role: 'Generative AI Intern', 
      date: 'May 2025 - Jun 2025', 
      desc: 'Gained practical exposure to Generative AI tools, prompt engineering, and AI-driven prototyping workflows in a professional software development environment.' 
    },
    { 
      id: 2, 
      company: 'IIE Empowering Dreams', 
      role: 'Java Cloud Architect Program', 
      date: 'Oct 2025 - Aug 2026', 
      desc: 'Engaged in a 160-hour intensive program focused on cloud-based application design, Java backend architecture, and deployment strategies for scalable enterprise solutions.' 
    },
    { 
      id: 3, 
      company: 'NPTEL (IIT Kharagpur)', 
      role: 'Cloud Computing Certification', 
      date: 'Jan 2025 - Apr 2025', 
      desc: 'Acquired hands-on expertise in cloud service models (IaaS, PaaS, SaaS), virtualization, and enterprise-grade deployment strategies.' 
    },
    { 
      id: 4, 
      company: 'NPTEL', 
      role: 'Introduction to IoT (Elite Grade)', 
      date: 'Jul 2025 - Oct 2025', 
      desc: 'Mastered IoT architectures, communication protocols (MQTT, CoAP), and sensor-based data processing algorithms.' 
    },
    { 
      id: 5, 
      company: 'Dr. N.G.P. Institute of Technology', 
      role: 'B.E. Computer Science and Engineering', 
      date: '2023 - 2027', 
      desc: 'Maintaining a 7.5 CGPA with a strong focus on software engineering principles, algorithms, and full-stack development methodologies.' 
    },
  ];

  return (
    <section id="experience" className="experience-section" style={{ 
      backgroundColor: 'var(--primary-color)', 
      color: 'var(--secondary-color)', 
      padding: '100px 20px',
      backgroundImage: 'url("https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")',
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed',
      backgroundPosition: 'center',
      position: 'relative'
    }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(15, 23, 42, 0.92)' }}></div>
      <div style={{ maxWidth: '900px', margin: '0 auto', width: '100%', position: 'relative', zIndex: 1 }}>
        <h3 className="section-title" style={{ color: 'var(--secondary-color)' }}>03 EXPERIENCE & EDUCATION</h3>
        
        <div style={{ marginTop: '70px', borderLeft: '2px solid rgba(255,255,255,0.2)', paddingLeft: '40px' }}>
          {experiences.map((exp, index) => (
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              key={exp.id} 
              style={{ marginBottom: '60px', position: 'relative' }}
            >
              <div style={{ 
                position: 'absolute', 
                left: '-48px', 
                top: '5px', 
                width: '14px', 
                height: '14px', 
                borderRadius: '50%', 
                backgroundColor: 'var(--secondary-color)',
                boxShadow: '0 0 10px rgba(255,255,255,0.5)'
              }} />
              <h4 style={{ fontSize: '1.6rem', marginBottom: '8px', fontWeight: 800 }}>{exp.role}</h4>
              <div style={{ fontWeight: '600', marginBottom: '15px', color: '#aaaaaa', letterSpacing: '1px' }}>
                {exp.company} | {exp.date}
              </div>
              <p style={{ color: '#cccccc', lineHeight: 1.8, fontSize: '1rem', maxWidth: '700px' }}>
                {exp.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
