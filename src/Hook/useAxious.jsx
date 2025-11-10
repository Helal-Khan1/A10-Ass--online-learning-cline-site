import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000",
});

const useAxious = () => {
  return instance;
};
export default useAxious;
