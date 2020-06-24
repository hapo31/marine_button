import React from "react";
import Header from "@containers/HeaderContainer/HeaderContainer";
import Footer from "@containers/FooterContainer/FooterContainer";
import VoiceButtonsContainer from "@containers/VoiceButtonsContainer/VoiceButtonsContainer";
import NoticeSSRBannerContainer from "@containers/NoticeSSRBannerContainer/NoticeSSRBannerContainer";

import audioList from "@src/../static/audiolist.json";

import { VoiceList } from "@states/AppState";
import AudioList2VoiceList from "../src/utils/AudioList2VoiceList";

import { useDidMount } from "src/hooks/useClassComponentLikeLifeCycle";
import { useDispatch } from "react-redux";
import { ApplyPageStylesAction } from "src/actions/AppActions";
import useStyles from "src/theme/Styles";

type Props = {
  isStatic: boolean;
  voiceList: VoiceList;
};

export default (props: Props) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  useDidMount(() => {
    dispatch(ApplyPageStylesAction(classes));
  });

  return (
    <>
      <Header />
      <VoiceButtonsContainer voiceList={props.voiceList} />
      <Footer />
    </>
  );
};

export async function getStaticProps(): Promise<{ props: Props }> {
  const voiceList = AudioList2VoiceList(audioList);
  return {
    props: { isStatic: true, voiceList },
  };
}
