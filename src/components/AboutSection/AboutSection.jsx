import React from "react";
import "./AboutSection.css";

const ProfileSection = () => {
  return (
    <section className="profile-section">
      <div className="profile-content">
        <div className="profile-text">
          <p className="profile-intro">
        I'm a MERN Web Developer based in New York and enjoy building modern web apps. I love coding, exploring new tech, and creating clean digital experiences.
          </p>
          <div className="social-icons">
            <a href="#" className="icon">🌐</a>
            <a href="#" className="icon">🐦</a>
          </div>
        </div>
        <div className="metrics-row">
          <div className="metric">
            <div className="metric-label">Born in</div>
            <div className="metric-value">kerala</div>
          </div>
          <div className="metric">
            <div className="metric-label">Experience</div>
            <div className="metric-value">1+Years</div>
          </div>
          <div className="metric">
            <div className="metric-label">Date of Birth</div>
            <div className="metric-value">05 March 2003</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
