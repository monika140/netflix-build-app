import firebase from "./firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDi0STk6xSDO4gha48CIiZV5wAviGIXnaY",
  authDomain: "netflix-build-app-7514a.firebaseapp.com",
  projectId: "netflix-build-app-7514a",
  storageBucket: "netflix-build-app-7514a.appspot.com",
  messagingSenderId: "377201868917",
  appId: "1:377201868917:web:116c24b72421f22b48f83c",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
