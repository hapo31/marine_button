import VoiceData from "../model/GraphQLResult/VoiceData";

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
  const resultData = [];
  const temp = [];
  const match = /\d+_([^\/]+)\/([^\/]+)\/\d+_([^\.]+)\.mp3/;
  for (const edge of voiceData.allFile.edges) {
    const relativePath = edge.node.relativePath;
    const matchResult = match.exec(relativePath);
    if (matchResult) {
      temp.push({
        key: matchResult[1],
        group: matchResult[2],
        name: matchResult[3],
        path: relativePath,
      });
    }
  }

  for (const audio of temp) {
  }

  return {
    type: FETCH_VOICELIST as typeof FETCH_VOICELIST,
    voiceList: null,
  };
};
