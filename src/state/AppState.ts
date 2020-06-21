export type VoiceList = {
  label: string;
  audios: {
    path: string;
    label: string;
  }[][];
}[];

type AppState = {
  localStorageRef: Storage | null;
};

export default AppState;
