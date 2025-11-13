import React from "react";
import { Outlet } from "react-router";
import Footer from "../component/Footer";
import Naber from "../component/Naber";
import SidBer from "../component/SidBer";

const DashboardLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-base-200">
      <header className="sticky top-0 z-50 bg-base-100 shadow">
        <Naber />
      </header>

      <main className="flex flex-1 flex-col md:flex-row w-11/12 mx-auto gap-4 md:gap-6 p-3 md:p-6">
        <aside
          className="
            bg-base-100 shadow-md rounded-2xl p-4 
            md:sticky md:top-24 md:h-[calc(100vh-120px)]
            overflow-y-auto 
            md:w-3/12 w-full
            transition-all duration-300
          "
        >
          <SidBer />
        </aside>

        {/* 🧾 Main Content Area */}
        <section
          className="
            bg-base-100 shadow-md rounded-2xl 
            p-4 flex-1 
            overflow-hidden
            md:w-9/12 w-full
          "
        >
          <Outlet />
        </section>
      </main>

      <footer className="mt-auto bg-base-100 border-t">
        <Footer />
      </footer>
    </div>
  );
};

export default DashboardLayout;
