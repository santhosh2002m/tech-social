"use client";

import { useState } from "react";
import SignIn from "../../components/signIn/signIn";
import SignUp from "../../components/signup/signup";

import "../../styles/custom.scss";

export default function LoginPage() {
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);

  return (
    <div className="container">
      <div
        className={`panel-container ${
          isRightPanelActive ? "right-panel-active" : ""
        }`}
      >
        <SignUp isRightPanelActive={isRightPanelActive} />
        <SignIn
          isRightPanelActive={isRightPanelActive}
          setIsRightPanelActive={setIsRightPanelActive}
        />
        <div
          className={`overlay ${isRightPanelActive ? "-translate-x-full" : ""}`}
        >
          <div
            className={`overlay-content ${
              isRightPanelActive ? "translate-x-1/2" : ""
            }`}
          >
            <div className={`panel left ${isRightPanelActive ? "active" : ""}`}>
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button onClick={() => setIsRightPanelActive(false)}>
                Sign In
              </button>
            </div>
            <div className={`panel right ${isRightPanelActive ? "" : ""}`}>
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
