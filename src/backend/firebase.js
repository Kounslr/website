import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBCdOHoPybKTL4um1sxJRNH5UwjGXpfQgE",
    authDomain: "kounslr-3c7f3.firebaseapp.com",
    projectId: "kounslr-3c7f3",
    storageBucket: "kounslr-3c7f3.appspot.com",
    messagingSenderId: "91108883702",
    appId: "1:91108883702:web:6385cf8c5d803c472740d7",
    measurementId: "G-TK6LW4L57W"
});

var db = firebaseApp.firestore();

export { db };