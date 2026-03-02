import React from "react"; 
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/MonicaCheely" target="_blank" rel="noreferrer">
              <GitHubIcon />
            </a>
            <a href="https://www.linkedin.com/in/monicacheely" target="_blank" rel="noreferrer">
              <LinkedInIcon />
            </a>
          </div>

          <h1>Monica Cheely</h1>
          <p>
            Data QA Analyst | Automation Tester | Cloud-Native DevOps | AI/ML | Robotics | Python | SQL | Program Management | IT Customer Service - SOC Security
          </p>

          <div className="mobile_social_icons">
            <a href="https://github.com/MonicaCheely" target="_blank" rel="noreferrer">
              <GitHubIcon />
            </a>
            <a href="https://www.linkedin.com/in/monicacheely" target="_blank" rel="noreferrer">
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;