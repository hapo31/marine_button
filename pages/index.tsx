import React from "react";
import Header from "../src/container/HeaderContainer/HeaderContainer";
import Footer from "../src/container/FooterContainer/FooterContainer";
import VoiceButtonsContainer from "../src/container/VoiceButtonsContainer/VoiceButtonsContainer";
import NoticeSSRBannerContainer from "../src/container/NoticeSSRBannerContainer/NoticeSSRBannerContainer";

import { VoiceList } from "../src/state/AppState";
import AudioList2Store from "../src/utils/AudioList2Store";

import audioList from "../static/audiolist.json";
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
  const voiceList = AudioList2Store(audioList);
  return {
    props: { isStatic: true, voiceList },
  };
}
