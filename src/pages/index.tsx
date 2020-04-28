import React, { ReactElement, useEffect, useState } from "react";
import { H4IProject, Head, Social } from "../components";
import Img, { FluidObject } from "gatsby-image";
import { graphql } from "gatsby";

import childsPlay from "../images/childs-play.svg";
import facebook from "../images/facebook.svg";
import fateMaker from "../images/fatemaker.svg";
import file from "../images/file.svg";
import github from "../images/github.svg";
import kiva from "../images/kiva.svg";
import instagram from "../images/instagram.svg";
import linkedin from "../images/linkedin.svg";
import moon from "../images/moon.svg";
import sun from "../images/sun.svg";
import twitter from "../images/twitter.svg";
import uic from "../images/uic.svg";

import "../styles/main.scss";

interface FluidImage {
  childImageSharp: {
    fluid: FluidObject;
  };
}

interface HomeProps {
  data: {
    main: FluidImage;
  };
}

export default function Home(props: HomeProps): ReactElement {
  const { data } = props;
  const { main } = data;
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
                fluid={main.childImageSharp.fluid}
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
                <h1>CS@Illinois '21</h1>
              </div>
              <div className="about-text-section">
                <h1>Co-Director | Hack4Impact UIUC</h1>
                <h2>Past projects:</h2>
                <div className="h4i-projects">
                  <H4IProject
                    href="https://github.com/hack4impact-uiuc/childs-play-tool"
                    icon={childsPlay}
                    project="Child's Play"
                    description="Fall 2018 - SWE"
                  />
                  <H4IProject
                    href="https://github.com/hack4impact-uiuc/kiva-portfolio-tool"
                    icon={kiva}
                    project="Kiva"
                    description="Spring 2019 - PM"
                  />
                  <H4IProject
                    href="https://github.com/hack4impact-uiuc/mli-client"
                    icon={uic}
                    project="UIC MLI"
                    description="Fall 2019 - PM"
                  />
                  <H4IProject
                    href="https://github.com/hack4impact-uiuc/kids-save-ocean"
                    icon={fateMaker}
                    project="FateMaker"
                    description="Spring 2020 - PM"
                  />
                </div>
              </div>
              <div className="about-text-section">
                <h1>Other stuff</h1>
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
                  filter
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
                <Social href="/resume.pdf" icon={file} text="Resume" filter />
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
    main: file(relativePath: { eq: "main.jpg" }) {
      childImageSharp {
        fluid(quality: 80) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
