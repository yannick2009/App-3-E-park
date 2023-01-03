import "./App.scss";
import Container from "./cards/Container";
import Field from "./components/Field";

function App() {
  const fieldsList = [];
  for (let i = 0; i < 5; i++) {
    fieldsList.push(<Field key={i + 1} carNumber={i + 1}></Field>);
  }

  return (
    <div className="App">
      <Container>{fieldsList}</Container>
    </div>
  );
}

export default App;
