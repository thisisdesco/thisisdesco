import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBm-gLBWFwsAVrb7LPFSWCwne4Hov_qF4c",
    authDomain: "desco-site-eb-integration.firebaseapp.com",
    databaseURL: "https://desco-site-eb-integration.firebaseio.com",
    projectId: "desco-site-eb-integration",
    storageBucket: "desco-site-eb-integration.appspot.com",
    messagingSenderId: "620595410315",
    appId: "1:620595410315:web:adaaacdf767e65de3b6b8e"
};


export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb; //firebase database collection
const storage = myFirebase.storage(); //firestore images
const storageRef = storage.ref(); //firestore images
export const imagesRef = storageRef.child('images'); //firestore images
