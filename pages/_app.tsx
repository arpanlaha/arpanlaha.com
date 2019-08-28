import React, { ErrorInfo } from "react";
import App, { Container } from "next/app";
// @ts-ignore @types/next-page-transitions does not exist
import { PageTransition } from "next-page-transitions";

export default class MyApp extends App {
  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error("Page Error Boundary: ", error);
    super.componentDidCatch(error, errorInfo);
  }

  render(): JSX.Element {
    const { Component, pageProps } = this.props;
    return (
      <PageTransition timeout={300} classNames="page-transition">
        <Component {...pageProps} />
      </PageTransition>
    );
  }
}
