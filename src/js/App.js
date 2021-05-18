import React, { Component, useContext } from "react";


import fakeBackend from "./helpers/fake-backend";
import Routes from "./routes";

const SERVER = "http://127.0.0.1:5000";

/*fakebackend*/

 /*Firebase helper*/
import { initFirebaseBackend } from "./helpers/firebase";

fakeBackend();

const firebaseConfig = {
 	apiKey: process.env.REACT_APP_APIKEY,
 	authDomain: process.env.REACT_APP_AUTHDOMAIN,
 	databaseURL: process.env.REACT_APP_DATABASEURL,
 	projectId: process.env.REACT_APP_PROJECTID,
 	storageBucket: process.env.REACT_APP_STORAGEBUCKET,
 	messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
 	appId: process.env.REACT_APP_APPID,
 	measurementId: process.env.REACT_APP_MEASUREMENTID,
 };

 // init firebase backend
 initFirebaseBackend(firebaseConfig);

import("../css/scss/theme.scss");

class App extends Component {
  state = {
    data: null,
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
