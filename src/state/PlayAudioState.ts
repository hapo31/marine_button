import fetch from "isomorphic-unfetch";
import { useSelector } from "react-redux";

export default interface PlayAudioState {
  filename: string;
  volume: number;
  playing: boolean;
}

export class PlayAudio {
  public readonly audioContext = new AudioContext();

  private arrayBuffers: Record<string, AudioBuffer> = {};

  private playingSrc?: AudioBufferSourceNode;

  constructor(doResume = true) {
    if (doResume) {
      this.audioContext.resume();
    }
  }

  public async load(url: string) {
    // ロード済みなら即リターン
    if (this.arrayBuffers[url] != null) {
      return;
    }
    try {
      const audioBuffer = await this.fetchAudioBuffer(url);
      this.arrayBuffers[url] = audioBuffer;
    } catch (e) {
      throw e;
    }
  }

  public async loadAndPlaySound(url: string, cache = true) {
    // ロード済みでなければ読み込む
    if (this.arrayBuffers[url] == null) {
      try {
        const audioBuffer = await this.fetchAudioBuffer(url);
        if (cache) {
          this.arrayBuffers[url] = audioBuffer;
        }
      } catch (e) {
        throw e;
      }
    }

    this.audioPlayStart();
  }

  private async fetchAudioBuffer(url: string) {
    const res = await fetch(url);
    const buffer = await res.arrayBuffer();
    return await this.audioContext.decodeAudioData(buffer);
  }

  private audioPlayStart() {
    this.playingSrc = this.audioContext.createBufferSource();
    this.playingSrc.connect(this.audioContext.destination);
    this.playingSrc.start(0);
  }
}

export function usePlayAudioState() {
  // eslint-disable-next-line
  const { playAudio } = useSelector<any>(({ playAudio }) => ({
    playAudio,
  })) as {
    playAudio: PlayAudioState;
  };

  return playAudio;
}
