import React from "react";
import Home from "./Home";
import { Route, Switch } from "react-router-dom";

import "../App.css";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Profile from "./Profile";
import Explore from "./Explore";


function Main() {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path={`/signin`} component={SignIn} />
            <Route path={`/signup`} component={SignUp} />
            <Route path={`/profile`} component={Profile} />
            <Route path={`/explore`} component={Explore} />
        </Switch>
    );
}

export default Main;
