import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
firebase.initializeApp({
  apiKey: "AIzaSyBfJTcFXuU5C3_Ho2L-NJ-YIv_XZPbtaEE",
  authDomain: "chat-room-bdc18.firebaseapp.com",
  projectId: "chat-room-bdc18",
  storageBucket: "chat-room-bdc18.appspot.com",
  messagingSenderId: "271629791549",
  appId: "1:271629791549:web:7641558230ff48c7e7d554",
  measurementId: "G-KH9H5WQXPX",
});

// init firebase services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectstorage = firebase.storage();

// timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectAuth, timestamp, projectstorage };
