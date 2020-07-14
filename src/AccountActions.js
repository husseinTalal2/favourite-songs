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
    addUsername: addUsername,
};

async function getUserSongs(uid) {
    let songs;
    const songsRef = db.collection(uid).doc("songs");
    await songsRef.get().then((doc) => {
        songs = Object.values(doc.data());
    });
    return songs;
}

async function getUsersSongs() {
    return await db
        .collection("userNames")
        .doc("name")
        .get()
        .then((users) => {
            const usersObj = Object.entries(users.data()).map(async (user) => {
                const songs = await db.collection(user[1]).doc("songs").get();

                return { name: user[0], songs: Object.values(songs.data()) };
            });

            return usersObj;
        });
}

function addUsername(uid, name) {
    db.collection("userNames")
        .doc("name")
        .set({ [name]: uid }, { merge: true });
}
