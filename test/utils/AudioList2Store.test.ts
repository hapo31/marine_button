import * as chai from "chai";
import AudioList2Store from "../../src/utils/AudioList2Store";

import src from "./src";
import result from "./result";

describe("voiceDataToVoiceList", () => {
  it("正常系", () => {
    it("jsonから取得される値が正常に変換されるか", () => {
      const testResult = AudioList2Store(src);
      chai.assert.isTrue(JSON.stringify(testResult) === JSON.stringify(result));
    });
  });

  it("異常系", () => {
    it("jsonから取得される値がぶっ壊れているときにエラーになる", () => {
      chai.assert.throws(() => {
        AudioList2Store([]);
      });
    });
  });
});
