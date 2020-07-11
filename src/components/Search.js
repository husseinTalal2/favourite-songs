import React, { useState, useEffect, useContext } from "react";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBInputGroup,
  MDBIcon,
  MDBInput,
} from "mdbreact";
import API from "./API";
import { State } from "./State";
import { firestore } from "../firebase";

const Search = () => {
  const [state, dispatch] = useContext(State);
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
    const user = {
      // name : authuser.name
      [Etag]: VideoId,
    };
    AddSongInfo(user);
  };
  const AddSongInfo = (user) => {
    db.collection("users").doc("6bZV5A9YNyWeWB85WTV8").update(user);
  };

  const RemoveSongInfo = (Etag) => {
    db.collection("users").doc("6bZV5A9YNyWeWB85WTV8").update({
      [Etag] : db.FieldValue.delete()
    });
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
            {state.searchResult.map((result) => {
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
                  <MDBBtn
                    color="danger"
                    className="ml-3 px-3 py-2 z-depth-0 rounded"
                    onClick={() => {
                      AddSong(result.etag, result.id.videoId);
                    }}
                  >
                    Favorite song ❤
                  </MDBBtn>
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
