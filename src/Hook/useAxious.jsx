import axios from "axios";

const instance = axios.create({
  baseURL: "https://a10-assignment-cline-server-site.vercel.app",
  // baseURL: "http://localhost:3000",
});

const useAxious = () => {
  return instance;
};
export default useAxious;
