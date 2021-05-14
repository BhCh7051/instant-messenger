import React, { Component, useContext } from "react";
// import connect_socket from './socketConnection';

import socketClient from "socket.io-client";
import fakeBackend from "./helpers/fake-backend";
import Routes from "./routes";

const SERVER = "http://127.0.0.1:5000";

//fakebackend

// //Firebase helper
// import { initFirebaseBackend } from "./helpers/firebase";

// TODO

// let socket = socketClient(SERVER);
fakeBackend();

// const firebaseConfig = {
// 	apiKey: process.env.REACT_APP_APIKEY,
// 	authDomain: process.env.REACT_APP_AUTHDOMAIN,
// 	databaseURL: process.env.REACT_APP_DATABASEURL,
// 	projectId: process.env.REACT_APP_PROJECTID,
// 	storageBucket: process.env.REACT_APP_STORAGEBUCKET,
// 	messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
// 	appId: process.env.REACT_APP_APPID,
// 	measurementId: process.env.REACT_APP_MEASUREMENTID,
// };

// // init firebase backend
// initFirebaseBackend(firebaseConfig);

import("../css/scss/theme.scss");

class App extends Component {
  state = {
    data: null,
  };

  componentDidMount() {
    // Call our fetch function below once the component mounts

    // socket.on("connection", () => {
    //   console.log("connected to server");
    // });

    // socket.on("message", (msg) => {
    //   console.log("Message received from server: ", msg);
    // });

    // let count = 1;
    // let interval = setInterval(() => {
    //   console.log(`Sending Message ${count}`);
    //   socket.emit("message", `Message ${count}`);
    //   count++;
    // }, 3000);

    // socket.on("disconnect", (msg) => {
    //   clearInterval(interval);

    //   console.log("Socket disconnected - ", msg);
    // });

    this.callBackendAPI()
      .then((res) => this.setState({ data: res.express }))
      .catch((err) => console.log(err));
  }

  // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from App.js
  callBackendAPI = async () => {
    const response = await fetch("/express_backend");
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  };

  render() {
    return (
      <React.Fragment>
        <Routes />
      </React.Fragment>
    );
  }
}

export default App;
