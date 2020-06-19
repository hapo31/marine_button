import React, { useState, useEffect } from "react";
import { ReactBootstrapSlider } from "react-bootstrap-slider";
type Props = {
  target: HTMLAudioElement;
};

export default (props: Props) => {
  const [volume, setVolume] = useState(0);

  useEffect(() => {
    if (localStorage != null) {
      setVolume(parseInt(localStorage.getItem("volume")) || 75);
    }
  }, [localStorage]);

  return (
    <ReactBootstrapSlider
      min={0}
      max={100}
      orientation="horizontal"
      step={1}
      value={volume}
      change={e => {
        const target = e.target as HTMLInputElement;
        const newVolume = parseInt(target.value);
        setVolume(newVolume);
        props.target.volume = newVolume;
      }}
      slideStop={() => {
        localStorage.setItem("volume", volume.toString());
      }}
    />
  );
};
