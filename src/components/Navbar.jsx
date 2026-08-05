import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Home', target: 'home' },
    { name: 'Skills', target: 'skills' },
    { name: 'Projects', target: 'projects' },
    { name: 'Experience', target: 'experience' },
    { name: 'Contact', target: 'contact' },
  ];

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: scrolled ? '15px 40px' : '30px 40px',
        backgroundColor: 'rgba(5, 8, 20, 0.95)',
        backdropFilter: 'blur(10px)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        transition: 'all 0.3s ease',
        color: '#fff',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
      }}
    >
      <div style={{ fontWeight: 900, fontSize: '1.5rem', letterSpacing: '2px', cursor: 'pointer' }} onClick={() => scrollTo('home')}>
        SURENRA
      </div>
      <ul style={{ display: 'flex', gap: '30px', fontWeight: 600, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
        {links.map((link) => (
          <li key={link.name} style={{ cursor: 'pointer' }} onClick={() => scrollTo(link.target)}>
            <span className="nav-link">{link.name}</span>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
}

export default Navbar;
