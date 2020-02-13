import React, { ReactElement } from "react";
import { AppProps } from "next/app";
// @ts-ignore @types/next-page-transitions does not exist
import { PageTransition } from "next-page-transitions";
import "../public/style.scss";

const MyApp = (props: AppProps): ReactElement => {
  const { Component, pageProps } = props;
  return (
    <PageTransition timeout={300} classNames="page-transition">
      <Component {...pageProps} />
    </PageTransition>
  );
};

export default MyApp;
