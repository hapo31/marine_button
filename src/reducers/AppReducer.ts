import data from "../../files.json";
import AppState from "../state/PlayAudioState/AppState";
import { FETCH_VOICELIST, Actions } from "../actions/Actions";

const initialState = {
  voiceList: data,
};

const appReducer: (state: AppState, action: Actions) => AppState = (
  state = initialState,
  action: Actions
) => {
  switch (action.type) {
    case FETCH_VOICELIST:
      return {
        voiceList: action.voiceList,
      };
  }
  return state;
};

export default appReducer;
