import React, { useState } from "react";
import "./styles/Button.scss";

function Button() {
  // USESTATES
  const [status, setStatus] = useState("Libre");

  const parkCar = () => {
    setStatus("Occupé");
  };
  const unparkCar = () => {
    setStatus("Libre");
  };

  return (
    <div className="buttons">
      <div className={status === "Libre" ? "status-true" : "status-false"}>
        <p>{status}</p>
      </div>
      <div className="btn">
        {/* TO PARK */}
        <button className="park" onClick={parkCar}>
          Garer
        </button>
        {/* TO UNPARK */}
        <button className="unpark" onClick={unparkCar}>
          Partir
        </button>
      </div>
    </div>
  );
}

export default Button;
