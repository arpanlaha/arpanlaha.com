import React, { ReactElement } from "react";
import { AppProps } from "next/app";
import { Layout } from "antd";
// @ts-ignore @types/next-page-transitions does not exist
import { PageTransition } from "next-page-transitions";
import "antd/dist/antd.css";
import "antd/dist/antd.dark.css";
import "../public/style.scss";

const { Content, Header } = Layout;

const MyApp = (props: AppProps): ReactElement => {
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
};

export default MyApp;
