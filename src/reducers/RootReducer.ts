import Reducer, { combineReducers } from "redux";
import RootState from "../state/RootState";
import { Actions, PLAY_AUDIO } from "../actions/Actions";
import playAudioReducer from "./PlayAudioReducer";

const initialState: RootState = {
  playAudioState: {
    filename: "",
    playing: false,
  },
};

const rootReducer = combineReducers(playAudioReducer);

export default rootReducer;
