import React, { ReactElement, useEffect, useState } from "react";
import { Head, Social } from "../components";
import Img, { FluidObject } from "gatsby-image";
import {
  faFacebookF,
  faGithub,
  faInstagram,
  faLinkedinIn,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";
import { faFileAlt } from "@fortawesome/free-regular-svg-icons";
import { graphql } from "gatsby";
import sun from "../images/sunny-outline.svg";
import moon from "../images/moon-outline.svg";

import "../styles/style.scss";

interface HomeProps {
  data: {
    main: {
      childImageSharp: {
        fluid: FluidObject;
      };
    };
    sun: {
      childImageSharp: {
        fluid: FluidObject;
      };
    };
    moon: {
      childImageSharp: {
        fluid: FluidObject;
      };
    };
  };
}

export default function Home(props: HomeProps): ReactElement {
  const { data } = props;
  const [light, setLight] = useState(true);

  const switchTheme = (): void => {
    document.getElementById("theme-switch")?.classList.add("no-hover");
    setLight(!light);
  };

  const themeSwitchLeave = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    e.preventDefault;
    document.getElementById("theme-switch")?.classList.remove("no-hover");
  };

  useEffect((): void => {
    const theme = localStorage.getItem("theme");
    if (theme !== null) {
      setLight(theme === "light");
    }
  }, [setLight]);

  useEffect((): void => {
    document.body.classList[light ? "remove" : "add"]("dark");
    localStorage.setItem("theme", light ? "light" : "dark");
  }, [light]);

  return (
    <>
      <Head />
      <button
        className="theme-switch"
        id="theme-switch"
        onClick={switchTheme}
        onMouseDown={e => e.preventDefault()}
        onMouseLeave={themeSwitchLeave}
      >
        <img
          className="theme-switch-svg"
          src={light ? sun : moon}
          alt="Theme switch"
        />
      </button>

      <div className="panels">
        <div className="first-panel">
          <div>
            <div className="hello">
              <h1>Hi, I'm Arpan.</h1>
            </div>
            <div className="main-image-container">
              <Img
                className="main-image"
                fluid={data.main.childImageSharp.fluid}
                title="Me"
                alt="Me"
                backgroundColor
              />
            </div>
          </div>
        </div>
        <div className="second-panel">
          <div className="about">
            <div className="about-text">
              <p>CS@Illinois '21</p>
              <p>
                Product Manager | Hack4Impact UIUC
                <br />
                <ul className="small-text">
                  <li>Child's Play: directory of games to use as therapy</li>
                  <li>Kiva: financial document collection portal</li>
                  <li>UIC MLI: Spinal X-ray position comparision tool</li>
                  <li>
                    Kids Save Ocean: sustainability project accelerator
                    (ongoing)
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
            </div>

            <div className="socials">
              <Social
                href="https://www.facebook.com/arpan.laha99"
                icon={faFacebookF}
                text="Facebook"
              />
              <Social
                href="https://github.com/arpanlaha"
                icon={faGithub}
                text="GitHub"
              />
              <Social
                href="https://www.instagram.com/arpanlahaha/"
                icon={faInstagram}
                text="Instagram"
              />
              <Social
                href="https://www.linkedin.com/in/arpanlaha/"
                icon={faLinkedinIn}
                text="LinkedIn"
              />
              <Social
                href="https://twitter.com/arpanlahaha"
                icon={faTwitter}
                text="Twitter"
              />
              <Social href="" icon={faFileAlt} text="Resume" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export const query = graphql`
  query {
    main: file(relativePath: { eq: "fb_profile_2019_square_800.webp" }) {
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
