import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/edulinkzambia.png';

const Logo = () => {
  return (
    <div style={{ 
      position: 'relative',
      width: '100%'
    }}>
      <Link to="/" style={{ textDecoration: 'none', width: '100%' }}>
        <img 
          src={logo} 
          alt="EduLink Zambia Logo" 
          style={{ 
            height: 'auto',
            maxHeight: '200px',
            width: '100%',
            background: '#fff', 
            borderRadius: '12px', 
            padding: '4px',
            objectFit: 'contain'
          }} 
        />
      </Link>
      <span className="d-none d-md-block" style={{ 
        fontSize: '0.9rem', 
        color: '#888', 
        marginTop: '4px', 
        marginLeft: '4px', 
        fontWeight: 500
      }}>
        Powered by Smart Brain Empire Malaysia
      </span>
    </div>
  );
};

export default Logo; 