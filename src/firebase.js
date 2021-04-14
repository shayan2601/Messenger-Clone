import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB1YX7ZVW0F3GnSdgwzm5niV4PLtyZXzT0",
  authDomain: "messenger-clone-12df4.firebaseapp.com",
  projectId: "messenger-clone-12df4",
  storageBucket: "messenger-clone-12df4.appspot.com",
  messagingSenderId: "730648661926",
  appId: "1:730648661926:web:bceac5ebe3772d40358967",
  measurementId: "G-4KYYXVB50J",
});

const db = firebaseApp.firestore();

export default db;
