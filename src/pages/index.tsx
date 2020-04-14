import React from "react";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import { graphql } from "gatsby";

import appReducer from "../reducers/AppReducer";
import playAudioReducer from "../reducers/PlayAudioReducer";

import Header from "../container/HeaderContainer/HeaderContainer";
import Footer from "../container/FooterContainer/FooterContainer";
import MainContentContainer from "../container/MainContent/MainContentContainer";

import "bootstrap/dist/css/bootstrap.min.css";
import "./../../css/index.css";
import { VoiceDataQueryResult } from "../model/GraphQLResult/VoiceData";

const store = createStore(
  combineReducers({ app: appReducer, playAudio: playAudioReducer })
);

export default (data: VoiceDataQueryResult) => (
  <>
    <div className="wf-nicomoji">
      <Header />
      <Provider store={store}>
        <MainContentContainer data={data.data} />
      </Provider>
      <Footer />
    </div>
  </>
);

export const query = graphql`
  query {
    allFile(sort: { fields: [name], order: ASC }) {
      edges {
        node {
          name
          relativePath
        }
      }
    }
  }
`;
