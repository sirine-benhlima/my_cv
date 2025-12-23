import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Nettoyage session
    localStorage.removeItem("token");

    const timer = setTimeout(() => {
      navigate("/");
    }, 1500);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="logout-container">
      <div className="logout-card">
        <div className="logout-icon">⏻</div>

        <h1 className="logout-title">Déconnexion</h1>

        <p className="logout-text">
          Vous êtes en train de vous déconnecter.
          <br />
          Redirection en cours vers la page d’accueil…
        </p>

        <div className="logout-loader"></div>
      </div>
    </div>
  );
};

export default Logout;
