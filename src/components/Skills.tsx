import React from "react";
import "../assets/styles/Skills.scss";

const devOpsStack = [
  "Git",
  "GitHub",
  "CI/CD Pipelines",
  "Docker",
  "Kubernetes",
  "AWS Cloud",
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

function Skills() {
  return (
    <div id="skills" className="skills-container content-wrapper">

      {/* Page Title */}
      <h1>Skills</h1>

      {/* DevOps */}
      <h2>DevOps Stack</h2>
      <div className="tech-stacks">
        {devOpsStack.map((tech) => (
          <div className="stack-chip" key={tech}>{tech}</div>
        ))}
      </div>

      {/* Data Engineering */}
      <h2>Data Engineering Stack</h2>
      <div className="tech-stacks">
        {dataEngineeringStack.map((tech) => (
          <div className="stack-chip" key={tech}>{tech}</div>
        ))}
      </div>

      {/* AI */}
      <h2>AI Engineering Stack</h2>
      <div className="tech-stacks">
        {aiEngineeringStack.map((tech) => (
          <div className="stack-chip" key={tech}>{tech}</div>
        ))}
      </div>

      {/* QA */}
      <h2>QA / Automation Stack</h2>
      <div className="tech-stacks">
        {qaAutomationStack.map((tech) => (
          <div className="stack-chip" key={tech}>{tech}</div>
        ))}
      </div>

      {/* Certifications */}
      <h2>Certifications</h2>
      <div className="certifications-wrapper">

        {/* Completed Certifications */}
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

        {/* In Progress Certifications */}
        <div className="certifications-column">
          <div className="certifications">
            <div className="cert">
              <span>Learn SQL Basics for Data Science Specialization</span>
              <span className="in-progress">In Progress</span>
            </div>

            <div className="cert">
              <span>IBM Data Science Certificate</span>
              <span className="in-progress">In Progress</span>
            </div>

            <div className="cert">
              <span>IBM AI Engineering Certificate</span>
              <span className="in-progress">In Progress</span>
            </div>

            <div className="cert">
              <span>IBM DevOps Certificate</span>
              <span className="in-progress">In Progress</span>
            </div>

            <div className="cert">
              <span>IBM Data Engineering Certificate</span>
              <span className="in-progress">In Progress</span>
            </div>

            <div className="cert">
              <span>Microsoft Power BI Developer and Architect Professional Certificate</span>
              <span className="in-progress">In Progress</span>
            </div>

            <div className="cert">
              <span>Selenium Python Automation Testing & Frameworks Specialization</span>
              <span className="in-progress">In Progress</span>
            </div>

            <div className="cert">
              <span>ISTQB Foundation Level (CTFL)</span>
              <span className="in-progress">In Progress</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Skills;