import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
          <img src={require("../../Assests/Images/TechSams logo.png")} alt="" />
        </a>
        <div className="menu-icon" onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <a href="#home" className="nav-links" onClick={handleClick}>
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#services" className="nav-links" onClick={handleClick}>
              Services
            </a>
          </li>
          <li className="nav-item">
            <a href="#portfolio" className="nav-links" onClick={handleClick}>
              Portfolio
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-links" onClick={handleClick}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
