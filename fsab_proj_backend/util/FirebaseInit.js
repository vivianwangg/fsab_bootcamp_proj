// util/FirebaseInit.js
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApmmXBuseQI20fp21PS8hAmOoYufwQfv4",
  authDomain: "fsabd4.firebaseapp.com",
  projectId: "fsabd4",
  storageBucket: "fsabd4.appspot.com",
  messagingSenderId: "1002210877773",
  appId: "1:1002210877773:web:c479d5c34160f91436d704",
  measurementId: "G-1JWPYC7R1T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);