import React from 'react';

const Navbar = () => {
  return (
    <nav style={{ background: '#fff', borderBottom: '1.5px solid #e0e0e0', boxShadow: '0 1px 4px rgba(0,0,0,0.03)', minHeight: 56, zIndex: 99, position: 'relative' }}>
      <div className="container">
        <ul className="navbar-nav flex-row gap-3 w-100 justify-content-end" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
          <li className="nav-item"><a className="nav-link fw-bold" style={{ color: '#003366' }} href="/">Home</a></li>
          <li className="nav-item"><a className="nav-link fw-bold" style={{ color: '#003366' }} href="/services">Services</a></li>
          <li className="nav-item"><a className="nav-link fw-bold" style={{ color: '#003366' }} href="/partners">Our Partners</a></li>
          <li className="nav-item"><a className="nav-link fw-bold" style={{ color: '#003366' }} href="/success-stories">Success Stories</a></li>
          <li className="nav-item"><a className="nav-link fw-bold" style={{ color: '#003366' }} href="/about">About Us</a></li>
          <li className="nav-item"><a className="nav-link fw-bold" style={{ color: '#003366' }} href="/contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar; 