import React, { ReactElement, useEffect, useState } from "react";
import { Head, Social } from "../components";
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
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { graphql } from "gatsby";

import "../styles/style.scss";

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
  const [theme, setTheme] = useState("light");

  const switchTheme = (): void =>
    setTheme(theme === "light" ? "dark" : "light");

  useEffect((): void => {
    theme === "light"
      ? document.body.classList.remove("dark")
      : document.body.classList.add("dark");
  }, [theme]);

  return (
    <>
      <Head title="Home" />
      <FontAwesomeIcon
        className="theme-switch"
        icon={theme === "light" ? faSun : faMoon}
        onClick={switchTheme}
        size="3x"
      />
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
              <Social
                href="https://www.facebook.com/arpan.laha99"
                icon={faFacebookF}
              />
              <Social href="https://github.com/arpanlaha" icon={faGithub} />
              <Social
                href="https://www.instagram.com/arpanlahaha/"
                icon={faInstagram}
              />
              <Social
                href="https://www.linkedin.com/in/arpanlaha/"
                icon={faLinkedinIn}
              />
              <Social href="https://twitter.com/arpanlahaha" icon={faTwitter} />
              <Social href="" icon={faFileAlt} />
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
