import AppState from "../state/AppState";
import { FETCH_VOICELIST, Actions } from "../actions/Actions";
import audioList from "../../.temp/audiolist.json";
import AudioList2Store from "../utils/AudioList2Store";

const initialState = {
  voiceList: AudioList2Store(audioList),
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
