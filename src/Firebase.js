import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

// Configure Firebase.

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY, 
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDERID,
  appId: process.env.REACT_APP_FIREBASE_APPID
}
  
const app = firebase.initializeApp(config);
const auth = app.firebase.auth;
const firestore = app.firebase.firestore;

export { app, auth, firestore }
