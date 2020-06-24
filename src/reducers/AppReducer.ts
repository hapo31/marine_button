import {
  Actions,
  CLIENT_RENDERED,
  APPLYPAGESTYLES,
} from "../actions/AppActions";

import AppState from "../state/AppState";

const initialState: AppState = {
  localStorageRef: null,
  classes: {},
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

    default:
      return state;
  }
};

export default appReducer;
