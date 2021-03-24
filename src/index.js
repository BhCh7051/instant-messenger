import React from "react";
import ReactDOM from "react-dom";
import App from "./js/App";
import * as serviceWorker from "./js/serviceWorker";

import { Provider } from "react-redux";
import { configureStore } from "./js/redux/store";

//@@
//create components using React.lazy
const LightTheme = React.lazy(() => import("./js/themes/lightTheme"));
const DarkTheme = React.lazy(() => import("./js/themes/darkTheme"));

//@@
//create a parent component that will load the components conditionally using React.Suspense
const ThemeSelector = ({ children }) => {
  let isDark = localStorage.getItem("dark");
  return (
    <>
      <React.Suspense fallback={<></>}>
        {!isDark && <LightTheme />}
        {isDark && <DarkTheme />}
      </React.Suspense>
      {children}
    </>
  );
};

ReactDOM.render(
  <Provider store={configureStore()}>
    <ThemeSelector>
      <App />
    </ThemeSelector>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
