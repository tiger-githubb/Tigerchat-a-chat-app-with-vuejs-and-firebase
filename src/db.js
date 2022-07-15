//configuration firebase: realtime database en mode test

import firebase from "firebase/app";
import "firebase/database";

const config = {
    apiKey: "AIzaSyAx3T1wFvxbq2t89FySXOQIP8a3BklUudA",
    authDomain: "tigerchat-44103.firebaseapp.com",
    projectId: "tigerchat-44103",
    storageBucket: "tigerchat-44103.appspot.com",
    messagingSenderId: "527823790780",
    appId: "1:527823790780:web:a321a6c036e5f621d8e6b9",
    measurementId: "G-Q5NDZZREG3"
}

const db = firebase.initializeApp(config);
export default db;
