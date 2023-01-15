import React, { useState } from "react";
import io from "socket.io-client";
import "./styles/Field.scss";

const socket = io.connect("ws://192.168.1.67:3001");

function Field(props) {
  // USESTATES
  const [status, setStatus] = useState("Libre");

  // IO

  // useEffect(() => {
  //   socket.on(
  //     "return_signal",
  //     (data) => {
  //       setStatus(data.message);
  //     },
  //     [socket, parkCar]
  //   );
  // });

  const parkCar = () => {
    socket.emit("park", props.valu);
    setStatus("Occupé");
  };
  const unparkCar = () => {
    socket.emit("unpark", props.valu);
    setStatus("Libre");
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
