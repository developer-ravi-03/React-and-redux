import ClockSlogan from "./components/ClockSlogan";
import CurrentHeading from "./components/CurrentHeading";
import CurrentTime from "./components/CurrentTime";

function App() {
  return (
    <center>
      <CurrentHeading />
      <ClockSlogan />
      <CurrentTime />
    </center>
  );
}

export default App;
