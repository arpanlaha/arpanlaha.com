import React, { ReactElement } from "react";
import { Head } from "../components";
import Img, { FluidObject } from "gatsby-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGithub,
  faInstagram,
  faLinkedinIn,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";
import { faFileAlt } from "@fortawesome/free-regular-svg-icons";
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
  const { data } = props;

  return (
    <>
      <Head title="Home" />
      <div className="panels">
        <div className="first-panel">
          <div>
            <div className="hello">
              <h1>Hi, I'm Arpan.</h1>
            </div>
            <div className="main-image-container">
              <Img
                className="main-image"
                fluid={data.file.childImageSharp.fluid}
                title="Me"
                alt="Me"
                backgroundColor
              />
            </div>
          </div>
        </div>
        <div className="second-panel">
          <div className="about">
            <p>CS@Illinois '21</p>
            <p>
              Product Manager | Hack4Impact UIUC
              <br />
              <ul className="small-text">
                <li>Child's Play: directory of games to use as therapy</li>
                <li>Kiva: financial document collection portal</li>
                <li>UIC MLI: Spinal X-ray position comparision tool</li>
                <li>
                  Kids Save Ocean: sustainability project accelerator (ongoing)
                </li>
              </ul>
            </p>
            <p>
              Other stuff:
              <br />
              <ul className="small-text">
                <li>
                  Internships: Microsoft • UChicago Computation Institute •
                  FermiLab Mu2e
                </li>
                <li>
                  Extracurriculars: Reflections | Projections • HackIllinois
                </li>
                <li>Interests: piano • movies • video games • watches</li>
              </ul>
            </p>
            <span className="socials">
              <FontAwesomeIcon icon={faFacebookF} size="lg" />
              <FontAwesomeIcon icon={faGithub} size="lg" />
              <FontAwesomeIcon icon={faInstagram} size="lg" />
              <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
              <FontAwesomeIcon icon={faTwitter} size="lg" />
              <FontAwesomeIcon icon={faFileAlt} size="lg" />
            </span>
          </div>
        </div>
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
