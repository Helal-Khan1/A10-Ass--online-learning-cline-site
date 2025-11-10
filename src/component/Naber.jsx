import React from "react";
import { Link, NavLink } from "react-router";
import MyContaner from "./Mycontaner";

const Naber = () => {
  const links = (
    <>
      <li>
        <NavLink>Home</NavLink>
      </li>
      <li>
        <NavLink>Courses</NavLink>
      </li>
      <li>
        <NavLink>Deshbord</NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar stack bg-base-100 shadow-sm">
        <MyContaner className="flex">
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
            <div>
              <img
                src="https://i.ibb.co.com/ZRywqFjr/download-1.png"
                className="w-20"
                alt=""
              />
            </div>

            <div>
              <p className="btn btn-ghost font-bold text-xl">Education</p>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{links}</ul>
          </div>
          <div className="navbar-end">
            <Link to="login">
              <button className="btn">login</button>
            </Link>
            <button className="btn">log Out</button>
          </div>
        </MyContaner>
      </div>
    </div>
  );
};

export default Naber;
