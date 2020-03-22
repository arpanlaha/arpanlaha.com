import React, { ReactElement, useEffect } from "react";
import { Head } from "../components";

import "../styles/style.scss";

export default function ErrorPage(): ReactElement {
  useEffect((): void => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      document.body.classList.add("dark");
    }
    const design = localStorage.getItem("design");
    if (design === "flat") {
      ["second-panel", "switch", "about", "social"]
        .map((className) =>
          Array.from(document.getElementsByClassName(className))
        )
        .forEach((neuClass) =>
          neuClass.forEach((neuElement) => neuElement.classList.add("no-neu"))
        );
    }
  });

  return (
    <>
      <Head title="Page not found" />
      <div className="error-page">
        <div className="error-message">
          <p>This page does not exist.</p>
          <a className="return" href="/">
            Return
          </a>
        </div>
      </div>
    </>
  );
}
