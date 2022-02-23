import React, { useRef, useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import ButtonSectionContainer from "../ButtonSectionContainer/ButtonSectionContainer";

import { VoiceList, useAppState, AudioData } from "../../state/AppState";
import { StopAudioAction } from "../../actions/PlayAudioActions";
import AudioControllerContainer from "../AudioControllerContainer/AudioControllerContainer";

import { useDidMount } from "src/hooks/useClassComponentLikeLifeCycle";
import { ClientRenderedAction, SetHistory } from "src/actions/AppActions";
import { usePlayAudioState } from "src/state/PlayAudioState";
import getItem from "src/utils/getLocalStorage";

type Props = {
  voiceList: VoiceList;
};

export default (props: Props) => {
  const [volume, setVolume] = useState(0);
  const [isFirstPlay, setIsFirstPlay] = useState(true);
  const dispatch = useDispatch();
  const audioRef = useRef<HTMLAudioElement>(null);
  const { filename } = usePlayAudioState();
  const { localStorageRef, buttonHistory } = useAppState();

  useDidMount(() => {
    dispatch(ClientRenderedAction(localStorage));
    const recentVolume = getItem<number>("volume");
    setVolume(recentVolume != null ? recentVolume : 75);

    const history = getItem<AudioData[]>("history");
    if (history == null) {
      localStorage.setItem("history", JSON.stringify([]));
    } else {
      dispatch(SetHistory(history));
    }
  });

  useEffect(() => {
    const handler = () => {
      localStorage.setItem("history", JSON.stringify(buttonHistory));
    };
    window.addEventListener("unload", handler);

    return () => {
      window.removeEventListener("unload", handler);
    };
  }, [buttonHistory]);

  return (
    <main
      onClick={() => {
        // iOSでの音声再生制限解除のための処理
        if (isFirstPlay && audioRef.current != null) {
          audioRef.current.play();
          audioRef.current.muted = false;
          setIsFirstPlay(false);
        }
      }}
    >
      {props.voiceList.map((category, index) => (
        <ButtonSectionContainer
          key={index + category.label}
          title={category.label}
          groups={category.sections}
        />
      ))}
      <audio
        id="player"
        ref={audioRef}
        onCanPlay={() => audioRef.current == null || audioRef.current.play()}
        onEnded={() => dispatch(StopAudioAction())}
        src={`static/audio/${filename}`}
        muted
        autoPlay
      />

      {localStorageRef != null ? (
        <AudioControllerContainer
          onChange={newValue => {
            if (audioRef.current && !Array.isArray(newValue))
              audioRef.current.volume = newValue / 100;
          }}
          onChangeCommited={newValue => {
            localStorageRef.setItem("volume", newValue.toString());
          }}
          defaultVolume={volume}
          target={audioRef.current || undefined}
        />
      ) : null}
    </main>
  );
};
