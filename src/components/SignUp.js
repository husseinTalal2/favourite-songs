import React from "react";
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from "firebase"
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBIcon,
    MDBInput,
} from "mdbreact";
import image from "../images/31501.jpg"
console.log("from signup");
const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    signInSuccessUrl: '/',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ]
  };
function SignUp() {
    return (
        <MDBContainer className="my-5" >
            <MDBRow className="justify-content-center ">
                <MDBCol md="6">
                    <img className="img-fluid pr-5" src={image} />
                </MDBCol>
                <MDBCol md="5">
                    <MDBCard>
                        <MDBCardBody>
                            <form>
                                <p className="h4 text-center py-4">Sign In</p>
                                <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
                                <p className="text-center">Or sign in with your E-mail</p>
                                <MDBInput
                                    className="black-text"
                                    label="Type your email"
                                    icon="envelope"
                                    outline
                                    group
                                    type="email"
                                    validate
                                    error="wrong"
                                    success="right"
                                />
                                <MDBInput
                                    className="black-text"
                                    label="Type your password"
                                    icon="lock"
                                    outline
                                    group
                                    type="password"
                                    validate
                                />

                                <div className="text-center py-4 mt-3">
                                    <MDBBtn
                                        className="aqua-gradient"
                                        type="submit"
                                    >
                                        Log In
                                    </MDBBtn>
                                    <p className="text-muted mt-3">Don't have an account?</p>
                                    <p>Sign Up</p>
                                </div>
                            </form>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}

export default SignUp;
