// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import RegisterModal from "./RegisterModal";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar__logo">
          <img
            width="100"
            src="https://tkcdn.tekedia.com/wp-content/uploads/2024/04/15122938/AI-artificial-intelligience-768x440.jpg"
          />
        </div>

        <div className={`navbar__links ${isMobileMenuOpen ? "active" : ""}`}>
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
            Home
          </Link>
          <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>
            About
          </Link>
          <Link to="/gallery" onClick={() => setIsMobileMenuOpen(false)}>
            Gallery
          </Link>
          <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
            Contact
          </Link>
        </div>

        <div className="navbar__right">
          <button
            onClick={() => setIsRegisterOpen(true)}
            className="register-btn"
          >
            Register
          </button>
          <div
            className="hamburger"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            ☰
          </div>
        </div>
      </nav>

      {isRegisterOpen && (
        <RegisterModal onClose={() => setIsRegisterOpen(false)} />
      )}
    </>
  );
};

export default Navbar;
