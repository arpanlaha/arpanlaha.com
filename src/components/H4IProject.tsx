import React, { ReactElement } from "react";

type H4IProjectProps = {
  href: string;
  icon: string;
  project: string;
  description: string;
};

export default function H4IProject(props: H4IProjectProps): ReactElement {
  const { href, icon, project, description } = props;
  return (
    <a
      className="h4i-project"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={icon} alt={project} />
      <span>{project}</span>
      <sub>{description}</sub>
    </a>
  );
}
