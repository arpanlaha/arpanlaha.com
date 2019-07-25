import React, { Component } from "react";
import { Placeholder } from "../components";
import Head from "next/head";
import "../static/style.css";

class App extends Component {
  render(): JSX.Element {
    return (
      <div className="App">
        <Head>
          <meta charSet="UTF-8" />
          <meta name="description" content="Arpan Laha's personal website" />
          <meta name="keywords" content="Arpan, Laha, Arpan Laha" />
          <meta name="author" content="Arpan Laha" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>Home | Arpan Laha</title>
        </Head>
        <Placeholder />
      </div>
    );
  }
}

export default App;
