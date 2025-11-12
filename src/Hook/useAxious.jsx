import axios from "axios";

const instance = axios.create({
  baseURL: "https://a10-assignment-cline-server-site.vercel.app",
});

const useAxious = () => {
  return instance;
};
export default useAxious;
