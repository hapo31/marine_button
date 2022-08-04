import Header from "../src/container/HeaderContainer/HeaderContainer";
import Footer from "../src/container/FooterContainer/FooterContainer";
import VoiceButtonsContainer from "../src/container/VoiceButtonsContainer/VoiceButtonsContainer";

import { VoiceList } from "../src/state/AppState";
import AudioList2Store from "../src/utils/AudioList2Store";

import audioList from "../static/audiolist.json";
import styled from "@emotion/styled";

import metainfo from "../static/metainfo.json";

type Props = {
  isStatic: boolean;
  voiceList: VoiceList;
};

export default (props: Props) => {
  return (
    <>
      <Header />
      <ButtonCount>
        <div>button count: {metainfo.count}</div>
      </ButtonCount>
      <VoiceButtonsContainer voiceList={props.voiceList} />
      <Footer />
    </>
  );
};

export async function getStaticProps(): Promise<{ props: Props }> {
  const voiceList = AudioList2Store(audioList);
  return {
    props: { isStatic: true, voiceList },
  };
}

const ButtonCount = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;
