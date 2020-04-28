import React from "react";
import { Button } from "react-bootstrap";

type Props = {
  size: "small" | "mid" | "large";
  children: string;
  onclick: () => void;
};

export default (props: Props) => (
  <Button
    className={`serif voice-button ${props.size}`}
    onClick={props.onclick}
  >
    {props.children}
  </Button>
);
