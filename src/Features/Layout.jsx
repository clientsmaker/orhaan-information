import { Outlet } from "react-router-dom";
import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function Layout() {
  return (
    <main className="App">
        <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
}

export default Layout;