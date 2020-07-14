import React, { useContext, useEffect } from "react";
import firebase from "firebase";
import { Context } from "./Context";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { actions } from "../AccountActions";
import Search from "./Search";
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
    }, [currentUser, dispatch]);

    return (
        <MDBContainer>
            <Search />
            <MDBRow className="mt-5 py-5">
                {state.userSongs.map((song) => (
                    <MDBCol md="4">
                        <iframe
                            className="embed-responsive-item"
                            key={song}
                            src={`https://www.youtube.com/embed/${song}`}
                            frameBorder="0"
                            allowFullScreen
                            title={song}
                        ></iframe>
                    </MDBCol>
                ))}
            </MDBRow>
        </MDBContainer>
    );
}

export default Profile;
