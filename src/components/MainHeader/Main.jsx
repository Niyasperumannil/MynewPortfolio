import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./Main.css";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Load saved theme
  useEffect(() => {
    const savedMode = localStorage.getItem("theme");
    if (savedMode === "dark") {
      setIsDarkMode(true);
      document.body.classList.add("dark-mode");
    }
  }, []);

  // Toggle Dark Mode
  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    document.body.classList.toggle("dark-mode", newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
  };

  // Toggle Sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <header className="site-header">
        <div className="header-inner">
          <div className="header-logo-text">
            <h1 className="logo-text">NIYAS</h1>
          </div>

          <div className="header-actions">
            <button
              className="dark-mode-toggle"
              aria-label="Toggle dark mode"
              onClick={toggleDarkMode}
            >
              <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
            </button>
            <button
              className="menu-toggle"
              aria-label="Toggle menu"
              onClick={toggleSidebar}
            >
              <FontAwesomeIcon icon={isSidebarOpen ? faTimes : faBars} />
            </button>
          </div>
        </div>
      </header>

      {/* Sidebar Menu */}
      <nav className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <ul className="menu">
          <li><a href="#about">About Me</a></li>
          <li><a href="#resume">My Resume</a></li>
          <li><a href="#projects">My Projects</a></li>
          <li><a href="#contact">Contact Me</a></li>
          <li><a href="#footer">Footer</a></li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
