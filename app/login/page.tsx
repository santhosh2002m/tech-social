"use client";

import { useState } from "react";
import SignIn from "../../components/signIn/signIn";
import SignUp from "../../components/signup/signup";

import "../../styles/login.scss";

export default function LoginPage() {
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);

  return (
    <div className="login-container">
      <div
        className={`login-card ${
          isRightPanelActive ? "right-panel-active" : ""
        }`}
      >
        <SignUp isRightPanelActive={isRightPanelActive} />
        <SignIn
          isRightPanelActive={isRightPanelActive}
          setIsRightPanelActive={setIsRightPanelActive}
        />
        <div className="overlay-panel">
          <div className="overlay-gradient">
            <div className="overlay-signup">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button onClick={() => setIsRightPanelActive(false)}>
                Sign In
              </button>
            </div>
            <div className="overlay-signin">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button onClick={() => setIsRightPanelActive(true)}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
