import React from "react";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import appReducer from "../reducers/AppReducer";
import playAudioReducer from "../reducers/PlayAudioReducer";

import Header from "./HeaderContainer/HeaderContainer";
import Footer from "./FooterContainer/FooterContainer";
import MainContentContainer from "./MainContent/MainContentContainer";

import "./../../css/index.css";

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
      <audio id="player" src="#"></audio>
    </div>
  </>
);
