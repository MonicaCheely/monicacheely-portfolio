import React from "react";
import duckiebot from "../assets/images/duck01.png";
import "../assets/styles/Project.scss";

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Personal Projects</h1>

      <div className="projects-grid">
        <div className="project">
          <img
            src={duckiebot}
            className="zoom"
            alt="Duckiebot Autonomous Cloud-Native CI/CD Pipeline Project"
            width="100%"
          />

          <h2>
            Duckiebot Autonomous Cloud-Native CI/CD Pipeline Project (Planning Stage)
          </h2>

          <p>
            Will design and implement cloud-native CI/CD pipelines for data ingestion,
            ETL transformation, and ML model training, automating validation and
            deployment of AI/ML components using simulated telemetry data.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Project;