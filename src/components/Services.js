import React from 'react';

const services = [
  {
    title: 'University Applications',
    icon: 'fa-solid fa-graduation-cap',
    desc: 'Guidance and support for applying to top universities worldwide.'
  },
  {
    title: 'Visa Support',
    icon: 'fa-solid fa-passport',
    desc: 'Expert help with student visa applications and documentation.'
  },
  {
    title: 'Scholarship Aid',
    icon: 'fa-solid fa-award',
    desc: 'Assistance in finding and applying for scholarships.'
  },
  {
    title: 'Pre-departure Briefings',
    icon: 'fa-solid fa-plane-departure',
    desc: 'Comprehensive briefings to prepare you for studying abroad.'
  }
];

const Services = () => {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-5" style={{ color: '#0066CC', fontWeight: 700 }}>Our Services</h2>
      <div className="row g-4 justify-content-center">
        {services.map((service, idx) => (
          <div className="col-12 col-md-6 col-lg-3 d-flex" key={idx}>
            <div className="card shadow-sm border-0 flex-fill text-center h-100" style={{ borderRadius: 18 }}>
              <div className="card-body py-4">
                <div className="mb-3">
                  <i className={`${service.icon}`} style={{ fontSize: '2.5rem', color: '#2E8B57' }}></i>
                </div>
                <h5 className="card-title mb-2" style={{ color: '#0066CC', fontWeight: 600 }}>{service.title}</h5>
                <p className="card-text text-muted" style={{ minHeight: 60 }}>{service.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <p className="text-center mt-5" style={{ color: '#2E8B57', fontWeight: 500, fontSize: '1.1rem' }}>
        Partnering with <span style={{ color: '#FFD700', fontWeight: 700 }}>Smart Brain Empire</span> to connect you with top universities worldwide.
      </p>
    </div>
  );
};

export default Services; 