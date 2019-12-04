import React from "react";
import {BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import Home from "../Routes/Home";
import SignIn from "../Routes/SignIn";
import SignUp from "../Routes/SignUp";

export default () => (
    <Router>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Redirect from="*" to="/" />
        </Switch>
    </Router>
);