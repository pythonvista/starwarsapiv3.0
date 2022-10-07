

const firebase = require('firebase/app')
const firestore = require('firebase/firestore')

const firebaseConfig = {
    apiKey: "AIzaSyBh2hsYU6XHLLv4riFgaqVt944s4NOVsyM",
    authDomain: "vickyapi.firebaseapp.com",
    projectId: "vickyapi",
    storageBucket: "vickyapi.appspot.com",
    messagingSenderId: "702282977515",
    appId: "1:702282977515:web:e52e10e1d0d230d937aeae"
  };

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firestore.getFirestore(app);

module.exports  = {db, firestore}


