import React, { ReactElement, useEffect, useState } from "react";
import { Head, Social } from "../components";
import Img, { FluidObject } from "gatsby-image";
import { graphql } from "gatsby";

import facebook from "../images/facebook.svg";
import file from "../images/file.svg";
import github from "../images/github.svg";
import instagram from "../images/instagram.svg";
import linkedin from "../images/linkedin.svg";
import moon from "../images/moon.svg";
import sun from "../images/sun.svg";
import twitter from "../images/twitter.svg";

import "../styles/main.scss";

interface HomeProps {
  data: {
    main: {
      childImageSharp: {
        fluid: FluidObject;
      };
    };
  };
}

export default function Home(props: HomeProps): ReactElement {
  const { data } = props;
  const [light, setLight] = useState(true);
  const [neu, setNeu] = useState(true);

  useEffect((): void => document.body.classList.add("show"), []);

  useEffect((): void => {
    const theme = localStorage.getItem("theme");
    if (theme !== null) {
      setLight(theme === "light");
    }

    const design = localStorage.getItem("design");
    if (design !== null) {
      setNeu(design === "neu");
    }
  }, [setLight, setNeu]);

  useEffect((): void => {
    document.body.classList[light ? "remove" : "add"]("dark");
    localStorage.setItem("theme", light ? "light" : "dark");
  }, [light]);

  useEffect((): void => {
    ["switch", "second-panel", "main-image", "about", "social"]
      .map((className) =>
        Array.from(document.getElementsByClassName(className))
      )
      .forEach((neuClass) =>
        neuClass.forEach((neuElement) =>
          neuElement.classList[neu ? "remove" : "add"]("flat")
        )
      );
    localStorage.setItem("design", neu ? "neu" : "flat");
  }, [neu]);

  const switchTheme = (): void => {
    document.getElementById("theme-switch")?.classList.add("no-hover");
    setLight(!light);
  };

  const switchDesign = (): void => {
    document.getElementById("neu-switch")?.classList.add("no-hover");
    setNeu(!neu);
  };

  const leaveSwitch = (): void =>
    Array.from(
      document.getElementsByClassName("switch")
    ).forEach((switchElement) => switchElement.classList.remove("no-hover"));

  return (
    <>
      <Head />
      <button
        className="switch theme-switch"
        id="theme-switch"
        onClick={switchTheme}
        onMouseDown={(e) => e.preventDefault()}
        onMouseLeave={leaveSwitch}
      >
        <img
          className="theme-switch-svg switch-current"
          src={light ? sun : moon}
          alt="Theme switch"
        />
        <img
          className="theme-switch-svg switch-other"
          src={light ? moon : sun}
          alt="Theme switch"
        />
      </button>
      <button
        className="switch neu-switch"
        id="neu-switch"
        onClick={switchDesign}
        onMouseDown={(e) => e.preventDefault()}
        onMouseLeave={leaveSwitch}
      >
        <span className="switch-current">{neu ? "neu" : "flat"}</span>
        <span className="switch-other">{neu ? "flat" : "neu"}</span>
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
                alt="Arpan Laha"
                backgroundColor
              />
            </div>
          </div>
        </div>
        <div className="second-panel">
          <div className="about">
            <div className="about-text">
              <div className="about-text-section">
                <p>CS@Illinois '21</p>
              </div>
              <div className="about-text-section">
                <p>Co-Director | Hack4Impact UIUC</p>
                <ul>
                  <li>Child's Play: directory of games to use as therapy</li>
                  <li>Kiva: financial document collection portal</li>
                  <li>UIC MLI: Spinal X-ray position comparision tool</li>
                  <li>
                    Kids Save Ocean: sustainability project accelerator
                    (ongoing)
                  </li>
                </ul>
              </div>
              <div className="about-text-section">
                <p>Other stuff</p>
                <ul>
                  <li>
                    Internships: Microsoft • UChicago Computation Institute •
                    FermiLab Mu2e
                  </li>
                  <li>
                    Extracurriculars: Reflections | Projections • HackIllinois
                  </li>
                  <li>Interests: piano • movies • video games • watches</li>
                </ul>
              </div>
            </div>
            <div className="socials-container">
              <div className="socials">
                <Social
                  href="https://www.facebook.com/arpan.laha99"
                  icon={facebook}
                  text="Facebook"
                />
                <Social
                  href="https://github.com/arpanlaha"
                  icon={github}
                  text="GitHub"
                />
                <Social
                  href="https://www.instagram.com/arpanlahaha/"
                  icon={instagram}
                  text="Instagram"
                />
                <Social
                  href="https://www.linkedin.com/in/arpanlaha/"
                  icon={linkedin}
                  text="LinkedIn"
                />
                <Social
                  href="https://twitter.com/arpanlahaha"
                  icon={twitter}
                  text="Twitter"
                />
                <Social href="/resume.pdf" icon={file} text="Resume" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export const query = graphql`
  query {
    main: file(relativePath: { eq: "fb_profile_2019_square_800.jpg" }) {
      childImageSharp {
        fluid(quality: 80) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
