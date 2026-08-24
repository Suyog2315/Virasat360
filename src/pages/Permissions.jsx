import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./Auth.css";

function Permissions() {
  const navigate = useNavigate();

  const [status, setStatus] = useState({
    location: false,
    camera: false,
    microphone: false
  });

  const requestLocation = () => {
    if (!navigator.geolocation) {
      alert("Location is not supported by this browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      () => {
        setStatus((prev) => ({
          ...prev,
          location: true
        }));
      },
      () => {
        alert("Location permission was denied.");
      }
    );
  };

  const requestCamera = async () => {
    try {
      const stream =
        await navigator.mediaDevices.getUserMedia({
          video: true
        });

      stream.getTracks().forEach((track) => track.stop());

      setStatus((prev) => ({
        ...prev,
        camera: true
      }));

    } catch {
      alert("Camera permission was denied.");
    }
  };

  const requestMicrophone = async () => {
    try {
      const stream =
        await navigator.mediaDevices.getUserMedia({
          audio: true
        });

      stream.getTracks().forEach((track) => track.stop());

      setStatus((prev) => ({
        ...prev,
        microphone: true
      }));

    } catch {
      alert("Microphone permission was denied.");
    }
  };

  const continueToHeritage = () => {
    navigate("/heritage-sites");
  };

  return (
    <div className="auth-page">

      <Navbar />

      <div className="permission-page">

        <p className="section-label">
          VIRASAT360 EXPERIENCE
        </p>

        <h1>
          Enable Your
          <span> Experience</span>
        </h1>

        <p className="permission-intro">
          Virasat360 uses your device capabilities
          to provide location-based heritage discovery,
          AR experiences and voice interaction.
        </p>

        <div className="permission-cards">

          <div className="permission-card">

            <div className="permission-icon">
              📍
            </div>

            <div>
              <h3>Location</h3>
              <p>
                Discover heritage sites near you.
              </p>
            </div>

            <button
              onClick={requestLocation}
              className={
                status.location
                  ? "permission-done"
                  : ""
              }
            >
              {status.location ? "Enabled ✓" : "Allow"}
            </button>

          </div>

          <div className="permission-card">

            <div className="permission-icon">
              📷
            </div>

            <div>
              <h3>Camera</h3>
              <p>
                Required for augmented reality.
              </p>
            </div>

            <button
              onClick={requestCamera}
              className={
                status.camera
                  ? "permission-done"
                  : ""
              }
            >
              {status.camera ? "Enabled ✓" : "Allow"}
            </button>

          </div>

          <div className="permission-card">

            <div className="permission-icon">
              🎤
            </div>

            <div>
              <h3>Microphone</h3>
              <p>
                Interact with the heritage assistant
                using your voice.
              </p>
            </div>

            <button
              onClick={requestMicrophone}
              className={
                status.microphone
                  ? "permission-done"
                  : ""
              }
            >
              {status.microphone ? "Enabled ✓" : "Allow"}
            </button>

          </div>

        </div>

        <button
          className="primary-btn"
          onClick={continueToHeritage}
        >
          Continue to Virasat360 →
        </button>

      </div>

    </div>
  );
}

export default Permissions;
