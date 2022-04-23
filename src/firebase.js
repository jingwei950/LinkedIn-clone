//3. Import firebase
import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

//1. Add this config from firebase > project settings
// > under SDK setup and configuration click on config > copy the code
const firebaseConfig = {
    apiKey: "AIzaSyD24_qQOZnnhjKlLJTqTP1WrLgunEinS0A",
    authDomain: "linkedin-clone-3b8f6.firebaseapp.com",
    projectId: "linkedin-clone-3b8f6",
    storageBucket: "linkedin-clone-3b8f6.appspot.com",
    messagingSenderId: "287705788188",
    appId: "1:287705788188:web:799453f756fdd3476ad4d9"
  };

//2. After adding the above code, in the console below type
//"npm add firebase"

//4.Initialize firebase app
const firebaseApp = firebase.initializeApp(firebaseConfig); //Connects to firebase database and set everything up
const db = firebaseApp.firestore(); //Get the firestore (database)
const auth = firebase.auth(); //Get the authentication

export {db, auth};