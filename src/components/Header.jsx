import React from 'react';
import Navbar from './Navbar';
import Logo from './Logo';

const Header = () => {
  return (
    <header style={{ 
      background: '#fff', 
      boxShadow: '0 2px 8px rgba(0,0,0,0.07)', 
      borderBottom: '1.5px solid #e0e0e0', 
      zIndex: 1000, 
      position: 'fixed',
      width: '100%',
      top: 0,
      left: 0,
      overflow: 'visible'
    }}>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center py-2 py-md-3">
          {/* Logo */}
          <div style={{ width: '35%', position: 'relative' }}>
            <Logo />
          </div>
          
          {/* Navigation */}
          <div style={{ width: '65%' }}>
            <Navbar />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 