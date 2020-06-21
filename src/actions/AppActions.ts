export type Actions = ReturnType<typeof ClientRenderedAction>;
export const CLIENT_RENDERED = "APP.CLIENT_RENDERED";
export const ClientRenderedAction = (localStorageRef: typeof localStorage) => ({
  type: CLIENT_RENDERED as typeof CLIENT_RENDERED,
  localStorageRef,
});
