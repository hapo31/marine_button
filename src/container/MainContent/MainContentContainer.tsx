import React, { useRef, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { withPrefix, useStaticQuery, graphql } from "gatsby";

import PlayAudioState from "../../state/PlayAudioState";
import ButtonSectionContainer from "../ButtonSectionContainer/ButtonSectionContainer";

import AppState from "../../state/AppState";
import { StopAudioAction, FetchVoiceListAction } from "../../actions/Actions";
import VoiceDataQueryResult from "../../model/GraphQLResult/VoiceData";

export default () => {
  const [isFirstPlay, setIsFirstPlay] = useState(true);

  const data: VoiceDataQueryResult = useStaticQuery(
    graphql`
      query {
        allFile(sort: { fields: [relativePath], order: ASC }) {
          edges {
            node {
              name
              relativePath
            }
          }
        }
      }
    `
  );
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
      dispatch(FetchVoiceListAction(data));
    }
  });
  return (
    <main
      onTouchStart={() => {
        // iOSでの音声再生制限解除のための処理
        if (isFirstPlay) {
          audioRef.current.play();
          audioRef.current.muted = false;
          setIsFirstPlay(false);
        }
      }}
    >
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
        muted={true}
        autoPlay={true}
      ></audio>
    </main>
  );
};
