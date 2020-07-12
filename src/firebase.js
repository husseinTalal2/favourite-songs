import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDLQmfmsYEo35vceni46ahgJL-H6SpuuLA",
    authDomain: "favourite-songs-bdb7a.firebaseapp.com",
    databaseURL: "https://favourite-songs-bdb7a.firebaseio.com",
    projectId: "favourite-songs-bdb7a",
    storageBucket: "favourite-songs-bdb7a.appspot.com",
    messagingSenderId: "83640183251",
    appId: "1:83640183251:web:baaef8bd048e707a45a726",
    measurementId: "G-ZQLX4ETLV4",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const auth = firebase.auth();
export const db = firebase.firestore();
