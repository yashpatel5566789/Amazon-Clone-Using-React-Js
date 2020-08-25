import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC-hChFRxbsDIkGYrrAs5yrdy30NS6foWM",
    authDomain: "clone-c40c8.firebaseapp.com",
    databaseURL: "https://clone-c40c8.firebaseio.com",
    projectId: "clone-c40c8",
    storageBucket: "clone-c40c8.appspot.com",
    messagingSenderId: "657215014089",
    appId: "1:657215014089:web:bd1e458f5cca41bc90b918",
    measurementId: "G-7V457Q63F4"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};

