import React from "react";
import Navbar from "../components/Commun/Navbar";
import Footer from "../components/Commun/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">

      <Navbar />

      <main className="flex-grow">
        <Outlet />
      </main>

      <Footer />

    </div>
  );
};

export default Layout;
