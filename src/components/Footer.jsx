import React from 'react';

function Footer() {
  return (
    <footer className="footer" style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      flexWrap: 'wrap',
      padding: '40px 60px',
      backgroundColor: 'var(--primary-color)',
      color: 'var(--secondary-color)',
      borderTop: '1px solid rgba(255,255,255,0.1)'
    }}>
      <div style={{ fontWeight: '900', fontSize: '1.5rem', letterSpacing: '2px' }}>SURENRA.</div>
      <div style={{ fontSize: '0.9rem', color: '#aaaaaa' }}>
        © {new Date().getFullYear()} by Surenra S. Designed with precision.
      </div>
      <div style={{ display: 'flex', gap: '25px', fontWeight: 'bold' }}>
        <a href="https://linkedin.com/in/surenra-s-621136293" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', transition: 'color 0.3s ease' }} onMouseEnter={(e) => e.target.style.color = '#ccc'} onMouseLeave={(e) => e.target.style.color = 'inherit'}>LINKEDIN</a>
        <a href="https://github.com/SURENRASIVAKUMAR" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', transition: 'color 0.3s ease' }} onMouseEnter={(e) => e.target.style.color = '#ccc'} onMouseLeave={(e) => e.target.style.color = 'inherit'}>GITHUB</a>
      </div>
    </footer>
  );
}

export default Footer;
