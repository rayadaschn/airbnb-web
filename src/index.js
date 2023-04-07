import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";

import store from "@/store/index";

import "normalize.css";
import "./assets/css/index.less";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <Suspense fallback="loading.............loading...........">
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </Suspense>

  // </React.StrictMode>
);
