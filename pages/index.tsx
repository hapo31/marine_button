import Header from "../src/container/HeaderContainer/HeaderContainer";
import Footer from "../src/container/FooterContainer/FooterContainer";
import VoiceButtonsContainer from "../src/container/VoiceButtonsContainer/VoiceButtonsContainer";

import { VoiceList } from "../src/state/AppState";
import AudioList2Store from "../src/utils/AudioList2Store";

import audioList from "../static/audiolist.json";
import styled from "@emotion/styled";

import metainfo from "../static/metainfo.json";
import { fetchOGP, type OGPInfo } from "src/model/OGP/OGP";
import fetchYoutubeChannelOGP from "src/model/OGP/youtube";

type Props = {
  isStatic: boolean;
  voiceList: VoiceList;
  ogpInfo: Record<string, OGPInfo>;
};

export default ({ ogpInfo, voiceList }: Props) => {
  return (
    <>
      <Header x={ogpInfo["x"]} youtube={ogpInfo["youtube"]} />
      <ButtonCount>
        <div>button count: {metainfo.count}</div>
      </ButtonCount>
      <VoiceButtonsContainer voiceList={voiceList} />
      <Footer />
    </>
  );
};

export async function getStaticProps(): Promise<{ props: Props }> {
  const voiceList = AudioList2Store(audioList);
  const ogps = await Promise.all([
    fetchYoutubeChannelOGP("UCCzUftO8KOVkV4wQG1vkUvg"),
    fetchOGP("https://twitter.com/houshoumarine"),
  ]);
  return {
    props: {
      isStatic: true,
      voiceList,
      ogpInfo: {
        youtube: ogps[0],
        x: ogps[1],
      },
    },
  };
}

const ButtonCount = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;
