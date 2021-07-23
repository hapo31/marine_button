import { AudioData } from "src/state/AppState";
import useStyles from "src/theme/Styles";

export type Actions = ReturnType<
  | typeof ClientRenderedAction
  | typeof ApplyPageStylesAction
  | typeof SetHistory
  | typeof AddHistory
>;
export const CLIENT_RENDERED = "APP.CLIENT_RENDERED" as const;
export const APPLYPAGESTYLES = "APP.APPLYPAGESTYLES" as const;
export const SET_HISTORY = "APP.SET_HISTORY" as const;
export const ADD_HISTORY = "APP.ADD_HISTORY" as const;

export const ClientRenderedAction = (localStorageRef: typeof localStorage) => ({
  type: CLIENT_RENDERED,
  localStorageRef,
});

export const ApplyPageStylesAction = (
  classes: ReturnType<typeof useStyles>
) => ({
  type: APPLYPAGESTYLES,
  classes,
});

export const SetHistory = (history: AudioData[]) => ({
  type: SET_HISTORY,
  history,
});

export const AddHistory = (audioData: AudioData) => ({
  type: ADD_HISTORY,
  audioData,
});
