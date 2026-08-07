import React from "react";

import astrovoice from "../assets/images/AstroVoice-v2.png"; // AstroVoice AI
import duckiebot from "../assets/images/duck01.png"; // Duckiebot
import cdcdungeon from "../assets/images/thumbnail.png"; // CI/CD Dungeon

import "../assets/styles/Project.scss";

type ProjectItem = {
  title: string;
  description: string;
  image: string;
  status: "Complete" | "In Progress" | "Planning" | "Not Started";
  link?: string;
};

function Project() {
  const projects: ProjectItem[] = [
    {
      title: "AstroVoice AI",
      description:
        "An AI-powered horoscope platform combining voice intelligence, machine learning, cloud databases, and user feedback analytics. Users can receive AI-powered horoscope readings, submit voice reflections, complete zodiac personality quizzes, and rate horoscope accuracy to help train future AI personalization and recommendation models.",
      image: astrovoice,
      status: "In Progress",
      link: "https://github.com/MonicaCheely/astrovoice-ai",
    },

    {
      title: "Duckiebot Autonomous Cloud-Native CI/CD Pipeline",
      description:
        "A robotics and MLOps project focused on building cloud-native CI/CD pipelines for autonomous robots. The project will automate data ingestion, ETL transformation, ML model training, testing, validation, and deployment using simulated telemetry data and cloud infrastructure.",
      image: duckiebot,
      status: "Not Started",
      link: "https://github.com/MonicaCheely/duckiebot-cloud-native-cicd-intelligence-pipeline",
    },

    {
      title: "CI/CD Dungeon Escape",
      description:
        "A Python-based dungeon crawler game that teaches CI/CD and DevOps concepts through 10 challenging stages. Includes hands-on exercises for learning deployment pipelines, automation, testing, and continuous integration principles.",
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
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={project.image}
                className="zoom"
                alt={`${project.title} Thumbnail`}
                width="100%"
              />
            </a>

            <h2>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.title}
              </a>
            </h2>

            <span className={`status-tag ${statusClass(project.status)}`}>
              {project.status}
            </span>

            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;