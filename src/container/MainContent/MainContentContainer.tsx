import React, { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { withPrefix } from "gatsby";

import PlayAudioState from "../../state/PlayAudioState";
import ButtonSectionContainer from "../ButtonSectionContainer/ButtonSectionContainer";

import AppState from "../../state/AppState";
import { StopAudioAction, FetchVoiceListAction } from "../../actions/Actions";
import { VoiceDataQueryResult } from "../../model/GraphQLResult/VoiceData";

export default (data: VoiceDataQueryResult) => {
  const dispatch = useDispatch();
  const audioRef = useRef<HTMLAudioElement>();
  const {
    app,
    playAudio,
  }: {
    app: AppState;
    playAudio: PlayAudioState;
  } = useSelector(({ app, playAudio }) => ({ app, playAudio }));

  useEffect(() => {
    if (app.voiceList.length === 0) {
      dispatch(FetchVoiceListAction(data.data));
    }
  });
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
        onCanPlay={() => audioRef.current.play()}
        onEnded={() => dispatch(StopAudioAction())}
        src={withPrefix(`audio/${playAudio.filename}`)}
      ></audio>
    </main>
  );
};
