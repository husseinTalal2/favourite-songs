import React, { useReducer } from "react";
import { createContext } from "react";

const initState = {
    user: {},
    isLogged: false,
    userSongs: [],
    searchResult: [],
    query: "",
};
const reducer = (state = initState, action) => {
    switch (action.type) {
        case "SET_USER":
            return { ...state, user: action.user };
        case "LOGGED_IN":
            return { ...state, isLogged: true };
        case "SET_USER_SONGS":
            return { ...state, userSongs: action.userSongs };
        case "SET_SEARCH_RESULT":
            return { ...state, searchResult: action.searchResult };
        case "SET_QUERY":
            return { ...state, query: action.query };
        default:
            return state;
    }
};

export const Context = createContext();
export default function UserContextProvider(props) {
    const [state, dispatch] = useReducer(reducer, initState);
    return (
        <>
            <Context.Provider value={[state, dispatch]}>
                {props.children}
            </Context.Provider>
        </>
    );
}
