import React, { ReactElement } from "react";
import { Head, Placeholder } from "../components";

export default function Home(): ReactElement {
  return (
    <div className="App">
      <Head title="Home" />
      <Placeholder />
      <button>Hello</button>
    </div>
  );
}
