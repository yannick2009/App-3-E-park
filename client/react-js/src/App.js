import "./App.scss";
import Container from "./cards/Container";
import Controls from "./cards/Controls";
import Parking from "./cards/Parking";
import Button from "./components/Button";
import Road from "./components/Road";

function App() {
  const buttonsList = [];
  for (let i = 0; i < 5; i++) {
    buttonsList.push(<Button></Button>);
  }

  const pistsList = [];
  for (let i = 0; i < 5; i++) {
    pistsList.push(<Road carNumber={i + 1}></Road>);
  }

  return (
    <div className="App">
      <Container>
        {/* PARKING */}
        <Parking>{pistsList}</Parking>
        {/* CONTROLS */}
        <Controls>{buttonsList}</Controls>
      </Container>
    </div>
  );
}

export default App;
