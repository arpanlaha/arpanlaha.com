import React, { ErrorInfo } from "react";
import App, { Container, AppInitialProps } from "next/app";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import configureStore from "../redux/configureStore";
import { Store } from "redux";
// @ts-ignore @types/next-page-transitions does not exist
import { PageTransition } from "next-page-transitions";

interface AppProps extends AppInitialProps {
  store: Store;
}

export default withRedux(configureStore)(
  class MyApp extends App<AppProps> {
    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
      console.error("Page Error Boundary: ", error);
      super.componentDidCatch(error, errorInfo);
    }

    render(): JSX.Element {
      const { Component, pageProps, store } = this.props;
      return (
        <Container>
          <Provider store={store}>
            <PageTransition timeout={300} classNames="page-transition">
              <Component {...pageProps} />
            </PageTransition>
          </Provider>
        </Container>
      );
    }
  }
);
