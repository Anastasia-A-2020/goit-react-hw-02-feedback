import { Component } from "react";
import Feedback from "./components/Feedback";
import "./App.css";

class App extends Component {
  render() {
    return (
      <>
        <Feedback options={["good", "neutral", "bad"]} />
      </>
    );
  }
}

export default App;
