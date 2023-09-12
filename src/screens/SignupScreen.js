import { useState } from "react";
import React from "react";
import { auth } from "../config/firebase";
import "./SignupScreen.css";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  //getAuth,
} from "firebase/auth";

const SignUpScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //console.log(auth?.currentUser?.email)
  const register = async () => {
    //we use async await bcz when we are working with firebase lot of stuff return promise so we use sync await
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      //console.error(err);
      alert(err.message);
    }
  };
  const signIn = async () => {
    //we use async await bcz when we are working with firebase lot of stuff return promise so we use sync await
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
    }
  };

  // const signInWithGoogle = async () => {
  //   try {
  //     await signInWithPopup(auth, googleProvider);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

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
        <button type="submit" onClick={signIn}>
          Sign In
        </button>
        <span>
          <input value="true" type="checkbox" />
          <label>Remember me</label>
        </span>

        <span>Need Help?</span>
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
