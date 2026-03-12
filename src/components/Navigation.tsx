import React from "react";
import { Link } from "react-scroll";
import "../assets/styles/Navigation.scss";

const Navigation = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <Link to="home" smooth={true} duration={500} offset={-70}>
            HOME
          </Link>
        </li>
        <li>
          <Link to="experience" smooth={true} duration={500} offset={-70}>
            EXPERIENCE
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500} offset={-70}>
            PROJECTS
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500} offset={-70}>
            SKILLS / CERTIFICATION
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500} offset={-70}>
            CONTACT
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;