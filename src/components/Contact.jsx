import React from 'react';

function Contact() {
  return (
    <section id="contact" className="contact-section" style={{ 
      padding: '100px 20px', 
      backgroundColor: 'var(--bg-color)',
      backgroundImage: 'url("https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")',
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed',
      backgroundPosition: 'center',
      position: 'relative'
    }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(248, 250, 252, 0.93)' }}></div>
      <div style={{ maxWidth: '1100px', margin: '0 auto', width: '100%', display: 'flex', flexWrap: 'wrap', gap: '60px', position: 'relative', zIndex: 1 }}>
        <div style={{ flex: '1 1 400px' }}>
          <h3 className="section-title">04 CONTACT</h3>
          <h2 className="section-subtitle">LET'S BUILD SOMETHING GREAT.</h2>
          <p style={{ marginBottom: '40px', color: 'var(--text-light)', fontSize: '1.1rem', lineHeight: 1.8, maxWidth: '400px' }}>
            I am always open to discussing product design work, software engineering opportunities, or partnership alignments. Feel free to reach out.
          </p>
          <div style={{ marginBottom: '20px' }}>
            <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '5px' }}>Email</div>
            <div style={{ fontWeight: 'bold', fontSize: '1.3rem' }}>
              <a href="mailto:surenra006@gmail.com" style={{ color: 'var(--primary-color)' }}>surenra006@gmail.com</a>
            </div>
          </div>
          <div>
            <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '5px' }}>Phone</div>
            <div style={{ fontWeight: 'bold', fontSize: '1.3rem' }}>
              63822 12334
            </div>
          </div>
        </div>
        
        <div style={{ flex: '1 1 400px' }}>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }} action="https://formsubmit.co/surenra006@gmail.com" method="POST">
            {/* Optional FormSubmit configurations */}
            <input type="hidden" name="_subject" value="New submission from your Portfolio!" />
            <input type="hidden" name="_template" value="table" />
            
            <div style={{ display: 'flex', gap: '20px' }}>
              <input type="text" name="First Name" placeholder="First Name" required style={{ flex: 1, padding: '18px', border: '1px solid #dcdcdc', outline: 'none', backgroundColor: '#fff', fontSize: '1rem' }} />
              <input type="text" name="Last Name" placeholder="Last Name" required style={{ flex: 1, padding: '18px', border: '1px solid #dcdcdc', outline: 'none', backgroundColor: '#fff', fontSize: '1rem' }} />
            </div>
            <input type="email" name="Email" placeholder="Email Address" required style={{ padding: '18px', border: '1px solid #dcdcdc', outline: 'none', backgroundColor: '#fff', fontSize: '1rem' }} />
            <input type="text" name="Subject" placeholder="Subject" required style={{ padding: '18px', border: '1px solid #dcdcdc', outline: 'none', backgroundColor: '#fff', fontSize: '1rem' }} />
            <textarea name="Message" placeholder="Message" rows="5" required style={{ padding: '18px', border: '1px solid #dcdcdc', outline: 'none', resize: 'vertical', backgroundColor: '#fff', fontSize: '1rem' }}></textarea>
            <button type="submit" style={{ 
              padding: '18px', 
              backgroundColor: 'var(--primary-color)', 
              color: 'var(--secondary-color)', 
              fontWeight: 'bold', 
              alignSelf: 'flex-start',
              width: '150px',
              border: 'none',
              cursor: 'pointer',
              letterSpacing: '1px',
              transition: 'background-color 0.3s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--text-light)'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--primary-color)'}
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
