import React, { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import ButtonSectionContainer from "../ButtonSectionContainer/ButtonSectionContainer";

import { VoiceList } from "../../state/AppState";
import { StopAudioAction } from "../../actions/Actions";
import PlayAudioState from "../../state/PlayAudioState";

type Props = {
  voiceList: VoiceList;
};

export default (props: Props) => {
  const [isFirstPlay, setIsFirstPlay] = useState(true);
  const dispatch = useDispatch();
  const audioRef = useRef<HTMLAudioElement>(null);
  const playAudio = useSelector((playAudio: PlayAudioState) => playAudio);

  return (
    <main
      onClick={() => {
        // iOSでの音声再生制限解除のための処理
        if (isFirstPlay && audioRef != null && audioRef.current != null) {
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
        onCanPlay={() => {
          if (audioRef !== null && audioRef.current !== null) {
            audioRef.current.play();
          }
        }}
        onEnded={() => dispatch(StopAudioAction())}
        src={`static/audio/${playAudio.filename}`}
        muted
        autoPlay
      />
    </main>
  );
};
