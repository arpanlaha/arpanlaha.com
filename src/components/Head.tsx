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
    <Helmet>
      <meta charSet="UTF-8" />
      <meta
        name="description"
        content={description || "Arpan Laha's personal website"}
      />
      <meta name="keywords" content={keywords || "Arpan, Laha, Arpan Laha"} />
      <meta name="author" content="Arpan Laha" />
      <title>{`${title ? `${title} | ` : ""}Arpan Laha`}</title>
    </Helmet>
  );
}
