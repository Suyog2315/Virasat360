import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Login function
  const handleLogin = (e) => {
    e.preventDefault();

    // Firebase authentication will be connected here later
    console.log("Email:", email);
    console.log("Password:", password);
  };

  // Google login
  const handleGoogleLogin = () => {
    // Firebase Google authentication will be added later
    console.log("Google Login");
  };

  return (
    <div className="auth-page">

      {/* =========================================
          BACKGROUND
      ========================================= */}

      <div className="auth-background"></div>

      <div className="auth-overlay"></div>


      {/* =========================================
          BACK TO HOME
      ========================================= */}

      <button
        className="auth-back"
        onClick={() => navigate("/")}
      >
        ← Back to Home
      </button>


      {/* =========================================
          LEFT ODISHA HERITAGE SECTION
      ========================================= */}

      <div className="auth-heritage">

        {/* Odisha Heritage Image */}

        <div className="auth-heritage-image"></div>


        {/* Brand Tagline */}

        <div className="auth-heritage-content">

          <h2>
            From Forgotten Stories
          </h2>

          <h2>
            to Living Heritage.
          </h2>

        </div>

      </div>


      {/* =========================================
          RIGHT LOGIN SECTION
      ========================================= */}

      <div className="auth-wrapper">

        <div className="auth-card">


          {/* =====================================
              LOGO
          ===================================== */}

          <img
            src="/logo.png"
            alt="Virasat360 Logo"
            className="auth-logo"
          />


          {/* =====================================
              SMALL LABEL
          ===================================== */}

          <div className="auth-label">
            WELCOME BACK
          </div>


          {/* =====================================
              MAIN HEADING
          ===================================== */}

          <h1>
            Continue Your
            <br />
            Heritage Journey
          </h1>


          {/* =====================================
              DESCRIPTION
          ===================================== */}

          <p className="auth-description">
            Sign in to continue exploring India's living heritage,
            historical stories and immersive experiences.
          </p>


          {/* =====================================
              LOGIN FORM
          ===================================== */}

          <form onSubmit={handleLogin}>


            {/* EMAIL */}

            <div className="auth-input-group">

              <label htmlFor="email">
                EMAIL ADDRESS
              </label>

              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

            </div>


            {/* PASSWORD */}

            <div className="auth-input-group">

              <div className="auth-password-label">

                <label htmlFor="password">
                  PASSWORD
                </label>

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                >
                  {showPassword ? "Hide" : "Show"}
                </button>

              </div>


              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

            </div>


            {/* FORGOT PASSWORD */}

            <div className="auth-forgot">

              <button
                type="button"
                onClick={() => {
                  console.log("Forgot password");
                }}
              >
                Forgot password?
              </button>

            </div>


            {/* SIGN IN BUTTON */}

            <button
              type="submit"
              className="auth-primary-btn"
            >

              <span>
                SIGN IN
              </span>

              <span>
                →
              </span>

            </button>

          </form>


          {/* =====================================
              DIVIDER
          ===================================== */}

          <div className="auth-divider">
            <span>OR</span>
          </div>


          {/* =====================================
              GOOGLE LOGIN
          ===================================== */}

          <button
            type="button"
            className="auth-google-btn"
            onClick={handleGoogleLogin}
          >

            <span className="google-symbol">
              G
            </span>

            <span>
              Continue with Google
            </span>

          </button>


          {/* =====================================
              REGISTER
          ===================================== */}

          <div className="auth-switch">

            <span>
              Don't have an account?
            </span>

            <button
              type="button"
              onClick={() => navigate("/register")}
            >
              Create an account
            </button>

          </div>


        </div>

      </div>

    </div>
  );
}

export default Login;