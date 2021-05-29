import React, { Component } from "react";
/*Firebase helper*/

import Routes from "./routes";

import("../css/scss/theme.scss");

// init firebase backend

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
