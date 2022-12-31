import React from "react";
import "./styles/Parking.scss";

function Parking(props) {
  return <div className="parking">{props.children}</div>;
}

export default Parking;
