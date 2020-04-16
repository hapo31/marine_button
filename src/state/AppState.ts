export type VoiceList = {
  label: string;
  audios: {
    path: string;
    label: string;
  }[][];
}[];

type AppState = {
  voiceList: VoiceList;
};

export default AppState;
