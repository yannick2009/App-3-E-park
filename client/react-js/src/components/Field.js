import React, { useState } from "react";
import "./styles/Field.scss";

function Field(props) {
  // USESTATES
  const [status, setStatus] = useState("Libre");

  const parkCar = () => {
    setStatus("Occupé");
    const status = "occupé";
    props.onMove(status);
  };
  const unparkCar = () => {
    setStatus("Libre");
    const status = "Libre";
    props.onMove(status);
  };

  return (
    <div className="field">
      {/* ROAD */}
      <div className="road">
        <div className={status === "Libre" ? "car" : "car move"}>
          <img src={`./img/voiture-${props.carNumber}.png`} alt="voiture" />
        </div>
      </div>
      {/* BUTTONS */}
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
    </div>
  );
}

export default Field;
