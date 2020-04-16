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
        label: matchResult[1],
        group: matchResult[2],
        name: matchResult[3],
        path: relativePath,
      });
    }
  }

  const findRowIndex = (label: string) => {
    let i = 0;
    for (const row of resultData) {
      if (label === row.label) {
        return i;
      }
      ++i;
    }
    return -1;
  };
  for (const audio of temp) {
    let rowIndex = findRowIndex(audio.label);
    if (rowIndex < 0) {
      resultData.push({
        label: audio.label,
        audios: [],
      });
      rowIndex = resultData.length - 1;
    }
    const groupIndex = parseInt(audio.group);
    while (resultData[rowIndex].audios.length <= groupIndex) {
      resultData[rowIndex].audios.push([]);
    }
    resultData[rowIndex].audios[groupIndex].push({
      path: audio.path,
      label: audio.name,
    });
  }

  return {
    type: FETCH_VOICELIST as typeof FETCH_VOICELIST,
    voiceList: resultData,
  };
};
