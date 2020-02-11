import React, { Component } from "react";
import { Head, NavBar, Placeholder } from "../components";
import "../public/style.scss";

export default class App extends Component {
  render(): JSX.Element {
    return (
      <div className="App">
        <Head title="Home" />
        <NavBar />
        <Placeholder />
      </div>
    );
  }
}
