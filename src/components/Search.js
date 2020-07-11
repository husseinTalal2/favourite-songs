import React, { useState, useEffect } from "react";
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
const Search = () => {
  const [query, setQuery] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    console.log(API.API_KEY);
  }, []);

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };
  const handleSearch = () => {
    API.fetch(query).then((res) => {
      setSearchResult(res.items);
      console.log(res.items);
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
            {searchResult.map((result) => {
              return (
                <div className="mb-5">
                  <div className="embed-responsive embed-responsive-16by9 mb-1">
                    <iframe
                      className="embed-responsive-item"
                      src={`https://www.youtube.com/embed/${result.id.videoId}`}
                      allowFullScreen
                    ></iframe>
                  </div>
                  <MDBBtn
                    color="danger"
                    className="ml-3 px-3 py-2 z-depth-0 rounded"
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
