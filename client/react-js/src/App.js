import "./App.scss";
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Container from "./cards/Container";
import Field from "./components/Field";
import Signal from "./components/Signal";
import Listener from "./cards/Listener";
import io from "socket.io-client";

const socket = io.connect("ws://192.168.1.67:3001");

function App() {
  const fieldsList = [];
  const signalList = [];
  for (let i = 0; i < 5; i++) {
    fieldsList.push(<Field key={i + 1} valu={i + 1} carNumber={i + 1}></Field>);
    signalList.push(<Signal key={i + 1} number={i + 1}></Signal>);
  }

  const [free1, setFree1] = useState(true);
  const [free2, setFree2] = useState(true);
  const [free3, setFree3] = useState(true);
  const [free4, setFree4] = useState(true);
  const [free5, setFree5] = useState(true);

  const parkAndAssist = (data) => {
    // new Audio(`./audio/s${data}-${free2 ? "occupe" : "libre"}.wav`).play();
    if (data === 1) {
      new Audio(`./audio/s1-occupe.wav`).play();
      setFree1(false);
    } else if (data === 2) {
      new Audio(`./audio/s2-occupe.wav`).play();
      setFree2(false);
    } else if (data === 3) {
      new Audio(`./audio/s3-occupe.wav`).play();
      setFree3(false);
    } else if (data === 4) {
      new Audio(`./audio/s4-occupe.wav`).play();
      setFree4(false);
    } else if (data === 5) {
      new Audio(`./audio/s5-occupe.wav`).play();
      setFree5(false);
    }
  };

  const unparkAndAssist = (data) => {
    // new Audio(`./audio/s${data}-${free2 ? "occupe" : "libre"}.wav`).play();
    if (data === 1) {
      new Audio(`./audio/s1-libre.wav`).play();
      setFree1(true);
    } else if (data === 2) {
      new Audio(`./audio/s2-libre.wav`).play();
      setFree2(true);
    } else if (data === 3) {
      new Audio(`./audio/s3-libre.wav`).play();
      setFree3(true);
    } else if (data === 4) {
      new Audio(`./audio/s4-libre.wav`).play();
      setFree4(true);
    } else if (data === 5) {
      new Audio(`./audio/s5-libre.wav`).play();
      setFree5(true);
    }
  };

  useEffect(() => {
    socket.on(
      "return_signal_park",
      (data) => {
        parkAndAssist(data);
      },
      [socket]
    );
  });

  useEffect(() => {
    socket.on(
      "return_signal_unpark",
      (data) => {
        unparkAndAssist(data);
      },
      [socket]
    );
  });

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/signal">
            <Listener>
              <Signal free={free1} number="1"></Signal>
              <Signal free={free2} number="2"></Signal>
              <Signal free={free3} number="3"></Signal>
              <Signal free={free4} number="4"></Signal>
              <Signal free={free5} number="5"></Signal>
            </Listener>
          </Route>
          <Route path="/">
            <Container>{fieldsList}</Container>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
