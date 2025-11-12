import React from "react";
import useAuth from "../Hook/useAuth";
import { Navigate, useLocation } from "react-router";
import Loding from "../pages/AddCourse/Loding/Loding";

const ProvetRouts = ({ children }) => {
  const location = useLocation();
  const { user, loding } = useAuth();

  if (loding) {
    return <Loding></Loding>;
  }

  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default ProvetRouts;
