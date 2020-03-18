import React, { FunctionComponent, ReactElement } from "react";
import { Head, Placeholder } from "../components";
import { Button } from "antd";

const App: FunctionComponent = (): ReactElement => (
  <div className="App">
    <Head title="Home" />
    <Placeholder />
    <Button>Hello</Button>
  </div>
);

export default App;
