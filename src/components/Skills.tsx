import React from "react";
import "../assets/styles/Skills.scss";

/* ============================
      NEW STACKS ADDED
============================ */

const roboticsEngineeringStack = [
  "Robot Kinematics",
  "Robot Dynamics",
  "Motion Planning",
  "PID Control",
  "Differential Drive Robots",
  "Computer Vision",
  "Autonomous Navigation",
  "Simulation (Webots)",
  "ROS Fundamentals",
  "Reinforcement Learning for Robotics"
];

const cloudEngineeringStack = [
  "Google Cloud Platform (GCP)",
  "Azure Cloud",
  "Cloud Architecture",
  "Cloud Networking",
  "Cloud Storage",
  "IAM & Security",
  "Compute Engine / Azure VMs",
  "Cloud Functions / Azure Functions",
  "BigQuery",
  "Azure Data Factory"
];

/* ============================
      EXISTING STACKS
============================ */

const devOpsStack = [
  "Git",
  "GitHub",
  "CI/CD Pipelines",
  "Docker",
  "Kubernetes",
  "Google Cloud",
  "Infrastructure as Code",
  "Azure DevOps",
  "Linux / Bash",
  "Agile / Scrum"
];

const dataEngineeringStack = [
  "Python",
  "SQL",
  "PostgreSQL",
  "ETL Pipelines",
  "Data Cleaning",
  "Data Transformation",
  "Pandas",
  "NumPy",
  "Data Warehousing",
  "Data Quality Validation"
];

const aiEngineeringStack = [
  "Machine Learning",
  "Supervised Learning",
  "Unsupervised Learning",
  "Model Evaluation",
  "Scikit-Learn",
  "Neural Networks",
  "Natural Language Processing",
  "Hugging Face",
  "Model Deployment"
];

const qaAutomationStack = [
  "Automated Testing",
  "Manual Testing",
  "User Acceptance Testing",
  "Test Case Development",
  "SAP Fiori Testing",
  "Worksoft Certify",
  "Software Development Life Cycle",
  "Integration Testing",
  "Debugging"
];

/* ============================
      COMPONENT
============================ */

function Skills() {
  return (
    <div id="skills" className="skills-container content-wrapper">
      
      {/* Page Title */}
      <h1>Skills</h1>

      {/* Grid Wrapper */}
      <div className="stacks-grid">

        {/* Robotics Engineering */}
        <div className="stack-box">
          <h2>Robotics Engineering Stack</h2>
          <div className="tech-stacks">
            {roboticsEngineeringStack.map((tech) => (
              <div className="stack-chip" key={tech}>{tech}</div>
            ))}
          </div>
        </div>

        {/* Cloud Engineering */}
        <div className="stack-box">
          <h2>Cloud Engineering Stack</h2>
          <div className="tech-stacks">
            {cloudEngineeringStack.map((tech) => (
              <div className="stack-chip" key={tech}>{tech}</div>
            ))}
          </div>
        </div>

        {/* DevOps */}
        <div className="stack-box">
          <h2>DevOps Stack</h2>
          <div className="tech-stacks">
            {devOpsStack.map((tech) => (
              <div className="stack-chip" key={tech}>{tech}</div>
            ))}
          </div>
        </div>

        {/* Data Engineering */}
        <div className="stack-box">
          <h2>Data Engineering Stack</h2>
          <div className="tech-stacks">
            {dataEngineeringStack.map((tech) => (
              <div className="stack-chip" key={tech}>{tech}</div>
            ))}
          </div>
        </div>

        {/* AI Engineering */}
        <div className="stack-box">
          <h2>AI Engineering Stack</h2>
          <div className="tech-stacks">
            {aiEngineeringStack.map((tech) => (
              <div className="stack-chip" key={tech}>{tech}</div>
            ))}
          </div>
        </div>

        {/* QA / Automation */}
        <div className="stack-box">
          <h2>QA / Automation Stack</h2>
          <div className="tech-stacks">
            {qaAutomationStack.map((tech) => (
              <div className="stack-chip" key={tech}>{tech}</div>
            ))}
          </div>
        </div>

      </div>

      {/* Certifications */}
      <h2>Certifications</h2>

      <div className="certifications-wrapper">
        
        {/* Completed */}
        <div className="certifications-column">
          <div className="certifications">

            <div className="cert">
              <a href="https://coursera.org/share/2993e1b013d6b07b29c7852b2122909d" target="_blank" rel="noopener noreferrer">
                Google Project Management Professional Certificate
              </a>
              <span className="completed">Completed</span>
            </div>

            <div className="cert">
              <a href="https://www.coursera.org/account/accomplishments/professional-cert/AKPKMEX4N97R" target="_blank" rel="noopener noreferrer">
                Google Cybersecurity Professional Certificate
              </a>
              <span className="completed">Completed</span>
            </div>

            <div className="cert">
              <a href="https://www.coursera.org/account/accomplishments/specialization/GLCW2BCL7PBB" target="_blank" rel="noopener noreferrer">
                Scrum Master Certification
              </a>
              <span className="completed">Completed</span>
            </div>

            <div className="cert">
              <a href="https://www.coursera.org/account/accomplishments/professional-cert/JVKZBGGRHSMW" target="_blank" rel="noopener noreferrer">
                Google Data Analytics Professional Certificate
              </a>
              <span className="completed">Completed</span>
            </div>

            <div className="cert">
              <a href="https://www.coursera.org/account/accomplishments/professional-cert/Q7SE9KGNFM4P" target="_blank" rel="noopener noreferrer">
                IBM Cybersecurity Analyst Professional Certificate
              </a>
              <span className="completed">Completed</span>
            </div>

          </div>
        </div>

        {/* In Progress */}
        <div className="certifications-column">
          <div className="certifications">

            <div className="cert">
              <span>Modern Robotics Specialization — Northwestern</span>
              <span className="in-progress">In Progress</span>
            </div>

            <div className="cert">
              <span>Introduction to Robotics with Webots — Cyberbotics</span>
              <span className="in-progress">In Progress</span>
            </div>

            <div className="cert">
              <span>Control of Mobile Robots — Georgia Tech</span>
              <span className="in-progress">In Progress</span>
            </div>

            <div className="cert">
              <span>Computer Vision Specialization — University at Buffalo</span>
              <span className="in-progress">In Progress</span>
            </div>

            <div className="cert">
              <span>Deep Learning Specialization — Andrew Ng</span>
              <span className="in-progress">In Progress</span>
            </div>

            <div className="cert">
              <span>IBM AI Engineering Professional Certificate</span>
              <span className="in-progress">In Progress</span>
            </div>

            <div className="cert">
              <span>IBM AI Developer Professional Certificate</span>
              <span className="in-progress">In Progress</span>
            </div>

            <div className="cert">
              <span>Python, Bash and SQL Essentials for Data Engineering Specialization</span>
              <span className="in-progress">In Progress</span>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
}

export default Skills;
