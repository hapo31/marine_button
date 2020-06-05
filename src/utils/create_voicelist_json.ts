import AudioList2VoiceList from "./AudioList2VoiceList";
import fs from "fs";

const audioListJSON = fs.readFileSync(process.argv[2], {
  encoding: "utf-8",
});

const voiceList = AudioList2VoiceList(JSON.parse(audioListJSON));

/* eslint-disable no-console */
console.log(JSON.stringify(voiceList));
