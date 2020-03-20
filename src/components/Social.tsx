import React, { ReactElement } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-common-types";

interface SocialProps {
  href: string;
  icon: IconDefinition;
}

export default function Social(props: SocialProps): ReactElement {
  const { href, icon } = props;
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={icon} size="lg" />
    </a>
  );
}
