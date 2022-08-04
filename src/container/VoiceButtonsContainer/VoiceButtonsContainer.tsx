import { useRef, useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import ButtonSectionContainer from "../ButtonSectionContainer/ButtonSectionContainer";

import { VoiceList, useAppState, AudioData } from "../../state/AppState";
import { StopAudioAction } from "../../actions/PlayAudioActions";
import AudioControllerContainer from "../AudioControllerContainer/AudioControllerContainer";

import { ClientRenderedAction, SetHistory } from "src/actions/AppActions";
import { usePlayAudioState } from "src/state/PlayAudioState";
import getItem from "src/utils/getLocalStorage";
import { TextField } from "@mui/material";
import useDebounce from "src/hooks/useDebounce";
import styled from "@emotion/styled";

type Props = {
  voiceList: VoiceList;
};

export default function VoiceButtonsContainer(props: Props) {
  const [volume, setVolume] = useState(0);
  const [isFirstPlay, setIsFirstPlay] = useState(true);
  const dispatch = useDispatch();
  const audioRef = useRef<HTMLAudioElement>(null);
  const { filename } = usePlayAudioState();
  const { localStorageRef, buttonHistory } = useAppState();

  const [searchInput, setSearchInput] = useState("");
  const [debouncedSetInput] = useDebounce(
    (value: string) => setSearchInput(value),
    300
  );

  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (!initialized && localStorage) {
      dispatch(ClientRenderedAction(localStorage));
      const recentVolume = getItem<number>("volume");
      setVolume(recentVolume != null ? recentVolume : 75);

      const history = getItem<AudioData[]>("history");
      if (history == null) {
        localStorage.setItem("history", JSON.stringify([]));
      } else {
        dispatch(SetHistory(history));
      }
      setInitialized(true);
    }
  }, [dispatch, initialized]);

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
      <TextFieldWrapper>
        <TextField
          variant="outlined"
          placeholder="ボタンを絞り込む"
          onChange={event => debouncedSetInput(event.target.value)}
        />
      </TextFieldWrapper>

      {props.voiceList.map((category, index) => (
        <ButtonSectionContainer
          key={index + category.label}
          title={category.label}
          groups={category.sections}
          filter={searchInput}
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

      {localStorageRef != null && initialized ? (
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
}

const TextFieldWrapper = styled.div`
  width: 100%;
  margin: 10px 5px;
  > .MuiTextField-root {
    width: 100%;
    background-color: rgba(255, 255, 255, 0.2);
    > .Mui-focused > fieldset {
      border-color: var(--marine-main-color);
    }
  }
`;
