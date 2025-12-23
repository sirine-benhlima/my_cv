import React from "react";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-item">
        <FaEnvelope />
      </div>

      <div className="footer-item">
        <FaLinkedin />
      </div>


      <div className="footer-center">
        © 2025 — Tous droits réservés
      </div>
    </footer>
  );
};

export default Footer;
