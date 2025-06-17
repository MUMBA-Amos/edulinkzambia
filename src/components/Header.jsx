import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../images/edulinkzambia.png';

const Header = () => {
  const location = useLocation();
  const isOnPartnersPage = location.pathname === '/partners';

  const scrollToSection = (sectionId) => {
    if (isOnPartnersPage) {
      // If on partners page, navigate to home first, then scroll
      window.location.href = `/#${sectionId}`;
    } else {
      // If on home page, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header style={{ background: '#fff', boxShadow: '0 2px 8px rgba(0,0,0,0.07)', borderBottom: '1.5px solid #e0e0e0', zIndex: 100, position: 'relative' }}>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center py-3">
          <div className="d-flex flex-column align-items-start">
            <Link to="/" style={{ textDecoration: 'none' }}>
              <img src={logo} alt="EduLink Zambia Logo" style={{ height: 200, background: '#fff', borderRadius: 18, padding: 2 }} />
            </Link>
            <span style={{ fontSize: '1.1rem', color: '#888', marginTop: 8, marginLeft: 4, fontWeight: 500 }}>Powered by Smart Brain Empire Malaysia</span>
          </div>
          
          <div className="d-flex flex-column align-items-end">
            <nav className="navbar navbar-expand-lg mb-3" style={{ background: 'transparent' }}>
              <ul className="navbar-nav flex-row gap-3 w-100 justify-content-end" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                <li className="nav-item"><a className="nav-link fw-bold" style={{ color: '#003366', cursor: 'pointer' }} onClick={() => scrollToSection('homepage')}>Home</a></li>
                <li className="nav-item"><a className="nav-link fw-bold" style={{ color: '#003366', cursor: 'pointer' }} onClick={() => scrollToSection('services')}>Services</a></li>
                <li className="nav-item"><Link className="nav-link fw-bold" style={{ color: '#003366', textDecoration: 'none' }} to="/partners">Our Partners</Link></li>
                <li className="nav-item"><a className="nav-link fw-bold" style={{ color: '#003366', cursor: 'pointer' }} onClick={() => scrollToSection('success-stories')}>Success Stories</a></li>
                <li className="nav-item"><a className="nav-link fw-bold" style={{ color: '#003366', cursor: 'pointer' }} onClick={() => scrollToSection('about')}>About Us</a></li>
                <li className="nav-item"><a className="nav-link fw-bold" style={{ color: '#003366', cursor: 'pointer' }} onClick={() => scrollToSection('contact-section')}>Contact</a></li>
              </ul>
            </nav>
            
            {/* Social Media Icons */}
            <div className="social-media d-flex gap-4">
              <a 
                href="https://www.facebook.com/profile.php?id=61577587467902" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: '#1877F2', fontSize: '24px', textDecoration: 'none', transition: 'transform 0.2s' }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a 
                href="https://wa.me/+60182356059" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: '#25D366', fontSize: '24px', textDecoration: 'none', transition: 'transform 0.2s' }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 