// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAk5I0TsM9tGBqf5ID71EjodPlb3rfhloE",
    authDomain: "qrramba-f977a.firebaseapp.com",
    projectId: "qrramba-f977a",
    storageBucket: "qrramba-f977a.appspot.com",
    messagingSenderId: "402085625403",
    appId: "1:402085625403:web:ac6ddd67da1d676d8ce61e",
    measurementId: "G-BB8G1BM0SZ"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth()
const storage = firebase.storage();

export { firebase, auth, db, storage }