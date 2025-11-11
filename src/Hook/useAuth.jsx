import { use } from "react";
import { AuthContex } from "../Authencation/AuthContex";

const useAuth = () => {
  const authContex = use(AuthContex);
  return authContex;
};
export default useAuth;
