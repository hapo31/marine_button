import data from "../../files.json";
import AppState from "../state/PlayAudioState/AppState";

const initialState = {
  voiceList: data,
};

const appReducer: (state: AppState) => AppState = (state = initialState) => {
  return state;
};

export default appReducer;
