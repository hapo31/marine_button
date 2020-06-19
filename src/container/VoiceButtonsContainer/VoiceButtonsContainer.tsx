import React, { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import PlayAudioState from "../../state/PlayAudioState";
import ButtonSectionContainer from "../ButtonSectionContainer/ButtonSectionContainer";

import { VoiceList } from "../../state/AppState";
import { StopAudioAction } from "../../actions/PlayAudioActions";
import AudioControllerContainer from "../AudioControllerContainer.tsx/AudioControllerContainer";

import MarineButtonRootState from "../../../types/RootState";

type Props = {
  voiceList: VoiceList;
};

export default (props: Props) => {
  const [isFirstPlay, setIsFirstPlay] = useState(true);
  const dispatch = useDispatch();
  const audioRef = useRef<HTMLAudioElement>();
  const { playAudio, app: _ } = useSelector<unknown>(({ playAudio, app }) => ({
    playAudio,
    app,
  })) as typeof MarineButtonRootState;

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

      <AudioControllerContainer
        className="fixed-bottom-container"
        target={audioRef.current}
      />
    </main>
  );
};
