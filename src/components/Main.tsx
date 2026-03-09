import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "../assets/styles/Main.scss";

function Main() {
  return (
    <div className="container" id="home">
      <div className="about-section">
        <div className="content">
          {/* Desktop social icons */}
          <div className="social_icons">
            <a
              href="https://github.com/MonicaCheely"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon style={{ color: 'white', fontSize: 30 }} />
            </a>
            <a
              href="https://www.linkedin.com/in/monicacheely"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon style={{ color: 'white', fontSize: 30 }} />
            </a>
          </div>

          {/* Name and description */}
          <h1>Monica Cheely</h1>
          <p>
            Data QA Analyst | Automation Tester | Cloud-Native DevOps | AI/ML | Robotics | Python | SQL | Program Management | Cybersecurity IT Customer Service Representative
          </p>

          {/* Button linking back to top / home (optional) */}
          <div className="home-button-wrapper">
            <a href="#home" className="home-button">
              Back to Top
            </a>
          </div>

          {/* Mobile social icons */}
          <div className="mobile_social_icons">
            <a
              href="https://github.com/MonicaCheely"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon style={{ color: 'white', fontSize: 30 }} />
            </a>
            <a
              href="https://www.linkedin.com/in/monicacheely"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon style={{ color: 'white', fontSize: 30 }} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;