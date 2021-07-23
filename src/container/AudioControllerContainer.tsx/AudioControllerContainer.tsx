import React, { useState } from "react";
import { Slider, AppBar, Toolbar, ClickAwayListener } from "@material-ui/core";
import VolumeUp from "@material-ui/icons/VolumeUp";
import VolumeDown from "@material-ui/icons/VolumeDown";

import useStyles, { volumeContorollerHeight } from "src/theme/Styles";
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
  const classes = useStyles(props);

  const [isExpand, setIsExpand] = useState(false);

  return (
    <ClickAwayListener onClickAway={() => setIsExpand(false)}>
      <Wrapper>
        <StreachAppBar
          className={`${classes.volumeContoroller} ${isExpand ? "expand" : ""}`}
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
      </Wrapper>
    </ClickAwayListener>
  );
};

const Wrapper = styled.div`
  .expand {
    height: auto;
  }
`;

const StreachAppBar = styled(AppBar)`
  height: 64px;
  overflow: hidden;
  transition: 0.2s;
  display: flex;
`;

const DropButton = styled.span`
  padding: 18px 0;
  width: fit-content;
  .arrow-dropup.expand {
    transform: rotate(180deg);
    transition: 0.2s;
  }
`;
