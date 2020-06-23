import { useSelector } from "react-redux";

export default class PlayAudioState {
  filename: string;
  volume: number;
  playing: boolean;
}

export function usePlayAudioState() {
  const { playAudio } = useSelector<unknown>(({ playAudio }) => ({
    playAudio,
  })) as {
    playAudio: PlayAudioState;
  };

  return playAudio;
}
