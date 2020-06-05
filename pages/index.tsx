import React from "react";
import Header from "../src/container/HeaderContainer/HeaderContainer";
import Footer from "../src/container/FooterContainer/FooterContainer";
import VoiceButtonsContainer from "../src/container/VoiceButtonsContainer/VoiceButtonsContainer";
import NoticeSSRBannerContainer from "../src/container/NoticeSSRBannerContainer/NoticeSSRBannerContainer";

import { VoiceList } from "../src/state/AppState";

import voiceList from "../static/voicelist.json";

type Props = {
  isStatic: boolean;
  voiceList: VoiceList;
};

export default (props: Props) => {
  return (
    <>
      {props.isStatic ? <NoticeSSRBannerContainer /> : null}
      <Header />
      <VoiceButtonsContainer voiceList={props.voiceList} />
      <Footer />
    </>
  );
};

export async function getStaticProps() {
  return { props: { isStatic: true, voiceList } };
}

export async function getInitialProps() {
  return { isStatic: false, voiceList };
}
