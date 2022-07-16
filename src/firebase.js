// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;