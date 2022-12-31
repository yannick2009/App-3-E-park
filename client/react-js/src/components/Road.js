import React from "react";
import "./styles/Road.scss";

function Road(props) {
  return (
    <div className="road">
      <div className="car">
        <img src={`./img/voiture-${props.carNumber}.png`} alt="voiture" />
      </div>
    </div>
  );
}

export default Road;
