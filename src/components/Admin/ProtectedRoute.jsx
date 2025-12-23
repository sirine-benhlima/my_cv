/*import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ redirectPath = "/" }) => {
  const token = localStorage.getItem("token");

  // Si l'utilisateur n'est pas connecté
  if (!token) {
    return <Navigate to={redirectPath} replace />;
  }

  // Si connecté → afficher les pages protégées
  return <Outlet />;
};

export default ProtectedRoute;*/
/* import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({ isAllowed, redirectPath = '/'

, children }) => {

if (!isAllowed) {
return <Navigate to={redirectPath} replace />;
}

return children ? children : <Outlet />;
};

export default ProtectedRoute; */
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({ isAllowed, redirectPath = '/' }) => {
  if (!isAllowed) return <Navigate to={redirectPath} replace />;
  return <Outlet />; 
};

export default ProtectedRoute;