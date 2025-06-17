import React from 'react';

const heroBg = 'https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=1200&q=80'; // Placeholder educational image

const Homepage = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
    const phoneNumber = '+60182356059';
    const message = 'Hi! I would like to get free consultation about studying in Malaysia.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section
      className="d-flex align-items-center"
      style={{
        minHeight: '70vh',
        background: `linear-gradient(90deg, rgba(0,102,204,0.25) 0%, rgba(46,139,87,0.15) 100%), url(${heroBg}) center/cover no-repeat`,
        color: '#fff',
        position: 'relative',
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-7 col-lg-6">
            <h1 className="display-4 fw-bold" style={{ color: '#fff', textShadow: '0 2px 8px rgba(0,0,0,0.18)' }}>
              Study abroad<br />for Your Gateway to Success
            </h1>
            <p className="lead mb-4" style={{ color: '#f8f9fa', textShadow: '0 1px 4px rgba(0,0,0,0.12)' }}>
              We help Zambian students navigate the application process to top Malaysian universities. 
              Expert guidance, visa support, and personalized assistance for your study abroad journey.
            </p>
            <div className="d-flex gap-3">
              <button 
                className="btn btn-primary btn-lg px-4" 
                style={{ background: '#0066CC', border: 'none' }}
                onClick={scrollToContact}
              >
                Apply Now
              </button>
              <button 
                className="btn btn-outline-light btn-lg px-4"
                onClick={openWhatsApp}
              >
                Get Expert Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homepage; 