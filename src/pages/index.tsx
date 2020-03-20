import React, { ReactElement } from "react";
import { Head } from "../components";
import Img, { FluidObject } from "gatsby-image";
import { graphql } from "gatsby";

interface HomeProps {
  data: {
    file: {
      childImageSharp: {
        fluid: FluidObject;
      };
    };
  };
}

export default function Home(props: HomeProps): ReactElement {
  return (
    <>
      <Head title="Home" />
      <div className="hello">
        <h1>Hello!</h1>
      </div>
      <div className="main-image-container">
        <Img
          className="main-image"
          fluid={props.data.file.childImageSharp.fluid}
          title="Me"
          alt="Me"
          backgroundColor
        />
      </div>
    </>
  );
}

export const query = graphql`
  query {
    file(relativePath: { eq: "fb_profile_2019_square_1080.webp" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
