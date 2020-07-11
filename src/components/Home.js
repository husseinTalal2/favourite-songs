import React, { useContext, useEffect } from "react";
import { auth } from "../firebase";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import image from "../images/3929641_burned.png";
import { Context } from "./Context";
function Home() {
    const [state, dispatch] = useContext(Context);
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
    return (
        <MDBContainer>
            <MDBRow>
                <MDBCol className="d-flex" xs="12" md="4">
                    <h1 id="header" className=" align-self-center">
                        Explore your bootcamp mates favourite music
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
