import firebase from "firebase";
import "firebase/auth";
export const actions = {
    signIn: (email, pass)=> firebase.auth().signInWithEmailAndPassword(email, pass),
    signOut: () =>  firebase.auth().signOut(),
    signUp: (email, password) => firebase.auth().createUserWithEmailAndPassword(email, password),
    
}

