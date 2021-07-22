import React, { useRef, useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import ButtonSectionContainer from "../ButtonSectionContainer/ButtonSectionContainer";

import { VoiceList, useAppState, AudioData } from "../../state/AppState";
import { StopAudioAction } from "../../actions/PlayAudioActions";
import AudioControllerContainer from "../AudioControllerContainer.tsx/AudioControllerContainer";

import { useDidMount } from "src/hooks/useClassComponentLikeLifeCycle";
import { ClientRenderedAction } from "src/actions/AppActions";
import { usePlayAudioState } from "src/state/PlayAudioState";
import styled from "styled-components";

type Props = {
  voiceList: VoiceList;
};

export default (props: Props) => {
  const [volume, setVolume] = useState(0);
  const [isFirstPlay, setIsFirstPlay] = useState(true);
  const dispatch = useDispatch();
  const audioRef = useRef<HTMLAudioElement>(null);
  const { filename } = usePlayAudioState();
  const { localStorageRef } = useAppState();

  const [isShowUncategorized, setIsShowUncategorized] = useState(false);

  useDidMount(() => {
    dispatch(ClientRenderedAction(localStorage));
    const recentVolume = localStorage.getItem("volume");
    setVolume(recentVolume != null ? parseInt(recentVolume) : 75);
  });

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
      {props.voiceList.map((category, index) =>
        category.label === "未分類" ? (
          <>
            <ChangeUncategorizedLabel
              onClick={() => {
                setIsShowUncategorized(state => !state);
              }}
            >
              ※ここをクリックすると、投稿されたけどまだ追加していないファイル一覧が表示されます。毎日0時頃に自動更新されます。
              いつか追加するので気長にお待ち下さい。(現在
              {category.sections[0].length}件)
            </ChangeUncategorizedLabel>
            {isShowUncategorized ? (
              <>
                {category.sections[0].map((audio, index) => (
                  <UncategorizedFile key={`${audio.path}${index}`}>
                    {audio.label}
                  </UncategorizedFile>
                ))}
                <p>
                  (あまりにも追加が遅い場合は気づいていない可能性が高いので引用RTで連絡ください、リプライは反応出来ません)
                </p>
              </>
            ) : null}
          </>
        ) : (
          <ButtonSectionContainer
            key={index + category.label}
            title={category.label}
            groups={category.sections}
          />
        )
      )}
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
          onChange={(_, newValue) => {
            if (audioRef.current && !Array.isArray(newValue))
              audioRef.current.volume = newValue / 100;
          }}
          onChangeCommited={(_, newValue) => {
            localStorageRef.setItem("volume", newValue.toString());
          }}
          defaultVolume={volume}
          target={audioRef.current || undefined}
        />
      ) : null}
    </main>
  );
};

const ChangeUncategorizedLabel = styled.p`
  color: #333;
  cursor: pointer;
  :hover {
    color: #444;
    transition: 0.2s;
  }
`;

const UncategorizedFile = styled.span`
  display: inline-block;
  margin: 5px;
  padding: 3px;
  border: 1px solid #efefef;
  border-radius: 5px;
`;
