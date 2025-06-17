import React from 'react';
import apuLogo from '../images/AsiaPacificUniversityOfTechnology&Innovation.png';
import cyberjayaLogo from '../images/Cyberjaya.png';
import cityLogo from '../images/City_University_Malaysia.png';
import sunwayLogo from '../images/Sunway University.png';
import iuklLogo from '../images/UIKL.png';
import intiLogo from '../images/inti-university.webp';

const partners = [
  {
    name: 'Asia Pacific University',
    location: 'Kuala Lumpur, Malaysia',
    logo: apuLogo,
  },
  {
    name: 'University of CyberJaya',
    location: 'Cyberjaya, Malaysia',
    logo: cyberjayaLogo,
  },
  {
    name: 'City University',
    location: 'Kuala Lumpur, Malaysia',
    logo: cityLogo,
  },
  {
    name: 'Sunway University',
    location: 'Selangor, Malaysia',
    logo: sunwayLogo,
  },
  {
    name: 'Infrastructure University (IUKL)',
    location: 'Kajang, Malaysia',
    logo: iuklLogo,
  },
  {
    name: 'INTI University',
    location: 'Nilai, Malaysia',
    logo: intiLogo,
  },
  // Add more partners as needed
];

const Partners = () => {
  return (
    <div className="container py-5">
      {/* Page Header */}
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold mb-3" style={{ color: '#004B87' }}>Our Partners</h1>
        <p className="lead text-muted">Building bridges between Zambian students and world-class educational opportunities</p>
      </div>

      {/* SmartBrain Empire Section */}
      <div className="row mb-5">
        <div className="col-12">
          <div className="card shadow-lg border-0" style={{ borderRadius: 20, overflow: 'hidden' }}>
            <div className="row g-0">
              <div className="col-md-6">
                <div className="p-5 h-100 d-flex flex-column justify-content-center">
                  <div className="mb-3">
                    <span className="badge bg-primary px-3 py-2" style={{ background: '#004B87' }}>Strategic Partner</span>
                  </div>
                  <h2 className="fw-bold mb-3" style={{ color: '#004B87' }}>SmartBrain Empire</h2>
                  <p className="lead mb-4">
                    Our premier educational technology partner, SmartBrain Empire, is revolutionizing how students access quality education in Malaysia.
                  </p>
                  <div className="row mb-4">
                    <div className="col-6">
                      <div className="text-center">
                        <div className="fw-bold fs-3" style={{ color: '#004B87' }}>500+</div>
                        <div className="text-muted">Students Placed</div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="text-center">
                        <div className="fw-bold fs-3" style={{ color: '#004B87' }}>25+</div>
                        <div className="text-muted">Partner Universities</div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <h6 className="fw-bold mb-2" style={{ color: '#004B87' }}>What SmartBrain Empire Offers:</h6>
                    <ul className="list-unstyled">
                      <li className="mb-2"><i className="fas fa-check-circle me-2" style={{ color: '#28a745' }}></i>Advanced AI-powered application matching</li>
                      <li className="mb-2"><i className="fas fa-check-circle me-2" style={{ color: '#28a745' }}></i>Comprehensive visa application support</li>
                      <li className="mb-2"><i className="fas fa-check-circle me-2" style={{ color: '#28a745' }}></i>24/7 student support system</li>
                      <li className="mb-2"><i className="fas fa-check-circle me-2" style={{ color: '#28a745' }}></i>Pre-departure orientation programs</li>
                    </ul>
                  </div>
                  <button 
                    className="btn btn-primary btn-lg align-self-start" 
                    style={{ background: '#004B87', border: 'none' }}
                    onClick={() => window.open('https://www.smartbrainempire.com/', '_blank')}
                  >
                    Learn More About SmartBrain
                  </button>
                </div>
              </div>
              <div className="col-md-6">
                <div className="h-100" style={{ 
                  background: 'linear-gradient(135deg, #004B87 0%, #0066CC 100%)',
                  minHeight: '400px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <div className="text-center text-white">
                    <i className="fas fa-brain fa-5x mb-3"></i>
                    <h3 className="fw-bold">SmartBrain Empire</h3>
                    <p className="mb-0">Empowering Education Through Technology</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* University Partners Section */}
      <div className="mb-4">
        <h2 className="fw-bold mb-4" style={{ color: '#004B87' }}>Our University Partners</h2>
        <p className="text-muted mb-4">We partner with prestigious universities across Malaysia to provide Zambian students with world-class educational opportunities.</p>
      </div>
      
      <div className="row g-4">
        {partners.map((partner, idx) => (
          <div key={idx} className="col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm border-0" style={{ borderRadius: 15, transition: 'transform 0.2s' }}>
              <div className="card-body text-center p-4">
                <div className="mb-3" style={{ height: 80, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img 
                    src={partner.logo} 
                    alt={partner.name} 
                    style={{ 
                      maxHeight: 60, 
                      maxWidth: '100%', 
                      objectFit: 'contain' 
                    }} 
                  />
                </div>
                <h5 className="fw-bold mb-2" style={{ color: '#004B87' }}>{partner.name}</h5>
                <p className="text-muted mb-3">{partner.location}</p>
                {/* <button className="btn btn-outline-primary btn-sm" style={{ borderColor: '#004B87', color: '#004B87' }}>
                  View Programs
                </button> */}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Partnership Benefits Section */}
      <div className="row mt-5 pt-5">
        <div className="col-12">
          <div className="text-center mb-4">
            <h2 className="fw-bold mb-3" style={{ color: '#004B87' }}>Why Partner With Us?</h2>
            <p className="lead text-muted">We ensure seamless educational journeys for Zambian students</p>
          </div>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="text-center">
                <div className="mb-3">
                  <i className="fas fa-handshake fa-3x" style={{ color: '#004B87' }}></i>
                </div>
                <h5 className="fw-bold mb-2" style={{ color: '#004B87' }}>Trusted Partnerships</h5>
                <p className="text-muted">Long-standing relationships with top Malaysian universities</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="text-center">
                <div className="mb-3">
                  <i className="fas fa-users fa-3x" style={{ color: '#004B87' }}></i>
                </div>
                <h5 className="fw-bold mb-2" style={{ color: '#004B87' }}>Student Success</h5>
                <p className="text-muted">High success rate in student placements and visa approvals</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="text-center">
                <div className="mb-3">
                  <i className="fas fa-globe fa-3x" style={{ color: '#004B87' }}></i>
                </div>
                <h5 className="fw-bold mb-2" style={{ color: '#004B87' }}>Global Network</h5>
                <p className="text-muted">Access to international educational opportunities</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners; 