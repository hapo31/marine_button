import React, { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import PlayAudioState from "../../state/PlayAudioState";
import ButtonSectionContainer from "../ButtonSectionContainer/ButtonSectionContainer";

import { VoiceList } from "../../state/AppState";
import { StopAudioAction } from "../../actions/Actions";

type Props = {
  voiceList: VoiceList;
};

export default (props: Props) => {
  const [isFirstPlay, setIsFirstPlay] = useState(true);
  const dispatch = useDispatch();
  const audioRef = useRef<HTMLAudioElement>();
  const {
    playAudio,
  }: {
    playAudio: PlayAudioState;
  } = useSelector(({ playAudio }) => ({ playAudio }));

  return (
    <main
      onClick={() => {
        // iOSでの音声再生制限解除のための処理
        if (isFirstPlay) {
          audioRef.current.play();
          audioRef.current.muted = false;
          setIsFirstPlay(false);
        }
      }}
    >
      {props.voiceList.map((section, index) => (
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
        src={`static/audio/${playAudio.filename}`}
        muted
        autoPlay
      />
    </main>
  );
};
