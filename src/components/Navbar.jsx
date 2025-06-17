import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const isOnPartnersPage = location.pathname === '/partners';
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState('Home');
  const [isFadingOut, setIsFadingOut] = useState(false);

  const scrollToSection = (sectionId, sectionName) => {
    if (isOnPartnersPage) {
      window.location.href = `/#${sectionId}`;
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setCurrentSection(sectionName);
    setIsMenuOpen(false);
  };

  // Update current section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['homepage', 'services', 'success-stories', 'about', 'contact-section'];
      const scrollPosition = window.scrollY + 100; // Offset for header

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            const sectionName = sectionId.split('-').map(word => 
              word.charAt(0).toUpperCase() + word.slice(1)
            ).join(' ');
            setCurrentSection(sectionName);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'homepage', name: 'Home' },
    { id: 'services', name: 'Services' },
    { id: 'partners', name: 'Our Partners', isLink: true },
    { id: 'success-stories', name: 'Success Stories' },
    { id: 'about', name: 'About Us' },
    { id: 'contact-section', name: 'Contact' }
  ];

  // Helper: Build breadcrumb array (max 3 levels)
  const getBreadcrumb = () => {
    // For this SPA, we only have Home and currentSection, but you can expand this logic for deeper nesting
    if (currentSection === 'Home' || currentSection === 'Homepage') {
      return ['Home'];
    }
    return ['Home', currentSection];
  };
  const breadcrumb = getBreadcrumb();

  // Handle closing with fade-out
  const handleCloseMenu = () => {
    setIsFadingOut(true);
    setTimeout(() => {
      setIsMenuOpen(false);
      setIsFadingOut(false);
    }, 250); // Duration matches CSS transition
  };

  // Set header height for mobile dropdown positioning
  const headerHeight = 150; // px, adjust if your header is taller/shorter

  return (
    <div className="d-flex align-items-center position-relative w-100 justify-content-end">
      {/* Mobile Menu Button (hamburger or close X) */}
      <div className="d-md-none">
        <button
          className="btn ms-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{
            border: 'none',
            background: 'transparent',
            fontSize: '24px',
            color: '#003366',
            padding: '8px'
          }}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {(isMenuOpen || isFadingOut) && (
        <div
          className={`d-md-none position-fixed${isFadingOut ? ' menu-fade-out' : ' menu-fade-in'}`}
          style={{
            top: `${headerHeight}px`,
            right: '0',
            left: '0',
            background: '#fff',
            padding: '1rem',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            zIndex: 1000,
            width: '100%',
            borderTop: '1px solid #e0e0e0',
            transition: 'opacity 0.25s',
            opacity: isFadingOut ? 0 : 1
          }}
        >
          <nav className="navbar">
            <ul className="navbar-nav w-100" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
              {navItems.map((item, index) => (
                <li key={item.id} className="nav-item mb-2">
                  {item.isLink ? (
                    <Link 
                      className="nav-link fw-bold" 
                      style={{ color: '#003366', textDecoration: 'none' }} 
                      to="/partners"
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <a 
                      className="nav-link fw-bold" 
                      style={{ color: '#003366', cursor: 'pointer' }} 
                      onClick={() => scrollToSection(item.id, item.name)}
                    >
                      {item.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          {/* Social Media Icons - Mobile */}
          <div className="social-media d-flex gap-4 mt-3">
            <a 
              href="https://www.facebook.com/profile.php?id=61577587467902" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: '#1877F2', fontSize: '24px', textDecoration: 'none' }}
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a 
              href="https://wa.me/+60182356059" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: '#25D366', fontSize: '24px', textDecoration: 'none' }}
            >
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>
        </div>
      )}

      {/* Navigation and Social Media - Desktop */}
      <div className="d-none d-md-flex flex-column align-items-end">
        <nav className="navbar navbar-expand-lg mb-3" style={{ background: 'transparent' }}>
          <ul className="navbar-nav flex-row gap-3 w-100 justify-content-end" 
              style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            {navItems.map((item, index) => (
              <li key={item.id} className="nav-item">
                {item.isLink ? (
                  <Link 
                    className="nav-link fw-bold" 
                    style={{ color: '#003366', textDecoration: 'none' }} 
                    to="/partners"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a 
                    className="nav-link fw-bold" 
                    style={{ color: '#003366', cursor: 'pointer' }} 
                    onClick={() => scrollToSection(item.id, item.name)}
                  >
                    {item.name}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>
        
        {/* Social Media Icons - Desktop */}
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
  );
};

export default Navbar; 