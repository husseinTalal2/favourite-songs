import firebase from "firebase";
import "firebase/auth";
import { db } from "./firebase";
export const actions = {
    signIn: (email, pass) =>
        firebase.auth().signInWithEmailAndPassword(email, pass),
    signOut: () => firebase.auth().signOut(),
    signUp: (email, password) =>
        firebase.auth().createUserWithEmailAndPassword(email, password),
    getUserSongs: getUserSongs,
    getUsersSongs: getUsersSongs,
};

async function getUserSongs(uid) {
    let songs;
    const songsRef = db.collection(`users/${uid}/songs`).doc("songsDoc");
    await songsRef.get().then((doc) => {
        songs = Object.values(doc.data());
    });
    return songs;
}

function getUsersSongs() {
    let usersSongsWithNames = [];
    let songsArr = [];

    db.collection("users").onSnapshot((snapshot) => {
        snapshot.docs.map((doc) => {
            let userSongs = [];
            let name = doc.data().name;
            const songsRef = doc.data().songs;
            songsRef
                .get()
                .then((doc) => {
                    Object.values(doc.data()).forEach((song) =>
                        userSongs.push(song)
                    );
                })
                .catch((err) => console.log(err.message));
            usersSongsWithNames.push({ name: name, songs: userSongs });
        });
    });
    console.log(usersSongsWithNames);
    return usersSongsWithNames;
}
