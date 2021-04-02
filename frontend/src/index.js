import React from "react";
import { AppProvider } from "./js/context/AppContext";
import ReactDOM from "react-dom";
import App from "./js/App";
import * as serviceWorker from "./js/serviceWorker";

import { Provider } from "react-redux";
import { configureStore } from "./js/redux/store";

import reportWebVitals from "./reportWebVitals";

// import socketClient from 'socket.io-client';
// const server = 'http://127.0.0.1:5000/';

// const socket = socketClient(server);
// let count = 1;
// let interval;

ReactDOM.render(
  <Provider store={configureStore()}>
    <AppProvider>
      <App />
    </AppProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
