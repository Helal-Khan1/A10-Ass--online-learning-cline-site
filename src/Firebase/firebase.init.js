// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzDZGglD6-vMnogf3llTdyzNYBJYClmEs",
  authDomain: "onlinelearingplatform-14900.firebaseapp.com",
  projectId: "onlinelearingplatform-14900",
  storageBucket: "onlinelearingplatform-14900.firebasestorage.app",
  messagingSenderId: "977806177946",
  appId: "1:977806177946:web:6e7fd946332af20a6d9123",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
