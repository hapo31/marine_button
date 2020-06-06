import React, { useState } from "react";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import VoiceButtonsContainer from "../src/container/VoiceButtonsContainer/VoiceButtonsContainer";

import useInputWithValue from "../src/custom-hooks/useInputWithValue";

import voiceList from "../static/voicelist.json";
import useAudioListToVoiceList from "../src/custom-hooks/useAudioListToVoiceList";

type Props = {};

export default (props: Props) => {
  const [fileValue, fileInput] = useInputWithValue<File>("file");
  const [textValue, textInput] = useInputWithValue<string>("text");
  const [audioList, setAudioList] = useState<string[]>([]);
  const voiceList = useAudioListToVoiceList(audioList);

  return (
    <header>
      <Nav className="navbar navbar-expand-mid">
        <Navbar className="navbar-nav">
          <NavItem className="mb-0 text-large wf-nicomoji">
            宝鐘マリンボタン 音声追加フォーム
          </NavItem>
        </Navbar>
      </Nav>
      <div className="text-mid">
        <div>
          音声ファイル選択
          {fileInput}
          {fileValue}
        </div>
        <div>
          音声の名前
          {textInput}
          {textValue}
        </div>
        プレビュー
        <VoiceButtonsContainer voiceList={voiceList} />
      </div>
    </header>
  );
};

export function getStaticProps() {
  return { props: { isStatic: true, voiceList } };
}
