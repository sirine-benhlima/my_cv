import React from "react";

const AdminDashboard = () => {
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Dashboard Admin</h1>

      <div className="dashboard-grid">
        <div className="dashboard-card">
          <h3 className="card-title">Projets Réalisés</h3>
          <p>3</p>
        </div>

        <div className="dashboard-card">
          <h3 className="card-title">Projets en Cours</h3>
          <p>3</p>
        </div>

        <div className="dashboard-card">
          <h3 className="card-title">Messages Reçus</h3>
          <p>7</p>
        </div>

        
      </div>
    </div>
  );
};

export default AdminDashboard;
