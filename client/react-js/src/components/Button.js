import React from "react";
import "./styles/Button.scss";

function Button() {
  return (
    <div className="buttons">
      <div className="status">
        <p>Libre</p>
      </div>
      <div className="btn">
        {/* TO PARK */}
        <button className="park">Garer</button>
        {/* TO UNPARK */}
        <button className="unpark">Partir</button>
      </div>
    </div>
  );
}

export default Button;
