import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {Router, hashHistory} from "react-router";
import store from "./configure-store";
import routes from "./routes";

ReactDOM.render((
  <Provider store={store}>
    <Router routes={routes} history={hashHistory} />
  </Provider>
), document.getElementById("wrapper"));
