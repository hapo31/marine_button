import { Actions, CLIENT_RENDERED } from "../actions/AppActions";

import AppState from "../state/AppState";

const initialState: AppState = {
  localStorageRef: null,
};

const appReducer = (state = initialState, action: Actions): AppState => {
  switch (action.type) {
    case CLIENT_RENDERED:
      return {
        localStorageRef: localStorage,
      };

    default:
      return state;
  }
};

export default appReducer;
