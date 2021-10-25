import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Normalize } from "styled-normalize";
import GlobalStyle from "./style/globalStyles";

import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { rootReducer } from "./redux/reducers/rootReducer";
import thunk from "redux-thunk";
import { ThemeProvider } from "styled-components";
import { theme } from "./style/theme";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
  <React.StrictMode>
    <Normalize />
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
