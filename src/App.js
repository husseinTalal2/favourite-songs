import firebase from "./firebase";
import { auth, firestore } from "./firebase";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
    return (
        <Router>
            <Navbar />
            <Main />
        </Router>
    );
}

export default App;
