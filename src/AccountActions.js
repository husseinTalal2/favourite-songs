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
    const songsRef = db.collection(uid).doc("songs");
    await songsRef.get().then((doc) => {
        songs = Object.values(doc.data());
    });
    return songs;
}
async function getUserNames() {
    let userNames
    const userNamesRef = db.collection("userNames").doc("name")
    await userNamesRef.get().then((name)=>{
        userNames=name.data().userNames;
        
    })
    return userNames
}

async function getUsersSongs(){
    let usersWithSongs;
    //console.log(getUserNames());
    await getUserNames().then(async userName => {
        usersWithSongs = userName.map(async name => {
            let userSongs
            await db.collection(name).doc("songs").get().then(songs => {
                userSongs = Object.values(songs.data());
              //  console.log(userSongs);
            })
            //console.log({name:name, songs: userSongs});
            return {name:name, songs: userSongs}
        })
        
    })
    return usersWithSongs
  
}