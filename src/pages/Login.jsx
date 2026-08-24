import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter your email and password.");
      return;
    }

    // Demo login
    alert("Welcome to Virasat360!");

    // After successful login
    navigate("/heritage-sites");
  };

  return (
    <div className="login-page">

      <div className="login-card">

        {/* Back */}
        <Link to="/" className="back-link">
          ← Back to Home
        </Link>

        {/* Logo */}
        <div className="login-logo">
          🏛️
        </div>

        <h1>Welcome Back</h1>

        <p className="login-subtitle">
          Sign in to continue your Virasat360 journey
        </p>

        <form onSubmit={handleLogin}>

          {/* Email */}
          <div className="form-group">
            <label>Email Address</label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password */}
          <div className="form-group">
            <label>Password</label>

            <div className="password-wrapper">

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <button
                type="button"
                className="show-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>

            </div>
          </div>

          {/* Options */}
          <div className="login-options">

            <label className="remember">
              <input type="checkbox" />
              Remember me
            </label>

            <button
              type="button"
              className="forgot-password"
            >
              Forgot Password?
            </button>

          </div>

          {/* Login */}
          <button type="submit" className="login-button">
            Sign In
          </button>

        </form>

        {/* Divider */}
        <div className="login-divider">
          <span>OR</span>
        </div>

        {/* Register */}
        <div className="register-section">

          <p>Don't have an account?</p>

          <Link to="/register" className="register-button">
            Create Account
          </Link>

        </div>

      </div>

    </div>
  );
}

export default Login;
