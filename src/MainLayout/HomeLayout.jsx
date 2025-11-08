import React from "react";
import Naber from "../component/Naber";
import { Outlet } from "react-router";

const HomeLayout = () => {
  return (
    <div>
      <header>
        <Naber></Naber>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer></footer>
    </div>
  );
};

export default HomeLayout;
