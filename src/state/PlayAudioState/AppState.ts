import data from "../../../files.json";

export type VoiceList = typeof data;

type AppState = {
  voiceList: VoiceList;
};

export default AppState;
