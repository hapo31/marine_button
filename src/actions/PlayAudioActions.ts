export type Actions = ReturnType<
  typeof PlayAudioAction | typeof StopAudioAction | typeof ChangeVolume
>;
export const PLAY_AUDIO = "PLAYAUDIO.PLAY_AUDIO";
export const PlayAudioAction = (filename: string) => ({
  type: PLAY_AUDIO as typeof PLAY_AUDIO,
  filename,
});

export const STOP_AUDIO = "PLAYAUDIO.STOP_AUDIO";
export const StopAudioAction = () => ({
  type: STOP_AUDIO as typeof STOP_AUDIO,
});

export const CHANGE_VOLUME = "PLAYAUDIO.CHANGE_VOLUME";

export const ChangeVolume = (volume: number) => {
  return {
    type: CHANGE_VOLUME as typeof CHANGE_VOLUME,
    volume,
  };
};
