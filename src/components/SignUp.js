import React, {useState} from 'react'

import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBInput,
} from "mdbreact";
import image from "../images/31501.jpg";
import {actions} from "../AccountActions";
import { Link } from 'react-router-dom';

function SignUp() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const handleEmail = (e)=> {
        setEmail(e.target.value)
    }
    const handlePassword = (e)=> {
        setPassword(e.target.value)
    }
    const handleSignUp = (e)=> {
        e.preventDefault();
        actions.signUp(email, password);
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
                            <p className="h3 text-center py-3">Sign Up</p>
                           
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
                                    onClick={handleSignUp}
                                >
                                    Sign Up
                                </MDBBtn>
                                </Link>
                            </div>
                        </form>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        </MDBRow>
    </MDBContainer>
    )
}

export default SignUp
