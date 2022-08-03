import React, { CSSProperties } from "react";

type Props = {
  href: string;
  className?: string;
  style?: CSSProperties;
  children: React.ReactChild | React.ReactChild[];
};

export default function ExternalLink(props: Props) {
  return (
    <a
      href={props.href}
      className={`mb-link ${props.className}`}
      target="_blank"
      style={props.style}
      rel="noopener"
    >
      {props.children}
    </a>
  );
}
