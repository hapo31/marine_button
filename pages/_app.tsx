import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import playAudioReducer from "@reducers/PlayAudioReducer";

const store = createStore(playAudioReducer);

export default ({
  Component,
  pageProps,
}: {
  // ここは真面目に型を付けるだけ無駄
  Component: React.ComponentClass;
  pageProps: Record<string, unknown>;
}) => (
  <>
    <title>宝鐘マリンボタン🏴☠</title>
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  </>
);
