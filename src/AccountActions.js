import firebase from "firebase";
import "firebase/auth";
import { db, FieldValue } from "./firebase";
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
async function getUserNames() {
    let userNames;
    const userNamesRef = db.collection("userNames").doc("name");
    await userNamesRef.get().then((name) => {
        userNames = Object.keys(name.data());
    });
    //console.log(userNames);
    return userNames;
}
getUsersSongs()
async function getUsersSongs() {
   
    return await db.collection("userNames").doc("name").get().then(users => {
        //console.log(users.data());
        const usersObj = Object.entries(users.data()).map(async user => {
            const songs = await db.collection(user[1]).doc("songs").get();
            //console.log(songs.data());
            return { name: user[0], songs: Object.values(songs.data()) };
        })
        console.log(usersObj);
        return usersObj
    })
    //console.log(getUserNames());
    // await getUserNames().then(async (userNames) => {
    //     //console.log(userNames);
    //     usersWithSongs = userNames.map(async (name) => {
    //         let userSongs;
    //         console.log(name);
    //         await db
    //             .collection(name)
    //             .doc("songs")
    //             .get()
    //             .then((songs) => {
    //                 userSongs = Object.values(songs.data());
    //             });
    //         return { name: name, songs: userSongs };
    //     });
    // });
    // return usersWithSongs;
}

function addUsername(uid, name) {
    db.collection("userNames")
        .doc("name")
        .set({[name]:uid  }, {merge:true});
}
