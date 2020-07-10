import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import image from "../images/5870-removebg.png";
function Home() {
    return (
        <MDBContainer>
            <MDBRow>
                <MDBCol className="d-flex" xs="12" md="4">
                    <h1 id="header" className=" align-self-center">
                        Listen to your bootcamp mates favourite music
                    </h1>
                </MDBCol>
                <MDBCol xs="12" md="8">
                    <img className="img-fluid" src={image} alt="cover" />
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}

export default Home;
