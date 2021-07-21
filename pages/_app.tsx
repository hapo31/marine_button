import React from "react";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import playAudioReducer from "../src/reducers/PlayAudioReducer";
import appReducer from "src/reducers/AppReducer";
import { createTheme, StylesProvider, ThemeProvider } from "@material-ui/core";

const theme = createTheme({
  // eslint-disable-next-line
  shadows: ["none"] as any,
  palette: {
    background: {
      default: "var(--marine-sub-color)",
    },
  },
});

const store = createStore(
  combineReducers({ playAudio: playAudioReducer, app: appReducer })
);

export default ({
  Component,
  pageProps,
}: {
  // ここは真面目に型を付けるだけ無駄
  Component: React.ComponentClass;
  pageProps: Record<string, unknown>;
}) => (
  <ThemeProvider theme={theme}>
    <StylesProvider injectFirst>
      <title>宝鐘マリンボタン🏴☠</title>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </StylesProvider>
  </ThemeProvider>
);
