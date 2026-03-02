import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDocker, faPython, faReact } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Skills.scss';

const devOpsStack = [
  "Git",
  "GitHub",
  "CI/CD Pipelines",
  "Docker",
  "Kubernetes (Foundations)",
  "AWS Fundamentals",
  "Azure DevOps",
  "Agile / Scrum",
  "Linux Basics"
];

const dataEngineeringStack = [
  "Python",
  "SQL",
  "PostgreSQL",
  "ETL Processes",
  "Data Cleaning",
  "Data Transformation",
  "Pandas",
  "NumPy",
  "Data Warehousing Concepts"
];

const aiEngineeringStack = [
  "Machine Learning Fundamentals",
  "Supervised Learning",
  "Unsupervised Learning",
  "Model Evaluation",
  "Scikit-Learn",
  "OpenAI API",
  "Hugging Face",
  "Model Deployment Concepts"
];

function Skills() {
  return (
    <div className="container" id="skills">
      <div className="skills-container">
        <h1>Skills & Certifications</h1>
        <div className="skills-grid">

          {/* IBM DevOps */}
          <div className="skill">
            <FontAwesomeIcon icon={faDocker} size="3x"/>
            <h3>IBM DevOps Certification</h3>
            <p>
              Hands-on experience building CI/CD pipelines, containerizing 
              applications, and applying DevOps best practices through IBM 
              certification labs and deployment exercises.
            </p>
            <div className="flex-chips">
              {devOpsStack.map((label, index) => (
                <Chip key={index} className='chip' label={label} />
              ))}
            </div>
          </div>

          {/* IBM Data Engineering */}
          <div className="skill">
            <FontAwesomeIcon icon={faPython} size="3x"/>
            <h3>IBM Data Engineering Certification</h3>
            <p>
              Designed and implemented ETL pipelines, structured relational 
              datasets, and prepared data for analytics and AI model training 
              in certification projects.
            </p>
            <div className="flex-chips">
              {dataEngineeringStack.map((label, index) => (
                <Chip key={index} className='chip' label={label} />
              ))}
            </div>
          </div>

          {/* IBM AI Engineering */}
          <div className="skill">
            <FontAwesomeIcon icon={faReact} size="3x"/>
            <h3>IBM AI Engineering Certification</h3>
            <p>
              Applied machine learning techniques to real-world problem 
              scenarios, focusing on model training, evaluation, and deployment 
              strategies for intelligent systems.
            </p>
            <div className="flex-chips">
              {aiEngineeringStack.map((label, index) => (
                <Chip key={index} className='chip' label={label} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Skills;