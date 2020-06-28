import React, { ReactElement } from "react";

type SideProjectProps = {
  href: string;
  project: string;
  description: string;
};

export default function SideProject(props: SideProjectProps): ReactElement {
  const { href, project, description } = props;
  return (
    <a
      className="side-project"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <h2>{project}</h2>
      <p>{description}</p>
    </a>
  );
}
