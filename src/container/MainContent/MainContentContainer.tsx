import React from "react";
import { useSelector } from "react-redux";
import PlayAudioState from "../../state/PlayAudioState/PlayAudioState";
import ButtonSectionContainer from "../ButtonSectionContainer/ButtonSectionContainer";

import AppState from "../../state/PlayAudioState/AppState";

export default () => {
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
      <audio id="player" src={playAudio.filename}></audio>
    </main>
  );
};
