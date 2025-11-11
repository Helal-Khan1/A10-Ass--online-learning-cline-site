import axios from "axios";
import React from "react";
import useAuth from "./useAuth";

const intance = axios.create({
  baseURL: "http://localhost:3000",
});

const useAxiousSecure = () => {
  const { user } = useAuth();
  intance.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${user.accessToken} `;

    return config;
  });
  return intance;
};

export default useAxiousSecure;
