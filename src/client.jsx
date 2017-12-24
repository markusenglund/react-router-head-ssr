import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import { Router } from "react-router-dom"
import createHistory from "history/createBrowserHistory"
import reducers from "./app/reducers/reducers";
import App from "./app/components/App";
import Head from "./app/components/Head";

const history = createHistory()

const preloadedState = window.PRELOADED_STATE;

delete window.PRELOADED_STATE;

const store = createStore(
  combineReducers(reducers),
  preloadedState,
  devToolsEnhancer()
);
const render = () => {
  ReactDOM.hydrate(
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>,
    document.getElementById("app")
  );
};

const renderHead = () => {
  ReactDOM.hydrate(
    <Provider store={store}>
      <Router history={history}>
        <Head/>
      </Router>
    </Provider>,
    document.querySelector("head")
  );
};

render();
renderHead();
