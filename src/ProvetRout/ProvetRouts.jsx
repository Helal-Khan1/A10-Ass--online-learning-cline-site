import React from "react";
import useAuth from "../Hook/useAuth";
import { Navigate, useLocation } from "react-router";

const ProvetRouts = ({ children }) => {
  const location = useLocation();
  const { user } = useAuth();

  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default ProvetRouts;
