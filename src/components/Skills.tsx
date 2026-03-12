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
      {/* Tech Stacks */}
      <h2>DevOps Stack</h2>
      <div className="tech-stacks">
        {devOpsStack.map((tech) => (
          <div className="stack-chip" key={tech}>{tech}</div>
        ))}
      </div>

      <h2>Data Engineering Stack</h2>
      <div className="tech-stacks">
        {dataEngineeringStack.map((tech) => (
          <div className="stack-chip" key={tech}>{tech}</div>
        ))}
      </div>

      <h2>AI Engineering Stack</h2>
      <div className="tech-stacks">
        {aiEngineeringStack.map((tech) => (
          <div className="stack-chip" key={tech}>{tech}</div>
        ))}
      </div>

      <h2>QA / Automation Stack</h2>
      <div className="tech-stacks">
        {qaAutomationStack.map((tech) => (
          <div className="stack-chip" key={tech}>{tech}</div>
        ))}
      </div>

      {/* Certifications */}
      <h2>Certifications</h2>
      <div className="certifications">
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
          <span>AWS Certified Solutions Architect Professional</span>
          <span className="in-progress">In Progress</span>
        </div>
      </div>
    </div>
  );
}

export default Skills;