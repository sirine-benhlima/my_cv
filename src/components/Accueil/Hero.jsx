import React from "react";
import { useNavigate } from "react-router-dom";
import photo from "../../assets/photo.png";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="hero">

      <div className="hero-content">
        <h1>
          Bonjour, je suis <span>Sirine Benhlima</span>
        </h1>

        <h2>Anesthésiste & Étudiante en Informatique</h2>

        <p>
          Double compétence en santé et technologies de l’information,
          à la recherche d’un stage de fin d’études (PFE).
        </p>

        <div className="hero-buttons">
          <button
            className="btn-primary"
            onClick={() => navigate("/experience")}
          >
            Expériences
          </button>

          <button
            className="btn-secondary"
            onClick={() => navigate("/contact")}
          >
            Contact
          </button>
        </div>
      </div>

      <div className="hero-image">
        <img src={photo} alt="Sirine Benhlima" />
      </div>

    </section>
  );
};

export default Hero;
