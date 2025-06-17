import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const universities = [
  'International University of Malaya-Wales',
  'Universiti Tun Abdul Razak',
  'University of Malaya',
  'Universiti Kuala Lumpur',
  'Universiti Kebangsaan Malaysia',
  'Universiti Teknologi Malaysia (Kuala Lumpur campus)',
  'Universiti Islam Antarabangsa Malaysia (UIAM/IIUM)',
  'Universiti Putra Malaysia (Kuala Lumpur campus)',
  'HELP University',
  'SEGi University',
  'UCSI University',
  'Asia Pacific University of Technology & Innovation (APU)',
  'City University Malaysia',
  'MAHSA University',
  'Lincoln University College',
  'Universiti Tun Hussein Onn Malaysia (Kuala Lumpur campus)',
  'Universiti Sains Islam Malaysia (Kuala Lumpur campus)',
  'Universiti Pertahanan Nasional Malaysia (UPNM)',
  'Open University Malaysia',
  'Universiti Teknologi MARA (UiTM) Kuala Lumpur',
  "Taylor's University",
  'Sunway University',
  'University of Nottingham Malaysia',
];

const courses = [
  'Engineering',
  'Business & Management',
  'Computer Science & IT',
  'Medicine & Health Sciences',
  'Law',
  'Social Sciences',
  'Education',
  'Hospitality & Tourism',
  'Arts & Design',
  'Sciences',
  'Architecture & Built Environment',
  'Communication & Media',
  'Other',
];

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    emailjs.sendForm(
      'service_iree9qm', // Replace with your EmailJS service ID
      'template_sfehvwr', // Replace with your EmailJS template ID
      form.current,
      'M9xo2qjt017o9GVsT' // Replace with your EmailJS public key
    )
      .then((result) => {
        setSubmitStatus({
          type: 'success',
          message: 'Message sent successfully! We will get back to you soon.'
        });
        form.current.reset();
      })
      .catch((error) => {
        setSubmitStatus({
          type: 'error',
          message: 'Failed to send message. Please try again later.'
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div id="contact-section" className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-7">
          <div className="card shadow-sm border-0 p-4" style={{ borderRadius: 18 }}>
            <div className="text-center mb-3">
              <i className="fa-solid fa-envelope fa-3x mb-2" style={{ color: '#004B87' }}></i>
            </div>
            <h2 className="text-center mb-4" style={{ color: '#004B87', fontWeight: 700 }}>Contact Us</h2>
            <p className="text-center mb-2" style={{ color: '#004B87', fontWeight: 500 }}>
              <i className="fa-brands fa-whatsapp me-2" style={{ color: '#25D366' }}></i>WhatsApp: <a href="https://wa.me/+60182356059" style={{ color: '#004B87', textDecoration: 'underline' }}>+60182356059</a>
            </p>
            <p className="text-center mb-4" style={{ color: '#004B87', fontWeight: 500 }}>
              {/* <i className="fa-solid fa-envelope me-2" style={{ color: '#004B87' }}></i>Email:  */}
              <a href="mailto:mfit0353@gmail.com" style={{ color: '#004B87', textDecoration: 'underline' }}></a>
            </p>
            
            {/* Social Media Icons */}
            <div className="social-media d-flex justify-content-center gap-4 mb-4">
              <a 
                href="https://www.facebook.com/profile.php?id=61577587467902" 
                target="_blank" 
                rel="noopener noreferrer"
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

            {submitStatus.message && (
              <div className={`alert alert-${submitStatus.type === 'success' ? 'success' : 'danger'} mb-4`} role="alert">
                {submitStatus.message}
              </div>
            )}

            <form ref={form} onSubmit={sendEmail} className="mt-2">
              <div className="mb-3">
                <input 
                  type="text" 
                  name="user_name" 
                  className="form-control" 
                  placeholder="Name" 
                  style={{ borderRadius: 10 }} 
                  required
                />
              </div>
              <div className="mb-3">
                <input 
                  type="email" 
                  name="user_email" 
                  className="form-control" 
                  placeholder="Email" 
                  style={{ borderRadius: 10 }} 
                  required
                />
              </div>
              <div className="mb-3">
                <select 
                  name="university" 
                  className="form-select" 
                  style={{ borderRadius: 10 }} 
                  required
                >
                  <option value="" disabled>Select University in Kuala Lumpur</option>
                  {universities.map((uni, idx) => (
                    <option key={idx} value={uni}>{uni}</option>
                  ))}
                </select>
              </div>
              <div className="mb-3">
                <select 
                  name="course" 
                  className="form-select" 
                  style={{ borderRadius: 10 }} 
                  required
                >
                  <option value="" disabled>Select Field of Study</option>
                  {courses.map((course, idx) => (
                    <option key={idx} value={course}>{course}</option>
                  ))}
                </select>
              </div>
              <div className="mb-3">
                <textarea 
                  name="message" 
                  className="form-control" 
                  placeholder="Message" 
                  rows={4} 
                  style={{ borderRadius: 10 }}
                  required
                ></textarea>
              </div>
              <div className="d-grid">
                <button 
                  type="submit" 
                  className="btn btn-primary btn-lg" 
                  style={{ 
                    background: '#004B87', 
                    border: 'none', 
                    borderRadius: 10, 
                    fontWeight: 600 
                  }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send'}
                </button>
              </div>
            </form>
            <p className="text-center mt-4 mb-0" style={{ color: '#222' }}>
              <i className="fa-solid fa-location-dot me-2" style={{ color: '#FFD700' }}></i>Location: Lusaka, Zambia
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 