import React from "react";
import Home from "./Home";
import Search from './Search'
import { Route, Switch } from "react-router-dom";


import "../App.css";
import SignUp from "./SignUp";
function Main() {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route  path={`/signup`} component={SignUp} />
            <Route  path={`/Search`} component={Search} />
        </Switch>
    );
}

export default Main;
