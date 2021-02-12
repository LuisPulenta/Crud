import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
        apiKey: "AIzaSyB9sFJ1Xa1T_BXOlHeQbYKduvJNdVkCOiU",
        authDomain: "crud-23322.firebaseapp.com",
        projectId: "crud-23322",
        storageBucket: "crud-23322.appspot.com",
        messagingSenderId: "906577157928",
        appId: "1:906577157928:web:43bf6a6eeb6c47887e3a1d"
      }

export const firebaseApp = firebase.initializeApp(firebaseConfig)