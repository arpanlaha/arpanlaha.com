import React, { Component } from "react";
import { Placeholder } from "../components";
import "../static/style.css";

class App extends Component {
  render(): JSX.Element {
    return (
      <div className="App">
        <Placeholder />
      </div>
    );
  }
}

export default App;
