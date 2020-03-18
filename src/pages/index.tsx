import React, { ReactElement } from "react";
import { Head, Placeholder } from "../components";
import { Button } from "antd";

export default function Home(): ReactElement {
  return (
    <div className="App">
      <Head title="Home" />
      <Placeholder />
      <Button>Hello</Button>
    </div>
  );
}
