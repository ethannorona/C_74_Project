import firebase from 'firebase';
require("@firebase/firestore")

const firebaseConfig = {
    apiKey: "AIzaSyCk7CQegk2LzID1fVHZXbsLe0D5XEEsScE",
    authDomain: "c71project-d8aab.firebaseapp.com",
    projectId: "c71project-d8aab",
    storageBucket: "c71project-d8aab.appspot.com",
    messagingSenderId: "315182274711",
    appId: "1:315182274711:web:d0e4c385763a038109b1d2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();