import React, { useContext, useEffect, useState } from "react";
import firebase from "firebase";
import { Context } from "./Context";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { actions } from "../AccountActions";
function Profile() {
    const [state, dispatch] = useContext(Context);
    
    const currentUser = firebase.auth().currentUser;
    useEffect(() => {
        dispatch({
            type: "LOGGED_IN",
            isLogged: !!currentUser,
        });
        dispatch({ type: "SET_USER", user: currentUser });
        
        actions.getUserSongs(currentUser.uid).then((songs) => {
            dispatch({ type: "SET_USER_SONGS", userSongs: songs });
        });
    }, []);

    return (
        <MDBContainer>
            <MDBRow className="mt-5 py-5">
                {state.userSongs.map((song) => (
                    <iframe
                        key={song}
                        width="949"
                        height="534"
                        src={`https://www.youtube.com/embed/${song}`}
                        frameBorder="0"
                        allowFullScreen
                        title={song}
                    ></iframe>
                ))}
            </MDBRow>
        </MDBContainer>
    );
}

export default Profile;