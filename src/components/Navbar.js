import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; // assuming your logo is here
import "../styles/navbar.css"; // Import your CSS

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    // Trigger the navbar to slide in when the component is mounted
    setShowNavbar(true);
  }, []);

  return (
    <nav className={`navbar ${showNavbar ? 'slide-in-down' : ''}`}>
      <div className="navbar-logo-container">
        <img src={logo} alt="Caldwell Robotics" className="navbar-logo" />
        <h1 className="navbar-title">Caldwell Robotics</h1>
      </div>

      {/* Hamburger Menu Icon */}
      <div className="navbar-menu-icon md:hidden" onClick={toggleMenu}>
        <svg
          className="menu-icon"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </div>

      {/* Navbar Links */}
      <div className={`navbar-links ${isOpen ? "block" : "hidden"} md:flex`}>
        <Link to="/" className="navbar-link">
          Home
        </Link>
        <Link to="/events" className="navbar-link">
          Events
        </Link>
        <Link to="/team" className="navbar-link">
          Team Members
        </Link>
        <Link to="/projectPage" className="navbar-link">
          Projects
        </Link>
        <Link to="/aboutUs" className="navbar-link">
          About Us
        </Link>
        <Link to="/gallery" className="navbar-link">
          Gallery
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;