import React from "react";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import appReducer from "../src/reducers/AppReducer";
import playAudioReducer from "../src/reducers/PlayAudioReducer";

import Header from "../src/container/HeaderContainer/HeaderContainer";
import Footer from "../src/container/FooterContainer/FooterContainer";
import VoiceButtonsContainer from "../src/container/VoiceButtonsContainer/VoiceButtonsContainer";
import { VoiceList } from "../src/state/AppState";
import AudioList2Store from "../src/utils/AudioList2Store";

import audioList from "../static/audiolist.json";

const store = createStore(
  combineReducers({ app: appReducer, playAudio: playAudioReducer })
);

type Props = {
  isStatic: boolean;
  voiceList: VoiceList;
};

export default (props: Props) => (
  <>
    <Header />
    <Provider store={store}>
      <VoiceButtonsContainer voiceList={props.voiceList} />
    </Provider>
    <Footer />
  </>
);

export async function getStaticProps() {
  const voiceList = AudioList2Store(audioList);

  return { props: { isStatic: true, voiceList } };
}

export async function getInitialProps() {
  const voiceList = AudioList2Store(audioList);

  return { isStatic: false, voiceList };
}
