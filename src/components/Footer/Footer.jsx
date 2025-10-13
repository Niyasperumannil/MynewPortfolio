import React from "react";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
       
        <a href="https://www.instagram.com/ni.iyas/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="footer-icon" />
        </a>
        <a href="https://www.linkedin.com/in/muhammed-niyas-63a01530b/" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn className="footer-icon" />
        </a>
         <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebookF className="footer-icon" />
        </a>
      </div>

      <div className="footer-center">
        <p className="footer-text">Niyas@2025</p>
      </div>

      <div className="footer-right">
        <p className="footer-dev">Developed by <span>Muhammed Niyas</span></p>
      </div>
    </footer>
  );
};

export default Footer;
