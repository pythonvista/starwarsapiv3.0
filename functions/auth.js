

const firebase = require('firebase/app')
const firestore = require('firebase/firestore')

const firebaseConfig = {
    apiKey: "AIzaSyB7xkZcrKaBNJJJ1mde0Em2g5hcf4s18aE",
    authDomain: "myapp-1af56.firebaseapp.com",
    projectId: "myapp-1af56",
    storageBucket: "myapp-1af56.appspot.com",
    messagingSenderId: "1039120500449",
    appId: "1:1039120500449:web:4a9f6c44a9558bc38259a0"
  };

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firestore.getFirestore(app);

module.exports  = {db, firestore}


