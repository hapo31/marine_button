import * as chai from "chai";
import { voiceDataToVoiceList } from "../../src/utils/GraphQLtoStore";

import src from "./src";
import result from "./result";

describe("voiceDataToVoiceList", () => {
  it("正常系", () => {
    it("GraphQLから取得される値が正常に変換されるか", () => {
      const testResult = voiceDataToVoiceList(src.data);
      chai.assert.isTrue(JSON.stringify(testResult) === JSON.stringify(result));
    });
  });

  it("異常系", () => {
    it("GraphQLから取得される値がぶっ壊れているときにエラーになる", () => {
      chai.assert.throws(() => {
        voiceDataToVoiceList({
          allFile: {
            edges: [],
          },
        });
      });
    });
  });
});
