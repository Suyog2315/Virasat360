import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import heritageData from "../data/heritageData";
import "./ARExperience.css";

function ARExperience() {
  const { id = "konark" } = useParams();

  const site =
    heritageData.find((item) => item.id === id) ||
    heritageData[0];

  const videoRef = useRef(null);

  const [cameraStarted, setCameraStarted] = useState(false);
  const [error, setError] = useState("");

  const startCamera = async () => {
    try {
      setError("");

      const stream =
        await navigator.mediaDevices.getUserMedia({
          video: {
            facingMode: "environment"
          },
          audio: false
        });

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }

      setCameraStarted(true);

    } catch (err) {
      console.error(err);

      setError(
        "Camera access was denied. Please allow camera permission in your browser."
      );
    }
  };

  useEffect(() => {
    return () => {
      if (videoRef.current?.srcObject) {
        videoRef.current.srcObject
          .getTracks()
          .forEach((track) => track.stop());
      }
    };
  }, []);

  return (
    <div className="ar-page">

      <Navbar />

      <main className="ar-container">

        <div className="ar-header">

          <p className="section-label">
            IMMERSIVE HERITAGE
          </p>

          <h1>
            {site.name}
            <span> AR Experience</span>
          </h1>

          <p>
            Experience India's heritage through an
            interactive augmented reality preview.
          </p>

        </div>

        <div className="ar-view">

          {!cameraStarted ? (

            <div className="ar-placeholder">

              <div className="ar-circle">
                ◉
              </div>

              <h2>
                Ready for AR
              </h2>

              <p>
                Allow camera access to begin exploring
                {` ${site.name}`}.
              </p>

              <button
                className="primary-btn"
                onClick={startCamera}
              >
                Launch Camera
              </button>

              {error && (
                <p className="ar-error">
                  {error}
                </p>
              )}

            </div>

          ) : (

            <div className="camera-container">

              <video
                ref={videoRef}
                autoPlay
                playsInline
                muted
                className="camera-feed"
              />

              <div className="ar-overlay">

                <div className="ar-target">
                  <span>+</span>
                </div>

                <div className="ar-info">

                  <strong>
                    {site.name}
                  </strong>

                  <p>
                    Point your camera at the
                    heritage marker.
                  </p>

                </div>

              </div>

            </div>

          )}

        </div>

        <div className="ar-instructions">

          <h3>How to experience AR</h3>

          <div className="instruction-grid">

            <div>
              <span>01</span>
              <strong>Allow Camera</strong>
              <p>Give Virasat360 camera access.</p>
            </div>

            <div>
              <span>02</span>
              <strong>Find the Marker</strong>
              <p>Point your camera toward the marker.</p>
            </div>

            <div>
              <span>03</span>
              <strong>Explore</strong>
              <p>Experience the digital reconstruction.</p>
            </div>

          </div>

        </div>

        <Link
          to={`/heritage/${site.id}`}
          className="back-link"
        >
          ← Back to Heritage Details
        </Link>

      </main>

    </div>
  );
}

export default ARExperience;
