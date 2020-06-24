import useStyles from "src/theme/Styles";

export type Actions = ReturnType<
  typeof ClientRenderedAction | typeof ApplyPageStylesAction
>;
export const CLIENT_RENDERED = "APP.CLIENT_RENDERED";

export const APPLYPAGESTYLES = "APP.APPLYPAGESTYLES";

export const ClientRenderedAction = (localStorageRef: typeof localStorage) => ({
  type: CLIENT_RENDERED as typeof CLIENT_RENDERED,
  localStorageRef,
});

export const ApplyPageStylesAction = (
  classes: ReturnType<typeof useStyles>
) => ({
  type: APPLYPAGESTYLES,
  classes,
});
