import React from "react";
import "./LoginScreen.css";
import SignupScreen from "./SignupScreen";
import { useState } from "react";
function LoginScreen() {
  const [signIn, setSignIn] = useState(false);

  return (
    <div className="LoginScreen">
      <div className="loginScreen_background">
        <img
          className="loginscreen_logo"
          src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
          alt=""
        />

        <button onClick={() => setSignIn(true)} className="loginScreen_button">
          Sign In
        </button>
        <div className="loginScreen_gradient" />
      </div>

      <div className="loginScreen_body">
        {signIn ? (
          <SignupScreen />
        ) : (
          <>
            <h1>The biggest Indian hits. Ready to watch here from ₹ 149.</h1>
            <h2>Join today. Cancel anytime.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <div className="loginScreen_input">
              <form>
                <input type="email" placeholder="Email Address"></input>
                <button
                  onClick={() => setSignIn(true)}
                  className="loginScreen_getStarted"
                >
                  Get Started
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default LoginScreen;
