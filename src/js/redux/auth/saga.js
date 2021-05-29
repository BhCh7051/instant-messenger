import { all, call, fork, put, takeEvery } from "redux-saga/effects";

import { getFirebaseBackend } from "../../services/firebase";

import {
  LOGIN_USER,
  LOGOUT_USER,
  REGISTER_USER,
  FORGET_PASSWORD,
} from "./constants";

import {
  loginUserSuccess,
  registerUserSuccess,
  forgetPasswordSuccess,
  apiError,
} from "./actions";

// Initialize firebase
const fireBaseBackend = new getFirebaseBackend();

/**
 * Sets the session
 * @param {*} user
 */

/**
 * Login the user
 * @param {*} payload - username and password
 */
function* login({ payload: { username, password, history } }) {
  try {
    /*
    fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      res
        .json()
        .then((json) => {
          console.log(json);
          if (json.user) {
            const response = {
              username: username,
              password: password,
            };
            localStorage.setItem("authUser", JSON.stringify(response));
            // yield put(loginUserSuccess(response));
            history.push("/dashboard");
          } else {
            alert("wrong username or password");
          }
        })
        .catch((err) => console.log(err));
    });

    const response = {
      username: username,
      password: password,
    };

    yield put(loginUserSuccess(user));
*/

    if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
      const response = yield call(
        fireBaseBackend.loginUser,
        username,
        password
      );
      //yield put("LOGIN_USER_SUCCESS", response.user.email);
      if (response.message === "") {
        yield put(loginUserSuccess(response.user.email));
        yield call(() => {
          history.push("/dashboard");
        });
      } else {
        yield put(apiError(response.message));
      }
    }
  } catch (error) {}
} /*else {
      const response = yield call(create, "/login", {
        username,
        password,
      });
      console.log(response);
      localStorage.setItem("authUser", JSON.stringify(response));
      yield put(loginUserSuccess(response));
    }*/

/**
 * Logout the user
 * @param {*} param0
 */
function* logout({ payload: { history } }) {
  try {
    localStorage.removeItem("authUser");
    if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
      yield call(fireBaseBackend.logout);
    }
    yield call(() => {
      history.push("/login");
    });
  } catch (error) {
    yield put(apiError(error));
  }
}

/**
 * Register the user
 */
function* register({ payload: { user } }) {
  try {
    /* console.log(user);

     fetch("http://localhost:5000/register", {
       method: "POST",
       headers: {
         "Content-Type": "application/json",
       },
       body: JSON.stringify(data),
     }).then((res) => {
       res
         .json()
         .then((json) => {
           console.log(json);
           if (json.user) {
             const response = {
               username: user.username,
               password: user.password,
             };
             // localStorage.setItem("authUser", JSON.stringify(response));
             // yield put(loginUserSuccess(response));
             // history.push("/dashboard");
           } else {
             alert("username already exist");
           }
         })
         .catch((err) => console.log(err));
     });*/

    const email = user.email;
    const password = user.password;
    if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
      const response = yield call(
        fireBaseBackend.registerUser,
        email,
        password
      );
      if (response.message === "") {
        yield put(registerUserSuccess(response.user.email));
      } else {
        yield put(apiError(response.message));
      }
    }
  } catch (error) {}
}
/*yield put(registerUserSuccess(response));
    } /!*else {
      const response = yield call(create, "/register", user);
      yield put(registerUserSuccess(response));
    }*!/
  } catch (error) {
    yield put(apiError(error));
  }
}*/

/**
 * forget password
 */
function* forgetPassword({ payload: { email } }) {
  try {
    if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
      const response = yield call(fireBaseBackend.forgetPassword, email);
      if (response) {
        yield put(
          forgetPasswordSuccess(
            "Reset link are sent to your mailbox, check there first"
          )
        );
      }
    } /*else {
      const response = yield call(create, "/forget-pwd", {
        email,
      });
      yield put(forgetPasswordSuccess(response));
    }*/
  } catch (error) {
    yield put(apiError(error));
  }
}

export function* watchLoginUser() {
  yield takeEvery(LOGIN_USER, login);
}

export function* watchLogoutUser() {
  yield takeEvery(LOGOUT_USER, logout);
}

export function* watchRegisterUser() {
  yield takeEvery(REGISTER_USER, register);
}

export function* watchForgetPassword() {
  yield takeEvery(FORGET_PASSWORD, forgetPassword);
}

function* authSaga() {
  yield all([
    fork(watchLoginUser),
    fork(watchLogoutUser),
    fork(watchRegisterUser),
    fork(watchForgetPassword),
  ]);
}

export default authSaga;
