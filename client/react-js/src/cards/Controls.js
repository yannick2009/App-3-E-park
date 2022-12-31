import React from "react";
import "./styles/Controls.scss";

function Controls(props) {
  return <div className="controls">{props.children}</div>;
}

export default Controls;
