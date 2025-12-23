import React from "react";

const Analytics = () => {
  const stats = [
    { title: "Utilisateurs", value: 128, color: "blue" },
    { title: "Projets", value: 6, color: "green" },
    { title: "Satisfaction", value: "50%", color: "orange" },
    { title: "Activité mensuelle", value: "+12%", color: "purple" },
  ];

  return (
    <div className="analytics-container">
      <h1 className="analytics-title">Statistiques & Analyses</h1>

      {/* ===== STATS CARDS ===== */}
      <div className="analytics-grid">
        {stats.map((s, index) => (
          <div key={index} className={`analytics-card ${s.color}`}>
            <h3>{s.title}</h3>
            <p>{s.value}</p>
          </div>
        ))}
      </div>

      {/* ===== GRAPHS ===== */}
      <div className="analytics-section">
        <h2>Activité générale</h2>

        <div className="analytics-charts">
          <div className="chart-card">
            <h4>Utilisateurs par mois</h4>
            <div className="chart-placeholder">
              Graphique (à connecter plus tard)
            </div>
          </div>

          <div className="chart-card">
            <h4>Progression des projets</h4>
            <div className="chart-placeholder">
              Graphique (à connecter plus tard)
            </div>
          </div>
        </div>
      </div>

      {/* ===== DETAILS ===== */}
      <div className="analytics-section">
        <h2>Détails & Observations</h2>
        <div className="analytics-info">
          <p>
            📊 Les statistiques montrent une évolution progressive de
            l’activité de la plateforme.
          </p>
          <p>
            🚧 Les projets sont encore en phase de développement.
          </p>
          <p>
            💡 La satisfaction utilisateur est actuellement à 50% (en
            amélioration).
          </p>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
