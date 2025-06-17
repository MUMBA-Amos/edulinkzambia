import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Homepage from './components/Homepage';
import Services from './components/Services';
import SuccessStories from './components/SuccessStories';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Partners from './components/Partners';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Handle hash navigation when page loads
    if (window.location.hash) {
      const sectionId = window.location.hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <div style={{ paddingTop: '258px' }}>
          <Routes>
            <Route path="/" element={
              <>
                <div id="homepage">
                  <Homepage />
                </div>
                <div id="about">
                  <AboutUs />
                </div>
                <div id="services">
                  <Services />
                </div>
                <div id="success-stories">
                  <SuccessStories />
                </div>
                <div id="contact-section">
                  <Contact />
                </div>
              </>
            } />
            <Route path="/partners" element={<Partners />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
