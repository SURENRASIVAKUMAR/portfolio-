import React from 'react';
import { motion } from 'framer-motion';

function Hero() {
  return (
    <section id="home" className="hero-section" style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#050814', 
      overflow: 'hidden',
      padding: '120px 5% 60px'
    }}>
      
      {/* Subtle Background Glows */}
      <div style={{
        position: 'absolute',
        top: '-10%',
        left: '-10%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(5,8,20,0) 70%)',
        filter: 'blur(50px)',
        zIndex: 0
      }}></div>

      <div style={{
        position: 'absolute',
        bottom: '-10%',
        right: '-10%',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(139,92,246,0.1) 0%, rgba(5,8,20,0) 70%)',
        filter: 'blur(60px)',
        zIndex: 0
      }}></div>

      <div className="hero-container" style={{ 
        position: 'relative', 
        zIndex: 2, 
        width: '100%', 
        maxWidth: '1200px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '50px',
        flexWrap: 'wrap'
      }}>
        
        {/* Left Column: Text Content */}
        <div style={{ flex: '1 1 500px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ 
              fontSize: 'clamp(3.5rem, 8vw, 6rem)', 
              fontWeight: 900, 
              lineHeight: 1, 
              letterSpacing: '-2px',
              background: 'linear-gradient(90deg, #ffffff 0%, #94a3b8 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: '15px'
            }}
          >
            SURENR SIVAKUMAR
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            style={{ 
              fontSize: 'clamp(1.2rem, 3vw, 1.8rem)', 
              fontWeight: 400, 
              color: '#cbd5e1',
              marginBottom: '30px',
              borderLeft: '4px solid #3b82f6',
              paddingLeft: '20px'
            }}
          >
            <strong style={{ color: '#ffffff', fontWeight: 700 }}>Full Stack developer</strong>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            style={{ fontSize: '1.1rem', color: '#94a3b8', maxWidth: '550px', lineHeight: 1.8, marginBottom: '40px' }}
          >
            Results-driven Software Engineer with comprehensive expertise in React.js, Node.js, and Java ecosystems. Demonstrated success in engineering robust web applications and integrating advanced AI capabilities. Passionate about translating complex requirements into elegant, high-performance, and production-ready solutions that drive real-world impact.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}
          >
            <a 
              href="/SURENRA_S_Resume.pdf" 
              download="SURENRA_S_Resume.pdf"
              style={{ 
                display: 'inline-block',
                padding: '16px 35px', 
                backgroundColor: '#3b82f6', 
                color: '#ffffff', 
                fontSize: '1rem', 
                fontWeight: 600,
                letterSpacing: '1px',
                borderRadius: '8px',
                textDecoration: 'none',
                boxShadow: '0 4px 15px rgba(59, 130, 246, 0.4)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#2563eb';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(59, 130, 246, 0.6)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#3b82f6';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(59, 130, 246, 0.4)';
              }}
            >
              DOWNLOAD RESUME
            </a>
            
            <a 
              href="#projects"
              style={{ 
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '16px 35px', 
                backgroundColor: 'rgba(255, 255, 255, 0.03)', 
                color: '#ffffff', 
                border: '1px solid rgba(255,255,255,0.1)',
                fontSize: '1rem', 
                fontWeight: 600,
                letterSpacing: '1px',
                borderRadius: '8px',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.03)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
              }}
            >
              VIEW WORK
            </a>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            style={{ display: 'flex', gap: '20px', marginTop: '40px' }}
          >
            <a href="https://github.com/SURENRA" target="_blank" rel="noopener noreferrer"
               style={{ color: '#94a3b8', transition: 'color 0.3s ease' }}
               onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'}
               onMouseLeave={(e) => e.currentTarget.style.color = '#94a3b8'}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            </a>
            <a href="https://linkedin.com/in/SURENRA" target="_blank" rel="noopener noreferrer"
               style={{ color: '#94a3b8', transition: 'color 0.3s ease' }}
               onMouseEnter={(e) => e.currentTarget.style.color = '#3b82f6'}
               onMouseLeave={(e) => e.currentTarget.style.color = '#94a3b8'}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
          </motion.div>
        </div>

        {/* Right Column: Profile Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          style={{ flex: '1 1 400px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
          <div style={{
            position: 'relative',
            width: '100%',
            maxWidth: '450px',
            aspectRatio: '3/4',
            borderRadius: '24px',
            background: 'linear-gradient(135deg, rgba(59,130,246,0.2) 0%, rgba(139,92,246,0.2) 100%)',
            padding: '1px', // Border wrapper
            boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)'
          }}>
            {/* The actual image container */}
            <div style={{
              width: '100%',
              height: '100%',
              borderRadius: '23px',
              overflow: 'hidden',
              backgroundColor: '#0f172a',
              backgroundImage: 'url("/profile.png")', // User's profile image
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}>
              {/* Fallback overlay in case image is missing so it's not just a black square */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(to top, rgba(5,8,20,0.8) 0%, rgba(5,8,20,0) 40%)',
                zIndex: 1,
                pointerEvents: 'none'
              }}></div>
            </div>
            
            {/* Decorative Element */}
            <div style={{
              position: 'absolute',
              bottom: '-20px',
              left: '-20px',
              width: '100px',
              height: '100px',
              border: '2px solid rgba(59, 130, 246, 0.5)',
              borderRadius: '20px',
              zIndex: -1,
              transform: 'rotate(-10deg)'
            }}></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
