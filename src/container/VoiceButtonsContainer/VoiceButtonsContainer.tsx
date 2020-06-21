import React, { useRef, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import ButtonSectionContainer from "../ButtonSectionContainer/ButtonSectionContainer";

import { VoiceList } from "../../state/AppState";
import { StopAudioAction } from "../../actions/PlayAudioActions";
import AudioControllerContainer from "../AudioControllerContainer.tsx/AudioControllerContainer";

import MarineButtonRootState from "../../../types/RootState";
import { useDidMount } from "src/hooks/useClassComponentLikeLifeCycle";
import { ClientRenderedAction } from "src/actions/AppActions";

type Props = {
  voiceList: VoiceList;
};

export default (props: Props) => {
  const [volume, setVolume] = useState(0);
  const [isFirstPlay, setIsFirstPlay] = useState(true);
  const dispatch = useDispatch();
  const audioRef = useRef<HTMLAudioElement>();
  const { playAudio, app } = useSelector<unknown>(({ playAudio, app }) => ({
    playAudio,
    app,
  })) as typeof MarineButtonRootState;

  useDidMount(() => {
    dispatch(ClientRenderedAction(localStorage));
    const recentVolume = localStorage.getItem("volume");
    setVolume(recentVolume != null ? parseInt(recentVolume) : 75);
  });

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

      {app.localStorageRef != null ? (
        <AudioControllerContainer
          onChange={(_, newValue) => {
            audioRef.current.volume = newValue / 100;
          }}
          onChangeCommited={(_, newValue) => {
            app.localStorageRef.setItem("volume", newValue.toString());
          }}
          defaultVolume={volume}
          target={audioRef.current}
        />
      ) : null}
    </main>
  );
};
