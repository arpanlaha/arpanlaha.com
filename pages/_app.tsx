import React, { ReactElement } from "react";
import { AppProps } from "next/app";
import { Layout } from "antd";
// @ts-ignore @types/next-page-transitions does not exist
import { PageTransition } from "next-page-transitions";
import "../public/antd.scss";
import "../public/style.scss";

const { Content, Header } = Layout;

export default function App(props: AppProps): ReactElement {
  const { Component, pageProps } = props;
  return (
    <PageTransition timeout={300} classNames="page-transition">
      <Layout>
        <Header>Arpan Laha</Header>
        <Content>
          <Component {...pageProps} />
        </Content>
      </Layout>
    </PageTransition>
  );
}
