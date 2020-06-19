import AudioList2Store from "../utils/AudioList2Store";

export type Actions = ReturnType<
  typeof PlayAudioAction | typeof StopAudioAction | typeof ChangeVolume
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

export const CHANGE_VOLUME = "CHANGE_VOLUME";

export const ChangeVolume = (volume: number) => {
  return {
    type: CHANGE_VOLUME as typeof CHANGE_VOLUME,
    volume,
  };
};
