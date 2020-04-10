import React from "react";
import { useSelector } from "react-redux";
import PlayAudioState from "../../state/PlayAudioState/PlayAudioState";
import ButtonSectionContainer from "../ButtonSectionContainer/ButtonSectionContainer";

import { VoiceList } from "../../state/PlayAudioState/AppState";

export default () => {
  const voiceList: VoiceList = useSelector(({ app }) => app.voiceList);
  return (
    <main>
      {voiceList.map((section, index) => (
        <ButtonSectionContainer
          key={index + section.label}
          title={section.label}
          groups={section.audios}
        />
      ))}
    </main>
  );
};
