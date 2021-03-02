import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../../styles/Header.css"

function Header() {
  // This allows the component to check the route any time the user uses a link to navigate.
  const location = useLocation();

  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/jesalmehta/portfolio"
          className={location.pathname === "/jesalmehta/portfolio" ? "nav-link active" : "nav-link"}
        >
          Portfolio
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/jesalmehta/aboutMe"
          className={location.pathname === "/jesalmehta/aboutMe" ? "nav-link active" : "nav-link"}
        >
          About Me
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/jesalmehta/contact"
          className={location.pathname === "/jesalmehta/contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </Link>
      </li>
    </ul>
  );
}

export default Header;