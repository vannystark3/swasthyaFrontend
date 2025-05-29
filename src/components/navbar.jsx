import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = ({ loggedIn }) => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Left: Logo */}
        <Link to="/" className="navbar-logo">
          Swasthya
        </Link>

        {/* Center: Navigation Links */}
        <ul className="navbar-menu">
          <li>
            <Link to="/" className="navbar-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/consult" className="navbar-link">
              Consult
            </Link>
          </li>
          <li>
            <Link to="/about" className="navbar-link">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" className="navbar-link">
              Contact
            </Link>
          </li>
        </ul>

        {/* Right: Login/Profile */}
        <div className="navbar-user">
          {loggedIn ? (
            <Link to="/profile" className="navbar-link profile-link">
              Profile
            </Link>
          ) : (
            <Link to="/login" className="login-link">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
