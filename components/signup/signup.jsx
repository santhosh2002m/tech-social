import { useState } from "react";
// import "../../styles/signup.scss";

import "../../styles/signup.scss";

export default function SignUp({ isRightPanelActive }) {
  const [showOtpForm, setShowOtpForm] = useState(false);

  return (
    <div
      className={`signup-container ${
        isRightPanelActive ? "right-panel-active" : ""
      }`}
    >
      {!showOtpForm ? (
        <form className="signup-form">
          <h1>Sign Up</h1>
          <input type="text" placeholder="Username" className="signup-input" />
          <input type="text" placeholder="Full Name" className="signup-input" />
          <input type="email" placeholder="Email" className="signup-input" />
          <input
            type="tel"
            placeholder="Phone Number"
            className="signup-input"
          />
          <input
            type="password"
            placeholder="Password"
            className="signup-input"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="signup-input"
          />
          <div className="terms-container">
            <input
              type="checkbox"
              id="terms"
              required
              className="terms-checkbox"
            />
            <label htmlFor="terms" className="terms-label">
              <span className="terms-text">I agree to the</span>
              <a href="#" className="terms-link">
                Terms
              </a>
              <span className="terms-text">&</span>
              <a href="#" className="terms-link">
                Privacy
              </a>
            </label>
          </div>
          <div className="signup-button-container">
            <button
              type="button"
              onClick={() => setShowOtpForm(true)}
              className="signup-button"
            >
              Request OTP
            </button>
          </div>
        </form>
      ) : (
        <form className="otp-form">
          <h1>Verify OTP</h1>
          <p className="otp-text">Enter the OTP received on your email</p>
          <input type="text" placeholder="Enter OTP" className="otp-input" />
          <div className="otp-button-container">
            <button
              type="button"
              onClick={() => setShowOtpForm(false)}
              className="otp-button"
            >
              Back
            </button>
            <button type="submit" className="otp-button">
              Verify
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
