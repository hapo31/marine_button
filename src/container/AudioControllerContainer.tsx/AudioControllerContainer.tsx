import React, { useState } from "react";
import { Slider, AppBar, Toolbar, ClickAwayListener } from "@material-ui/core";
import VolumeUp from "@material-ui/icons/VolumeUp";
import VolumeDown from "@material-ui/icons/VolumeDown";

import styled from "styled-components";
import { ArrowDropUp } from "@material-ui/icons";
import { useAppState } from "src/state/AppState";
import ButtonSectionContainer from "../ButtonSectionContainer/ButtonSectionContainer";

type Props = {
  target?: HTMLAudioElement;
  className?: string;
  defaultVolume: number;
  onChange: (event: React.ChangeEvent<{}>, newValue: number | number[]) => void;
  onChangeCommited: (
    event: React.ChangeEvent<{}>,
    newValue: number | number[]
  ) => void;
};

export default (props: Props) => {
  const { buttonHistory } = useAppState();
  const [volume, setVolume] = useState(props.defaultVolume);

  const [isExpand, setIsExpand] = useState(false);

  return (
    <ClickAwayListener onClickAway={() => setIsExpand(false)}>
      <StreachAppBar
        className={isExpand ? "expand" : ""}
        color="default"
        position="fixed"
      >
        <Toolbar>
          <div className="volume-icon">
            <VolumeDown />
          </div>
          <Slider
            onChange={(event, newValue) => {
              if (!Array.isArray(newValue)) {
                setVolume(newValue);
                props.onChange(event, newValue);
              }
            }}
            onChangeCommitted={props.onChangeCommited}
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
};

const StreachAppBar = styled(AppBar)`
  height: var(--volume-controller-height);
  overflow: hidden;
  transition: 0.2s;
  transition-property: height;
  display: flex;
  border-top: solid lightgray 2px;
  top: initial;
  bottom: 0;
  font-family: "Nico Moji Plus", "Nico Moji Noto Sans JP";
  background-color: var(--marine-sub-color);
  &.expand {
    height: auto;
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
