import React, { useState } from "react";
import { Slider, AppBar, Toolbar } from "@material-ui/core";
import VolumeUp from "@material-ui/icons/VolumeUp";
import VolumeDown from "@material-ui/icons/VolumeDown";

import useStyles from "src/theme/Styles";

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
  const [volume, setVolume] = useState(props.defaultVolume);
  const classes = useStyles(props);

  return (
    <AppBar
      className={classes.volumeContoroller}
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
      </Toolbar>
    </AppBar>
  );
};
