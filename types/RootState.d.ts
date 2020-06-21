import AppState from "src/state/AppState";
import PlayAudioState from "src/state/PlayAudioState";

declare namespace MarineButtonRootState {
  export const RootState: {
    app: AppState;
    playAudio: PlayAudioState;
  };
}

export default MarineButtonRootState.RootState;
