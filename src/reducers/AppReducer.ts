import {
  Actions,
  CLIENT_RENDERED,
  APPLYPAGESTYLES,
  SET_HISTORY,
  ADD_HISTORY,
} from "../actions/AppActions";

import AppState from "../state/AppState";

const MAX_HISTORY = 20;

const initialState: AppState = {
  localStorageRef: null,
  classes: {},
  buttonHistory: [],
};

const appReducer = (state = initialState, action: Actions): AppState => {
  switch (action.type) {
    case CLIENT_RENDERED:
      return {
        ...state,
        localStorageRef: localStorage,
      };

    case APPLYPAGESTYLES:
      return {
        ...state,
        classes: action.classes,
      };

    case SET_HISTORY:
      return {
        ...state,
        buttonHistory: action.history,
      };

    case ADD_HISTORY: {
      const isDuplicate = state.buttonHistory.some(
        audio => audio.path === action.audioData.path
      );
      const newHistory = isDuplicate
        ? state.buttonHistory
        : [action.audioData, ...state.buttonHistory];
      if (newHistory.length >= MAX_HISTORY + 1) {
        newHistory.splice(newHistory.length - 1);
      }
      return {
        ...state,
        buttonHistory: [...newHistory],
      };
    }

    default:
      return state;
  }
};

export default appReducer;
