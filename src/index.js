import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import store, { history } from "./store/store";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import "react-redux-toastr/lib/css/react-redux-toastr.min.css";

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
