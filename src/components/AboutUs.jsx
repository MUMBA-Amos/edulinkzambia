import React from 'react';

const AboutUs = () => {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8">
          <div className="card shadow-sm border-0 p-4" style={{ borderRadius: 18 }}>
            <div className="text-center mb-3">
              <i className="fa-solid fa-globe fa-3x mb-2" style={{ color: '#004B87' }}></i>
            </div>
            <h2 className="text-center mb-4" style={{ color: '#004B87', fontWeight: 700 }}>About Us</h2>
            <p className="lead text-center mb-3" style={{ color: '#004B87', fontWeight: 500 }}>
              EduLink Zambia is dedicated to democratizing access to quality education. With years of expertise, we guide students through their educational journey.
            </p>
            <p className="text-center mb-0" style={{ color: '#222' }}>
              As an <span style={{ color: '#FFD700', fontWeight: 600 }}>official recruitment partner</span> of Smart Brain Empire, we connect Zambian students with top global institutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs; 