import fetch from "isomorphic-unfetch";

export default class PlayAudioState {
  filename = "";

  playing = false;
}

export class PlayAudio {
  public readonly audioContext: AudioContext;

  private arrayBuffers: Record<string, AudioBuffer> = {};

  private playingSrc?: AudioBufferSourceNode;

  constructor(silenceAudioUrl?: string) {
    this.audioContext = new AudioContext();
    if (silenceAudioUrl) {
      (async () => {
        const audioBuffer = await this.fetchAudioBuffer(silenceAudioUrl);
      })();
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

    const src = this.audioContext.createBufferSource();
    src.connect(this.audioContext.destination);
    src.start(0);
  }

  private async fetchAudioBuffer(url: string) {
    const res = await fetch(url);
    const buffer = await res.arrayBuffer();
    return await this.audioContext.decodeAudioData(buffer);
  }

  private audioPlayStart() {
    const src = this.audioContext.createBufferSource();
    src.connect(this.audioContext.destination);
    src.start();
  }
}
