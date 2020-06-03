import React from "react";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import appReducer from "../src/reducers/AppReducer";
import playAudioReducer from "../src/reducers/PlayAudioReducer";

const store = createStore(
  combineReducers({ app: appReducer, playAudio: playAudioReducer })
);

export default ({
  Component,
  pageProps,
}: {
  // ここは真面目に型を付けるだけ無駄
  Component: React.ComponentClass;
  pageProps: Record<string, unknown>;
}) => (
  <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
);
