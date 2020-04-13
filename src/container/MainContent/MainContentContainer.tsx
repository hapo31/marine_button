import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import PlayAudioState from "../../state/PlayAudioState/PlayAudioState";
import ButtonSectionContainer from "../ButtonSectionContainer/ButtonSectionContainer";

import AppState from "../../state/PlayAudioState/AppState";
import { withPrefix } from "gatsby";
import { StopAudioAction } from "../../actions/Actions";

export default () => {
  const dispatch = useDispatch();
  const audioRef = useRef<HTMLAudioElement>();
  const {
    app,
    playAudio,
  }: {
    app: AppState;
    playAudio: PlayAudioState;
  } = useSelector(({ app, playAudio }) => ({ app, playAudio }));
  return (
    <main>
      {app.voiceList.map((section, index) => (
        <ButtonSectionContainer
          key={index + section.label}
          title={section.label}
          groups={section.audios}
        />
      ))}
      <audio
        id="player"
        ref={audioRef}
        onCanPlay={() => {
          audioRef.current.play();
        }}
        onEnded={() => dispatch(StopAudioAction())}
        src={withPrefix(playAudio.filename)}
      ></audio>
    </main>
  );
};
