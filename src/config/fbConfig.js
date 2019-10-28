import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDfEYlSg_enpw1WiKujme1l1b-G-zekz7A",
    authDomain: "novicell.firebaseapp.com",
    databaseURL: "https://novicell.firebaseio.com",
    projectId: "novicell",
    storageBucket: "novicell.appspot.com",
    messagingSenderId: "657002675437",
    appId: "1:657002675437:web:5e81ac034515bffaa760e4",
    measurementId: "G-HCMVJ9MZLR"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  export default firebase;