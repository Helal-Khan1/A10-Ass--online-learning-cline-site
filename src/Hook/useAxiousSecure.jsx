import axios from "axios";
import React, { useEffect } from "react";
import useAuth from "./useAuth";

const intance = axios.create({
  baseURL: "https://a10-assignment-cline-server-site.vercel.app",
});

const useAxiousSecure = () => {
  const { user } = useAuth();
  useEffect(() => {
    const requestInterceptor = intance.interceptors.request.use((config) => {
      config.headers.Authorization = `Bearer ${user.accessToken}`;

      return config;
    });
    return () => {
      intance.interceptors.request.eject(requestInterceptor);
    };
  }, [user]);
  return intance;
};

export default useAxiousSecure;
