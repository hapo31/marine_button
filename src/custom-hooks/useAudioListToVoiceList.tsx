import React, { useState, useEffect } from "react";
import AudioList2VoiceList from "../utils/AudioList2VoiceList";
import { VoiceList, AudioList } from "../state/AppState";

export default (audioList: AudioList) => {
  const [beforeVoiceList, setBeforeVoiceList] = useState<VoiceList>(
    AudioList2VoiceList(audioList)
  );

  useEffect(() => {
    setBeforeVoiceList(AudioList2VoiceList(audioList));
  }, audioList);

  return beforeVoiceList;
};
