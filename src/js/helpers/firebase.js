import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
const initFirebaseBackend = (firebaseConfig) => {

    firebase.initializeApp(firebaseConfig);}

export const auth = firebase.auth;
export const db = firebase.database();
export default initFirebaseBackend;
