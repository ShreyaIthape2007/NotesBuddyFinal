import firebase from "firebase";
import "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDnC9biTsI88He01RUlqf2IgBUA_a7hBYE",
  authDomain: "notesbuddy-1eb9c.firebaseapp.com",
  projectId: "notesbuddy-1eb9c",
  storageBucket: "notesbuddy-1eb9c.appspot.com",
  messagingSenderId: "609196246459",
  appId: "1:609196246459:web:f1dfd533e0e9cac013f09e"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
    
}

export default firebase.firestore();



