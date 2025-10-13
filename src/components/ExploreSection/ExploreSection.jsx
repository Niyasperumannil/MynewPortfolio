import React from 'react';
import './ExploreSection.css';

const ExploreSection = () => {
  const sections = [
    {
      title: 'Dexo',
      subtitle: 'Agency',
      image: '/Screenshot 2025-10-13 124805.png',
      link: 'https://www.dexoinnovation.com/',
    },
    {
      title: 'Dexo',
      subtitle: 'Academy',
      image: '/Screenshot 2025-10-13 124939.png',
      link: 'https://www.dexoacademy.com/',
    },
    {
      title: 'Online',
      subtitle: 'News',
      image: '/Screenshot 2025-10-13 125208.png',
      link: 'https://valluvanadonline.com/',
    },
    {
      title: 'Online',
      subtitle: 'Ecommerce',
      image: 'https://ober-jekyll.netlify.app/assets/img/works/work1.jpg',
      link: 'https://shop.mghomecart.com/home',
    },
  ];

  return (
    <div className="explore-grid">
      {sections.map((section, index) => (
        <div className="explore-container" key={index}>
          <div className="explore-image">
            <a
              href={section.link}
              target="_blank"
              rel="noopener noreferrer"
              className="live-image-link"
            >
              <span className="live-icon">🔗</span>
              <img
                src={section.image}
                alt={section.title}
                className="live-preview-image"
              />
            </a>
          </div>

          <div className="explore-text">
            <h1>{section.title}</h1>
            <p>{section.subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExploreSection;
