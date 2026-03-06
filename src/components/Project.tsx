import React from "react";
import duckiebot from "../assets/images/duck01.png";
import cicdDungeon from "../assets/images/thumbnail.png";
import "../assets/styles/Project.scss";

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Personal Projects</h1>

      <div className="projects-grid">
        {/* Duckiebot project */}
        <div className="project">
          <a
            href="https://github.com/MonicaCheely/duckiebot-cloud-native-cicd-intelligence-pipeline"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={duckiebot}
              className="zoom"
              alt="Duckiebot Autonomous Cloud-Native CI/CD Pipeline Project"
              width="100%"
            />
          </a>

          <h2>
            <a
              href="https://github.com/MonicaCheely/duckiebot-cloud-native-cicd-intelligence-pipeline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Duckiebot Autonomous Cloud-Native CI/CD Pipeline Project (Planning Stage)
            </a>
          </h2>

          <p>
            Will design and implement cloud-native CI/CD pipelines for data ingestion,
            ETL transformation, and ML model training, automating validation and
            deployment of AI/ML components using simulated telemetry data.
          </p>
        </div>

        {/* CI/CD Dungeon Escape project */}
        <div className="project">
          <a
            href="https://github.com/MonicaCheely/cicd-dungeon-escape"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={cicdDungeon}
              className="zoom"
              alt="CI/CD Dungeon Escape Project Thumbnail"
              width="100%"
            />
          </a>

          <h2>
            <a
              href="https://github.com/MonicaCheely/cicd-dungeon-escape"
              target="_blank"
              rel="noopener noreferrer"
            >
              CI/CD Dungeon Escape
            </a>
          </h2>

          <p>
            A Python-based dungeon crawler game that teaches CI/CD and DevOps concepts
            while you battle monsters across 10 challenging stages. Complete the stages
            to earn your CI/CD Hero title!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Project;