import VoiceDataQueryResult from "../model/GraphQLResult/VoiceData";

export function voiceDataToVoiceList(voiceData: VoiceDataQueryResult) {
  const resultData = [];
  const temp = [];
  const match = /\d+_([^/]+)\/([^/]+)\/\d+_([^.]+)\.mp3/;
  for (const edge of voiceData.allFile.edges) {
    const { relativePath } = edge.node;
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

  return resultData;
}
