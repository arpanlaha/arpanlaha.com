import React, { ReactElement } from "react";
import { Head, Html, Main, NextScript } from "next/document";

const MyDocument = (): ReactElement => (
  <Html lang="en">
    <Head />
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default MyDocument;
