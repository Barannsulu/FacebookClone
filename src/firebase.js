import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBimZ6hCZUIs6nAKSgpf9E17jEi8b97ERk",
  authDomain: "facebookclone-bc3bd.firebaseapp.com",
  projectId: "facebookclone-bc3bd",
  storageBucket: "facebookclone-bc3bd.appspot.com",
  messagingSenderId: "1051358686057",
  appId: "1:1051358686057:web:f619e789a6feffcf302bf8",
  measurementId: "G-KYHX74WTPB",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };

export default db;
