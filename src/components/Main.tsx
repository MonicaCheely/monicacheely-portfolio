import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
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

        <div className="social_icons">
          <a
            href="https://github.com/MonicaCheely"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon fontSize="large" />
          </a>

          <a
            href="https://www.linkedin.com/in/monicacheely"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon fontSize="large" />
          </a>
        </div>

        <div className="mobile_social_icons">
          <a
            href="https://github.com/MonicaCheely"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon fontSize="large" />
          </a>
          <a
            href="https://www.linkedin.com/in/monicacheely"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon fontSize="large" />
          </a>
        </div>
      </div>

      <div className="image-wrapper">
        <img src={require("../images/profile.png")} alt="Monica" />
      </div>
    </section>
  );
}

export default Main;