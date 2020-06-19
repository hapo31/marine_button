import React, { useState, useEffect } from "react";
import ReactBootstrapSlider from "react-bootstrap-slider";
import { useDispatch, useSelector } from "react-redux";

import MarineButtonRootState from "../../../types/RootState";
import { useDidMount } from "src/hooks/useClassComponentLikeLifeCycle";
import { ClientRenderedAction } from "src/actions/AppActions";

type Props = {
  target: HTMLAudioElement;
  className?: string;
};

export default (props: Props) => {
  const [volume, setVolume] = useState(0);
  const dispatch = useDispatch();
  const { playAudio: _, app } = useSelector<unknown>(({ playAudio, app }) => ({
    playAudio,
    app,
  })) as typeof MarineButtonRootState;

  useDidMount(() => {
    dispatch(ClientRenderedAction(localStorage));
  });

  useEffect(() => {
    if (app.localStorageRef != null) {
      setVolume(parseInt(app.localStorageRef.getItem("volume")) || 75);
    }
  }, [app.localStorageRef]);

  // return (
  //   <ReactBootstrapSlider
  //     className={props.className}
  //     min={0}
  //     max={100}
  //     orientation="horizontal"
  //     step={1}
  //     value={volume}
  //     change={e => {
  //       const target = e.target as HTMLInputElement;
  //       const newVolume = parseInt(target.value);
  //       setVolume(newVolume);
  //       props.target.volume = newVolume;
  //     }}
  //     slideStop={() => {
  //       app.localStorageRef.setItem("volume", volume.toString());
  //     }}
  //   />
  // );

  return <div />;
};
