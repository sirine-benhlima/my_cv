import React from "react";
import { FaLaptopCode, FaHeartbeat, FaCode } from "react-icons/fa";

const About = () => {
  return (
    <section className="about-section">

      {/* HERO */}
      <div className="about-hero">
        <p className="about-tagline">
          Santé & Informatique
        </p>
        <h2 className="about-title">
          À propos de moi
        </h2>
        <p className="about-description">
          Anesthésiste de formation et étudiante en Génie Logiciel et
          Systèmes Informatiques. Passionnée par l’informatique,
          le design et les technologies appliquées à la santé.
        </p>
      </div>

      {/* STATS */}
      <div className="about-stats">
        <div className="about-stat">
          <span>6</span>
          <p>Projets académiques</p>
        </div>
        <div className="about-stat">
          <span>50%</span>
          <p>Satisfaction</p>
          <p>En cours de développement...</p>
        </div>
        <div className="about-stat">
          <span>+2</span>
          <p>Ans en informatique</p>
        </div>
        <div className="about-stat">
          <span>+5</span>
          <p>Ans en santé</p>
        </div>
      </div>

      {/* FEATURES */}
      <div className="about-features">
        <div className="about-card">
          <div className="about-icon">
            <FaLaptopCode />
          </div>
          <h3>Informatique</h3>
          <p>
            Développement d’applications web modernes avec React
            et Spring Boot dans un cadre académique.
          </p>
        </div>

        <div className="about-card">
          <div className="about-icon">
            <FaHeartbeat />
          </div>
          <h3>Santé</h3>
          <p>
            Expérience professionnelle en anesthésie avec une
            compréhension approfondie du milieu médical.
          </p>
        </div>

        <div className="about-card">
          <div className="about-icon">
            <FaCode />
          </div>
          <h3>Double compétence</h3>
          <p>
            Lien entre les besoins médicaux et les solutions
            informatiques efficaces et sécurisées.
          </p>
        </div>
      </div>

    </section>
  );
};

export default About;
