import React from "react";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet /> {/* This renders the nested route (e.g. Home) */}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
