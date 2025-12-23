import React from "react";
import { Outlet, Link } from "react-router-dom";
import { FaHome, FaUsers, FaCog, FaChartBar, FaSignOutAlt } from "react-icons/fa";


const AdminLayout = () => {
  return (
    <div className="admin-layout">

      {/* Sidebar */}
      <aside className="admin-sidebar">
        <div className="sidebar-logo">
          <Link to="/">Admin Pannel</Link>
        </div>

        <nav className="sidebar-menu">
          <Link to="/admin" className="sidebar-item">
            <FaHome className="sidebar-icon" /> Dashboard
          </Link>
          <Link to="/admin/users" className="sidebar-item">
            <FaUsers className="sidebar-icon" /> Utilisateurs
          </Link>
          <Link to="/admin/analytics" className="sidebar-item">
            <FaChartBar className="sidebar-icon" /> Statistiques
          </Link>
          <Link to="/admin/settings" className="sidebar-item">
            <FaCog className="sidebar-icon" /> Paramètres
          </Link>
          <Link to="/logout" className="sidebar-item logout">
            <FaSignOutAlt className="sidebar-icon" /> Déconnexion
          </Link>
        </nav>
      </aside>

      {/* Contenu principal */}
      <main className="admin-content">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
