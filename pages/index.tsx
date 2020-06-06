import React from "react";
import Header from "@containers/HeaderContainer/HeaderContainer";
import Footer from "@containers/FooterContainer/FooterContainer";
import VoiceButtonsContainer from "@containers/VoiceButtonsContainer/VoiceButtonsContainer";
import NoticeSSRBannerContainer from "@containers/NoticeSSRBannerContainer/NoticeSSRBannerContainer";

import { VoiceList } from "@states/AppState";

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
