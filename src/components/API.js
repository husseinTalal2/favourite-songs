const API = {
  API_KEY: "AIzaSyDCqqJyOBIzbH3xwrgclI1DXRSqqNOuRUw",
  fetch: fetchSearch,
};

// Doing the fetching this way since the search endpoint 
// is the only endpoint we are going to be working on in this project

function fetchSearch(query) {
  let url = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyDCqqJyOBIzbH3xwrgclI1DXRSqqNOuRUw&type=video&q=${query}`;

  return fetch(url).then((resp) => resp.json());
}

export default API;
