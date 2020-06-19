import React, { useState, useEffect } from "react";
import ReactBootstrapSlider from "react-bootstrap-slider";
import { getStaticProps } from "../../../pages";

type Props = {
  target: HTMLAudioElement;
  initialVolume?: number;
};

export default (props: Props) => {
  return <ReactBootstrapSlider value={props.initialVolume} />;
};
