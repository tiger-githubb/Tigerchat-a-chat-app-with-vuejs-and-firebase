import firebase from "firebase/compat/app"
import "firebase/compat/database"

const firebaseConfig = {
  apiKey: "AIzaSyAx3T1wFvxbq2t89FySXOQIP8a3BklUudA",
  authDomain: "tigerchat-44103.firebaseapp.com",
  databaseURL: "https://tigerchat-44103-default-rtdb.firebaseio.com",
  projectId: "tigerchat-44103",
  storageBucket: "tigerchat-44103.appspot.com",
  messagingSenderId: "527823790780",
  appId: "1:527823790780:web:a321a6c036e5f621d8e6b9",
  measurementId: "G-Q5NDZZREG3"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase ;