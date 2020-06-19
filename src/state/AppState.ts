export type VoiceList = {
  label: string;
  audios: {
    path: string;
    label: string;
  }[][];
}[];

type AppState = {
  voiceList: VoiceList;
  localStorageRef: typeof localStorage | null;
};

export default AppState;
