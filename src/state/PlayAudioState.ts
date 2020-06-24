import { useSelector } from "react-redux";

export default interface PlayAudioState {
  filename: string;
  volume: number;
  playing: boolean;
}

export function usePlayAudioState() {
  const { playAudio } = useSelector(
    ({ playAudio }: { playAudio: PlayAudioState }) => ({
      playAudio,
    })
  );

  return playAudio;
}
