import React from 'react';

const Footer = () => {
  return (
    <footer style={{ background: '#fff', borderTop: '2px solid #FFD700', color: '#004B87', fontWeight: 500 }} className="pt-4 pb-2 mt-5">
      <div className="container text-center">
        <hr style={{ borderTop: '1.5px solid #eee', margin: '0 0 1.5rem 0' }} />
        <img src={require('../images/edulinkzambia.png')} alt="EduLink Zambia Logo" className="img-fluid mb-2" style={{ maxHeight: '90px' }} />
        <span className="mx-2" style={{ color: '#FFD700', fontWeight: 700, fontSize: '1.1rem' }}></span>
        
        {/* Social Media Icons */}
        <div className="social-media mb-3">
          <a 
            href="https://www.facebook.com/profile.php?id=61577587467902" 
            target="_blank" 
            rel="noopener noreferrer"
            className="me-4"
            style={{ color: '#1877F2', fontSize: '28px', textDecoration: 'none', transition: 'transform 0.2s' }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a 
            href="https://wa.me/+60182356059" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ color: '#25D366', fontSize: '28px', textDecoration: 'none', transition: 'transform 0.2s' }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <i className="fab fa-whatsapp"></i>
          </a>
        </div>
        
        <p className="mb-2 mt-3" style={{ color: '#004B87', fontWeight: 600 }}>&copy; 2023 EduLink Zambia. All rights reserved.</p>
        <div className="footer-links mb-2">
          <a href="/privacy" className="me-3" style={{ color: '#004B87', textDecoration: 'underline', fontWeight: 500 }}>Privacy Policy</a>
          <a href="/terms" style={{ color: '#004B87', textDecoration: 'underline', fontWeight: 500 }}>Terms of Service</a>
        </div>
        <p className="mb-0" style={{ color: '#FFD700', fontWeight: 600, fontSize: '1rem' }}>Official Recruitment Partner of Smart Brain Empire</p>
      </div>
    </footer>
  );
};

export default Footer; 