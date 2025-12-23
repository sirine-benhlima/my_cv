import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Layouts
import Layout from "./Pages/Layout";
import AdminLayout from "./components/Admin/AdminLayaout";

// Pages publiques
import Hero from "./components/Accueil/Hero";
import About from "./components/Accueil/About";
import Education from "./components/Accueil/Education";
import Experience from "./components/Accueil/Experience";
import Skills from "./components/Accueil/Skills";
import ContactForm from "./components/Formulaire/FormulaireG6";

// Pages Admin
import AdminDashboard from "./components/Admin/Dashboard";
import AdminUsers from "./components/Admin/Users";
import AdminAnalytics from "./components/Admin/Analytics";
import AdminSettings from "./components/Admin/Settings";
import Logout from "./components/Admin/Logout";
// Login
import Login from "./Pages/Login";
// ProtectedRoute
import ProtectedRoute from './components/Admin/ProtectedRoute';

const App = () => {
  const user = { isAuthenticated: true, role: 'admin' };

  return (
    <Routes>
      {/* Routes publiques */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Hero />} />
        <Route path="about" element={<About />} />
        <Route path="education" element={<Education />} />
        <Route path="experience" element={<Experience />} />
        <Route path="skills" element={<Skills />} />
        <Route path="contact" element={<ContactForm />} />
      </Route>
       {/* Login */}
      <Route path="/login" element={<Login />} />


      {/* Routes admin protégées */}
      <Route
        path="/admin"
        element={<ProtectedRoute isAllowed={user.isAuthenticated && user.role === 'admin'} />}
      >
        <Route element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="users" element={<AdminUsers />} />
          <Route path="analytics" element={<AdminAnalytics />} />
          <Route path="settings" element={<AdminSettings />} />
        </Route>
      </Route>
       
       
      {/* Logout */}
      <Route path="/logout" element={<Logout />} />

      {/* Redirection pour les routes inconnues */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;
