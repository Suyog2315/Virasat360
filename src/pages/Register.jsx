import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";

function Register() {

  const navigate = useNavigate();

  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const handleRegister = (e) => {

    e.preventDefault();

    localStorage.setItem(
      "virasatUser",
      JSON.stringify({
        name,
        email
      })
    );

    navigate("/dashboard");
  };

  return (
    <div className="auth-page">

      <div className="auth-left">

        <div className="auth-brand">
          VIRASAT<span>360</span>
        </div>

        <p className="section-label">
          BEGIN YOUR JOURNEY
        </p>

        <h1>
          Discover.
          <br />
          Experience.
          <br />
          <span>Preserve.</span>
        </h1>

      </div>

      <div className="auth-form">

        <h2>
          Create Account
        </h2>

        <p>
          Start exploring Odisha's heritage.
        </p>

        <form onSubmit={handleRegister}>

          <label>
            Name
          </label>

          <input
            type="text"
            required
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
          />

          <label>
            Email
          </label>

          <input
            type="email"
            required
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

          <label>
            Password
          </label>

          <input
            type="password"
            required
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />

          <button
            type="submit"
            className="primary-btn"
          >
            Create Account →
          </button>

        </form>

        <p className="auth-switch">
          Already have an account?
          <Link to="/login">
            Sign In
          </Link>
        </p>

      </div>

    </div>
  );
}

export default Register;