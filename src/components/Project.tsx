import React from "react";

import duckiebot from "../assets/images/duck01.png"; // Duckiebot
import cdcdungeon from "../assets/images/thumbnail.png"; // CI/CD Dungeon
import astrovoice from "../assets/images/AstroVoice 1.png"; // AstroVoice AI

import "../assets/styles/Project.scss";

type ProjectItem = {
  title: string;
  description: string;
  image: string;
  status: "Complete" | "In Progress" | "Not Started" | "Planning";
  link?: string;
};

function Project() {
  const projects: ProjectItem[] = [
    {
      title: "Duckiebot Autonomous Cloud-Native CI/CD Pipeline",
      description:
        "Will design and implement cloud-native CI/CD pipelines for data ingestion, ETL transformation, and ML model training, automating validation and deployment of AI/ML components using simulated telemetry data.",
      image: duckiebot,
      status: "In Progress",
      link: "https://github.com/MonicaCheely/duckiebot-cloud-native-cicd-intelligence-pipeline",
    },

    {
      title: "AstroVoice AI",
      description:
        "An AI-powered horoscope platform combining voice intelligence, machine learning, cloud databases, and user feedback analytics. Users will receive horoscope readings, submit voice reflections, complete quizzes, and provide feedback to train future AI personalization models.",
      image: astrovoice,
      status: "Planning",
      link: "https://github.com/MonicaCheely/astrovoice-ai",
    },

    {
      title: "CI/CD Dungeon Escape",
      description:
        "A Python-based dungeon crawler game that teaches CI/CD and DevOps concepts through 10 challenging stages. Includes hands-on exercises for learning deployment pipelines.",
      image: cdcdungeon,
      status: "Complete",
      link: "https://github.com/MonicaCheely/cicd-dungeon-escape",
    },
  ];

  const statusClass = (status: string) => {
    switch (status) {
      case "Complete":
        return "green";
      case "In Progress":
        return "yellow";
      case "Planning":
        return "blue";
      case "Not Started":
        return "red";
      default:
        return "";
    }
  };

  return (
    <div className="projects-container" id="projects">
      <h1>Personal Projects</h1>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project" key={index}>
            {/* Clickable image */}
            {project.link ? (
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={project.image}
                  className="zoom"
                  alt={`${project.title} Thumbnail`}
                  width="100%"
                />
              </a>
            ) : (
              <img
                src={project.image}
                className="zoom"
                alt={`${project.title} Thumbnail`}
                width="100%"
              />
            )}

            {/* Clickable title */}
            <h2>
              {project.link ? (
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  {project.title}
                </a>
              ) : (
                project.title
              )}
            </h2>

            {/* Project Status */}
            <span className={`status-tag ${statusClass(project.status)}`}>
              {project.status}
            </span>

            {/* Description */}
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;