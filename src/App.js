import firebase from "./firebase";
import { auth, firestore } from "./firebase";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import ContextProvider from "./components/Context";

function App() {
    return (
        <Router>
            <ContextProvider>
                <Navbar />
                <Main />
            </ContextProvider>
        </Router>
    );
}

export default App;
