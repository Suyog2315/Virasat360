import { useState } from "react";

function PermissionModal({ onClose }) {

  const [permissions, setPermissions] = useState({
    camera: false,
    location: false,
    microphone: false
  });

  const requestCamera = async () => {
    try {
      await navigator.mediaDevices.getUserMedia({
        video: true
      });

      setPermissions(prev => ({
        ...prev,
        camera: true
      }));

    } catch (error) {
      console.log("Camera permission denied");
    }
  };

  const requestMicrophone = async () => {
    try {
      await navigator.mediaDevices.getUserMedia({
        audio: true
      });

      setPermissions(prev => ({
        ...prev,
        microphone: true
      }));

    } catch (error) {
      console.log("Microphone permission denied");
    }
  };

  const requestLocation = () => {
    if (!navigator.geolocation) {
      return;
    }

    navigator.geolocation.getCurrentPosition(
      () => {
        setPermissions(prev => ({
          ...prev,
          location: true
        }));
      },
      () => {
        console.log("Location permission denied");
      }
    );
  };

  const requestAll = async () => {
    await requestCamera();
    await requestMicrophone();
    requestLocation();
  };

  return (
    <div className="permission-overlay">

      <div className="permission-modal">

        <button
          className="close-modal"
          onClick={onClose}
        >
          ×
        </button>

        <h2>
          Enhance Your Experience
        </h2>

        <p>
          VIRASAT360 uses your device capabilities
          to create an immersive heritage experience.
        </p>

        <div className="permission-list">

          <div className="permission-item">
            <span>📷</span>

            <div>
              <strong>Camera</strong>
              <p>Required for AR experiences.</p>
            </div>

            <span>
              {permissions.camera ? "✓" : "○"}
            </span>
          </div>

          <div className="permission-item">
            <span>📍</span>

            <div>
              <strong>Location</strong>
              <p>Find nearby heritage sites.</p>
            </div>

            <span>
              {permissions.location ? "✓" : "○"}
            </span>
          </div>

          <div className="permission-item">
            <span>🎤</span>

            <div>
              <strong>Microphone</strong>
              <p>Interact with Heritage AI by voice.</p>
            </div>

            <span>
              {permissions.microphone ? "✓" : "○"}
            </span>
          </div>

        </div>

        <button
          className="primary-btn permission-btn"
          onClick={requestAll}
        >
          Allow Permissions
        </button>

      </div>

    </div>
  );
}

export default PermissionModal;