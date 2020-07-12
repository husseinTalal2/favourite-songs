import React, { useReducer } from "react";
import { createContext } from "react";

const initState = {
    user: {},
    isLogged: false,
    userSongs: [],
};
const reducer = (state = initState, action) => {
    const { type, user } = action;
    switch (action.type) {
        case "SET_USER":
            return { ...state, user: action.user };
        case "LOGGED_IN":
            return { ...state, isLogged: true };
        case "SET_USER_SONGS":
            return { ...state, userSongs: action.userSongs };
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
