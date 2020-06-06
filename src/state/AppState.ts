export type VoiceList = {
  label: string;
  audios: {
    path: string;
    label: string;
  }[][];
}[];

export type AudioList = string[];

type AppState = {
  voiceList: VoiceList;
};

export default AppState;
