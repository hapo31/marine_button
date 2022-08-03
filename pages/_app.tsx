import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import playAudioReducer from "../src/reducers/PlayAudioReducer";
import appReducer from "src/reducers/AppReducer";
import styled from "@emotion/styled";

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
  <Provider store={store}>
    <title>宝鐘マリンボタン🏴☠</title>
    <Container>
      <Component {...pageProps} />
    </Container>
  </Provider>
);

const Container = styled.div`
  width: 100%;
`;
