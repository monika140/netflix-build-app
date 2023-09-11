

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDi0STk6xSDO4gha48CIiZV5wAviGIXnaY",
  authDomain: "netflix-build-app-7514a.firebaseapp.com",
  databaseURL: "https://netflix-build-app-7514a-default-rtdb.firebaseio.com",
  projectId: "netflix-build-app-7514a",
  storageBucket: "netflix-build-app-7514a.appspot.com",
  messagingSenderId: "377201868917",
  appId: "1:377201868917:web:116c24b72421f22b48f83c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider


