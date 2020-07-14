import React, { createContext, useReducer } from "react";

const initialState = {
  searchResult: [],
  query: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_SEARCH_RESULT":
      return { ...state, searchResult: action.searchResult };
    case "SET_QUERY":
      return { ...state, query: action.query };
    default:
      console.log("An error found ! Please check your reducer function !");
  }
};

export const State = createContext();

export const StateProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <State.Provider value={[state, dispatch]}>{props.children}</State.Provider>
  );
};
