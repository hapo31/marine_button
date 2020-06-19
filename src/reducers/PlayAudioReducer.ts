import {
  Actions,
  PLAY_AUDIO,
  STOP_AUDIO,
  CHANGE_VOLUME,
} from "../actions/PlayAudioActions";
import PlayAudioState from "../state/PlayAudioState";

const initialState: PlayAudioState = {
  filename: "silence.wav",
  playing: false,
  volume: 0,
};

const playAudioReducer: (
  state: PlayAudioState,
  action: Actions
) => PlayAudioState = (state = initialState, action: Actions) => {
  switch (action.type) {
    case PLAY_AUDIO:
      return {
        ...state,
        filename: action.filename,
        playing: true,
      };

    case STOP_AUDIO:
      return {
        ...state,
        filename: "silence.wav",
        playing: false,
      };

    case CHANGE_VOLUME:
      return {
        ...state,
        volume: action.volume,
      };

    default:
      return state;
  }
};

export default playAudioReducer;
