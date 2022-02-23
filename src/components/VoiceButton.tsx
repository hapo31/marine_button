import React from "react";
import { Button } from "@mui/material";

type Props = {
  children: string;
  onclick: () => void;
};

export default (props: Props) => (
  <Button className={`serif voice-button`} onClick={props.onclick}>
    <span className={`button-label`}>{props.children}</span>
  </Button>
);
