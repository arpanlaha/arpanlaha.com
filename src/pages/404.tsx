import React, { ReactElement } from "react";
import { Head } from "../components";

import "../styles/style.scss";

export default function ErrorPage(): ReactElement {
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
