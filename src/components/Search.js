import React, { useState, useContext } from "react";
import { MDBContainer, MDBCol, MDBRow, MDBBtn, MDBInputGroup } from "mdbreact";
import API from "./API";
import { Context } from "./Context";
import { firestore, FieldValue } from "../firebase";
import { actions } from "../AccountActions";

const Search = () => {
    const [state, dispatch] = useContext(Context);
    const [added, setAdded] = useState([]);
    const db = firestore;

    const handleQueryChange = (e) => {
        dispatch({ type: "SET_QUERY", query: e.target.value });
    };

    const handleSearch = () => {
        API.fetch(state.query).then((res) => {
            dispatch({ type: "SET_SEARCH_RESULT", searchResult: res.items });
        });
    };

    const AddSong = (Etag, VideoId) => {
        const song = {
            [Etag]: VideoId,
        };
        AddSongInfo(song);
    };
    const AddSongInfo = (song) => {
        db.collection(state.user.uid).doc("songs").set(song, { merge: true });
        actions.addUsername(state.user.uid, state.user.displayName);
    };

    const RemoveSong = (Etag) => {
        db.collection(state.user.uid)
            .doc("songs")
            .set(
                {
                    [Etag]: FieldValue.delete(),
                },
                { merge: true }
            );
    };
    const handleClick = (id) => {
        const selected = state.searchResult.find(
            (res) => res.id.videoId === id
        );
        console.log(selected);
        setAdded((prev) => [...prev, { id: id, isClicked: true }]);
    };
    return (
        <React.Fragment>
            <MDBContainer>
                <h3>Search for your favorite hits</h3>
                <MDBRow>
                    <MDBCol md="8">
                        <MDBInputGroup
                            material
                            containerClassName="mb-3 mt-3  mt-0"
                            hint="Search"
                            onChange={handleQueryChange}
                            append={
                                <MDBBtn
                                    gradient="aqua"
                                    className="ml-3 px-3 py-2 z-depth-0 rounded"
                                    onClick={handleSearch}
                                >
                                    Search
                                </MDBBtn>
                            }
                        />
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol md="8">
                        {state.searchResult.map((result, index) => {
                            return (
                                <div className="mb-5">
                                    <div className="embed-responsive embed-responsive-16by9 mb-1">
                                        <iframe
                                            className="embed-responsive-item"
                                            src={`https://www.youtube.com/embed/${result.id.videoId}`}
                                            allowFullScreen
                                            title={result.id.videoId}
                                        ></iframe>
                                    </div>
                                    {state.userSongs.includes(
                                        result.id.videoId
                                    ) ? (
                                        <MDBBtn
                                            color="danger"
                                            className="ml-3 px-3 py-2 z-depth-0 rounded"
                                            onClick={() => {
                                                RemoveSong(result.etag);
                                            }}
                                        >
                                            Favorited ❤
                                        </MDBBtn>
                                    ) : (
                                        <MDBBtn
                                            color="danger"
                                            value={result.id.videoId}
                                            className="ml-3 px-3 py-2 z-depth-0 rounded"
                                            onClick={(e) => {
                                                handleClick(result.id.videoId);
                                                AddSong(
                                                    result.etag,
                                                    result.id.videoId
                                                );
                                            }}
                                        >
                                            {added.some(
                                                (obj) =>
                                                    obj.id === result.id.videoId
                                            )
                                                ? "Favorited"
                                                : "Favorite song"}
                                        </MDBBtn>
                                    )}
                                </div>
                            );
                        })}
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </React.Fragment>
    );
};

export default Search;
