import firebase from "firebase";
import "firebase/auth";
import {db} from "./firebase"
export const actions = {
    signIn: (email, pass) =>
        firebase.auth().signInWithEmailAndPassword(email, pass),
    signOut: () => firebase.auth().signOut(),
    signUp: (email, password) =>
        firebase.auth().createUserWithEmailAndPassword(email, password),
    getUserSongs: getUserSongs,
};

async function getUserSongs(uid) {
    let songs;
    const songsRef = db.collection("users").doc(uid);
    await songsRef.get().then((doc) => {
        songs = Object.values(doc.data());
    });
    return songs;
}
