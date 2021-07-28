import { AudioData } from "src/state/AppState";
export type Actions = ReturnType<
  typeof ClientRenderedAction | typeof SetHistory | typeof AddHistory
>;
export const CLIENT_RENDERED = "APP.CLIENT_RENDERED" as const;
export const SET_HISTORY = "APP.SET_HISTORY" as const;
export const ADD_HISTORY = "APP.ADD_HISTORY" as const;

export const ClientRenderedAction = (localStorageRef: typeof localStorage) => ({
  type: CLIENT_RENDERED,
  localStorageRef,
});

export const SetHistory = (history: AudioData[]) => ({
  type: SET_HISTORY,
  history,
});

export const AddHistory = (audioData: AudioData) => ({
  type: ADD_HISTORY,
  audioData,
});
