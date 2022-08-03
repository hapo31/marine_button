import React, { useState } from "react";
import { Slider, Toolbar, ClickAwayListener } from "@mui/material";

import styled from "@emotion/styled";
import { ArrowDropUp, VolumeUp, VolumeDown } from "@mui/icons-material";
import { useAppState } from "src/state/AppState";
import ButtonSectionContainer from "../ButtonSectionContainer/ButtonSectionContainer";

type Props = {
  target?: HTMLAudioElement;
  className?: string;
  defaultVolume: number;
  onChange: (newValue: number | number[]) => void;
  onChangeCommited: (newValue: number | number[]) => void;
};

export default function AudioControllerContainer(props: Props) {
  const { buttonHistory } = useAppState();
  const [volume, setVolume] = useState(props.defaultVolume);

  const [isExpand, setIsExpand] = useState(false);

  return (
    <ClickAwayListener onClickAway={() => setIsExpand(false)}>
      <StreachAppBar className={isExpand ? "expand" : ""} color="default">
        <Toolbar>
          <div className="volume-icon">
            <VolumeDown />
          </div>
          <Slider
            onChange={(_, newValue) => {
              if (!Array.isArray(newValue)) {
                setVolume(newValue);
                props.onChange(newValue);
              }
            }}
            onChangeCommitted={(_, value) => {
              props.onChangeCommited(value);
            }}
            value={volume}
            step={1}
            min={0}
            max={100}
          />
          <div className="volume-icon">
            <VolumeUp />
          </div>
          <DropButton
            onClick={() => {
              setIsExpand(state => !state);
            }}
          >
            <ArrowDropUp
              scale="120%"
              className={`arrow-dropup ${isExpand ? "expand" : ""}`}
            />
          </DropButton>
        </Toolbar>

        <ButtonSectionContainer title="履歴" groups={[buttonHistory]} />
      </StreachAppBar>
    </ClickAwayListener>
  );
}

const StreachAppBar = styled.div`
  width: 100%;
  height: var(--volume-controller-height);
  overflow: hidden;
  transition: 0.2s;
  transition-property: height;
  border-top: solid lightgray 2px;
  position: fixed;
  bottom: 0;
  font-family: "Nico Moji Plus", "Nico Moji Noto Sans JP";
  background-color: var(--marine-sub-color);
  transition-property: height;
  transition: 300ms;
  &.expand {
    height: auto;
    max-height: 90vh;
  }
`;

const DropButton = styled.span`
  padding: 18px 0;
  width: fit-content;
  .arrow-dropup.expand {
    transform: rotate(180deg);
    transition: 0.2s;
  }
`;
