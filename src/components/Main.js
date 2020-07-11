import React from "react";
import Home from "./Home";
import { Route, Switch } from "react-router-dom";

import "../App.css";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

function Main() {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route  path={`/signin`} component={SignIn} />
            <Route  path={`/signup`} component={SignUp} />
            
        </Switch>
    );
}

export default Main;
