import React, { useContext, useEffect, useState } from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { auth } from "../firebase";
import firebase from "firebase";
import { Context } from "./Context";
import {Redirect} from "react-router-dom" 
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBInput,
} from "mdbreact";
import { Link } from "react-router-dom";
import image from "../images/31501.jpg";
import { actions } from "../AccountActions";

const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: "popup",
    // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    signInSuccessUrl: "/",
    // We will display Google as auth providers.
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
    // callbacks: {
    //     // Avoid redirects after sign-in.
    //     signInSuccessWithAuthResult: () => false
    //   }
};
function SignIn() {
    const [state,dispatch] = useContext(Context);
    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                dispatch({ type: "SET_USER", user: user });
                dispatch({ type: "LOGGED_IN", isLogged: true });
            } else {
                console.log("not signed in ");
            }
        });
    }, [dispatch]);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSignIn = (e) => {
        e.preventDefault();
        actions.signIn(email, password);
    };
    const handleEmail = (e) => {
        setEmail(e.target.value);
    };
    const handlePassword = (e) => {
        setPassword(e.target.value);
    };
    
    if(firebase.auth().currentUser){
        return <Redirect to="/" />
    }
    return (
        <MDBContainer className="my-5">
            <MDBRow className="justify-content-center ">
                <MDBCol md="6">
                    <img className="img-fluid pr-5" src={image} alt="cover" />
                </MDBCol>
                <MDBCol md="5">
                    <MDBCard>
                        <MDBCardBody>
                            <form>
                                <p className="h3 text-center py-3">Sign In</p>
                                <StyledFirebaseAuth
                                    className="mb-4"
                                    uiConfig={uiConfig}
                                    firebaseAuth={firebase.auth()}
                                />
                                <p className="text-center">
                                    Or
                                    <hr />
                                </p>
                                <MDBInput
                                    className="black-text "
                                    label="Type your email"
                                    icon="envelope"
                                    background
                                    group
                                    type="email"
                                    validate
                                    error="wrong"
                                    success="right"
                                    onChange={handleEmail}
                                />
                                <MDBInput
                                    className="black-text "
                                    label="Type your password"
                                    icon="lock"
                                    background
                                    group
                                    type="password"
                                    validate
                                    onChange={handlePassword}
                                />

                                <div className="text-center py-1 ">
                                    <Link to="/">
                                        <MDBBtn
                                            className="aqua-gradient"
                                            type="submit"
                                            onClick={handleSignIn}
                                        >
                                            Log In
                                        </MDBBtn>
                                    </Link>
                                    <p className="text-muted mt-3">
                                        Don't have an account?
                                    </p>
                                    <Link to="signup">Sign Up with e-mail</Link>
                                </div>
                            </form>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}

export default SignIn;
