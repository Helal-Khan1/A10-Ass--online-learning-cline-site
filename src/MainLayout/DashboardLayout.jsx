import React from "react";
import { Outlet } from "react-router";
import Footer from "../component/Footer";
import Naber from "../component/Naber";
import SidBer from "../component/SidBer";

const DashboardLayout = () => {
  return (
    <div>
      <header>
        <Naber></Naber>
      </header>
      <main className=" w-10/12 mx-auto grid grid-cols-12 gap-6 p-3 ">
        <aside className="col-span-3 shadow rounded-sm p-2 bg-[#e7e8ec] sticky top-20 h-[calc(100vh-100px)] overflow-y-auto">
          <SidBer />
        </aside>
        <section className=" col-span-8  bg-[#e7e8ec] ">
          <Outlet></Outlet>
        </section>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default DashboardLayout;
