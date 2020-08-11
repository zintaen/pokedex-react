import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";

import HomeScreen from "pages/home";

function RouterProvider() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Redirect to="/homepage" />
                </Route>
                <Route exact path="/homepage" component={HomeScreen} />
            </Switch>
        </Router>
    );
}

export default RouterProvider;
