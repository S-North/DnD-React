// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';

// // Configure Firebase.

// const config = {
//   apiKey: process.env.REACT_APP_FIREBASE_APIKEY, 
//   authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_SENDERID,
//   appId: process.env.REACT_APP_FIREBASE_APPID
// }
  
// const app = firebase.initializeApp(config);
// const auth = app.firebase.auth;
// const firestore = app.firebase.firestore;

// export { app, auth, firestore }

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// import from .env file (see the .env.tempate file for instructions)
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_APIKEY, 
    authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_SENDERID,
    appId: process.env.REACT_APP_FIREBASE_APPID
  }

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore()


export default getFirestore(); // export firestore as deafault
export { firestore } // export firestore in list of apps. initialised in a variable ^
