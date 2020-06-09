import React, { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import ButtonSectionContainer from "../ButtonSectionContainer/ButtonSectionContainer";

import { VoiceList } from "../../state/AppState";
import { StopAudioAction } from "../../actions/Actions";
import PlayAudioState, { PlayAudio } from "../../state/PlayAudioState";

type Props = {
  voiceList: VoiceList;
};

function usePlayAudio() {
  const [playAudio] = useState(new PlayAudio());
  const playAudioState = useSelector(
    (playAudioState: PlayAudioState) => playAudioState
  );

  //return [playAudio, playAudio.audioContext.];
}

export default (props: Props) => {
  const dispatch = useDispatch();
  //const [playAudio, audioElement] = usePlayAudio();

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
      {/* <audio
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
      /> */}
    </main>
  );
};
