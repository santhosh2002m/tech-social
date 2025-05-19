import { useState } from "react";

// import "../../styles/signIn.scss";

import "../../styles/signin.scss";
export default function SignIn({ isRightPanelActive, setIsRightPanelActive }) {
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  return (
    <div
      className={`signin-container ${
        isRightPanelActive ? "right-panel-active" : ""
      }`}
    >
      {!showForgotPassword ? (
        <form className="signin-form">
          <h1>Sign In</h1>
          <span className="signin-span">or use your account</span>
          <input type="email" placeholder="Email" className="signin-input" />
          <input
            type="password"
            placeholder="Password"
            className="signin-input"
          />
          <a
            href="#"
            onClick={() => setShowForgotPassword(true)}
            className="forgot-password-link"
          >
            Forgot your password?
          </a>
          <div className="signin-button-container">
            <button type="submit" className="signin-button-desktop">
              Sign In
            </button>
            <div className="signin-button-mobile-container">
              <button
                type="button"
                onClick={() => setIsRightPanelActive(true)}
                className="signin-button-mobile"
              >
                Sign Up
              </button>
              <button
                type="button"
                onClick={() => setIsRightPanelActive(false)}
                className="signin-button-mobile"
              >
                Sign In
              </button>
            </div>
          </div>
        </form>
      ) : (
        <form className="forgot-password-form">
          <h1>Forgot Password</h1>
          <p className="forgot-password-text">
            Enter your email to receive a password reset link
          </p>
          <input
            type="email"
            placeholder="Email"
            className="forgot-password-input"
          />
          <div className="forgot-password-button-container">
            <button
              type="button"
              onClick={() => setShowForgotPassword(false)}
              className="forgot-password-button"
            >
              Back
            </button>
            <button type="submit" className="forgot-password-button">
              Send Link
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
