import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DescriptionIcon from "@mui/icons-material/Description"; // Resume icon
import "../assets/styles/Main.scss";

function Main() {
  return (
    <section id="home" className="about-section">
      <div className="content">
        <h1>Monica Cheely</h1>

        <p>
          Data QA Analyst | Automation Tester | Cloud-Native DevOps | AI/ML |
          Robotics | Python | SQL | Program Management | Cybersecurity
        </p>

        {/* Desktop social icons */}
        <div className="social_icons">
          {/* GitHub */}
          <a
            href="https://github.com/MonicaCheely"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon fontSize="large" />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/monicacheely"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon fontSize="large" />
          </a>

          {/* Resume Download with tooltip */}
          <a
            href="/resume.pdf"
            download="Monica_Cheely_Resume.pdf"
            className="tooltip resume-icon"
          >
            <DescriptionIcon fontSize="large" />
            <span className="tooltiptext">Download Resume</span>
          </a>
        </div>

        {/* Mobile social icons */}
        <div className="mobile_social_icons">
          {/* GitHub */}
          <a
            href="https://github.com/MonicaCheely"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon fontSize="large" />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/monicacheely"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon fontSize="large" />
          </a>

          {/* Resume Download with tooltip */}
          <a
            href="/resume.pdf"
            download="Monica_Cheely_Resume.pdf"
            className="tooltip resume-icon"
          >
            <DescriptionIcon fontSize="large" />
            <span className="tooltiptext">Download Resume</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Main;