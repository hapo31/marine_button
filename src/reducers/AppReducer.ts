import AppState from "../state/AppState";
import { FETCH_VOICELIST, Actions } from "../actions/Actions";

const initialState = {
  voiceList: [],
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
