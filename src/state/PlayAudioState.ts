import fetch from "isomorphic-unfetch";

export default class PlayAudioState {
  filename = "";

  playing = false;
}

export class PlayAudio {
  private audioContext: AudioContext;

  private arrayBuffers: Record<string, AudioBuffer> = {};

  constructor() {
    this.audioContext = new AudioContext();
  }

  public async load(url: string) {
    // ロード済みなら即リターン
    if (this.arrayBuffers[url] != null) {
      return;
    }
    try {
      const res = await fetch(url);
      const buffer = await res.arrayBuffer();
      const audioBuffer = await this.audioContext.decodeAudioData(buffer);
      this.arrayBuffers[url] = audioBuffer;
    } catch (e) {
      throw e;
    }
  }

  public async loadAndPlaySound(url: string, cache = true) {
    // ロード済みでなければ読み込む
    if (this.arrayBuffers[url] == null) {
      try {
        const res = await fetch(url);
        const buffer = await res.arrayBuffer();
        const audioBuffer = await this.audioContext.decodeAudioData(buffer);
        if (cache) {
          this.arrayBuffers[url] = audioBuffer;
        }
      } catch (e) {
        throw e;
      }
    }

    const src = this.audioContext.createBufferSource();
    src.connect(this.audioContext.destination);
    src.start(0);
  }
}
