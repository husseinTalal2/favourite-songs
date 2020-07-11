import React from 'react'

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
function SignUp() {
    return (
        <MDBContainer className="my-5">
        <MDBRow className="justify-content-center ">
            <MDBCol md="6">
                <img className="img-fluid pr-5" src={image} />
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
                            />
                            <MDBInput
                                className="black-text "
                                label="Type your password"
                                icon="lock"
                                background
                                group
                                type="password"
                                validate
                            />

                            <div className="text-center py-1 ">
                                <MDBBtn
                                    className="aqua-gradient"
                                    type="submit"
                                >
                                    Sign Up
                                </MDBBtn>
                               
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
