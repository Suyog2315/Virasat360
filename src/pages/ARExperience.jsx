import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./ARExperience.css";

function ARExperience() {

  return (
    <div className="ar-page">

      <Navbar />

      <main className="ar-container">

        <div className="ar-header">

          <p className="section-label">
            IMMERSIVE HERITAGE
          </p>

          <h1>
            Konark
            <span> AR Experience</span>
          </h1>

          <p>
            Point your camera towards the Konark marker
            to begin the digital heritage experience.
          </p>

        </div>

        <div className="ar-view">

          <div className="ar-placeholder">

            <div className="ar-circle">
              ☀
            </div>

            <h2>
              Konark Sun Temple
            </h2>

            <p>
              AR EXPERIENCE READY
            </p>

            <button className="primary-btn">
              Launch Camera
            </button>

          </div>

          <div className="ar-instructions">

            <strong>
              How to experience AR
            </strong>

            <p>
              1. Allow camera access
            </p>

            <p>
              2. Point your camera at the marker
            </p>

            <p>
              3. Explore the digital reconstruction
            </p>

          </div>

        </div>

        <Link
          to="/heritage/konark"
          className="back-link"
        >
          ← Back to Konark
        </Link>

      </main>

    </div>
  );
}

export default ARExperience;