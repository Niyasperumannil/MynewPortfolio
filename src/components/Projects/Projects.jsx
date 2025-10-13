import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <section className="projects-section">
      <div className="projects-header">
        <h2 className="projects-title">My Projects</h2>
        <div className="projects-description">
          <div className="divider"></div>
          <p>
            A Collection of my favorite projects I’ve designed recently. Feeling
            great while sharing here.
          </p>
        </div>
      </div>

      {/* <div className="projects-filter">
        <button className="active">All</button>
        <button>UI UX Design</button>
        <button>Photography</button>
        <button>Development</button>
        <button>Branding</button>
      </div> */}
    </section>
  );
};

export default Projects;
