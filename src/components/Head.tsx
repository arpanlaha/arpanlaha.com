import React, { Component, Props, ReactElement } from "react";
import { Helmet } from "react-helmet";

interface HeadProps extends Props<Component> {
  title?: string;
  description?: string;
  keywords?: string;
}

export default function Head(props: HeadProps): ReactElement {
  const { description, keywords, title } = props;
  return (
    <Helmet htmlAttributes={{ lang: "en" }} defer={false}>
      <meta charSet="UTF-8" />
      <meta
        name="description"
        content={
          description ?? "CS @ Illinois | Co-Director @ Hack4Impact UIUC"
        }
      />
      <meta
        name="keywords"
        content={
          keywords ??
          "Arpan, Laha, Arpan Laha, Hack4Impact, UIUC, Illinois, University of Illinois at Urbana-Champaign, University of Illinois, Computer Science, Product"
        }
      />
      <meta name="author" content="Arpan Laha" />
      <title>{title ?? "Arpan Laha"}</title>
    </Helmet>
  );
}
