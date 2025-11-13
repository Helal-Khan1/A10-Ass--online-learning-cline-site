import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import MyContaner from "./Mycontaner";
import useAuth from "../Hook/useAuth";
import { LuLogOut } from "react-icons/lu";
import { BiLogOut } from "react-icons/bi";

const Naber = () => {
  const { user, logOut } = useAuth();

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "winter");

  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "winter" ? "night" : "winter");
  };

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/corses">Courses</NavLink>
      </li>
      {user?.email && (
        <li>
          <NavLink to="/dashbord">Dashboard</NavLink>
        </li>
      )}
    </>
  );

  const loginhandalar = () => {
    logOut();
  };

  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <MyContaner className="flex">
          {/* --- Left Part --- */}
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                {links}
              </ul>
            </div>
            <div className="flex items-center gap-2">
              <img
                src="https://i.ibb.co.com/ZRywqFjr/download-1.png"
                className="w-16"
                alt="logo"
              />
              <p className="btn btn-ghost font-bold text-xl">Education</p>
            </div>
          </div>

          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{links}</ul>
          </div>

          <div className="navbar-end flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="btn btn-ghost text-xl"
              title="Toggle Theme"
            >
              {theme === "winter" ? "🌙 Light" : "☀️ deark"}
            </button>

            {user ? (
              <button className="btn btn-primary" onClick={loginhandalar}>
                <LuLogOut /> Log Out
              </button>
            ) : (
              <Link to="/login">
                <button className="btn btn-primary">
                  <BiLogOut /> Login
                </button>
              </Link>
            )}
          </div>
        </MyContaner>
      </div>
    </div>
  );
};

export default Naber;
