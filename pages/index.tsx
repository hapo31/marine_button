import React from "react";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import appReducer from "../src/reducers/AppReducer";
import playAudioReducer from "../src/reducers/PlayAudioReducer";

import Header from "../src/container/HeaderContainer/HeaderContainer";
import Footer from "../src/container/FooterContainer/FooterContainer";
import VoiceButtonsContainer from "../src/container/VoiceButtonsContainer/VoiceButtonsContainer";
import fetch from "isomorphic-unfetch";

const store = createStore(
  combineReducers({ app: appReducer, playAudio: playAudioReducer })
);

type Props = {
  isStatic: boolean;
};

export default (props: Props) => (
  <>
    <Header />
    <Provider store={store}>
      <VoiceButtonsContainer />
    </Provider>
    <Footer />
  </>
);
