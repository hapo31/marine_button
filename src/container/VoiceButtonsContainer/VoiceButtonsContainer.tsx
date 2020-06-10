import React, { useRef, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import ButtonSectionContainer from "../ButtonSectionContainer/ButtonSectionContainer";

import { VoiceList } from "../../state/AppState";
import { StopAudioAction } from "../../actions/Actions";
import PlayAudioState, { PlayAudio } from "../../state/PlayAudioState";

type Props = {
  voiceList: VoiceList;
};

function usePlayAudio(audioRef?: React.RefObject<HTMLAudioElement>) {
  const [playAudio] = useState(new PlayAudio());
  const playAudioState = useSelector(
    (playAudioState: PlayAudioState) => playAudioState
  );

  useEffect(() => {
    // if (!audioRef.current) {
    //   playAudio.audioContext.createMediaElementSource();
    // }
    playAudio.loadAndPlaySound(playAudioState.filename);
  }, [playAudioState.filename]);

  return [playAudio, playAudioState] as const;
}

export default (props: Props) => {
  const dispatch = useDispatch();
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playAudio, playAudioState] = usePlayAudio();

  return (
    <main
      onClick={() => {
        // iOSでの音声再生制限解除のための処理
        // if (isFirstPlay && audioRef != null && audioRef.current != null) {
        //   audioRef.current.play();
        //   audioRef.current.muted = false;
        //   setIsFirstPlay(false);
        // }
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
        src={`static/audio/${playAudioState.filename}`}
        muted
        autoPlay
      />
    </main>
  );
};
