import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";

import rootReducer from "../reducers/RootReducer";

import Header from "./HeaderContainer/HeaderContainer";
import Footer from "./FooterContainer/FooterContainer";
import MainContentContainer from "./MainContent/MainContentContainer";

import "./../../css/index.css";

const store = createStore(rootReducer);

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
