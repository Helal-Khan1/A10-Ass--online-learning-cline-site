import React from "react";
import Naber from "../component/Naber";
import { Outlet } from "react-router";
import Footer from "../component/Footer";

const HomeLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header>
        <Naber />
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default HomeLayout;
