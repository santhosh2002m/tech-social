import { useState } from "react";
import "../../styles/custom.scss";

export default function SignUp({ isRightPanelActive }) {
  const [showOtpForm, setShowOtpForm] = useState(false);

  return (
    <div
      className={`form-container sign-up ${isRightPanelActive ? "active" : ""}`}
    >
      {!showOtpForm ? (
        <form className="form">
          <h1 className="margin-unset">Sign Up</h1> {/* Corrected typo */}
          <input type="text" placeholder="Username" />
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email" />
          <input type="tel" placeholder="Phone Number" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />
          <div className="checkbox-container">
            <input type="checkbox" id="terms" required />
            <label htmlFor="terms">
              {/* <label className="label-flex">I agree to the</label> */}
              <p className="custom-style">
                By Signing up, you are acknowledging that you have read,
                understood and accept our{" "}
                <a className="link custom-style-a" href="#">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a className="link custom-style-a" href="#">
                  Privacy policy
                </a>
              </p>
              {/* <a className="label-a" href="#"> */}
              {/* Terms */}
              {/* </a> */}
              {/* <label className="label-flex">&</label> */}
              {/* <a className="label-a" href="#">
                Privacy
              </a> */}
            </label>
          </div>
          <div className="button-group">
            <button type="button" onClick={() => setShowOtpForm(true)}>
              Request OTP
            </button>
          </div>
        </form>
      ) : (
        <form className="form">
          <h1>Verify OTP</h1>
          <p className="description">Enter the OTP received on your email</p>
          <input type="text" placeholder="Enter OTP" />
          <div className="button-group btn-margin">
            <button type="button" onClick={() => setShowOtpForm(false)}>
              Back
            </button>
            <button type="submit">Verify</button>
          </div>
        </form>
      )}
    </div>
  );
}
