export type VoiceList = {
  label: string;
  audios: {
    path: string;
    label: string;
  }[][];
}[];

type AppState = {
  voiceList: VoiceList;
  localStorageRef: Storage | null;
};

export default AppState;
