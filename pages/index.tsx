import React from "react";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import appReducer from "../src/reducers/AppReducer";
import playAudioReducer from "../src/reducers/PlayAudioReducer";

import Helmet from "../src/components/Helmet";
import Header from "../src/container/HeaderContainer/HeaderContainer";
import Footer from "../src/container/FooterContainer/FooterContainer";
import MainContentContainer from "../src/container/MainContent/MainContentContainer";

const store = createStore(
  combineReducers({ app: appReducer, playAudio: playAudioReducer })
);

export default () => (
  <>
    <Helmet />
    <div className="wf-nicomoji">
      <Header />
      <Provider store={store}>
        <MainContentContainer />
      </Provider>
      <Footer />
    </div>
  </>
);
