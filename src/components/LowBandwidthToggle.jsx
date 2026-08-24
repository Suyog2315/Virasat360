import { useState } from "react";

function LowBandwidthToggle() {

  const [enabled, setEnabled] = useState(false);

  return (
    <div className="low-bandwidth">

      <div>
        <strong>
          ⚡ Low-Bandwidth Mode
        </strong>

        <p>
          Use lightweight content for slower networks.
        </p>
      </div>

      <button
        className={enabled ? "toggle active" : "toggle"}
        onClick={() => setEnabled(!enabled)}
      >
        <span></span>
      </button>

    </div>
  );
}

export default LowBandwidthToggle;