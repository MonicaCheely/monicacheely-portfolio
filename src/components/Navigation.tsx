import React from "react";
import { Link } from "react-scroll";
import "../assets/styles/Navigation.scss";

const NAVBAR_HEIGHT = 70; // adjust to match your navbar height

const Navigation = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <Link
            to="home"
            smooth="easeInOutQuart"
            duration={350}
            offset={-NAVBAR_HEIGHT}
            spy={true}
          >
            HOME
          </Link>
        </li>
        <li>
          <Link
            to="experience"
            smooth="easeInOutQuart"
            duration={350}
            offset={-NAVBAR_HEIGHT}
            spy={true}
          >
            EXPERIENCE
          </Link>
        </li>
        <li>
          <Link
            to="projects"
            smooth="easeInOutQuart"
            duration={350}
            offset={-NAVBAR_HEIGHT}
            spy={true}
          >
            PROJECTS
          </Link>
        </li>
        <li>
          <Link
            to="skills"
            smooth="easeInOutQuart"
            duration={350}
            offset={-NAVBAR_HEIGHT}
            spy={true}
          >
            SKILLS
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth="easeInOutQuart"
            duration={350}
            offset={-NAVBAR_HEIGHT}
            spy={true}
          >
            CONTACT
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;