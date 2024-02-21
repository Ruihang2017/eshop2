// import firebase from "firebase";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCwJM-faKBpbNz6bGc45SDvI7YO7PyWTlE",
    authDomain: "eshop2-b8ac9.firebaseapp.com",
    projectId: "eshop2-b8ac9",
    storageBucket: "eshop2-b8ac9.appspot.com",
    messagingSenderId: "1025179235605",
    appId: "1:1025179235605:web:d01728d299b27f064e251c",
    measurementId: "G-2JD9DJ2DM1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

// const db = app.firestore();
// const auth = app.auth();

export { db, auth, analytics };

