import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// Replace this with your own config details
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
firebase.initializeApp(firebaseConfig);
/*firebase.firestore().settings({ timestampsInSnapshots: true });*/

const auth = firebase.auth;

export class getFirebaseBackend {
  loginUser = (email, password) => {
    return auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        console.log("firebase");
        localStorage.setItem(
          "authUser",
          JSON.stringify(userCredential.user.email)
        );
        return userCredential;
      })
      .catch(function (error) {
        console.log(error);
        return error;
      });
  };
  registerUser = (email, password) => {
    return auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        console.log(userCredential);
        return userCredential;
      })
      .catch((error) => {
        return error;
      });
  };
  forgetPassword = (email) => {
    return auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        /*return 1;*/
      })
      .catch((error) => {
        console.log(error);
        return error;
      });
  };
  logout = () => {
    return auth()
      .signOut()
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        return error;
      });
  };
}

export default firebase;
