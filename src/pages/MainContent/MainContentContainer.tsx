import React from "react";
import { useSelector } from "react-redux";
import PlayAudioState from "../../state/PlayAudioState/PlayAudioState";
import ButtonSectionContainer from "../ButtonSectionContainer/ButtonSectionContainer";

// TODO: 仮のテストデータ
import data from "../../../files.json";

export default () => {
  const state: PlayAudioState = useSelector(state => state);
  return (
    <main>
      {data.map(section => (
        <ButtonSectionContainer title={section.label} groups={section.audios} />
      ))}
    </main>
  );
};
