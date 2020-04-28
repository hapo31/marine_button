import React from "react";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import appReducer from "../reducers/AppReducer";
import playAudioReducer from "../reducers/PlayAudioReducer";

import Header from "../container/HeaderContainer/HeaderContainer";
import Footer from "../container/FooterContainer/FooterContainer";
import MainContentContainer from "../container/MainContent/MainContentContainer";

import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/index.css";
import "../../css/mobile.css";

const store = createStore(
  combineReducers({ app: appReducer, playAudio: playAudioReducer })
);

export default () => (
  <>
    <div className="wf-nicomoji">
      <Header />
      <Provider store={store}>
        <MainContentContainer />
      </Provider>
      <Footer />
    </div>
  </>
);
