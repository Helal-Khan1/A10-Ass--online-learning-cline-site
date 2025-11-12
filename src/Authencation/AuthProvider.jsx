import React, { useEffect, useState } from "react";
import { AuthContex } from "./AuthContex";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../Firebase/firebase.init";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [loding, setLoding] = useState(false);
  const googleProvider = new GoogleAuthProvider();

  const createUser = (email, password) => {
    setLoding(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const sigUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signWithGoogle = () => {
    setLoding(true);
    return signInWithPopup(auth, googleProvider);
  };
  const logOut = () => {
    setLoding(true);
    return signOut(auth);
  };
  useEffect(() => {
    const unsuscrib = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoding(false);
      console.log(currentUser);
    });
    return () => {
      unsuscrib;
    };
  }, []);

  const authinfo = {
    user,
    createUser,
    sigUser,
    signWithGoogle,
    logOut,
    loding,
    setLoding,
    setUser,
  };
  return <AuthContex value={authinfo}>{children}</AuthContex>;
};

export default AuthProvider;
