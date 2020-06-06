import { AudioList } from "../state/AppState";
import CreateAudioListFormat from "./CreateAudioListFormat";
import AudioList2VoiceList from "./AudioList2VoiceList";

export default (filePaths: string[]) => {
  const audioList: AudioList = filePaths.map((path, i) =>
    CreateAudioListFormat(path, {
      groupName: "プレビュー",
      buttonIndex: i,
    })
  );

  return AudioList2VoiceList(audioList);
};
