import React from "react";
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
import image from "../images/Saxaphone_vector_1-removebg-preview.png"
console.log("from signup");
function SignUp() {
    return (
        <MDBContainer className="my-5" >
            <MDBRow className="justify-content-center ">
                <MDBCol md="7">
                    <img className="img-fluid" src={image} />
                </MDBCol>
                <MDBCol md="5">
                    <MDBCard>
                        <MDBCardBody>
                            <form>
                                <p className="h4 text-center py-4">Sign In</p>
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
