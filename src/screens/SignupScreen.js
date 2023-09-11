import { useState } from "react";
import React from "react";
import { auth, googleProvider } from "../config/firebase";
import "./SignupScreen.css";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";

const SignUpScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = (e) => {
    e.preventDefault();

    const signIn = async () => {
      //we use async await bcz when we are working with firebase lot of stuff return promise so we use sync await
      try {
        await createUserWithEmailAndPassword(auth, email, password);
      } catch (err) {
        console.error(err);
      }
    };
  };

  const signInGoogle = (e) => {
    e.preventDefault();

    const signInWithGoogle = async () => {
      try {
        await signInWithPopup(auth, googleProvider);
      } catch (err) {
        console.error(err);
      }
    };
  };

  return (
    <div className="signupScreen">
      <form>
        <h1>Sign In</h1>
        <input
          placeholder="Email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          placeholder="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" onClick={signInGoogle}>
          Sign In
        </button>

        <h4>
          <span className="signupScreen_gray">New to Netflix?</span>
          <span className="signupScreen_link" onClick={register}>
            Sign Up Now
          </span>
        </h4>
      </form>
    </div>
  );
};

export default SignUpScreen;
