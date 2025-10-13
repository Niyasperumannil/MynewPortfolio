import React from "react";
import "./Header.css";
// import profileImage from "./profile.jpg";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <div className="hero-subtitle">WEB DEVELOPER</div>
          <h1 className="hero-name">
            Muhammed<br />
            Niyas
          </h1>
        </div>
        <div className="hero-image-wrapper">
          <img
            src="/Niyas_file_-_Copy-removebg-preview (2).png"
            alt="Profile"
            className="hero-image"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
