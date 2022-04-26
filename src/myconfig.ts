import {initializeApp, FirebaseApp} from "firebase/app";
import {getFirestore, Firestore} from "firebase/firestore";

const config = { 
    apiKey: "AIzaSyCFfkAJjdNRe6OwbPBZEZy7J-kNnJVC3Fg",
    authDomain: "travis-test-90fb2.firebaseapp.com",
    databaseURL: "https://travis-test-90fb2-default-rtdb.firebaseio.com",
    projectId: "travis-test-90fb2",
    storageBucket: "travis-test-90fb2.appspot.com",
    messagingSenderId: "626117308687",
    appId: "1:626117308687:web:e98da2f8e0e64aacc68e7a"
};

const myapp: FirebaseApp = initializeApp(config);
export const db:Firestore = getFirestore(myapp);