import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";

import rootReducer from "../reducers/RootReducer";
import Header from "./HeaderContainer/HeaderContainer";
import Footer from "./FooterContainer/FooterContainer";
import AudioButton from "../components/AudioButton";
import ButtonSection from "./ButtonSectionContainer/ButtonSectionContainer";
import MainContentContainer from "./MainContent/MainContentContainer";

const store = createStore(rootReducer);

type Props = {};

export default () => (
  <Provider store={store}>
    <Header></Header>
    <MainContentContainer></MainContentContainer>
    <Footer></Footer>
  </Provider>
);
