import React, { useState } from 'react';
import './ExploreSection.css';

const ExploreSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

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
      title: 'Cart',
      subtitle: 'Ecommerce',
      image: 'https://ober-jekyll.netlify.app/assets/img/works/work1.jpg',
      link: 'https://shop.mghomecart.com/home',
    },
    {
      title: 'Cloth',
      subtitle: 'Uniform',
      image: 'https://romosgarments.com/wp-content/uploads/2025/07/Romos-Icon-e1752513589489.png',
      link: 'https://romosgarments.com/',
    },
    {
      title: 'Hospital',
      subtitle: 'Dental',
      image: '\Screenshot 2025-10-20 103244.png',
      link: 'https://docter-backend.vercel.app/',
    },
  ];

  return (
    <div className="explore-section-wrapper">
      {/* 🔹 Top button */}
      

      {/* 🔹 Existing grid */}
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
<div className="explore-topbar">
        <button
          className="next-projects-btn"
          onClick={openModal}
        >
          Next Projects →
        </button>
      </div>
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={closeModal}>
              ×
            </button>
            <h2>Next Projects</h2>
            <div className="modal-projects-grid">
              {sections.map((section, idx) => (
                <div className="modal-project-card" key={idx}>
                  <img
                    src={section.image}
                    alt={section.title}
                    className="modal-project-image"
                  />
                  <h3>{section.title}</h3>
                  <p>{section.subtitle}</p>
                  <a
                    href={section.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modal-project-link"
                  >
                    Visit
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExploreSection;
