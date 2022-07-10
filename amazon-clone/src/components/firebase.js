// Import the functions you need from the SDKs you need

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYhU65i7Id1c0fl6GAI3R_ZIJ4dZ1VYAU",
  authDomain: "clone-6534d.firebaseapp.com",
  projectId: "clone-6534d",
  storageBucket: "clone-6534d.appspot.com",
  messagingSenderId: "59694011914",
  appId: "1:59694011914:web:688325187a96594572f1f3",
  measurementId: "G-2F1J0GMGVX",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);


const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
