import React, { useState } from "react";
import { FaUserCircle, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <div className="navbar-logo">
          <Link to="/">
            Sirine<span>CV</span>
          </Link>
        </div>

        {/* Menu */}
        <ul className="navbar-menu">
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/about">À propos</Link>
          </li>
          <li>
            <Link to="/education">Éducation</Link>
          </li>
          <li>
            <Link to="/experience">Expériences</Link>
          </li>
          <li>
            <Link to="/skills">Compétences</Link>
          </li>
          <li className="contact-btn">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        {/* Zone droite : Utilisateur */}
        <div className="navbar-right">
          <div className="user-menu" onClick={handleToggle}>
            <FaUserCircle className="user-icon" />
            <span className="user-name">Sirine</span>

           {dropdownOpen && (
  <div className="dropdown">
    <Link to="/profile" className="dropdown-item">
      <FaUser className="dropdown-icon" /> Profil
    </Link>

    {/* Déconnexion */}
    <Link to="/login" className="dropdown-item">
      <FaSignOutAlt className="dropdown-icon" /> Déconnexion
    </Link>
  </div>
)}
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
