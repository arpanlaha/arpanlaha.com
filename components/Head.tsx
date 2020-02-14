import React, { FunctionComponent, Props, ReactElement } from "react";
import NextHead from "next/head";

interface HeadProps extends Props<FunctionComponent> {
  title?: string;
  description?: string;
  keywords?: string;
}

const Head: FunctionComponent<HeadProps> = (props: HeadProps): ReactElement => {
  const { description, keywords, title } = props;
  return (
    <NextHead>
      <meta charSet="UTF-8" />
      <meta
        name="description"
        content={description || "Arpan Laha's personal website"}
      />
      <meta name="keywords" content={keywords || "Arpan, Laha, Arpan Laha"} />
      <meta name="author" content="Arpan Laha" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{`${title ? `${title} | ` : ""}Arpan Laha`}</title>
    </NextHead>
  );
};

export default Head;
