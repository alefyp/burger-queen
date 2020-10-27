import * as firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyA20k2DlhQ8qxfkc60WR5ZFCnPehukt__g",
  authDomain: "burgerqueen-7f75c.firebaseapp.com",
  databaseURL: "https://burgerqueen-7f75c.firebaseio.com",
  projectId: "burgerqueen-7f75c",
  storageBucket: "burgerqueen-7f75c.appspot.com",
  messagingSenderId: "491879482592",
  appId: "1:491879482592:web:1fa1abb7dfa3980837bc85"
};

firebase.initializeApp(firebaseConfig);

firebase.firestore().enablePersistence()
  .catch(function (err) {
    if (err.code === 'failed-precondition') {
      // Multiple tabs open, persistence can only be enabled
      // in one tab at a a time.
      // ...
    } else if (err.code === 'unimplemented') {
      // The current browser does not support all of the
      // features required to enable persistence
      // ...
    }
  });

const db = firebase.firestore();

export default db;

//ojito






