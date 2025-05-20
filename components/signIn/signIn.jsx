import { useState } from "react";

import "../../styles/custom.scss";

export default function SignIn({ isRightPanelActive, setIsRightPanelActive }) {
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  return (
    <div
      className={`form-container sign-in ${isRightPanelActive ? "hidden" : ""}`}
    >
      {!showForgotPassword ? (
        <form className="form">
          <h1>Sign In</h1>
          <span>or use your account</span>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <a href="#" onClick={() => setShowForgotPassword(true)}>
            Forgot your password?
          </a>
          <div className="button-group">
            <button type="submit" className="desktop-only">
              Sign In
            </button>
            <button type="button" onClick={() => setIsRightPanelActive(true)}>
              Sign Up
            </button>
          </div>
        </form>
      ) : (
        <form className="form">
          <h1>Forgot Password</h1>
          <p className="description">
            Enter your email to receive a password reset link
          </p>
          <input type="email" placeholder="Email" />
          <div className="button-group btn-margin">
            <button type="button" onClick={() => setShowForgotPassword(false)}>
              Back
            </button>
            <button type="submit">Send Link</button>
          </div>
        </form>
      )}
    </div>
  );
}
