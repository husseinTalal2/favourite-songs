import React from "react";
import Home from "./Home";
import Search from './Search'
import { Route, Switch } from "react-router-dom";


import "../App.css";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Profile from "./Profile";

function Main() {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path={`/signin`} component={SignIn} />
            <Route path={`/signup`} component={SignUp} />
            <Route path={`/profile`} component={Profile} />
        </Switch>
    );
}

export default Main;
