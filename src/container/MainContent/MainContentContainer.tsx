import React, { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PlayAudioState from "../../state/PlayAudioState/PlayAudioState";
import ButtonSectionContainer from "../ButtonSectionContainer/ButtonSectionContainer";

import AppState from "../../state/PlayAudioState/AppState";
import { withPrefix } from "gatsby";
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
    dispatch(FetchVoiceListAction(data.data));
  }, [app]);
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
