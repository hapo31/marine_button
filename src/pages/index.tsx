import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";

import rootReducer from "../reducers/RootReducer";

import Header from "./HeaderContainer/HeaderContainer";
import Footer from "./FooterContainer/FooterContainer";
import MainContentContainer from "./MainContent/MainContentContainer";

const store = createStore(rootReducer);
export default () => (
  <Provider store={store}>
    <Header></Header>
    <MainContentContainer></MainContentContainer>
    <Footer></Footer>
  </Provider>
);
