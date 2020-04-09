import Reducer from "redux";
import RootState from "../state/RootState";
import { Actions, PLAY_AUDIO, STOP_AUDIO } from "../actions/Actions";
import PlayAudioState from "../state/PlayAudioState/PlayAudioState";

const initialState: PlayAudioState = {
  filename: "",
  playing: false,
};

const playAudioReducer: (
  state: PlayAudioState,
  action: Actions
) => PlayAudioState = (state = initialState, action: Actions) => {
  switch (action.type) {
    case PLAY_AUDIO:
      return {
        filename: action.filename,
        playing: true,
      };

    case STOP_AUDIO:
      return {
        filename: "",
        playing: false,
      };
  }

  return state;
};

export default playAudioReducer;
