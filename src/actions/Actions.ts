import VoiceData from "../model/GraphQLResult/VoiceData";
import { voiceDataToVoiceList } from "../utils/GraphQLtoStore";

export type Actions = ReturnType<
  typeof PlayAudioAction | typeof StopAudioAction | typeof FetchVoiceListAction
>;
export const PLAY_AUDIO = "PLAY_AUDIO";
export const PlayAudioAction = (filename: string) => ({
  type: PLAY_AUDIO as typeof PLAY_AUDIO,
  filename,
});

export const STOP_AUDIO = "STOP_AUDIO";
export const StopAudioAction = () => ({
  type: STOP_AUDIO as typeof STOP_AUDIO,
});

export const FETCH_VOICELIST = "FETCH_VOICELIST";

export const FetchVoiceListAction = (voiceData: VoiceData) => {
  const resultData = voiceDataToVoiceList(voiceData);
  return {
    type: FETCH_VOICELIST as typeof FETCH_VOICELIST,
    voiceList: resultData,
  };
};
