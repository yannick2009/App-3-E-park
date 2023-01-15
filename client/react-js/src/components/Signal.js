// import React, { useEffect, useState } from "react";
import "./styles/Signal.scss";

function Signal(props) {
  // const [free, setFree] = useState([1, 2, 3, 4, 5]);

  // const playAudio = async () => {
  //   console.log("it changed");
  //   await new Audio(`./audio/s${props.number}-occupe.wav`).play();
  // };

  // useEffect(() => {
  //   if (!props.free && free.includes(+props.number)) {
  //     // let index = free.indexOf(+props.number);
  //     // console.log(index);
  //     // // free.splice(index, 1);
  //     // delete free[index];
  //     // setFree(free);
  //     // console.log(free);
  //     new Audio(`./audio/s${props.number}-occupe.wav`).play();
  //   }
  // }, [free, props.free, props.number, setFree]);

  return (
    <div className="signal">
      <h5>{`Espace N° ${props.number}`}</h5>
      <div className="lights">
        <div className={props.free ? "ligth-red" : "ligth-red actived"}></div>
        <div
          className={props.free ? "ligth-green actived" : "ligth-green"}></div>
      </div>
    </div>
  );
}

export default Signal;
