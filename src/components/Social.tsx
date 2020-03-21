import React, { ReactElement } from "react";

interface SocialProps {
  href: string;
  icon: string;
  text: string;
}

export default function Social(props: SocialProps): ReactElement {
  const { href, icon, text } = props;
  return (
    <a className="social" href={href} target="_blank" rel="noopener noreferrer">
      <img src={icon} alt={text} />
      <span>{text}</span>
    </a>
  );
}
