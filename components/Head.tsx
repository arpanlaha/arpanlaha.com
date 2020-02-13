import React, { Component, Props } from "react";
import NextHead from "next/head";

interface HeadProps extends Props<Component> {
  title?: string;
  description?: string;
  keywords?: string;
}

export default class Head extends Component<HeadProps> {
  render(): JSX.Element {
    return (
      <NextHead>
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content={this.props.description || "Arpan Laha's personal website"}
        />
        <meta
          name="keywords"
          content={this.props.keywords || "Arpan, Laha, Arpan Laha"}
        />
        <meta name="author" content="Arpan Laha" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Nunito+Sans&display=swap"
          rel="stylesheet"
        ></link>
        <title>
          {`${this.props.title ? `${this.props.title} | ` : ""}Arpan Laha`}
        </title>
      </NextHead>
    );
  }
}
