import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBTYaUhm1V_GzdlWz2GV2aSxPgJvrwkUuA",
    authDomain: "slack-clone-kunal.firebaseapp.com",
    projectId: "slack-clone-kunal",
    storageBucket: "slack-clone-kunal.appspot.com",
    messagingSenderId: "225458784263",
    appId: "1:225458784263:web:d9761c257b5e9aedf0c2a2",
    measurementId: "G-BB5K09GYTW"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore();

  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider}
  export default db;
