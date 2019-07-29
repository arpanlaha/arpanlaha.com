import React, { Component } from "react";
import { Head, Placeholder } from "../components";
import "../static/style.scss";

class App extends Component {
  render(): JSX.Element {
    return (
      <div className="App">
        <Head title="Home" />
        <Placeholder />
      </div>
    );
  }
}

export default App;
