import { Actions, PLAY_AUDIO, STOP_AUDIO } from "../actions/Actions";
import PlayAudioState from "../state/PlayAudioState";
import { Reducer } from "redux";

const initialState: PlayAudioState = {
  filename: "silence.wav",
  playing: false,
};

const playAudioReducer: Reducer<PlayAudioState, Actions> = (
  state = initialState,
  action: Actions
) => {
  switch (action.type) {
    case PLAY_AUDIO:
      return {
        filename: action.filename,
        playing: true,
      };

    case STOP_AUDIO:
      return {
        filename: "silence.wav",
        playing: false,
      };

    default:
      return state;
  }
};

export default playAudioReducer;
