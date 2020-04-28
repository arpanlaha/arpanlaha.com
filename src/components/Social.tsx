import React, { ReactElement } from "react";

interface SocialProps {
  href: string;
  icon: string;
  text: string;
  filter?: boolean;
}

export default function Social(props: SocialProps): ReactElement {
  const { href, icon, text, filter } = props;
  return (
    <a className="social" href={href} target="_blank" rel="noopener noreferrer">
      <img className={filter ? "social-filter" : ""} src={icon} alt={text} />
      <span>{text}</span>
    </a>
  );
}
