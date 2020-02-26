import React, { FunctionComponent, ReactElement } from "react";
import { Head, NavBar, Placeholder } from "../components";

const App: FunctionComponent = (): ReactElement => (
  <div className="App">
    <Head title="Home" />
    <NavBar />
    <Placeholder />
    <button>Hello</button>
  </div>
);

export default App;
