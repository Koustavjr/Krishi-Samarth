import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA_0I4S5zPAcEtAluipKRumgQJSJYvS1fU",
  authDomain: "krishi-samarth.firebaseapp.com",
  projectId: "krishi-samarth",
  storageBucket: "krishi-samarth.appspot.com",
  messagingSenderId: "475678434099",
  appId: "1:475678434099:web:07e55bbe94e31445119446"
  };

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage, firebase };
