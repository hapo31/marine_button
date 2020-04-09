import React from "react";
import { useSelector } from "react-redux";
import PlayAudioState from "../../state/PlayAudioState/PlayAudioState";
export default () => {
  const state: PlayAudioState = useSelector(state => state);
  return <main></main>;
};
