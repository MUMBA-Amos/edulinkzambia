import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const stories = [
  {
    name: 'Chisenga Banda',
    country: 'Zambia',
    text: 'EduLink Zambia helped me secure admission to Asia Pacific University. The visa process was smooth and I\'m now studying Computer Science in Malaysia!',
    initial: 'C'
  },
  {
    name: 'Mwamba Chilufya',
    country: 'Zambia',
    text: 'Thanks to SmartBrain Empire and EduLink Zambia, I got my scholarship to Sunway University. The pre-departure support was exceptional!',
    initial: 'M'
  },
  {
    name: 'Nakamba Mwale',
    country: 'Zambia',
    text: 'The application process was so professional. I\'m now studying Business at INTI University and loving every moment in Malaysia!',
    initial: 'N'
  },
  {
    name: 'Lungile Phiri',
    country: 'Zambia',
    text: 'EduLink Zambia made my dream of studying abroad a reality. I\'m now at University of CyberJaya pursuing Engineering!',
    initial: 'L'
  },
  {
    name: 'Tembo Sinkala',
    country: 'Zambia',
    text: 'The visa support and accommodation arrangements were perfect. I\'m studying at Infrastructure University (IUKL) and couldn\'t be happier!',
    initial: 'T'
  },
  {
    name: 'Bwalya Mumba',
    country: 'Zambia',
    text: 'From Lusaka to City University in Malaysia - EduLink Zambia made the transition seamless. Highly recommend their services!',
    initial: 'B'
  }
];

// Helper to group stories into pairs
const groupStories = (arr, size) => {
  const grouped = [];
  for (let i = 0; i < arr.length; i += size) {
    grouped.push(arr.slice(i, i + size));
  }
  return grouped;
};

const groupedStories = groupStories(stories, 2);

const SuccessStories = () => {
  const colors = ['#0066CC', '#2E8B57', '#FF6B35', '#8B4513', '#4A90E2', '#E74C3C'];

  return (
    <div className="container py-5">
      <h2 className="text-center mb-5" style={{ color: '#0066CC', fontWeight: 700 }}>Success Stories</h2>
      <Carousel interval={4000} indicators={true} controls={true} fade nextIcon={<span className="carousel-control-next-icon" style={{ filter: 'invert(1)', width: 40, height: 40 }} />} prevIcon={<span className="carousel-control-prev-icon" style={{ filter: 'invert(1)', width: 40, height: 40 }} />}>
        {groupedStories.map((group, idx) => (
          <Carousel.Item key={idx}>
            <div className="row justify-content-center g-4">
              {group.map((story, j) => (
                <div className="col-12 col-md-6 d-flex" key={j}>
                  <div className="card shadow-sm border-0 flex-fill h-100" style={{ borderRadius: 18, maxWidth: 500, margin: '0 auto' }}>
                    <div className="card-body d-flex flex-column align-items-center text-center py-4">
                      <div 
                        className="rounded-circle mb-3 d-flex align-items-center justify-content-center"
                        style={{ 
                          width: 70, 
                          height: 70, 
                          backgroundColor: colors[(idx * 2 + j) % colors.length],
                          color: 'white',
                          fontSize: '24px',
                          fontWeight: 'bold'
                        }}
                      >
                        {story.initial}
                      </div>
                      <p className="card-text mb-3" style={{ fontSize: '1.1rem', color: '#333', minHeight: 60 }}>
                        <i className="fa-solid fa-quote-left me-2" style={{ color: '#FFD700' }}></i>
                        {story.text}
                      </p>
                      <cite className="blockquote-footer mt-2 mb-3" style={{ color: '#0066CC', fontWeight: 600 }}>{story.name}, {story.country}</cite>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default SuccessStories; 